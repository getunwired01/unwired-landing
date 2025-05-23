"use client"

import { useEffect, useState } from "react"

// Optimize the parallax effect for smoother animations
export default function ParallaxEffect() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Wait for resources to be loaded before initializing parallax
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

    let ticking = false
    let lastScrollY = window.scrollY
    let rafId: number | null = null

    const handleScroll = () => {
      if (!ticking) {
        rafId = window.requestAnimationFrame(() => {
          const scrollY = window.scrollY

          // Only update if scroll position has changed significantly
          if (Math.abs(scrollY - lastScrollY) > 5) {
            // Apply parallax effect to elements with parallax class
            document.querySelectorAll(".parallax").forEach((element) => {
              const speed = element.getAttribute("data-speed") || "0.1"
              const yPos = -scrollY * Number.parseFloat(speed)
              element.style.transform = `translate3d(0, ${yPos}px, 0)`
            })

            lastScrollY = scrollY
          }

          ticking = false
        })

        ticking = true
      }
    }

    // Add hero image parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const heroImage = document.querySelector(".hero-image-parallax") as HTMLElement
      if (heroImage) {
        const { clientX, clientY } = e
        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight

        // Calculate mouse position as percentage from center
        const mouseXPercent = (clientX / windowWidth - 0.5) * 2 // -1 to 1
        const mouseYPercent = (clientY / windowHeight - 0.5) * 2 // -1 to 1

        // Apply subtle rotation based on mouse position
        heroImage.style.transform = `
          perspective(1000px) 
          rotateY(${mouseXPercent * 3}deg) 
          rotateX(${-mouseYPercent * 3}deg)
          translateZ(10px)
        `
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [isReady])

  return null
}
