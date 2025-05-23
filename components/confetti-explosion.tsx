"use client"

import { useCallback, useEffect, useRef } from "react"
import { useWindowSize } from "react-use"

interface ConfettiExplosionProps {
  duration?: number
  particleCount?: number
  width?: number
  height?: number
}

export default function ConfettiExplosion({
  duration = 3000,
  particleCount = 100,
  width = 1000,
  height = 800,
}: ConfettiExplosionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { width: windowWidth, height: windowHeight } = useWindowSize()
  const particles = useRef<any[]>([])
  const animationRef = useRef<number | undefined>(undefined)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const createParticles = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const colors = ["#5CDBA5", "#FFFFFF", "#5CDBA5", "#FFFFFF", "#5CDBA5"]

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 10 + 5
      particles.current.push({
        x: width / 2,
        y: height / 2,
        size,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 20,
        vy: (Math.random() - 0.5) * 20 - 10,
        gravity: 0.5,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 5,
        opacity: 1,
      })
    }
  }, [height, particleCount, width])

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.current.forEach((particle, index) => {
      particle.x += particle.vx
      particle.y += particle.vy
      particle.vy += particle.gravity
      particle.rotation += particle.rotationSpeed
      particle.opacity -= 0.01

      ctx.save()
      ctx.translate(particle.x, particle.y)
      ctx.rotate((particle.rotation * Math.PI) / 180)
      ctx.globalAlpha = particle.opacity > 0 ? particle.opacity : 0
      ctx.fillStyle = particle.color
      ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size)
      ctx.restore()

      if (particle.opacity <= 0) {
        particles.current.splice(index, 1)
      }
    })

    if (particles.current.length > 0) {
      animationRef.current = requestAnimationFrame(animate)
    }
  }, [])

  const startConfetti = useCallback(() => {
    if (canvasRef.current) {
      createParticles()
      animate()

      timerRef.current = setTimeout(() => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
        particles.current = []
      }, duration)
    }
  }, [animate, createParticles, duration])

  useEffect(() => {
    startConfetti()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [startConfetti])

  return (
    <canvas
      ref={canvasRef}
      width={windowWidth}
      height={windowHeight}
      className="fixed inset-0 pointer-events-none z-50"
    />
  )
}
