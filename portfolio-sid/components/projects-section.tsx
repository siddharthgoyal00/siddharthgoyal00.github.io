import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform built with Next.js and Stripe. Features include product catalog, shopping cart, and payment processing.",
      tags: ["Next.js", "React", "Stripe", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates. Built with React, Firebase, and Tailwind CSS.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern portfolio website showcasing projects and skills. Designed and built with Next.js and Framer Motion animations.",
      tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
      link: "#",
    },
  ]

  return (
    <section className="border-b border-border" id="projects">
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 lg:px-8">
        <h2 className="mb-8 text-2xl font-bold">Projects</h2>

        <div className="space-y-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-lg border border-border p-4 transition-all hover:border-foreground hover:bg-card"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-foreground">{project.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Button variant="ghost" size="icon" asChild className="flex-shrink-0 h-8 w-8">
                  <a href={project.link}>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
