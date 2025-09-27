"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 ">
  <nav className="flex max-w-6xl mx-auto px-4 py-3 items-center justify-between">
    
    <Link href="/" className="flex items-center gap-2">
      <img src="/Outline.png" alt="Outline Logo" className="h-6" />
      <img src="/BitNow.png" alt="BitNow Logo" className="h-6" />
    </Link>
    
    <div className="flex items-center gap-8">
      <ul className="hidden md:flex items-center gap-15 text-sm">
        {["Home", "About Us", "Services", "Page", "News", "Contact Us"].map((item) => (
          <li key={item}>
            <Link href="#" className="transition-colors hover:text-blue-500">
              {item}
            </Link>
          </li>
        ))}
      </ul>
      
      <Button className="rounded-lg  bg-[#5f82ff] px-8 py-2 text-white hover:bg-[#5f82ff]/90" asChild>
        <Link href="#">Get Started</Link>
      </Button>
    </div>
    
  </nav>
</header>

  )
}
