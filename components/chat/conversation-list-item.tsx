"use client"

import { Conversation, User } from "@/types/chat"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { ChevronDown, Cookie, Coins } from "lucide-react"
import { formatMessageTime } from "@/lib/format"

interface ConversationListItemProps {
  conversation: Conversation
  isSelected: boolean
  onClick: () => void
}

export function ConversationListItem({ 
  conversation, 
  isSelected,
  onClick 
}: ConversationListItemProps) {
  const otherParticipant = conversation.participants[1]
  const [formattedTime, setFormattedTime] = useState<string>("")

  useEffect(() => {
    if (conversation.lastMessage?.timestamp) {
      setFormattedTime(formatMessageTime(conversation.lastMessage.timestamp))
    }
  }, [conversation.lastMessage?.timestamp])
  
  return (
    <div
      onClick={onClick}
      className={cn(
        "w-full flex items-start gap-3 p-4 cursor-pointer transition-colors border-b relative",
        isSelected ? "bg-[#E8F5F1]" : "hover:bg-gray-50"
      )}
    >
      {isSelected && <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-emerald-600" />}
      <Avatar className="h-9 w-9">
        <AvatarImage src={otherParticipant.avatar} />
        <AvatarFallback>
          {otherParticipant.name.charAt(0)}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 text-left space-y-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-medium text-sm text-gray-900">
              {otherParticipant.name.split(' ')[0]} {otherParticipant.name.split(' ')[1]}
            </span>
            {conversation.id === '1' && (
              <Cookie className="h-4 w-4 text-amber-500" />
            )}
            {conversation.type === 'premium' && (
              <Cookie className="h-4 w-4 text-red-500" />
            )}
            {conversation.type === 'sales' && (
              <Coins className="h-4 w-4 text-amber-500" />
            )}
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400 hover:text-gray-600">
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {conversation.lastMessage?.timestamp && (
            <span className="text-[11px] text-gray-500">
              {formattedTime}
            </span>
          )}
          <div className="flex items-center gap-1">
            <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-0 text-[11px] px-1.5 py-0.5 font-normal rounded">
              {conversation.type === 'sales' ? 'Tiffany G' : ''}
            </Badge>
          </div>
        </div>
        {conversation.lastMessage && (
          <p className="text-xs text-gray-500 truncate leading-5">
            {conversation.lastMessage.content}
          </p>
        )}
      </div>
    </div>
  )
}