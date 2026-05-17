import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

// component imports (must be at the top)
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import ChatWidget from "../components/ChatWidget.jsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Carlos Blanco — Senior Product Manager | Product Strategy & AI Adoption",
  description:
    "Senior Product Manager and Business Analyst with a track record across Disney, Fox, and NBCUniversal. Specializing in product strategy, workflow transformation, and AI adoption.",
  keywords: [
    "Product Manager",
    "Business Analyst",
    "Product Strategy",
    "AI Adoption",
    "Workflow Transformation",
    "Digital Asset Management",
  ],
  openGraph: {
    title: "Carlos Blanco — Senior Product Manager | Product Strategy & AI Adoption",
    description:
      "Senior Product Manager and Business Analyst with a track record across Disney, Fox, and NBCUniversal. Specializing in product strategy, workflow transformation, and AI adoption.",
    type: "website",
    siteName: "TechXcel Partners",
  },
  twitter: {
    card: "summary",
    title: "Carlos Blanco — Senior Product Manager | Product Strategy & AI Adoption",
    description:
      "Senior Product Manager and Business Analyst with a track record across Disney, Fox, and NBCUniversal. Specializing in product strategy, workflow transformation, and AI adoption.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <ChatWidget />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
