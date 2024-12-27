"use client"

import { Button } from "@/components/ui/button"
import {
  RotateCcw,
  Filter,
  ChevronDown
} from "lucide-react"

export function ConversationFilters() {
  return (
    <div className="flex flex-col gap-2 p-4 border-b bg-white">
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm" className="h-8 px-3 text-sm font-normal">
          Preferred Location
          <ChevronDown className="ml-1.5 h-3 w-3" />
        </Button>
        <Button variant="outline" size="sm" className="h-8 px-3">
          <span className="text-sm font-normal text-gray-500">All</span>
          <ChevronDown className="ml-1.5 h-3 w-3" />
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="outline" size="sm" className="h-8 px-3">
          <span className="text-sm font-normal text-gray-500">Assignee</span>
          <ChevronDown className="ml-1.5 h-3 w-3" />
        </Button>
        <Button variant="outline" size="sm" className="h-8 px-3">
          <span className="text-sm font-normal text-gray-500">Tiffany G</span>
          <ChevronDown className="ml-1.5 h-3 w-3" />
        </Button>
        <Button variant="outline" size="sm" className="h-8 px-3 ml-auto">
          <Filter className="h-3 w-3 mr-1.5" />
          <span className="text-xs font-medium text-gray-500">ALL FILTERS</span>
        </Button>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <RotateCcw className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  )
}