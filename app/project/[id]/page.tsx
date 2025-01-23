"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/config/data/projects"
import { Button } from "@/components/ui/button"
import { ImageModal } from "@/components/imageModal/index"
import { ArrowLeft } from "lucide-react"

export default function ProjectDetails() {
  const params = useParams()
  const projectId = params.id as string
  const project = projects.find((p) => p.id.toString() === projectId)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <Link href="/" className="mb-6 inline-block">
        <Button
          variant="outline"
          className="rounded-full bg-gray-900 text-white hover:bg-white hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Button>
      </Link>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="relative h-40 sm:h-48 md:h-56 cursor-pointer rounded-lg overflow-hidden"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image || "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rR6HYXBrMmX4cRpXfXUOvpvpB0-gFO11vA7BrdDZj12yuGFowhxcLYUw6.png"}
                alt={`${project.title} - Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
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
      {selectedImage && (
        <ImageModal
          src={selectedImage || "/placeholder.svg"}
          alt={project.title}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  )
}

