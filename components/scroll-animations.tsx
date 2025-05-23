"use client"

import { useEffect, useRef, useState } from "react"

export default function ScrollAnimations() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Wait for resources to be loaded before initializing animations
    const checkIfResourcesLoaded = () => {
      if (document.body.classList.contains("resources-loaded")) {
        setIsReady(true)
      } else {
        // Check again in a short while
        setTimeout(checkIfResourcesLoaded, 100)
      }
    }

    checkIfResourcesLoaded()
  }, [])

  useEffect(() => {
    if (!isReady) return

    // Create intersection observer with optimized settings
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add animation classes when element is in view
          if (entry.isIntersecting) {
            // Add a small delay before adding the class to ensure smoother animations
            setTimeout(() => {
              entry.target.classList.add("animate-in")
            }, 50)

            // Optional: Stop observing after animation is triggered
            if (entry.target.classList.contains("animate-once")) {
              observerRef.current?.unobserve(entry.target)
            }
          } else if (!entry.target.classList.contains("animate-once")) {
            // Remove animation classes when element is out of view (for repeatable animations)
            entry.target.classList.remove("animate-in")
          }
        })
      },
      {
        root: null, // Use viewport as root
        rootMargin: "0px 0px -5% 0px", // Trigger slightly before element enters viewport
        threshold: 0.15, // Trigger when 15% of element is visible for smoother transitions
      },
    )

    // Select all elements with animation classes
    const animatedElements = document.querySelectorAll(".fade-up, .fade-in, .slide-in-left, .slide-in-right, .scale-in")

    // Observe each element
    animatedElements.forEach((element) => {
      observerRef.current?.observe(element)
    })

    return () => {
      // Clean up observer
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [isReady])

  return null
}
