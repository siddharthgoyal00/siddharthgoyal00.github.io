import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com",
      label: "Visit GitHub",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
      label: "Visit LinkedIn",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com",
      label: "Visit Twitter",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:your.email@example.com",
      label: "Send email",
    },
  ]

  return (
    <div className="flex items-center gap-2">
      {socialLinks.map((social) => {
        const Icon = social.icon
        return (
          <a
            key={social.name}
            href={social.url}
            aria-label={social.label}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-foreground hover:text-foreground hover:bg-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="h-4 w-4" />
          </a>
        )
      })}
    </div>
  )
}
