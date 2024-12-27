"use client"

import { User } from "@/types/chat"
import { ScrollArea } from "../ui/scroll-area"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { ChevronDown, Edit, Send, DollarSign } from "lucide-react"

interface ContactDetailsProps {
  user: User
}

export function ContactDetails({ user }: ContactDetailsProps) {
  return (
    <div className="w-[400px] border-l bg-card flex flex-col h-full">
      <Button variant="ghost" className="flex-none mx-4 my-3 justify-between rounded-full bg-muted/50" size="sm">
        <div className="flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-amber-500" />
          <span className="text-base font-medium">Sales</span>
        </div>
        <ChevronDown className="h-4 w-4" />
      </Button>
      <ScrollArea className="flex-1">
        <div className="px-4 py-4 border-y">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-base font-medium">Contact Details</h2>
            <Button variant="ghost" size="sm" className="h-8 px-3">
              <Edit className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-primary">EDIT</span>
            </Button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-muted-foreground">First Name</label>
              <p className="text-sm font-medium">{user.name.split(" ")[0]}</p>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Last Name</label>
              <p className="text-sm font-medium">{user.name.split(" ")[1]}</p>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Mobile Phone</label>
              <p className="text-sm font-medium">{user.phone}</p>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Email</label>
              <p className="text-sm font-medium">{user.email}</p>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Address</label>
              <p className="text-sm font-medium">{user.address}</p>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Status</label>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded font-normal">
                  VERIFIED
                </Badge>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b">
          <Button variant="ghost" className="w-full justify-between px-4 py-3 h-auto" size="sm">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Tasks</span>
              <Badge variant="secondary" className="bg-red-500 text-white text-xs w-5 h-5 rounded-full p-0 flex items-center justify-center">1</Badge>
            </div>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
        <div className="border-b">
          <Button variant="ghost" className="w-full justify-between px-4 py-3 h-auto" size="sm">
            <span className="text-sm font-medium">Note</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
        <div className="border-b">
          <Button variant="ghost" className="w-full justify-between px-4 py-3 h-auto" size="sm">
            <span className="text-sm font-medium">Units of Interest</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
        <div className="border-b">
          <Button variant="ghost" className="w-full justify-between px-4 py-3 h-auto" size="sm">
            <span className="text-sm font-medium">Files</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </ScrollArea>
      <div className="flex-none p-4">
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11 rounded-md" size="lg">
          <div className="flex items-center gap-2">
            <Send className="h-4 w-4 -rotate-45" />
            <span className="text-sm font-medium">START SALE</span>
          </div>
        </Button>
      </div>
    </div>
  )
}