"use client"

import { Github, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t bg-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="text-sm text-gray-500">
            © 2024 Messenger. All rights reserved.
          </div>
          <nav className="flex items-center space-x-6">
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
              Privacy
            </Link>
            <Link href="/help" className="text-sm text-gray-500 hover:text-gray-900">
              Help Center
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="https://github.com" className="text-gray-400 hover:text-gray-900">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com" className="text-gray-400 hover:text-gray-900">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com" className="text-gray-400 hover:text-gray-900">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}