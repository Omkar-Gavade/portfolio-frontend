export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-black text-white px-6 py-32 flex justify-center"
    >
      <div className="max-w-4xl w-full">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold">My Experience</h2>
          <p className="mt-3 text-gray-400">
            Practical experience and community involvement.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/20 pl-12 space-y-20">
          {/* GDG Web Team Member */}
          <div className="relative">
            {/* Dot */}
            <span
              className="absolute left-[-25px] top-[6px]
               w-4 h-4 rounded-full
               bg-black border-2 border-white"
            ></span>

            {/* Content */}
            <div>
              <h3 className="text-lg font-semibold">
                Google Developer Groups (GDG)
              </h3>

              <p className="text-sm text-gray-400 mt-1">
                Web Team Member · Jan 2025 – Present
              </p>

              <p className="mt-4 text-gray-300 leading-relaxed">
                Active member of the GDG Web Team, contributing to building and
                maintaining web-based solutions for community events, workshops,
                and developer initiatives. Collaborated with other developers to
                improve UI quality and performance.
              </p>

              {/* Skills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full
                                 border border-white/15 text-gray-300"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* GDG Social Media Lead */}
          <div className="relative">
            {/* Dot */}
            <span
              className="absolute left-[-25px] top-[6px]
               w-4 h-4 rounded-full
               bg-black border-2 border-white"
            ></span>

            {/* Content */}
            <div>
              <h3 className="text-lg font-semibold">
                Google Developer Groups (GDG)
              </h3>

              <p className="text-sm text-gray-400 mt-1">
                Social Media Lead · Aug 2025 – Present
              </p>

              <p className="mt-4 text-gray-300 leading-relaxed">
                Leading social media initiatives for GDG by managing content,
                promoting events, and increasing community engagement across
                platforms. Coordinated closely with the technical and design
                teams to ensure consistent communication and outreach.
              </p>

              {/* Skills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Content Strategy",
                  "Community Building",
                  "Brand Communication",
                  "Analytics",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full
                               border border-white/15 text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
