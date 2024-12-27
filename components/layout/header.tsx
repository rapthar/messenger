"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Bell, MessageSquare } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { Badge } from "@/components/ui/badge"

export function Header() {
  return (
    <div className="h-14 border-b flex items-center justify-between px-4 bg-background">
      <div className="flex items-center gap-2">
        <MobileNav />
        <h1 className="text-lg font-medium">Messaging</h1>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Global search"
            className="h-9 w-64 pl-9 pr-4 rounded-md border bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring"
          />
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="relative h-10 w-10">
            <Bell className="h-5 w-5" />
            <Badge className="absolute top-1.5 right-1.5 h-4 w-4 p-0 flex items-center justify-center bg-red-500 text-[11px] text-white">
              5
            </Badge>
          </Button>
          <Button variant="ghost" size="icon" className="relative h-10 w-10 hidden md:flex">
            <MessageSquare className="h-5 w-5" />
            <Badge className="absolute top-1.5 right-1.5 h-4 w-4 p-0 flex items-center justify-center bg-red-500 text-[11px] text-white">
              2
            </Badge>
          </Button>
          <Avatar className="h-8 w-8 ml-2">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John&backgroundColor=b6e3f4" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
}