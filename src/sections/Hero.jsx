export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black text-white"
    >
      <div className="flex flex-col items-center text-center px-6 pt-32">
        {/* Profile Image
        <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-white/20 mb-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div> */}

        {/* Availability Badge */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </span>
          Available for work
        </div>

        {/* Location */}
        <p className="text-sm text-gray-400 mb-6">
          Based in India — open to opportunities
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
          Hi I’m <span className="text-red-500">Omkar Gavade</span> — Full Stack
          Developer with modern web expertise.
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-gray-400 text-base leading-relaxed">
          I build fast, scalable, and user-focused web applications using modern
          technologies like React, Node.js, and Tailwind CSS. I focus on clean
          architecture, performance, and great user experience.
        </p>

        {/* CTA + Socials */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {/* Get in touch */}
          <a
            href="#contact"
            className="flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition"
          >
            Get in touch <span>→</span>
          </a>

          {/* View projects */}
          <a
            href="#projects"
            className="flex items-center gap-2 px-7 py-3 rounded-full bg-white/10 border border-white/10 text-sm hover:bg-white/20 transition"
          >
            View projects <span>→</span>
          </a>

          {/* Download CV */}
          <a
            href="/resume.pdf"
            className="flex items-center gap-2 px-7 py-3 rounded-full bg-white/10 border border-white/10 text-sm hover:bg-white/20 transition"
          >
            Download CV <span>↓</span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-3 ml-2">
            <a
              href="#"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-white/15 text-white hover:bg-white/10 transition"
              aria-label="LinkedIn"
            >
              in
            </a>

            <a
              href="#"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-white/15 text-white hover:bg-white/10 transition"
              aria-label="GitHub"
            >
              GH
            </a>

            <a
              href="#"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-white/15 text-white hover:bg-white/10 transition"
              aria-label="Instagram"
            >
              IG
            </a>

            <a
              href="#"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-white/15 text-white hover:bg-white/10 transition"
              aria-label="Twitter"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
