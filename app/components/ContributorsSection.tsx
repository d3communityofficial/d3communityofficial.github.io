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
       <h2 className="mb-8 text-3xl font-bold text-dark-text">
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
        group
        flex h-[260px] flex-col items-center justify-center
        rounded-xl
        bg-dark-card
        border border-dark-border
        p-6 text-center
        transition-all duration-200
        hover:border-dark-primary
      "
    >
      <img
        src={avatar}
        alt={name}
        className="h-20 w-20 rounded-full object-cover"
      />

      <h3 className="mt-4 font-semibold transition-colors group-hover:text-dark-primary">
        {name}
      </h3>

      <p className="text-sm text-dark-muted">
        {role}
      </p>

      <div className="mt-4 flex gap-3">
        {github && (
          <SocialIcon
            href={github}
            label="GitHub"
            icon={<Github size={16} />}
          />
        )}
        {linkedin && (
          <SocialIcon
            href={linkedin}
            label="LinkedIn"
            icon={<Linkedin size={16} />}
          />
        )}
      </div>
    </div>
  )
}

function SocialIcon({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="
        hidden sm:flex
        w-10 h-10
        items-center justify-center
        rounded-full
        bg-dark-card
        border border-dark-border
        text-dark-muted
        transition-all
        hover:text-dark-text
        hover:border-dark-primary
      "
    >
      {icon}
    </a>
  )
}
