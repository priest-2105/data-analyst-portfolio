"use client"

import Image from "next/image"
import Link from "next/link"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FooterSection() {
  const handleCopy = () => {
    navigator.clipboard.writeText("kawsarry.design@gmail.com")
  }

  return (
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
  )
}

