export default function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "Docker", "Vercel", "AWS", "Figma"],
    },
  ]

  return (
    <section className="border-b border-border" id="skills">
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 lg:px-8">
        <h2 className="mb-8 text-2xl font-bold">Skills</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.category}>
              <h3 className="mb-3 font-semibold text-foreground text-sm">{category.category}</h3>
              <ul className="space-y-1">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
