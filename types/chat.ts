export interface User {
  id: string;
  name: string;
  avatar?: string;
  status: 'online' | 'offline' | 'away' | 'verified';
  email: string;
  phone?: string;
  address?: string;
}

export interface Message {
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  timestamp: Date;
  status: 'sent' | 'delivered' | 'read';
  attachments?: Attachment[];
  isTask?: boolean;
  priority?: 'low' | 'medium' | 'high';
}

export interface Attachment {
  id: string;
  type: 'image' | 'file';
  url: string;
  name: string;
  size?: number;
}

export interface Conversation {
  id: string;
  participants: User[];
  lastMessage?: Message;
  unreadCount: number;
  type: 'all' | 'sms' | 'email' | 'messenger';
  assignee?: User;
}