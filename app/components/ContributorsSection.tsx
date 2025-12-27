"use client"

import Image from "next/image"
import contributors from "@/public/contributors.json"
import { Github, Linkedin } from "lucide-react"
import { getAssetPath } from "@/app/utils/paths"

type Contributor = {
  id: string
  name: string
  role: string
  avatar: string
  github?: string
  linkedin?: string
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
      <Image
        src={getAssetPath(avatar)}
        alt={name}
        width={80}
        height={80}
        className="h-20 w-20 rounded-full object-cover"
      />

      <h3 className="mt-4 font-semibold group-hover:text-dark-primary">
        {name}
      </h3>

      <p className="text-sm text-dark-muted">{role}</p>

      <div className="mt-4 flex gap-3">
        {github && (
          <a href={github} target="_blank" rel="noreferrer">
            <Github size={16} />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={16} />
          </a>
        )}
      </div>
    </div>
  )
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
