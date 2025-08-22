"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Shield, Zap, Sparkles } from "lucide-react";
import WaitlistForm from "@/components/waitlist-form";
import Stars from "@/components/stars";
import Planet from "@/components/planet";
import ScrollAnimations from "@/components/scroll-animations";
import ParallaxEffect from "@/components/parallax-effect";
import AnimatedButton from "@/components/animated-button";
import SectionDivider from "@/components/section-divider";
import ScrollProgress from "@/components/scroll-progress";
import React, { useState } from "react";

export default function LandingPage() {
  const unwiredDemoUrl =
    process.env.NEXT_PUBLIC_DEMO_URL ||
    "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Embed URL for YouTube
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const trackJoinWaitlistClick = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "click", {
        event_category: "Button",
        event_label: "Join Waitlist",
      });
    } else {
      console.warn("Google Analytics is not initialized.");
    }
  };

  const trackVideoClick = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "click", {
        event_category: "Video",
        event_label: "Watch Demo",
      });
    } else {
      console.warn("Google Analytics is not initialized.");
    }
    setIsModalOpen(true); // Open the modal when the button is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="flex min-h-screen flex-col cosmic-bg">
      <ScrollProgress />
      <Stars />
      <Planet />
      <ScrollAnimations />
      <ParallaxEffect />

      <main id="home" className="flex-1 relative z-10">
        {/* Hero Section */}
        <section id="about" className="w-full py-28 relative overflow-hidden">
          {/* Add animated particles background */}
          <div className="absolute inset-0 z-0">
            <div className="hero-particles"></div>
          </div>

          {/* Add animated gradient overlay */}
          <div className="absolute inset-0 z-0 hero-gradient-overlay"></div>

          <div className="container px-4 md:px-6 relative z-10 flex justify-between">
            <div className="w-1/2 pr-8">
              {/* Add section transition at the bottom */}

              <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm fade-in animate-once animate-pulse-slow">
                  <span className="text-xs font-medium text-primary opacity-90">Introducing Wireless EV Charging</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter">
                  <span className="block fade-up animate-once hero-text-reveal">Charge EVs</span>
                  <span className="gradient-text fade-up animate-once delay-200 hero-text-reveal hero-gradient-text">
                    wirelessly
                  </span>
                  <span className="block mt-2 fade-up animate-once delay-400 hero-text-reveal">one park away</span>
                </h1>
                <p className="max-w-[600px] mx-auto text-zinc-400 text-lg md:text-xl fade-up animate-once delay-500 hero-text-reveal">
                  Say goodbye to cables and hello to seamless charging. UnWired offers a premium wireless EV charging
                  solution for modern electric vehicles, designed for the future of mobility.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 fade-up animate-once delay-500">
                  <WaitlistForm triggerClassName="inline-flex">
                    <AnimatedButton className="hero-cta-button" onClick={trackJoinWaitlistClick}>
                      Join Waitlist <ArrowRight className="h-5 w-5 ml-2 hero-icon-float" />
                    </AnimatedButton>
                  </WaitlistForm>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 rounded-full text-base font-medium border-zinc-700 bg-background/50 backdrop-blur-sm hover:bg-zinc-800/70 hover:text-purple-300 transition-colors relative overflow-hidden group"
                  >
                    <Link href="#how-it-works" className="flex items-center justify-center w-full h-full z-10 relative">
                      Learn More
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/10 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
                    </Link>
                  </Button>
                </div>

              </div>
            </div>

            <div className="w-1/2 pl-8">
              <div className="relative w-full h-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UnwiredHeroImage.jpg-f8AOnT5agelX5ThPXCBoLTAedgym1T.jpeg"
                  alt="Electric Vehicle with glowing headlights on a dark road"
                  width={800}
                  height={500}
                  className="w-full rounded-2xl shadow-2xl hero-image-glow hero-image-parallax animate-spin-slow"
                  priority
                />
                <div className="flex flex-row gap-2 justify-center mt-4 fade-up animate-once delay-500">
                  {/* Review 1 */}
                  <div className="bg-white rounded-lg shadow-md flex items-center px-3 py-2 max-w-xs h-24 min-h-0">
                    <div className="mr-2">
                      <img src="/review-woman.jpg" alt="Jane Doe" className="w-8 h-8 rounded-full object-cover" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-1">
  <p className="text-xs font-semibold text-zinc-800 leading-tight">Deepa S</p>
  {[0,1,2,3,4].map(i => (
    <span key={i} className={`inline-block animate-bounce`} style={{ animationDelay: `${i * 0.1}s` }}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    </span>
  ))}
