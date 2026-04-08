export default function Education() {
  return (
    <section
      id="education"
      className="bg-white dark:bg-black 
                 text-black dark:text-white 
                 px-6 py-20 flex justify-center"
    >
      <div className="max-w-4xl w-full">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            Education
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Formal academic background supporting my foundation in computer
            science and software development.
          </p>
        </div>

        {/* Education Card */}
        <div className="border border-gray-200 dark:border-white/10 
                        rounded-xl p-6 space-y-4 
                        bg-gray-50 dark:bg-transparent">
          
          {/* Degree */}
          <div>
            <h3 className="text-lg font-medium">
              B.Tech – Computer Science & Information Technology (CSIT)
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Rajarambapu Institute of Technology, Islampur · Aug 2023 – Jun 2027
            </p>
          </div>

          {/* CGPA */}
          <p className="text-sm text-gray-700 dark:text-gray-300">
            CGPA: <span className="font-medium">8.00 / 10</span>
          </p>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Pursuing a comprehensive computer science curriculum with strong
            emphasis on data structures, system design concepts, and full-stack
            web development, complemented by hands-on project work.
          </p>

          {/* Coursework */}
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Relevant Coursework
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Data Structures & Algorithms",
                "Object-Oriented Programming",
                "Database Management Systems",
                "Operating Systems",
                "Computer Networks",
                "Web Technologies",
                "Software Engineering",
                "Discrete Mathematics",
              ].map((course) => (
                <span
                  key={course}
                  className="px-3 py-1 text-sm rounded-full
                             bg-white dark:bg-white/10 
                             border border-gray-300 dark:border-white/10
                             text-gray-700 dark:text-gray-200"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}