import { format, isToday, formatDistanceToNow } from "date-fns"

export function formatMessageTime(date: Date): string {
  // Ensure we're working with a Date object
  const messageDate = new Date(date)

  const time = format(date, "HH:mm")
  
  if (isToday(messageDate)) {
    return formatDistanceToNow(messageDate, { addSuffix: true })
  }
  return format(messageDate, "MMM d, yyyy")
}

export function formatDetailedTime(date: Date): string {
  return format(date, "MMM d, yyyy HH:mm")
}