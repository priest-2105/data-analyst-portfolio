"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import NavbarSection from "@/components/layout/navbar"
import { LucideArrowUpRight } from "lucide-react"

export default function HeroSection() {
  const [position, setPosition] = useState({ x: 2.1, y: 29 })

  useEffect(() => {
    const updatePosition = () => {
      setPosition({
        x: Math.sin(Date.now() / 10) * 0.1,
        y: Math.cos(Date.now() / 10) * 0.1 + 29,
      })
    }

    const interval = setInterval(updatePosition, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full rounded-b-[100px] bg-[#f1f1f1] dark:bg-[#1f1f1f]">
      <NavbarSection/>
      <main className="flex flex-col pb-16 items-center justify-center px-4 text-center mt-20 md:mt-32">

    <div className="relative w-full max-w-6xl mx-auto">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute transition-transform duration-[2000ms] ease-in-out"
            // style={{
            //   background: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rR6HYXBrMmX4cRpXfXUOvpvpB0-gFO11vA7BrdDZj12yuGFowhxcLYUw6.png)`,
            //   opacity: 0.4,
            //   inset: "-200%",
            //   width: "400%",
            //   height: "400%",
            //   transform: `translateX(${position.x}%) translateY(${position.y}%) translateZ(0px)`,
            // }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="relative inline-block">
            <Image src="/img/avatar.png" alt="Profile" width={150} height={150} className="rounded-full" />
            <div className="absolute -right-12 -rotate-3 bottom-3 bg-white dark:bg-black dark:text-white rounded-full px-3 py-1 shadow-md  animate-updown">
            <span className="text-sm">Kawsar Ahmed</span>
            <span className="ml-1 text-xs">✨</span>
          </div>

          </div>

          <h1 className="mt-4 max-w-2xl mx-auto text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-transparent bg-clip-text bg-custom-gradient  dark:text-white">
          Building digital <span className="block">products, brands, and</span>
          <span className="block">experience.</span>
        </h1>



          <Button variant="default" className="mt-12 bg-gray-900 text-white hover:bg-gray-800  dark:bg-slate-100 dark:text-black dark:hover:bg-slate-300 rounded-full px-8 py-8">
            Latest Shots
            <LucideArrowUpRight/> 
            {/* <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ height: "100%", width: "100%"}} viewBox="0 0 15 14" preserveAspectRatio="none" width="100%" height="100%"><use href="#svg-741451987_462"></use></svg> */}
          </Button>
        </div>
      </div>

    </main>
    </div>
  )
}

