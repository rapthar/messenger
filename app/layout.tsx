import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import { SidebarMenu } from "@/components/layout/sidebar-menu"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { CollapsibleMenu } from "@/components/layout/collapsible-menu"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Messenger",
  description: "Modern messaging application",
}

import { Providers } from "./providers"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="flex h-screen">
            <SidebarMenu />
            <CollapsibleMenu />
            <div className="flex-1 flex flex-col min-h-0">
              <Header />
              <main className="flex-1 overflow-hidden">
                {children}
              </main>
              <Footer />
            </div>
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}