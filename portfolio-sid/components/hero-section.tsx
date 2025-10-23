import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img src="/professional-portrait.jpg" alt="Profile" className="h-40 w-40 rounded-lg object-cover" />
          </div>

          {/* Hero Content */}
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-3xl font-bold md:text-4xl">Your Name</h1>
              <p className="mt-1 text-lg text-muted-foreground">Full Stack Developer & Designer</p>
            </div>

            <p className="max-w-lg text-sm leading-relaxed text-foreground">
              I'm a passionate developer with 5+ years of experience building beautiful, functional web applications. I
              specialize in React, Next.js, and modern web technologies.
            </p>

            <div className="flex flex-wrap gap-2">
              <Button asChild size="sm">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" asChild size="sm">
                <a href="/resume.pdf" download className="flex items-center gap-2">
                  <Download className="h-3 w-3" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
