export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen 
                 bg-white dark:bg-black 
                 text-black dark:text-white 
                 flex items-center justify-center px-6"
    >
      <div className="max-w-3xl text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          About Me
        </h2>

        {/* Paragraphs */}
        <div className="space-y-6 
                        text-gray-600 dark:text-gray-300 
                        leading-relaxed text-base md:text-lg">
          
          <p>
            My name is{" "}
            <span className="font-medium text-black dark:text-white">
              Omkar Gavade
            </span>, and I am a MERN Stack Developer focused on building fast,
            usable, and scalable web applications. I enjoy crafting clean user
            interfaces and bringing ideas to life by developing complete
            full-stack solutions using modern JavaScript technologies.
          </p>

          <p>
            I work primarily with{" "}
            <span className="text-black dark:text-white font-medium">
              React
            </span>
            ,{" "}
            <span className="text-black dark:text-white font-medium">
              Node.js
            </span>
            , and{" "}
            <span className="text-black dark:text-white font-medium">
              Tailwind CSS
            </span>
            , and I am comfortable working across the stack — from designing
            intuitive UIs to connecting reliable backend services and databases.
          </p>

          <p>
            I enjoy working on real-world projects that demand performance,
            maintainability, and good user experience. I constantly explore new
            tools and patterns to improve code quality and development workflows.
          </p>

          <p>
            Outside of development, I have a strong interest in the stock market
            and trading, along with continuously learning new technologies. I am
            always open to opportunities that allow me to grow as an engineer
            and contribute to impactful products.
          </p>
        </div>
      </div>
    </section>
  );
}