"use client"

import { MessageSquare } from "lucide-react"

export function DefaultView() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground">
      <MessageSquare className="h-12 w-12 mb-4 text-gray-300" />
      <h3 className="text-lg font-medium text-gray-900 mb-2">No conversation selected</h3>
      <p className="text-sm text-gray-500">
        Select a conversation from the list to start messaging
      </p>
    </div>
  )
}