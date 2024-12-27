"use client"

import { cn } from "@/lib/utils"
import { Message } from "@/types/chat"
import { useEffect, useState } from "react"
import { formatDistanceToNow } from "date-fns"
import { Check, CheckCheck } from "lucide-react"

interface MessageBubbleProps {
  message: Message
  isOwn: boolean
}

export function MessageBubble({ message, isOwn }: MessageBubbleProps) {
  const [timeString, setTimeString] = useState<string>("")

  useEffect(() => {
    setTimeString(formatDistanceToNow(new Date(message.timestamp), { addSuffix: true }))
  }, [message.timestamp])

  return (
    <div className={cn(
      "flex gap-2 mb-6",
      isOwn ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[70%] rounded-lg px-4 py-3",
        isOwn ? "bg-primary text-primary-foreground" : "bg-muted"
      )}>
        <p className="break-words text-sm leading-5">{message.content}</p>
        <div className="flex items-center justify-end gap-1.5 mt-1">
          <span className={cn(
            "text-xs",
            isOwn ? "text-primary-foreground/70" : "text-muted-foreground"
          )}>
            {timeString}
          </span>
          {isOwn && (
            <span className="text-xs text-primary-foreground/60">
              {message.status === "read" ? (
                <CheckCheck className="w-4 h-4" />
              ) : (
                <Check className="w-4 h-4" />
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}