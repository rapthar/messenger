"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Facebook } from "lucide-react"

const tabs = [
  { id: "all", label: "All" },
  { id: "sms", label: "SMS" },
  { id: "email", label: "Email" },
  { id: "messenger", label: "Messenger", icon: Facebook }
]

export function ConversationTabs() {
  return (
    <div className="flex border-b">
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          variant="ghost"
          className={cn(
            "flex-1 h-12 px-4 font-normal text-muted-foreground hover:text-foreground rounded-none",
            tab.id === "all" && "border-b-2 border-emerald-600 text-emerald-600"
          )}
        >
          <div className="flex items-center gap-2">
            {tab.icon && <tab.icon className="h-4 w-4" />}
            {tab.label}
          </div>
        </Button>
      ))}
    </div>
  )
}