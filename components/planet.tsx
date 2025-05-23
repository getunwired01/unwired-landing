"use client"

import { useEffect, useRef } from "react"

export default function Planet() {
  const planetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const planet = planetRef.current
    if (!planet) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      // Calculate mouse position as percentage of window
      const mouseXPercent = clientX / windowWidth
      const mouseYPercent = clientY / windowHeight

      // Calculate offset based on mouse position (subtle parallax effect)
      const offsetX = (mouseXPercent - 0.5) * 30
      const offsetY = (mouseYPercent - 0.5) * 30

      // Apply transform
      planet.style.transform = `translate(${offsetX}px, ${offsetY}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={planetRef}
      className="planet w-[180vw] h-[180vw] top-[60%] left-[50%] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out opacity-40"
    />
  )
}
