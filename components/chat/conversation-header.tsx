"use client"

import { User } from "@/types/chat"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { Edit } from "lucide-react"

interface ConversationHeaderProps {
  participant: User
  className?: string
}

export function ConversationHeader({ participant, className }: ConversationHeaderProps) {
  return (
    <div className={cn(
      "px-6 py-4 border-b flex items-center justify-between bg-card",
      className
    )}>
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-medium text-gray-900">{participant.name}</h2>
          {participant.status === "verified" && (
            <Badge variant="secondary" className="bg-emerald-600 text-white text-xs px-2 py-0.5 rounded font-normal">
              VERIFIED
            </Badge>
          )}
        </div>
        <div className="text-xs text-gray-500">
          {participant.address}
        </div>
      </div>
      <Button variant="outline" size="sm">
        <Edit className="h-4 w-4 mr-1.5 text-emerald-600" />
        <span className="text-xs font-medium text-emerald-600">EDIT</span>
      </Button>
    </div>
  )
}