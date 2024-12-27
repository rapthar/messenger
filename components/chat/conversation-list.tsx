"use client"

import { Conversation } from "@/types/chat"
import { ScrollArea } from "../ui/scroll-area"
import { ConversationListItem } from "./conversation-list-item"

interface ConversationListProps {
  conversations: Conversation[]
  selectedId?: string
  onSelect: (conversation: Conversation) => void
}

export function ConversationList({ 
  conversations, 
  selectedId, 
  onSelect 
}: ConversationListProps) {
  return (
    <ScrollArea className="flex-1">
      {conversations.map((conversation) => (
        <ConversationListItem
          key={conversation.id}
          conversation={conversation}
          isSelected={selectedId === conversation.id}
          onClick={() => onSelect(conversation)}
        />
      ))}
    </ScrollArea>
  )
}