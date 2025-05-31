"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import WaitlistForm from "@/components/waitlist-form";
import AnimatedButton from "@/components/animated-button";

export default function Header() {
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
    interface MenuClickEvent extends React.MouseEvent<HTMLAnchorElement> {}
    interface HandleMenuClickParams {
        e: MenuClickEvent;
        menuId: string;
    }

    // const handleMenuClick = ({ e, menuId }: HandleMenuClickParams): void => {
    //     e.preventDefault();
    //     const target = document.querySelector(`#${menuId}`);
    //     if (target) {
    //         const headerHeight = document.querySelector("header")?.offsetHeight || 0;
    //         const targetPosition = (target as HTMLElement).offsetTop - headerHeight;
    //         window.scrollTo({
    //             top: targetPosition,
    //             behavior: "smooth",
    //         });
    //     }
    // };}
function handleMenuClick({ e, menuId }: { e: React.MouseEvent<HTMLAnchorElement, MouseEvent>; menuId: string; }) {
    e.preventDefault();
    const target = document.querySelector(`#${menuId}`);
    if (target) {
        const headerHeight = document.querySelector("header")?.offsetHeight || 0;
        const targetPosition = (target as HTMLElement).offsetTop - headerHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        });
    }
}
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/50 border-b border-zinc-800/50">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center glow-effect">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UnWired%21%20-%201%20-%20Edited-ZcLKut7EQ7nzj3Th1CctmZvDjZ2mno.png"
              alt="UnWired Logo"
              width={180}
              height={60}
              className="h-10 w-auto transition-transform duration-300 hover:scale-105"
              priority
            />
          </Link>
        </div>
        <nav className="hidden md:flex gap-8">
          <Link
            href="#features"
            className="text-sm font-medium text-zinc-400 hover:text-white nav-link"
            onClick={(e) => {
                handleMenuClick({ e, menuId: "features" });
            }}
            >
            Features
          </Link>
          <Link 
            href="/#how-it-works" 
            onClick={(e) => {
                handleMenuClick({ e, menuId: "how-it-works" });
            }}
            className="text-sm font-medium text-zinc-400 hover:text-white nav-link">
            How It Works
          </Link>
          <Link 
            href="/#solutions" 
            onClick={(e) => {
                handleMenuClick({ e, menuId: "solutions" });
            }}
            className="text-sm font-medium text-zinc-400 hover:text-white nav-link">
            Solutions
          </Link>
          <Link 
            href="/#about" 
            onClick={(e) => {
                handleMenuClick({ e, menuId: "about" });
            }}
            className="text-sm font-medium text-zinc-400 hover:text-white nav-link">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <WaitlistForm triggerClassName="inline-flex">
            <AnimatedButton onClick={trackJoinWaitlistClick}>
              Join Waitlist <ChevronRight className="h-4 w-4" />
            </AnimatedButton>
          </WaitlistForm>
        </div>
      </div>
    </header>
  );
}