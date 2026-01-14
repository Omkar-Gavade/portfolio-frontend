import zerodhaImg from "../assets/zerodha.png";
import chatgptImg from "../assets/chatgpt.png";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 py-24"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">My Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A selection of full-stack projects showcasing scalable architecture,
          real-time systems, and production-ready UI/UX.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Zerodha Clone */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          {/* Image */}
          <div className="overflow-hidden rounded-xl mb-6 group">
            <img
              src={zerodhaImg} // or chatgptImg
              alt="Project preview"
              className="w-full h-56 object-contain bg-white rounded-xl
             transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <h3 className="text-xl font-semibold mb-2">
            Zerodha Trading Platform (Clone)
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            A full-stack trading platform inspired by Zerodha, supporting
            real-time market data, order placement, portfolio tracking, and
            secure authentication. Built with scalability and performance in
            mind.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "WebSockets",
              "JWT Authentication",
              "REST APIs",
              "Redis",
              "Chart.js",
              "Role-Based Access",
              "Market Data Handling",
              "Tailwind CSS",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs bg-white/10 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://github.com/Omkar-Gavade/mern-trading-platform"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium
                       px-5 py-2 rounded-full
                       bg-blue-500/10 text-blue-400
                       hover:bg-blue-500/20 transition"
          >
            View on GitHub →
          </a>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full flex flex-col">
          <div className="overflow-hidden rounded-xl mb-6 group">
            <img
              src={chatgptImg}
              alt="NovaGPT"
              className="w-full h-56 object-contain bg-white rounded-xl
                 transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <h3 className="text-xl font-semibold mb-2">
            NovaGPT – AI Chat Application
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            NovaGPT is a full-stack AI chat application inspired by ChatGPT,
            designed to deliver fast, context-aware, and streaming AI responses.
            It supports multi-turn conversations, prompt customization, secure
            API handling, and persistent chat history.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "AI SDK",
              "Streaming Responses",
              "Prompt Engineering",
              "REST APIs",
              "Rate Limiting",
              "Message Persistence",
              "API Orchestration",
              "Tailwind CSS",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs bg-white/10 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto">
            <a
              href="https://github.com/Omkar-Gavade/NovaGPT-Fullstack"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium
                 px-5 py-2 rounded-full
                 bg-emerald-500/10 text-emerald-400
                 hover:bg-emerald-500/20 transition"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
