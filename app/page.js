export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center px-6">
      {/* hero */}
      <section className="pt-24 flex flex-col items-center text-center max-w-2xl">
        <h2 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          Accelerating Tech Solutions for Tomorrow
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          At TechXcel Partners, we help businesses leverage technology, AI, and innovation to scale with confidence.
        </p>
        <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition">
          Get Started
        </a>
      </section>

      {/* services */}
      <section id="services" className="mt-24 grid md:grid-cols-3 gap-8 text-center w-full max-w-6xl">
        <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">Product Strategy</h3>
          <p className="text-gray-400">Aligning business goals with technology to deliver scalable digital products.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">AI Integration</h3>
          <p className="text-gray-400">Deploying AI-driven solutions to simplify workflows and unlock insights.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">Cloud Solutions</h3>
          <p className="text-gray-400">Low-cost, scalable cloud infrastructures to accelerate your growth.</p>
        </div>
      </section>

      {/* about (placeholder) */}
      <section id="about" className="mt-24 max-w-3xl text-center">
        <h3 className="text-2xl font-bold mb-4">About Us</h3>
        <p className="text-gray-400">
          TechXcel Partners brings deep experience in product strategy, AI, and cloud to help organizations deliver outcomes quickly and safely.
        </p>
      </section>

      {/* contact */}
      <section id="contact" className="mt-24 text-center max-w-lg mb-24">
        <h3 className="text-2xl font-bold mb-4">Let’s Work Together</h3>
        <p className="text-gray-400 mb-6">
          Ready to transform your business with technology? Reach out today.
        </p>
        <a href="mailto:contact@techxcelpartners.com" className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition">
          Contact Us
        </a>
      </section>
    </main>
  );
}
