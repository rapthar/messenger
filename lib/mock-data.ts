import { Conversation, Message, User } from "@/types/chat"

export const currentUser: User = {
  id: "1",
  name: "John Doe",
  status: "online",
  email: "john@example.com",
  phone: "(423) 546-7733"
}

export const mockConversations: Conversation[] = [
  {
    id: "1",
    type: "all",
    participants: [
      currentUser,
      {
        id: "2",
        name: "Simon Williams",
        status: "online",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Simon&backgroundColor=b6e3f4&hair=short02&hairColor=2c1b18&facialHair=beardMedium&facialHairColor=2c1b18",
        email: "simon@example.com",
        address: "3437 Grape Road, Michawaka, Indiana 5633",
        phone: "(423) 546-7733"
      }
    ],
    lastMessage: {
      id: "msg1",
      content: "Hey there, I need your help",
      senderId: "2",
      receiverId: "1",
      timestamp: new Date(Date.now() - 1000 * 60),
      status: "read"
    },
    unreadCount: 0
  },
  {
    id: "2",
    type: "all",
    participants: [
      currentUser,
      {
        id: "3",
        name: "Mary Smith",
        status: "online",
        email: "mary@example.com",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mary&backgroundColor=ffdfbf&hair=long16&hairColor=a55728&accessories=round&accessoriesColor=374151"
      }
    ],
    lastMessage: {
      id: "msg4",
      content: "Thank you for your time!",
      senderId: "3",
      receiverId: "1",
      timestamp: new Date(Date.now() - 1000 * 60),
      status: "read"
    },
    unreadCount: 0
  },
  {
    id: "3",
    type: "sales",
    participants: [
      currentUser,
      {
        id: "4",
        name: "Barry George",
        status: "online",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Barry&backgroundColor=c0aede&hair=short08&hairColor=2c1b18&facialHair=beardLight&facialHairColor=2c1b18",
        email: "barry@example.com"
      }
    ],
    lastMessage: {
      id: "msg5",
      content: "Thank you, I'll take a look now.",
      senderId: "4",
      receiverId: "1",
      timestamp: new Date("2013-12-20T15:49:00"),
      status: "read"
    },
    unreadCount: 0
  },
  {
    id: "4",
    type: "all",
    participants: [
      currentUser,
      {
        id: "5",
        name: "Michael Bell",
        status: "online",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael&backgroundColor=b6e3f4&hair=short05&hairColor=4a312c&facialHair=beardMajestic&facialHairColor=4a312c",
        email: "michael@example.com"
      }
    ],
    lastMessage: {
      id: "msg6",
      content: "These are fantastic! Is there a way to check them ou...",
      senderId: "5",
      receiverId: "1",
      timestamp: new Date("2013-06-05T15:49:00"),
      status: "sent"
    },
    unreadCount: 0
  },
  {
    id: "5",
    type: "premium",
    participants: [
      currentUser,
      {
        id: "6",
        name: "Melissa Nelson",
        status: "online",
        email: "melissa@example.com",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Melissa&backgroundColor=ffdfbf&hair=long15&hairColor=724133&accessories=prescription02&accessoriesColor=374151"
      }
    ],
    lastMessage: {
      id: "msg7",
      content: "Thanks a lot for the help, you are very kind!.",
      senderId: "6",
      receiverId: "1",
      timestamp: new Date("2013-06-05T11:23:00"),
      status: "sent"
    },
    unreadCount: 0
  }
]

export const mockMessages: Message[] = [
  {
    id: "msg1",
    content: "Hey, how are you?",
    senderId: "2",
    receiverId: "1",
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    status: "read"
  },
  {
    id: "msg2",
    content: "I'm good, thanks! How about you?",
    senderId: "1",
    receiverId: "2",
    timestamp: new Date(Date.now() - 1000 * 60 * 4),
    status: "read"
  },
  {
    id: "msg3",
    content: "Just working on some new projects. Would love to catch up soon!",
    senderId: "2",
    receiverId: "1",
    timestamp: new Date(Date.now() - 1000 * 60 * 3),
    status: "delivered"
  }
]