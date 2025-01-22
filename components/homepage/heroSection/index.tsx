"use client"

import Image from "next/image"
import Link from "next/link"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const handleCopy = () => {
    navigator.clipboard.writeText("kawsarry.design@gmail.com")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">kawsarry.design@gmail.com</span>
          <button onClick={handleCopy} className="text-gray-500 hover:text-gray-700">
            <Copy className="h-4 w-4" />
          </button>
          <Link
            href="/cv"
            className="ml-4 rounded-full bg-white px-4 py-1 text-sm shadow-sm hover:shadow-md transition-shadow"
          >
            CV
          </Link>
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <Link href="https://linkedin.com" className="hover:text-gray-900">
            LinkedIn
          </Link>
          <Link href="https://dribbble.com" className="hover:text-gray-900">
            Dribbble
          </Link>
          <Link href="https://instagram.com" className="hover:text-gray-900">
            Instagram
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-4 text-center mt-20 md:mt-32">
        <div className="relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(889)-Ov2FlO9pYM01yKmoKita7V3VYZMJCH.png"
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full"
          />
          <div className="absolute -right-4 top-4 bg-white rounded-full px-3 py-1 shadow-md">
            <span className="text-sm">Kawsar Ahmed</span>
            <span className="ml-1 text-xs">✨</span>
          </div>
        </div>

        <h1 className="mt-16 max-w-2xl text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-gray-900">
          Building digital <span className="block">products, brands, and</span>
          <span className="block">experience.</span>
        </h1>

        <Button variant="default" className="mt-12 bg-gray-900 text-white hover:bg-gray-800 rounded-full px-6 py-2">
          Latest Shots
        </Button>

        {/* Client Logos */}
        <div className="w-full mt-32 overflow-hidden">
          <div className="flex animate-scroll space-x-12 py-8">
            {[
              { name: "Adobe", width: 80 },
              { name: "National Bank", width: 120 },
              { name: "Coca Cola", width: 100 },
              { name: "Mattered", width: 100 },
              { name: "Subway", width: 100 },
              { name: "Codecademy", width: 120 },
            ].map((client, index) => (
              <div key={index} className="flex-shrink-0 h-8 w-32 bg-gray-200 rounded flex items-center justify-center">
                {client.name}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

