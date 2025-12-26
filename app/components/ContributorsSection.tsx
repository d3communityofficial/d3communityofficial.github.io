"use client"

import contributors from "@/public/contributors.json"
import { Github, Linkedin } from "lucide-react"

type Contributor = {
  id: string
  name: string
  role: string
  avatar: string
  github?: string
  linkedin?: string
}

export default function ContributorsSection() {
  return (
    <section className="container py-16">
      <h2 className="mb-8 text-3xl font-bold text-foreground">
        Contributors
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {contributors.map((c: Contributor) => (
          <ContributorCard key={c.id} contributor={c} />
        ))}
      </div>
    </section>
  )
}

function ContributorCard({ contributor }: { contributor: Contributor }) {
  const { name, role, avatar, github, linkedin } = contributor

  return (
    <div
      className="
        bg-dark-card 
        flex h-[260px] flex-col items-center justify-center
        rounded-xl border border-border
        bg-card p-6 text-center
        transition-all duration-200
        hover:bg-muted/50 hover:shadow-lg
      "
    >
      <img
        src={avatar}
        alt={name}
        className="h-20 w-20 rounded-full object-cover"
      />

      <h3 className="mt-4 font-semibold text-card-foreground">
        {name}
      </h3>

      <p className="text-sm text-muted-foreground">
        {role}
      </p>

      <div className="mt-4 flex gap-3">
        {github && <SocialIcon href={github} icon={<Github size={16} />} />}
        {linkedin && <SocialIcon href={linkedin} icon={<Linkedin size={16} />} />}
      </div>
    </div>
  )
}

function SocialIcon({
  href,
  icon,
}: {
  href: string
  icon: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        flex h-9 w-9 items-center justify-center rounded-full
        border border-border bg-background
        text-muted-foreground
        transition-colors
        hover:bg-muted hover:text-foreground
      "
    >
      {icon}
    </a>
  )
}
