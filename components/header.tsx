"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/programs", label: "Programs" },
  { href: "/blog", label: "The Clarity Guide" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset"
    return () => { document.body.style.overflow = "unset" }
  }, [open])

  const mobileMenu = (
    <>
      {/* Full-page backdrop — rendered at body level */}
      <div
        className="fixed inset-0 bg-black/50 z-[9998]"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer — solid white, full height, rendered at body level */}
      <div className="fixed top-0 right-0 bottom-0 w-[300px] sm:w-[360px] bg-white z-[9999] flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <span className="font-bold text-xl text-gray-900">Menu</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(false)}
            className="text-gray-900 hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>

        <nav className="flex flex-col gap-1 mt-4 px-4 flex-1 overflow-y-auto">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-base font-semibold text-gray-900 hover:text-primary transition-colors py-3 px-3 rounded-lg hover:bg-gray-50"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-gray-200">
          <Button asChild size="lg" className="rounded-full w-full font-bold">
            <Link
              href="https://calendly.com/idealclaritysolutions/30min"
              target="_blank"
              onClick={() => setOpen(false)}
            >
              Book Free Session
            </Link>
          </Button>
        </div>
      </div>
    </>
  )

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white border-b border-border">
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
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {label}
                </Link>
              ))}
              <Button asChild size="lg" className="rounded-full">
                <Link href="https://calendly.com/idealclaritysolutions/30min" target="_blank">
                  Book Free Session
                </Link>
              </Button>
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-900"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Portal renders the drawer OUTSIDE the header, directly on body */}
      {mounted && open && createPortal(mobileMenu, document.body)}
    </>
  )
}
