import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section className="border-b border-border" id="contact">
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p className="mt-3 text-xs text-muted-foreground">
            I'm always interested in hearing about new projects and opportunities.
          </p>

          <div className="mt-6 flex flex-col items-center gap-3">
            <Button asChild size="sm">
              <a href="mailto:your.email@example.com" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Send me an email
              </a>
            </Button>
            <p className="text-xs text-muted-foreground">your.email@example.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}
