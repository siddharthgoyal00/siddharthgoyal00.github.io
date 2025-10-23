"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import ContactSection from "@/components/contact-section"
import SocialLinks from "@/components/social-links"

export default function Home() {
  useEffect(() => {
    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <HeroSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer with Social Links */}
        <footer className="border-t border-border">
          <div className="mx-auto max-w-4xl px-4 py-8 md:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <p className="text-xs text-muted-foreground">© 2025 Your Name. All rights reserved.</p>
              <SocialLinks />
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
