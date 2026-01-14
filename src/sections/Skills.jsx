export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-black text-white px-6 py-24 flex justify-center"
    >
      <div className="max-w-6xl w-full">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            Skills & Tech Stack
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and concepts I use to design, build, and deploy
            full-stack applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* MERN Stack */}
          <div className="border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-medium mb-4">
              MERN Stack (Primary)
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "MongoDB",
                "Express.js",
                "React.js",
                "Node.js",
                "REST APIs",
                "JWT Authentication",
                "MVC Architecture",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full
                             bg-white/10 border border-white/10
                             text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-medium mb-4">
              Frontend Development
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "HTML5",
                "CSS3",
                "JavaScript (ES6+)",
                "React Hooks",
                "Tailwind CSS",
                "Responsive Design",
                "Component Architecture",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full
                             bg-white/10 border border-white/10
                             text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend & APIs */}
          <div className="border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-medium mb-4">
              Backend & APIs
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Node.js",
                "Express.js",
                "RESTful APIs",
                "Middleware",
                "Authentication & Authorization",
                "WebSockets (Basics)",
                "API Integration",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full
                             bg-white/10 border border-white/10
                             text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* DevOps & Tools */}
          <div className="border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-medium mb-4">
              DevOps & Developer Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Git & GitHub",
                "Docker",
                "CI/CD (Basics)",
                "AWS (EC2, S3)",
                "Postman",
                "Linux (Basics)",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full
                             bg-white/10 border border-white/10
                             text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* CS Fundamentals */}
          <div className="md:col-span-2 border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-medium mb-4">
              Computer Science Fundamentals
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Data Structures & Algorithms",
                "Object-Oriented Programming",
                "DBMS",
                "Operating Systems",
                "Computer Networks",
                "Software Engineering",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full
                             bg-white/10 border border-white/10
                             text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}