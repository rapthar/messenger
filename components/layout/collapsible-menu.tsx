"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  ChevronRight,
  Users2,
  User,
  HelpCircle,
  Rocket,
  Cookie,
  Coins
} from "lucide-react"
import { useState } from "react"

const menuItems = [
  { id: "users", icon: Users2, label: "Users" },
  { id: "profile", icon: User, label: "Profile" },
  { id: "help", icon: HelpCircle, label: "Help", active: true },
  { id: "quick", icon: Rocket, label: "Quick Start" },
  { id: "premium", icon: Cookie, label: "Premium" },
  { id: "sales", icon: Coins, label: "Sales" }
]

export function CollapsibleMenu() {
  const [isExpanded, setIsExpanded] = useState(true)
  const [selectedId, setSelectedId] = useState("help")

  return (
    <div className={cn(
      "border-r flex flex-col transition-all duration-300",
      isExpanded ? "w-16" : "w-0 opacity-0"
    )}>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsExpanded(false)}
        className="h-16 w-16 rounded-none"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      <ScrollArea className="flex-1">
        <div className="space-y-1 p-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.id}
                variant="ghost"
                size="icon"
                className={cn(
                  "h-12 w-12 rounded-xl",
                  selectedId === item.id && "bg-[#E8F5F1] text-[#0B3B2D]",
                  selectedId !== item.id && "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
                onClick={() => setSelectedId(item.id)}
              >
                <Icon className="h-5 w-5" />
              </Button>
            )
          })}
        </div>
      </ScrollArea>
    </div>
  )
}