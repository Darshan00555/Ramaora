"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const closeMobile = useCallback(() => setIsMobileOpen(false), []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-out",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo */}
            <Link href="/" className="relative group flex items-center gap-2" onClick={closeMobile}>
              <div className="relative">
                <div className={cn(
                  "w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm transition-all duration-300",
                  "bg-foreground text-background",
                  "group-hover:scale-110 group-hover:rotate-[-3deg]",
                  "shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
                )}>
                  R
                </div>
              </div>
              <span className={cn(
                "text-xl font-bold tracking-tight transition-colors duration-300",
                "text-foreground"
              )}>
                Ramaora
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                    "text-muted-foreground hover:text-foreground",
                    "hover:bg-foreground/5",
                    "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-foreground after:rounded-full after:transition-all after:duration-300",
                    "hover:after:w-4"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="mailto:grow@ramaora.in"
                className={cn(
                  "px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300",
                  "bg-foreground text-background",
                  "hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]",
                  "active:scale-95"
                )}
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 hover:bg-foreground/5"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileOpen}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={cn(
                  "block w-full h-[2px] bg-foreground rounded-full transition-all duration-300 origin-center",
                  isMobileOpen && "rotate-45 translate-y-[7px]"
                )} />
                <span className={cn(
                  "block w-full h-[2px] bg-foreground rounded-full transition-all duration-300",
                  isMobileOpen && "opacity-0 scale-x-0"
                )} />
                <span className={cn(
                  "block w-full h-[2px] bg-foreground rounded-full transition-all duration-300 origin-center",
                  isMobileOpen && "-rotate-45 -translate-y-[7px]"
                )} />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[99] md:hidden transition-all duration-500",
          isMobileOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div 
          className={cn(
            "absolute inset-0 bg-background/95 backdrop-blur-xl transition-opacity duration-500",
            isMobileOpen ? "opacity-100" : "opacity-0"
          )} 
          onClick={closeMobile}
          aria-hidden="true"
        />
        
        {/* Menu Content */}
        <div className={cn(
          "relative z-10 flex flex-col items-center justify-center h-full gap-2 px-8 transition-all duration-500",
          isMobileOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className={cn(
                "text-3xl font-bold tracking-tight text-foreground/80 hover:text-foreground transition-all duration-300 py-3",
                "hover:tracking-wide"
              )}
              style={{ transitionDelay: isMobileOpen ? `${i * 60}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
          
          <div className="mt-8 pt-8 border-t border-border/30 w-full max-w-xs">
            <a
              href="mailto:grow@ramaora.in"
              onClick={closeMobile}
              className={cn(
                "flex items-center justify-center w-full px-8 py-4 text-base font-semibold rounded-2xl transition-all duration-300",
                "bg-foreground text-background",
                "hover:scale-105 active:scale-95"
              )}
            >
              Get in Touch
            </a>
            <div className="flex items-center justify-center gap-6 mt-6">
              <a href="https://www.instagram.com/ramaora.ai" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/ramaora-ai/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
