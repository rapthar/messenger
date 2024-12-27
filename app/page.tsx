"use client"

import { MessageBubble } from "@/components/chat/message-bubble"
import { ConversationList } from "@/components/chat/conversation-list"
import { ConversationHeader } from "@/components/chat/conversation-header"
import { ConversationTabs } from "@/components/chat/conversation-tabs"
import { ContactDetails } from "@/components/chat/contact-details"
import { MessageInput } from "@/components/chat/message-input"
import { ConversationFilters } from "@/components/chat/conversation-filters"
import { DefaultView } from "@/components/chat/default-view"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Conversation, Message, User } from "@/types/chat"
import { MessageSquare, Search, Plus } from "lucide-react"
import { useState } from "react"
import { useChatScroll } from "@/hooks/use-chat-scroll"
import { currentUser, mockConversations, mockMessages } from "@/lib/mock-data"

export default function Home() {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(mockConversations[0])
  const [messages, setMessages] = useState<Message[]>(mockMessages)
  const scrollRef = useChatScroll(messages)
  
  const handleSend = (content: string) => {
    const newMessage: Message = {
      id: `msg${messages.length + 1}`,
      content,
      senderId: currentUser.id,
      receiverId: selectedConversation?.participants[1].id || "",
      timestamp: new Date(),
      status: "sent"
    }
    setMessages([...messages, newMessage])
  }

  return (
    <div className="flex h-full overflow-hidden bg-background">
      {/* Sidebar */}
      <div className="mobile-container border-r flex flex-col bg-card mobile-hidden">
        <div className="p-4 border-b">
          <div className="relative flex items-center gap-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search conversations"
              className="pl-9 h-10 flex-1 bg-muted border-input placeholder:text-muted-foreground"
            />
            <Button variant="default" size="sm" className="h-10 px-3">
              <span className="text-sm font-normal">Open</span>
              <span className="ml-1 text-xs bg-primary/20 px-1.5 py-0.5 rounded">3</span>
            </Button>
            <Button variant="outline" size="icon" className="h-10 w-10 border-dashed">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <ConversationFilters />
        <ConversationTabs />
        <ConversationList
          conversations={mockConversations}
          selectedId={selectedConversation?.id}
          onSelect={setSelectedConversation}
        />
      </div>

      {/* Main Chat Area */}
      {selectedConversation ? (
        <div className="flex-1 flex flex-col min-h-0">
          <ConversationHeader 
            participant={selectedConversation.participants[1]} 
            className="flex-none"
          />
          <div 
            className="flex-1 overflow-y-auto px-4 md:px-6 py-4"
            ref={scrollRef}
          >
            <div className="space-y-4 min-h-full">
              {messages.map((message) => (
                <MessageBubble
                  key={message.id}
                  message={message}
                  isOwn={message.senderId === currentUser.id}
                />
              ))}
            </div>
          </div>
          <div className="pb-6">
            <MessageInput onSend={handleSend} />
          </div>
        </div>
      ) : (
        <DefaultView />
      )}
      {selectedConversation && selectedConversation.participants[1] && (
        <div className="mobile-hidden">
          <ContactDetails user={selectedConversation.participants[1]} />
        </div>
      )}
    </div>
  );
}