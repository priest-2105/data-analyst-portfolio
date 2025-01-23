"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/config/data/projects"
import { Button } from "@/components/ui/button"

export default function ProjectDetails() {
  const params = useParams()
  const projectId = params.id as string
  const project = projects.find((p) => p.id.toString() === projectId)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <Link href="/" className="mb-6 inline-block">
        <Button variant="outline">← Back to Projects</Button>
      </Link>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 sm:h-80 md:h-96">
          <Image src={project.imageUrl || "/placeholder.svg"} alt={project.title} layout="fill" objectFit="cover" />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <p className="text-gray-600 mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

