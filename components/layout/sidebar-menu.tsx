"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  MessageSquare,
  Search,
  DollarSign,
  RefreshCcw,
  Image,
  MapPin,
  Users,
  FileText,
  Key,
  Settings
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const menuItems = [
  { icon: Search, label: "Search", href: "/search" },
  { icon: DollarSign, label: "Sales", href: "/sales" },
  { icon: RefreshCcw, label: "Updates", href: "/updates" },
  { icon: Image, label: "Media", href: "/media" },
  { icon: MapPin, label: "Location", href: "/location" },
  { icon: Users, label: "Contacts", href: "/contacts" },
  { icon: FileText, label: "Documents", href: "/documents" },
  { icon: Key, label: "Access", href: "/access" },
  { icon: Settings, label: "Settings", href: "/settings" },
]

export function SidebarMenu() {
  const pathname = usePathname()

  return (
    <div className="w-16 border-r bg-[#0B3B2D] flex flex-col items-center py-4">
      <Button
        variant="ghost"
        size="icon"
        className="mb-8"
        asChild
      >
        <Link href="/">
          <MessageSquare className="h-6 w-6 text-white" />
        </Link>
      </Button>
      <nav className="space-y-2 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Button
              key={item.href}
              variant="ghost"
              size="icon"
              className={cn(
                "h-12 w-12 rounded-xl",
                isActive 
                  ? "bg-white/10 text-white" 
                  : "text-white/60 hover:text-white hover:bg-white/10"
              )}
              asChild
            >
              <Link href={item.href}>
                <Icon className="h-5 w-5" />
              </Link>
            </Button>
          )
        })}
      </nav>
    </div>
  )
}