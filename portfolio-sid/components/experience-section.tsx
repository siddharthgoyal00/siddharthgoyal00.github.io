export default function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Company Inc.",
      period: "2023 - Present",
      description:
        "Led the development of customer-facing applications using React and Next.js. Improved performance by 40% and mentored junior developers.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency",
      period: "2021 - 2023",
      description:
        "Built and maintained multiple web applications for clients. Worked with React, Node.js, and PostgreSQL to deliver scalable solutions.",
    },
    {
      title: "Junior Developer",
      company: "Startup Studio",
      period: "2020 - 2021",
      description:
        "Started my career building web applications with HTML, CSS, and JavaScript. Learned best practices and modern development workflows.",
    },
  ]

  return (
    <section className="border-b border-border" id="experience">
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 lg:px-8">
        <h2 className="mb-8 text-2xl font-bold">Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-border pl-4">
              <div className="flex flex-col gap-0.5">
                <h3 className="font-semibold text-foreground text-sm">{exp.title}</h3>
                <p className="text-xs text-muted-foreground">{exp.company}</p>
                <p className="text-xs text-muted-foreground">{exp.period}</p>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
