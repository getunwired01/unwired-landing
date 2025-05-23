import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import PreloadResources from "@/components/preload-resources"

// Load Inter font with preload
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "UnWired - Wireless EV Charging",
  description: "Experience the future of EV charging with UnWired's wireless charging solution.",
  viewport: "width=device-width, initial-scale=1",
  // Add resource hints for critical external resources
  other: {
    "link rel='preconnect' href='https://hebbkx1anhila5yf.public.blob.vercel-storage.com'": "",
    "link rel='dns-prefetch' href='https://hebbkx1anhila5yf.public.blob.vercel-storage.com'": "",
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body>
        <PreloadResources />
        {children}
      </body>
    </html>
  )
}
