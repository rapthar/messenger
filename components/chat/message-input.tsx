"use client"

import { Button } from "@/components/ui/button"
import { ImageIcon, SmileIcon } from "lucide-react"
import { useState } from "react"

interface MessageInputProps {
  onSend: (content: string) => void
}

export function MessageInput({ onSend }: MessageInputProps) {
  const [content, setContent] = useState("")

  const handleSend = () => {
    if (content.trim()) {
      onSend(content)
      setContent("")
    }
  }

  return (
    <div className="border-t px-6 pt-4 bg-card">
      <div className="space-y-4">
        <div>
          <label className="text-xs text-muted-foreground mb-1 block">Subject:</label>
          <input
            type="text"
            placeholder="Enter text"
            className="w-full h-9 px-3 rounded-md border bg-muted text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring"
          />
        </div>
        <div>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter text"
            className="w-full h-9 px-3 rounded-md border bg-muted text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSend()
              }
            }}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="h-8 w-8 border-dashed">
            <span className="text-primary text-lg font-medium">+</span>
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ImageIcon className="h-4 w-4 text-muted-foreground" />
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <SmileIcon className="h-4 w-4 text-muted-foreground" />
          </Button>
          <div className="ml-auto flex gap-2">
            <Button
              variant="ghost"
              className="h-8 px-4 bg-blue-500 hover:bg-blue-600 text-primary-foreground"
            >
              <span className="text-sm font-normal">New Email</span>
              <span className="ml-1.5">|</span>
              <span className="ml-1.5">▼</span>
            </Button>
            <Button
              variant="ghost"
              className="h-8 px-4 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <span className="text-sm font-normal">START SALE</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}