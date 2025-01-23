"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check localStorage on mount
    const savedTheme = localStorage.getItem("theme")
    const isDarkMode = savedTheme === "dark"
    setIsDark(isDarkMode)
    
    document.documentElement.classList.toggle("dark", isDarkMode)
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark"
    setIsDark(!isDark)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed bottom-6 right-6 rounded-full w-12 h-12 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-500" />
      ) : (
        <Moon className="h-5 w-5 text-gray-700" />
      )}
    </Button>
  )
}
