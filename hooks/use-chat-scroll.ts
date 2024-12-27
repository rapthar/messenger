"use client"

import { useEffect, useRef, useCallback } from "react"

export function useChatScroll<T>(dep: T) {
  const scrollRef = useRef<HTMLDivElement>(null)
  
  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth"
      })
    }
  }, [])
  
  useEffect(() => {
    if (scrollRef.current) {
      scrollToBottom()
    }
  }, [dep])
  
  return scrollRef
}