"use client"


import { Button } from "@/components/ui/button"
import { HandshakeIcon } from "lucide-react"

export default function ContactSection() {
  const handleEmailClick = () => {
    window.location.href = "mailto:example@email.com"
  }

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/1234567890"
  }

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-gray-600">
            <HandshakeIcon className="w-8 h-8 text-gray-600 dark:text-gray-300" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-slate-100">
            Tell me about your next
            <span className="block mt-2">project</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button
              onClick={handleEmailClick}
              className="rounded-full bg-gray-900 text-white hover:bg-gray-800 px-8 py-6 text-base"
            >
              Email Me
            </Button>
            <Button
              onClick={handleWhatsAppClick}
              variant="outline"
              className="rounded-full hover:bg-gray-100 dark:text-white dark:hover:text-black px-8 py-6 text-base"
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

