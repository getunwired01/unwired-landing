"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}

// Enhanced button animations for a more engaging experience
export default function AnimatedButton({
  children,
  className,
  onClick,
  href,
  variant = "default",
  size = "default",
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLButtonElement>(null)
  const animationFrameRef = useRef<number | undefined>(undefined)
  const childrenRef = useRef<HTMLSpanElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const rect = buttonRef.current?.getBoundingClientRect()
      if (rect) {
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    })
  }

  // Enhanced animation effect
  useEffect(() => {
    if (!buttonRef.current || !childrenRef.current) return
    let animationId: number

    const animate = () => {
      if (!isHovered && buttonRef.current) {
        const width = buttonRef.current.offsetWidth || 0
        const height = buttonRef.current.offsetHeight || 0

        // Create subtle movement
        setMousePosition({
          x: width / 2 + Math.sin(Date.now() / 1000) * width * 0.1,
          y: height / 2 + Math.cos(Date.now() / 1500) * height * 0.1,
        })
      }

      // Add subtle pulse effect to the content
      if (childrenRef.current) {
        if (isHovered) {
          childrenRef.current.style.transform = `scale(1.03) translateY(-1px)`
        } else {
          childrenRef.current.style.transform = "scale(1) translateY(0)"
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isHovered])

  const buttonContent = (
    <button
      ref={buttonRef}
      className={cn(
        "relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-blue-400 text-primary-foreground transition-all duration-300",
        "hover:shadow-lg hover:shadow-primary/30 button-glow",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={onClick}
    >
      <span
        ref={childrenRef}
        className="relative z-10 flex items-center justify-center gap-2 px-6 py-3 font-medium transition-transform duration-300"
      >
        {children}
      </span>
      <div
        className="absolute inset-0 z-0 opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, rgba(92, 219, 165, 0.8), transparent 50%)`,
          opacity: isHovered ? 1 : 0.4,
          transform: "translateZ(0)",
          willChange: "opacity, background",
        }}
      />
    </button>
  )

  if (href) {
    return <a href={href}>{buttonContent}</a>
  }

  return buttonContent
}
