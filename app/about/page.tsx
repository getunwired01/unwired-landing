import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Users, Target, Lightbulb } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We're pushing the boundaries of what's possible in EV charging technology, making wireless power transfer a reality for everyday drivers."
    },
    {
      icon: Users,
      title: "Sustainability",
      description: "Our mission is to accelerate the adoption of electric vehicles by removing barriers and making charging more convenient than ever."
    },
    {
      icon: Lightbulb,
      title: "Simplicity",
      description: "We believe the best technology is invisible. Our wireless charging solutions work seamlessly in the background of your daily life."
    }
  ]

  return (
    <div className="min-h-screen cosmic-bg">
      <div className="container py-12">
        <div className="mb-12">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Powering the Future of <span className="gradient-text">Electric Mobility</span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            UnWired was founded with a simple vision: make EV charging as effortless as parking your car. 
            We're building the infrastructure for a wireless future, one charging pad at a time.
          </p>
        </div>

        {/* Mission Section */}
        <div className="feature-card rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                We're on a mission to eliminate the friction in EV charging. By developing cutting-edge wireless 
                charging technology, we're making electric vehicle ownership more convenient, accessible, and appealing 
                to drivers everywhere.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Our team of engineers and innovators is working tirelessly to create a world where you never have 
                to think about charging your EV again – it just happens, seamlessly and efficiently.
              </p>
            </div>
            <div className="floating">
              <Image
                src="/vision.jpg"
                alt="Electric Vehicle Technology"
                width={500}
                height={300}
                className="rounded-2xl hero-image-glow"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-zinc-400 text-lg">The principles that guide everything we do.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="feature-card rounded-2xl p-8 text-center">
                <div className="icon-container rounded-full bg-primary/10 p-4 mb-6 inline-block">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-zinc-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="feature-card rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            We're building the future of transportation infrastructure. If you're passionate about sustainable 
            technology and want to help shape the EV revolution, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gradient-button" asChild>
              <Link href="/careers">View Open Positions</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
