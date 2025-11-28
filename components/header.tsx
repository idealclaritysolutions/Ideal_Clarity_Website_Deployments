"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [open, setOpen] = useState(false)

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
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-8 pl-6">
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
                  <Button asChild size="lg" className="rounded-full mt-4">
                    <Link href="https://calendly.com/idealclaritysolutions/30min" target="_blank">
                      Book Free Session
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
