import ContactForm from "../components/ContactForm.jsx";
import Reveal from "../components/Reveal.jsx";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6">
      {/* hero */}
      <section className="w-full max-w-4xl py-20 sm:py-24 lg:py-28 flex flex-col items-center text-center">
        <Reveal className="flex w-full flex-col items-center text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-balance text-[color:var(--text-primary)]">
            Product strategy, workflow transformation, and{" "}
            <span className="text-[color:var(--accent)]">AI adoption</span>.
          </h1>
          <p className="mt-8 max-w-[600px] text-base sm:text-lg leading-relaxed text-[color:var(--text-secondary)]">
            Senior Product Manager and Business Analyst with a track record across Disney, Fox, and NBCUniversal — and enterprise systems work spanning media, supply chain, marketing, and operations.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-[color:var(--background)] transition-colors hover:bg-[color:var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/40 focus:ring-offset-2 focus:ring-offset-[color:var(--background)]"
            >
              Get in touch
            </a>
            <a
              href="#work"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)]"
            >
              View selected work
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </Reveal>
      </section>

      {/* experience */}
      <section className="w-full max-w-5xl border-y border-[color:var(--border)] py-16 sm:py-20">
        <Reveal>
          <p className="text-center text-xs sm:text-[0.8125rem] font-medium uppercase tracking-[0.2em] text-[color:var(--text-secondary)]">
            Experience across leading enterprises
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 sm:gap-x-14 gap-y-3">
            <span className="text-base sm:text-lg font-medium text-[color:var(--text-primary)] opacity-75">20th Century Fox</span>
            <span className="text-base sm:text-lg font-medium text-[color:var(--text-primary)] opacity-75">Disney</span>
            <span className="text-base sm:text-lg font-medium text-[color:var(--text-primary)] opacity-75">Fox Corporation</span>
            <span className="text-base sm:text-lg font-medium text-[color:var(--text-primary)] opacity-75">NBCUniversal</span>
          </div>
        </Reveal>
      </section>

      {/* selected work */}
      <section id="work" className="w-full max-w-6xl scroll-mt-20 py-16 sm:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[color:var(--text-primary)]">
              Selected Work
            </h2>
            <p className="mt-3 text-base sm:text-lg leading-relaxed text-[color:var(--text-secondary)]">
              Enterprise product, platform, and AI initiatives — from current work to a track record across leading media companies.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1 — AI consulting (capability tags) */}
          <Reveal delay={0} className="h-full">
            <article className="h-full flex flex-col rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 transition-all duration-200 hover:border-[color:var(--accent)]/60 hover:-translate-y-0.5">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                IT Consultant · AI &amp; Data Products · 2025–Present
              </p>
              <h3 className="mt-4 text-lg sm:text-xl font-semibold leading-snug text-[color:var(--text-primary)]">
                AI Agents for Sales Intelligence &amp; Customer Sentiment
              </h3>
              <p className="mt-4 grow text-sm sm:text-base leading-relaxed text-[color:var(--text-secondary)]">
                Currently leading two AI initiatives on Databricks for an enterprise client. The first: designing an AI agent that answers natural-language questions about top-of-funnel demand and reach, drawing on data integrated from multiple contracted sources. The second: a customer-sentiment system that analyzes voice calls and voice messages, classifies each interaction as positive or negative, and surfaces summaries to business teams — with a follow-on phase teaching Genie to answer questions against those classifications.
              </p>
              <div className="mt-6 border-t border-[color:var(--border)] pt-6">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-1 text-xs text-[color:var(--text-secondary)]">
                    Databricks &amp; Genie
                  </span>
                  <span className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-1 text-xs text-[color:var(--text-secondary)]">
                    Generative AI agents
                  </span>
                  <span className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-1 text-xs text-[color:var(--text-secondary)]">
                    Natural-language analytics
                  </span>
                  <span className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-1 text-xs text-[color:var(--text-secondary)]">
                    Customer sentiment classification
                  </span>
                </div>
                <p className="mt-4 text-xs italic text-[color:var(--text-secondary)] opacity-80">
                  Client details available on request.
                </p>
              </div>
            </article>
          </Reveal>

          {/* Card 2 — Wonderland (Disney) */}
          <Reveal delay={0.08} className="h-full">
            <article className="h-full flex flex-col rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 transition-all duration-200 hover:border-[color:var(--accent)]/60 hover:-translate-y-0.5">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                Senior Product Manager · Disney Media &amp; Entertainment Distribution
              </p>
              <h3 className="mt-4 text-lg sm:text-xl font-semibold leading-snug text-[color:var(--text-primary)]">
                Wonderland — Enterprise Digital Asset Management (DAM) Platform
              </h3>
              <p className="mt-4 grow text-sm sm:text-base leading-relaxed text-[color:var(--text-secondary)]">
                Led product strategy and roadmap for Wonderland, Disney&apos;s enterprise Digital Asset Management platform supporting publishing, creative, marketing, and global theatrical distribution teams. Drove metadata governance and taxonomy modernization to improve asset discoverability and quality.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4 border-t border-[color:var(--border)] pt-6">
                <div>
                  <div className="text-xl sm:text-2xl font-semibold text-[color:var(--accent)]">45%</div>
                  <div className="mt-1 text-xs leading-snug text-[color:var(--text-secondary)]">increase in asset discoverability</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-semibold text-[color:var(--accent)]">62%</div>
                  <div className="mt-1 text-xs leading-snug text-[color:var(--text-secondary)]">reduction in metadata defects</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-semibold text-[color:var(--accent)]">40%</div>
                  <div className="mt-1 text-xs leading-snug text-[color:var(--text-secondary)]">faster publishing cycles</div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Card 3 — Fox CRM */}
          <Reveal delay={0.16} className="h-full">
            <article className="h-full flex flex-col rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 transition-all duration-200 hover:border-[color:var(--accent)]/60 hover:-translate-y-0.5">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                Product Owner · Fox Corporation
              </p>
              <h3 className="mt-4 text-lg sm:text-xl font-semibold leading-snug text-[color:var(--text-primary)]">
                CRM Transformation across Fox Sports, Fox News &amp; TMZ
              </h3>
              <p className="mt-4 grow text-sm sm:text-base leading-relaxed text-[color:var(--text-secondary)]">
                Led a high-visibility CRM migration to Braze spanning three major brands, consolidating fragmented audience and lifecycle workflows. Managed backlog prioritization, UAT, training, and go-live across cross-functional teams.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-[color:var(--border)] pt-6">
                <div>
                  <div className="text-xl sm:text-2xl font-semibold text-[color:var(--accent)]">30%</div>
                  <div className="mt-1 text-xs leading-snug text-[color:var(--text-secondary)]">increase in marketing efficiency</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-semibold text-[color:var(--accent)]">3</div>
                  <div className="mt-1 text-xs leading-snug text-[color:var(--text-secondary)]">brands unified on one platform</div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Card 4 — NBCUniversal */}
          <Reveal delay={0.24} className="h-full">
            <article className="h-full flex flex-col rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 transition-all duration-200 hover:border-[color:var(--accent)]/60 hover:-translate-y-0.5">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                Product Owner · NBCUniversal
              </p>
              <h3 className="mt-4 text-lg sm:text-xl font-semibold leading-snug text-[color:var(--text-primary)]">
                Global Theatrical Distribution Platform
              </h3>
              <p className="mt-4 grow text-sm sm:text-base leading-relaxed text-[color:var(--text-secondary)]">
                Built and maintained the roadmap for a global theatrical distribution platform transformation, aligning capability development to strategic priorities. Translated complex business and technical needs into clear requirements and workflow definitions.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-[color:var(--border)] pt-6">
                <div>
                  <div className="text-xl sm:text-2xl font-semibold text-[color:var(--accent)]">40%</div>
                  <div className="mt-1 text-xs leading-snug text-[color:var(--text-secondary)]">faster data ingestion</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-semibold text-[color:var(--accent)]">25%</div>
                  <div className="mt-1 text-xs leading-snug text-[color:var(--text-secondary)]">improvement in sprint execution</div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* services */}
      <section id="services" className="w-full max-w-6xl scroll-mt-20 py-16 sm:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[color:var(--text-primary)]">
              What I Do
            </h2>
            <p className="mt-3 text-base sm:text-lg leading-relaxed text-[color:var(--text-secondary)]">
              Where I help organizations turn complex challenges into measurable outcomes.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 — Product & Workflow Strategy */}
          <Reveal delay={0} className="h-full">
            <article className="h-full flex flex-col rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 transition-all duration-200 hover:border-[color:var(--accent)]/60 hover:-translate-y-0.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[color:var(--accent)]/10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-[color:var(--accent)]" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg sm:text-xl font-semibold leading-snug text-[color:var(--text-primary)]">
                Product &amp; Workflow Strategy
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[color:var(--text-secondary)]">
                Roadmaps, process improvement, and the translation of complex business needs into clear, executable plans — aligning technology investment with the outcomes that matter.
              </p>
            </article>
          </Reveal>

          {/* Card 2 — AI Adoption & Use-Case Definition */}
          <Reveal delay={0.08} className="h-full">
            <article className="h-full flex flex-col rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 transition-all duration-200 hover:border-[color:var(--accent)]/60 hover:-translate-y-0.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[color:var(--accent)]/10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-[color:var(--accent)]" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg sm:text-xl font-semibold leading-snug text-[color:var(--text-primary)]">
                AI Adoption &amp; Use-Case Definition
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[color:var(--text-secondary)]">
                Helping organizations identify where AI genuinely adds value, define practical use cases, and move from exploration to working solutions — grounded in hands-on agent and analytics work.
              </p>
            </article>
          </Reveal>

          {/* Card 3 — Business Analysis & Implementation */}
          <Reveal delay={0.16} className="h-full">
            <article className="h-full flex flex-col rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 transition-all duration-200 hover:border-[color:var(--accent)]/60 hover:-translate-y-0.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[color:var(--accent)]/10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-[color:var(--accent)]" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-5.477a2.25 2.25 0 0 1 2.092 0L22.25 12l-8.954 5.477a2.25 2.25 0 0 1-2.092 0L2.25 12Zm0 4.5 8.954 5.477a2.25 2.25 0 0 0 2.092 0L22.25 16.5m-20 0 8.954-5.477a2.25 2.25 0 0 1 2.092 0L22.25 16.5" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg sm:text-xl font-semibold leading-snug text-[color:var(--text-primary)]">
                Business Analysis &amp; Implementation
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[color:var(--text-secondary)]">
                Requirements definition, stakeholder facilitation, UAT, and change management — the disciplined delivery that carries enterprise platforms from concept through adoption.
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      {/* the ai opportunity */}
      <section id="ai" className="w-full max-w-6xl scroll-mt-20 py-16 sm:py-20">
        <Reveal>
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 sm:p-12 lg:p-16">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[color:var(--text-primary)]">
                The AI Opportunity
              </h2>
              <p className="mt-6 text-lg sm:text-xl font-medium leading-relaxed text-[color:var(--text-primary)]">
                Most AI initiatives don&apos;t fail on technology. They fail on change management, unclear processes, and stakeholder alignment — the same challenges that determine whether any enterprise transformation succeeds. That&apos;s the work I&apos;ve done for two decades.
              </p>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[color:var(--text-secondary)]">
                I help organizations move past AI experimentation to practical, working solutions — identifying real use cases, defining how AI fits existing workflows, and managing adoption the way successful platform rollouts have always been managed. From enterprises to small businesses, the principle is the same: technology delivers value only when it&apos;s adopted well.
              </p>
              <div className="mt-10 border-t border-[color:var(--border)] pt-8">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                  Hands-on with
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-1 text-xs text-[color:var(--text-secondary)]">
                    Claude
                  </span>
                  <span className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-1 text-xs text-[color:var(--text-secondary)]">
                    Cursor
                  </span>
                  <span className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-1 text-xs text-[color:var(--text-secondary)]">
                    Databricks
                  </span>
                  <span className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-1 text-xs text-[color:var(--text-secondary)]">
                    Genie
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* about */}
      <section id="about" className="w-full max-w-6xl scroll-mt-20 py-16 sm:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[color:var(--text-primary)]">
              About Carlos Blanco
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Bio */}
            <div className="lg:col-span-2 space-y-5 text-base sm:text-lg leading-relaxed text-[color:var(--text-secondary)]">
              <p>
                I&apos;ve spent my career helping organizations adopt technology that changes how they work — and making sure it actually delivers. Originally from Venezuela, I&apos;ve worked across continents, industries, and languages, with one consistent thread: turning complex business problems into clear, executable solutions.
              </p>
              <p>
                Most recently, I&apos;ve led product and platform initiatives at some of the world&apos;s largest media companies — Senior Product Manager at Disney, Product Owner at Fox Corporation and NBCUniversal, and over a decade at 20th Century Fox. This work spanned product strategy, enterprise platforms, CRM transformation, metadata governance, and global distribution — consistently translating business needs into measurable outcomes.
              </p>
              <p>
                That product work is built on a foundation in enterprise systems. Earlier in my career, I implemented SAP and JD Edwards platforms across finance, supply chain, and operations for companies including Chevron, Merck, Baxter, Owens Illinois, and Dole Europe — including a multi-country rollout across Germany, Italy, and Spain. It taught me how large organizations really adopt new technology, and why so many transformations succeed or fail on the human side rather than the technical one.
              </p>
              <p>
                Today, I focus on where that experience meets artificial intelligence — helping organizations move past experimentation to practical, well-adopted AI solutions, and currently building AI agents and analytics capabilities hands-on.
              </p>
            </div>

            {/* Right column — headshot + facts panel */}
            <div className="flex flex-col gap-6 lg:gap-8">
              {/* Headshot placeholder — replace with real portrait: next/image, recommended ~480x480, place in /public */}
              <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] ring-1 ring-inset ring-[color:var(--accent)]/15">
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent)]/12 via-transparent to-transparent" />
                <div className="relative flex h-full w-full items-center justify-center">
                  <span className="text-5xl sm:text-6xl font-semibold tracking-tight text-[color:var(--accent)]">CB</span>
                </div>
              </div>

              {/* Facts panel */}
              <aside className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 sm:p-8 lg:flex lg:flex-1 lg:flex-col">
                <dl className="flex flex-col gap-6 lg:flex-1 lg:justify-between lg:gap-0">
                  <div>
                    <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                      Based in
                    </dt>
                    <dd className="mt-2 text-sm sm:text-base leading-snug text-[color:var(--text-primary)]">
                      West Hills, California
                    </dd>
                  </div>
                  <div className="lg:border-t lg:border-[color:var(--border)] lg:pt-6">
                    <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                      Languages
                    </dt>
                    <dd className="mt-2 text-sm sm:text-base leading-snug text-[color:var(--text-primary)]">
                      Spanish <span className="text-[color:var(--text-secondary)]">(native)</span> · English <span className="text-[color:var(--text-secondary)]">(fluent)</span> · Italian <span className="text-[color:var(--text-secondary)]">(conversational)</span>
                    </dd>
                  </div>
                  <div className="lg:border-t lg:border-[color:var(--border)] lg:pt-6">
                    <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                      Focus
                    </dt>
                    <dd className="mt-2 text-sm sm:text-base leading-snug text-[color:var(--text-primary)]">
                      Product Strategy · Business Analysis · AI Adoption
                    </dd>
                  </div>
                  <div className="lg:border-t lg:border-[color:var(--border)] lg:pt-6">
                    <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                      Certifications
                    </dt>
                    <dd className="mt-2 text-sm sm:text-base leading-snug text-[color:var(--text-primary)]">
                      Certified Product Manager · Certified Scrum Master · Agile Project Management
                    </dd>
                  </div>
                </dl>
              </aside>
            </div>
          </div>
        </Reveal>
      </section>

      {/* contact */}
      <section id="contact" className="w-full max-w-6xl scroll-mt-20 py-16 sm:py-20">
        <Reveal>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left — invitation */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[color:var(--text-primary)]">
                Let&apos;s work together
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[color:var(--text-secondary)]">
                Whether you&apos;re hiring for a senior product role, exploring an AI initiative, or want to talk through a challenge — I&apos;d be glad to hear from you.
              </p>
              <ul className="mt-8 space-y-3">
                <li className="flex items-start gap-3 text-sm sm:text-base text-[color:var(--text-secondary)]">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                  <span>Product leadership roles</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-[color:var(--text-secondary)]">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                  <span>AI adoption &amp; strategy</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-[color:var(--text-secondary)]">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                  <span>Consulting &amp; advisory</span>
                </li>
              </ul>
            </div>

            {/* Right — form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
