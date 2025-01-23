"use client"

import Link from "next/link"

export default function FooterSection() {

  return (
          <footer className=" py-16 px-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-50">
          <div>© {new Date().getFullYear()} All rights reserved.</div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Link href="https://linkedin.com" className="hover:text-gray-900 dark:hover:text-gray-300">
              LinkedIn
            </Link>
            <span>/</span>
            <Link href="https://dribbble.com" className="hover:text-gray-900 dark:hover:text-gray-300">
              Dribbble
            </Link>
            <span>/</span>
            <Link href="https://instagram.com" className="hover:text-gray-900 dark:hover:text-gray-300">
              Instagram
            </Link>
          </div>
        </footer> 
  )
}