</div>
                      <p className="text-xs text-zinc-500 leading-snug line-clamp-2">I have joined waitlist for Unwired and I am excited to try it out. </p>
                    </div>
                  </div>
                  {/* Review 2 */}
                  <div className="bg-white rounded-lg shadow-md flex items-center px-3 py-2 max-w-xs h-24 min-h-0">
                    <div className="mr-2">
                      <img src="review-man.jpg" alt="Rajesh Kunar" className="w-8 h-8 rounded-full object-cover" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-1">
  <p className="text-xs font-semibold text-zinc-800 leading-tight">Rajesh Kumar</p>
  {[0,1,2,3,4].map(i => (
    <span key={i} className={`inline-block animate-bounce`} style={{ animationDelay: `${i * 0.1}s` }}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    </span>
  ))}
</div>
                      <p className="text-xs text-zinc-500 leading-snug line-clamp-2">Unwired will solve my problem of not being able to charge my EV.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Reviews moved below the product image */}
              {/* <div className="flex flex-col sm:flex-row-reverse gap-4 justify-center mt-8 fade-up animate-once delay-500">
                <div className="flex flex-col items-end space-y-2">
                  <div className="bg-white p-4 rounded-md shadow-lg">
                    <p className="text-lg font-medium">Jane Doe</p>
                    <p className="text-sm text-zinc-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow-lg">
                    <p className="text-lg font-medium">John Doe</p>
                    <p className="text-sm text-zinc-500">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Features Section */}
        <section id="features" className="w-full relative">
          {/* Add section transitions at top and bottom */}

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm fade-up">
                <span className="text-xs font-medium text-primary opacity-90">Features</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter fade-up delay-100">Why Choose UnWired?</h2>
              <p className="max-w-[800px] text-zinc-400 md:text-lg fade-up delay-200">
                Our wireless EV charging solution eliminates the hassles of traditional charging methods.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              <div className="feature-card rounded-2xl p-8 fade-up delay-300">
                <div className="icon-container rounded-full bg-primary/5 p-4 mb-6 inline-block">
                  <Zap className="h-8 w-8 text-primary opacity-80" />
                </div>
                <h3 className="text-xl font-bold mb-3">Effortless Charging</h3>
                <p className="text-zinc-400">
                  Simply park your vehicle over the charging pad and charging begins automatically. No cables, no
                  hassle.
                </p>
                <div className="py-4">
                  <Image
                    src="/effortless-charging.png" // Replace with your placeholder image URL
                    alt="Effortless Charging"
                    width={400}
                    height={300}
                    className="rounded-lg mb-4"
                  />
                </div>
              </div>
              <div className="feature-card rounded-2xl p-8 fade-up delay-400">
                <div className="icon-container rounded-full bg-primary/5 p-4 mb-6 inline-block">
                  <Shield className="h-8 w-8 text-primary opacity-80" />
                </div>
                <h3 className="text-xl font-bold mb-3">Enhanced Safety</h3>
                <p className="text-zinc-400">
                  No more tripping hazards from cables or maintenance worries. Our wireless solution is safe, reliable, and weatherproof. 
                </p>
                <div className="py-4">
                  <Image
                    src="/unwired-charger.jpeg" // Replace with your placeholder image URL
                    alt="Enhanced Safety"
                    width={400}
                    height={300}
                    className="rounded-lg mb-4"
                  />
                </div>
              </div>
              <div className="feature-card rounded-2xl p-8 fade-up delay-500">
                <div className="icon-container rounded-full bg-primary/5 p-4 mb-6 inline-block">
                  <Sparkles className="h-8 w-8 text-primary opacity-80" />
                </div>
                <h3 className="text-xl font-bold mb-3">Seamless Payments</h3>
                <p className="text-zinc-400">
                  Integrated payment options allow you to pay for charging directly through our mobile app, making it
                  convenient and secure.
                </p>
                <div className="py-4">
                  <Image
                    src="/app-mock-1.png" // Replace with your placeholder image URL
                    alt="Seamless payments"
                    width={400}
                    height={300}
                    className="rounded-lg mb-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-6 relative">
          {/* Add section transitions at top and bottom */}

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm fade-up">
                <span className="text-xs font-medium text-primary opacity-90">Process</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter fade-up delay-100">How UnWired Works</h2>
              <p className="max-w-[800px] text-zinc-400 md:text-lg fade-up delay-200">
                Experience the simplicity of wireless EV charging in just a few steps.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="feature-card rounded-2xl p-8 relative slide-in-left delay-300">
                <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary/70 to-primary/60 text-black font-bold text-lg">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3 mt-4">Installation</h3>
                <p className="text-zinc-400">
                  Our team installs the wireless charging pad at your designated parking spot, connecting it to your
                  electrical supply.
                </p>
              </div>
              <div className="feature-card rounded-2xl p-8 relative fade-up delay-400">
                <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary/70 to-primary/60 text-black font-bold text-lg">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 mt-4">Park Your Vehicle</h3>
                <p className="text-zinc-400">
                  Simply park your EV over the charging pad. Our alignment system helps you position perfectly every
                  time.
                </p>
              </div>
              <div className="feature-card rounded-2xl p-8 relative slide-in-right delay-500">
                <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary/70 to-primary/60 text-black font-bold text-lg">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3 mt-4">Charging Begins</h3>
                <p className="text-zinc-400">
                  Charging starts automatically. Monitor progress through our mobile app and receive notifications when
                  complete.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Solutions Section */}
        <section id="solutions" className="w-full py-6 relative">
          {/* Add section transitions at top and bottom */}

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm fade-up">
                <span className="text-xs font-medium text-primary opacity-90">Solutions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter fade-up delay-100">
                Tailored For Every Need
              </h2>
              <p className="max-w-[800px] text-zinc-400 md:text-lg fade-up delay-200">
                Our wireless charging solutions are designed for various environments and use cases.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="feature-card rounded-2xl p-8 fade-up delay-300">
                <Image
                  src="/home-charging-3.jpg" // Replace with your placeholder image URL
                  alt="Home Charging"
                  width={400}
                  height={300}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-3">Home Charging</h3>
                <p className="text-zinc-400 mb-4">
                  Perfect for individual EV owners. Install in your garage or driveway for convenient overnight charging
                  without cables.
                </p>
                <div className="flex items-center text-primary opacity-90 text-sm font-medium">
                  <span>Learn more</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
              <div className="feature-card rounded-2xl p-8 fade-up delay-400">
                <Image
                  src="/public-charging-1.jpg" // Replace with your placeholder image URL
                  alt="Public Charging"
                  width={400}
                  height={300}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-3">Public Charging</h3>
                <p className="text-zinc-400 mb-4">
                Enhance urban infrastructure with accessible wireless charging points. Perfect for business centers, or public garages.
                </p>
                <div className="flex items-center text-primary opacity-90 text-sm font-medium">
                  <span>Learn more</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
              <div className="feature-card rounded-2xl p-8 fade-up delay-500">
                <Image
                  src="/prop-dev-1.jpg" // Replace with your placeholder image URL
                  alt="Property Development"
                  width={400}
                  height={300}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-3">Property Development</h3>
                <p className="text-zinc-400 mb-4">
                  Add premium amenities to residential or commercial properties with elegant wireless charging
                  solutions.
                </p>
                <div className="flex items-center text-primary opacity-90 text-sm font-medium">
                  <span>Learn more</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Demo Section */}
        <section className="w-full py-10 md:py-16 relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div className="space-y-6 fade-up">
                  <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
                    <span className="text-xs font-medium text-primary opacity-90">
                      Technology
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                    Advanced Induction{" "}
                    <span className="gradient-text">Technology</span>
                  </h2>
                  <p className="text-zinc-400 text-lg">
                    Our proprietary induction system transfers power efficiently
                    and safely, with built-in alignment assistance to ensure
                    optimal charging every time.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <svg
                          className="h-4 w-4 text-primary opacity-80"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-zinc-300">Up to 24kW charging power</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <svg
                          className="h-4 w-4 text-primary opacity-80"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-zinc-300">90%+ transfer efficiency</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <svg
                          className="h-4 w-4 text-primary opacity-80"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-zinc-300">Smart power management system</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <AnimatedButton onClick={trackVideoClick}>
                      Watch Demo <ChevronRight className="h-4 w-4 ml-1" />
                    </AnimatedButton>
                  </div>
                  
                </div>
                <div className="relative fade-in delay-300" >
                  <div className="absolute -inset-px bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
                  <div className="relative rounded-2xl overflow-hidden border border-zinc-800/50 shadow-2xl">
                    {/* Embed YouTube Video */}
                    <iframe
                      width="100%"
                      height="315"
                      src={process.env.NEXT_PUBLIC_DEMO_URL}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-2xl"
                      onClick={trackVideoClick}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal for YouTube Video */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl">
              <button
                className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
                onClick={closeModal}
              >
                ✕
              </button>
              <iframe
                width="100%"
                height="500"
                src={unwiredDemoUrl}
                title="UnWired Wireless EV Charging Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        )}

        <SectionDivider />

        {/* Final CTA Section */}
        <section className="w-full py-10 md:py-16 relative overflow-hidden">
          {/* Add section transition at the top */}

          {/* Update the background overlay to be more subtle */}
          <div className="absolute inset-0 bg-zinc-900/30 z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/30 z-0"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="feature-card rounded-3xl p-8 md:p-12 backdrop-blur-lg fade-up">
                <div className="flex flex-col items-center justify-center space-y-6 text-center">
                  <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 pulse">
                    <Sparkles className="h-6 w-6 text-primary opacity-80" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tighter gradient-text">
                    Be Among the First to Experience Effortless Charging
                  </h2>
                  <p className="max-w-[600px] text-zinc-400 md:text-lg">
                    Join our waitlist to get priority access when we launch and help shape the future of EV charging.
                  </p>
                  <div className="w-full max-w-md mt-6">
                    <WaitlistForm fullForm={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      
      {/* <footer className="w-full border-t border-zinc-800/50 backdrop-blur-lg bg-background/50 py-12 relative z-10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5"> */}
            {/* Company Information */}
            {/* <div className="space-y-4 lg:col-span-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UnWired%21%20-%201%20-%20Edited-ZcLKut7EQ7nzj3Th1CctmZvDjZ2mno.png"
                alt="UnWired Logo"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
              <p className="text-sm text-zinc-400">
                UnWired is revolutionizing electric vehicle charging with our innovative wireless solutions. We're
                committed to creating a sustainable future through cutting-edge technology that makes EV ownership more
                convenient and accessible for everyone.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1.41 16.09c-.35-.22-.6-.63-.6-1.09 0-.47.26-.88.6-1.09.33-.2.74-.2 1.07 0 .35.21.6.62.6 1.09 0 .46-.25.87-.6 1.09-.33.2-.74.2-1.07 0zm4.75-2.29l-1.48.89c-.28.17-.47.46-.47.79v.79c0 .5-.4.91-.9.91H9.5c-.49 0-.9-.41-.9-.91v-.79c0-.33-.19-.62-.47-.79l-1.48-.89c-.43-.26-.69-.74-.69-1.23V11c0-.49.27-.97.69-1.23l1.48-.89c.28-.17.47-.46.47-.79V7.3c0-.5.4-.91.9-.91h2.34c.49 0 .9.41.9.91v.79c0 .33.19.62.47.79l1.48.89c.43.26.69.74.69 1.23v1.57c0 .49-.26.97-.69 1.23z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1.41 16.09c-.35-.22-.6-.63-.6-1.09 0-.47.26-.88.6-1.09.33-.2.74-.2 1.07 0 .35.21.6.62.6 1.09 0 .46-.25.87-.6 1.09-.33.2-.74.2-1.07 0zm4.75-2.29l-1.48.89c-.28.17-.47.46-.47.79v.79c0 .5-.4.91-.9.91H9.5c-.49 0-.9-.41-.9-.91v-.79c0-.33-.19-.62-.47-.79l-1.48-.89c-.43-.26-.69-.74-.69-1.23V11c0-.49.27-.97.69-1.23l1.48-.89c.28-.17.47-.46.47-.79V7.3c0-.5.4-.91.9-.91h2.34c.49 0 .9.41.9.91v.79c0 .33.19.62.47.79l1.48.89c.43.26.69.74.69 1.23v1.57c0 .49-.26.97-.69 1.23z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div> */}

            {/* Product Column */}
            {/* <div className="space-y-4">
              <h3 className="text-sm font-medium text-white">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#features" className="text-sm text-zinc-400 hover:text-primary transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-sm text-zinc-400 hover:text-primary transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-sm text-zinc-400 hover:text-primary transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-sm text-zinc-400 hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div> */}

            {/* Company Column */}
            {/* <div className="space-y-4">
              <h3 className="text-sm font-medium text-white">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-sm text-zinc-400 hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="text-sm text-zinc-400 hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#careers" className="text-sm text-zinc-400 hover:text-primary transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm text-zinc-400 hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div> */}

            {/* Legal Column */}
            {/* <div className="space-y-4">
              <h3 className="text-sm font-medium text-white">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#privacy" className="text-sm text-zinc-400 hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#terms" className="text-sm text-zinc-400 hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#cookies" className="text-sm text-zinc-400 hover:text-primary transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}

          {/* Copyright Section */}
          {/* <div className="mt-12 pt-8 border-t border-zinc-800/50 text-center md:text-left">
            <p className="text-sm text-zinc-500">© {new Date().getFullYear()} UnWired. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
