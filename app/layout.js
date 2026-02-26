import "./globals.css";

// component imports (must be at the top)
import Navbar from "@/components/layout/Navbar.jsx";
import Footer from "@/components/layout/Footer.jsx";
import ChatWidget from "@/components/ChatWidget.jsx";

export const metadata = {
  title: "TechXcel Partners",
  description: "Innovation, Strategy, and AI-driven Solutions",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <Navbar />
        <ChatWidget />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
