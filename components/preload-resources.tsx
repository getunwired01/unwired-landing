"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

// List of critical resources to preload
const CRITICAL_IMAGES = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UnWired%21-LV9IKc56jROZRxwAfDYnGuE3C56TiP.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tyler-YI0z5ezWqf8-unsplash%282%29.jpg-cetbCkyxKdi7ZeRzEITFhrPXLol7Zj.jpeg",
]

export default function PreloadResources() {
  const [resourcesLoaded, setResourcesLoaded] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    // Reset loading state on route change
    setResourcesLoaded(false)
    setLoadingProgress(0)

    let loadedCount = 0
    const totalResources = CRITICAL_IMAGES.length

    // Function to update progress
    function updateProgress() {
      loadedCount++
      setLoadingProgress(Math.floor((loadedCount / totalResources) * 100))
      if (loadedCount === totalResources) {
        setResourcesLoaded(true)
        document.body.classList.add("resources-loaded")
      }
    }

    // Preload images using simple Image objects
    CRITICAL_IMAGES.forEach((src) => {
      const img = new Image()
      img.onload = updateProgress
      img.onerror = updateProgress
      img.src = src
    })

    // Fallback timer
    const fallbackTimer = setTimeout(() => {
      setResourcesLoaded(true)
      document.body.classList.add("resources-loaded")
    }, 3000)

    return () => {
      clearTimeout(fallbackTimer)
    }
  }, [pathname])

  if (resourcesLoaded) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <div className="relative h-24 w-24">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 rounded-full border-2 border-primary/20"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="h-16 w-16 rounded-full border-2 border-transparent border-t-primary"
            style={{ animation: "spin 1s linear infinite" }}
          ></div>
        </div>
      </div>
      <div className="mt-4 text-sm text-zinc-400">{loadingProgress}%</div>
    </div>
  )
}
