import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface ImageModalProps {
  src: string
  alt: string
  onClose: () => void
}

export function ImageModal({ src, alt, onClose }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(true)
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    setTimeout(onClose, 300) 
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <button className="absolute top-4 right-4 text-white hover:text-gray-300" onClick={handleClose}>
        <X size={24} />
      </button>
      <div className="relative w-full h-full max-w-4xl max-h-full p-4">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          layout="fill"
          objectFit="contain"
          className="select-none"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  )
}

