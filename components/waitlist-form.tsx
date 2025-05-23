"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { submitWaitlistForm } from "@/app/actions"
import { CheckCircle2 } from "lucide-react"
import dynamic from "next/dynamic"

const ConfettiExplosion = dynamic(() => import("./confetti-explosion"), {
  ssr: false,
})

interface WaitlistFormProps {
  children?: React.ReactNode
  triggerClassName?: string
  fullForm?: boolean
}

export default function WaitlistForm({ children, triggerClassName, fullForm = false }: WaitlistFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [open, setOpen] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "" })

  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formDataObj = new FormData(event.currentTarget)
    try {
      await submitWaitlistForm(formDataObj)
      setIsSuccess(true)
      setShowConfetti(true)

      // Reset form after 5 seconds if it's the full form
      if (fullForm) {
        setTimeout(() => {
          setIsSuccess(false)
          setShowConfetti(false)
          // Safely reset the form if it still exists
          if (formRef.current) {
            formRef.current.reset()
          }
          setFormData({ name: "", email: "" })
        }, 5000)
      } else {
        // Close dialog after 4 seconds
        setTimeout(() => {
          setOpen(false)
          // Reset success state after dialog closes
          setTimeout(() => {
            setIsSuccess(false)
            setShowConfetti(false)
            setFormData({ name: "", email: "" })
          }, 300)
        }, 4000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const formContent = (
    <form ref={formRef} onSubmit={handleSubmit} className={`space-y-4 ${fullForm ? "w-full" : ""}`}>
      {isSuccess ? (
        <div className="flex flex-col items-center justify-center py-6 text-center">
          {showConfetti && <ConfettiExplosion />}
          <div className="mb-4 rounded-full bg-primary/20 p-3 pulse">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-2 gradient-text">Getting UnWired is Awesome!</h3>
          <p className="text-zinc-400">Be ready to experience ultimate convenience soon!</p>
        </div>
      ) : (
        <>
          <div className="space-y-2">
            {/* <Label htmlFor="name" className="text-sm font-medium text-zinc-300">
              Name
            </Label> */}
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="waitlist-input h-12 text-base"
            />
          </div>
          <div className="space-y-2">
            {/* <Label htmlFor="email" className="text-sm font-medium text-zinc-300">
              Email
            </Label> */}
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="waitlist-input h-12 text-base"
            />
          </div>
          <Button type="submit" className="w-full h-12 text-base font-medium gradient-button" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Join Waitlist"}
          </Button>
        </>
      )}
    </form>
  )

  if (fullForm) {
    return (
      <>
        {fullForm && (
          <div className="mb-4 text-center">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 inline-block py-1 px-3 rounded-full border border-primary/30 animate-pulse-slow">
              Limited Slots Available
            </p>
          </div>
        )}
        {formContent}
      </>
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={triggerClassName}>
        {children || <Button className="gradient-button">Join Waitlist</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-card border border-zinc-800 backdrop-filter backdrop-blur-lg">
        <DialogHeader>
          <DialogTitle className="text-xl gradient-text">Join Our Waitlist</DialogTitle>
          <DialogDescription className="text-zinc-400">
            Be among the first to experience UnWired's revolutionary wireless EV charging. <br />
            <p className="mt-2 items-center text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 inline-block py-1 px-3 rounded-full border border-primary/30 animate-pulse-slow">
              Limited Slots Available
            </p>
          </DialogDescription>
        </DialogHeader>
        {formContent}
      </DialogContent>
    </Dialog>
  )
}
