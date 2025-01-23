"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { projects } from "@/config/data/projects"

export default function ProjectList() {
  const [displayedProjects, setDisplayedProjects] = useState(projects.slice(0, 4))
  const [showAll, setShowAll] = useState(false)

  const loadMoreProjects = () => {
    setDisplayedProjects(projects)
    setShowAll(true)
  }

  return (
    <section className="py-24 px-4 bg-gray-50 rounded-t-[100px]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-8">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {displayedProjects.map((project) => (
            <Link href={`/project/${project.id}`} key={project.id}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={project.images[0] || "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rR6HYXBrMmX4cRpXfXUOvpvpB0-gFO11vA7BrdDZj12yuGFowhxcLYUw6.png"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {project.description.length > 50
                      ? `${project.description.substring(0, 50)}...`
                      : project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <Button
              onClick={loadMoreProjects}
              variant="default"
              className="rounded-full px-6 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

