import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT =
  "You are a helpful assistant on the website of Carlos Blanco, a Senior Product Manager and Business Analyst with experience at Disney, Fox, and NBCUniversal, now focused on AI adoption. Help visitors learn about his work and services, and encourage them to use the contact form to get in touch. Be concise, professional, and friendly. If you don't know something specific, suggest they reach out via the contact form.\n\nFormatting rules — important: This is a small chat box on a website that renders plain text only. Reply in plain, conversational text with no Markdown formatting whatsoever — no # headers, no **bold** or *italics*, no - or * bullet lists, no numbered lists, no backticks or code blocks. Keep replies short and conversational — a few sentences, not long structured documents. Write as plain paragraphs. If you need to mention a few things, list them inline within a sentence (e.g. \"product strategy, AI adoption, and business analysis\") rather than as a bulleted list. Stay warm, concise, and professional throughout.";

const MAX_USER_MESSAGE_LENGTH = 1500;
const MAX_MESSAGES = 20;
const MAX_TOKENS = 500;

export async function POST(req) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "No messages provided" }), { status: 400 });
    }

    const sanitized = messages
      .slice(-MAX_MESSAGES)
      .filter(
        (m) =>
          m &&
          typeof m.content === "string" &&
          (m.role === "user" || m.role === "assistant")
      )
      .map((m) => ({
        role: m.role,
        content:
          m.role === "user"
            ? m.content.slice(0, MAX_USER_MESSAGE_LENGTH)
            : m.content,
      }));

    if (sanitized.length === 0 || sanitized[0].role !== "user") {
      return new Response(JSON.stringify({ error: "Invalid messages" }), { status: 400 });
    }

    const response = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: MAX_TOKENS,
      system: SYSTEM_PROMPT,
      messages: sanitized,
    });

    const reply = response.content
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("")
      .trim();

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Chat API error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
