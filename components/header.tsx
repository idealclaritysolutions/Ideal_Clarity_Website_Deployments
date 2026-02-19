"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Ideal Clarity"
              width={280}
              height={80}
              className="h-14 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Home
            </Link>
            <Link
              href="/work-with-me"
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Work With Me
            </Link>
            <Link href="/#about" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              About
            </Link>
            <Link
              href="/#how-it-works"
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              How It Works
            </Link>
            <Link href="/blog" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              The Clarity Guide
            </Link>
            <Link href="/contact" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Contact
            </Link>
            <Button asChild size="lg" className="rounded-full">
              <Link href="https://calendly.com/idealclaritysolutions/30min" target="_blank">
                Book Free Session
              </Link>
            </Button>
          </nav>

          <div className="flex md:hidden items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(!open)}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {open && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setOpen(false)} />

          {/* Slide-in menu */}
          <div className="fixed right-0 top-0 bottom-0 w-[300px] sm:w-[400px] bg-white border-l z-50 md:hidden animate-in slide-in-from-right duration-300 shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b bg-white">
              <span className="font-semibold text-lg text-gray-900">Menu</span>
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>

            <nav className="flex flex-col gap-6 mt-8 pl-6 bg-white h-full">
              <Link
                href="/"
                className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/work-with-me"
                className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setOpen(false)}
              >
                Work With Me
              </Link>
              <Link
                href="/#about"
                className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#how-it-works"
                className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/blog"
                className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setOpen(false)}
              >
                The Clarity Guide
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
              <Button asChild size="lg" className="rounded-full mt-4 mr-6">
                <Link href="https://calendly.com/idealclaritysolutions/30min" target="_blank">
                  Book Free Session
                </Link>
              </Button>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
