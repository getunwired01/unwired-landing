import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import PreloadResources from "@/components/preload-resources"
import { GoogleAnalytics } from "@next/third-parties/google"

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
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
console.log("GA_TRACKING_ID", GA_TRACKING_ID);
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body>
        <PreloadResources />
        {children}
      </body>
      <GoogleAnalytics gaId={`${GA_TRACKING_ID}`} />
    </html>
  )
}
