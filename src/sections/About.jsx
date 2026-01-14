export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6"
    >
      <div className="max-w-3xl text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          About Me
        </h2>

        {/* Paragraphs */}
        <div className="space-y-6 text-gray-300 leading-relaxed text-base md:text-lg">
          <p>
            My name is <span className="text-white font-medium">Omkar Gavade</span>,
            and I am a Full Stack Developer focused on building fast, usable, and
            scalable web applications. I enjoy crafting clean user interfaces and
            bringing ideas to life using modern web technologies.
          </p>

          <p>
            I work primarily with <span className="text-white">React</span>,
            <span className="text-white"> Node.js</span>, and
            <span className="text-white"> Tailwind CSS</span>, and I am comfortable
            working across the stack — from designing intuitive UIs to connecting
            reliable backend services and databases.
          </p>

          <p>
            I enjoy working on real-world projects that demand performance,
            maintainability, and good user experience. I constantly explore new
            tools and patterns to improve code quality and development workflows.
          </p>

          <p>
            Outside of development, I enjoy cricket and learning new technologies.
            I’m always open to opportunities where I can grow as an engineer and
            contribute to meaningful products.
          </p>
        </div>
      </div>
    </section>
  );
}