"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Copy, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function NavbarSection() {
  const [isOpen, setIsOpen] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("example123@gmail.com")
  }

  const NavLinks = () => (
    <>
      <Link href="https://linkedin.com" className="text-gray-400 hover:text-gray-950">
        LinkedIn
      </Link>
      <span className="font-bold">/</span>
      <Link href="https://dribbble.com" className="text-gray-400 hover:text-gray-950">
        Whatsapp
      </Link>
      <span className="font-bold">/</span>
      <Link href="https://instagram.com" className="text-gray-400 hover:text-gray-950">
        Instagram
      </Link>
    </>
  )

  return (
    <nav className="flex items-center justify-between h-38 p-4 md:p-6">
      <div className="flex cursor-pointer items-center space-x-2">
        <div className="border-black-300 border-2 hover:border-3 rounded-full p-3">
          <span className="text-sm text-gray-600">example123@gmail.com</span>
          <button onClick={handleCopy} className="text-gray-500 hover:text-gray-700">
            <Copy className="h-4 w-4" />
          </button>
        </div>

        <div>
          <Link
            href="/cv"
            className="ml-4 rounded-full bg-white font-semibold py-4 px-7 text-sm shadow-sm hover:shadow-md transition-shadow"
          >
            CV
          </Link>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-4 text-sm text-gray-600">
        <NavLinks />
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-8 text-lg">
              <NavLinks />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

