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

const siteTitle = "TechXcel Partners | Agentic AI & Digital Transformation Consulting";
const siteDescription =
  "Carlos Blanco helps organizations move AI from pilots to real results: agentic AI workflows with Claude, Cursor, and Databricks Genie, process mapping, and change management. 20+ years at Disney, Fox, and NBCUniversal, plus deep JD Edwards ERP experience.";

export const metadata = {
  metadataBase: new URL("https://techxcelpartners.com"),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Agentic AI",
    "AI Consulting",
    "Digital Transformation",
    "AI Adoption",
    "Product Manager",
    "Business Analyst",
    "Databricks Genie",
    "Claude",
    "Cursor",
    "JD Edwards",
    "ERP",
    "Supply Chain",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://techxcelpartners.com",
    type: "website",
    siteName: "TechXcel Partners",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
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
