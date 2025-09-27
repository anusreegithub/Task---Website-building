import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChevronDown, Facebook, Instagram, Twitter } from "lucide-react";

export default function SiteFooter() {
  const socials = [
    { name: "facebook", href: "#", icon: Facebook },
    { name: "twitter", href: "#", icon: Twitter },
    { name: "instagram", href: "#", icon: Instagram },
  ];
  return (
    <footer className="mt-16 ">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
             <Link href="/" className="flex items-center gap-2">
      <img src="/Outline.png" alt="Outline Logo" className="h-6" />
      <img src="/BitNow.png" alt="BitNow Logo" className="h-6" />
    </Link>
            </div>
            <p className="text-sm text-[#e6fcff]/80">
             Lorem Ipsum, jhdjnfnj 
            </p>
            <p className="text-sm text-[#e6fcff]/80 ">Htehiuijnerv</p>
             <div className="flex gap-4 pt-2 mt-10">
      {socials.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          aria-label={name}
          className="rounded-full border border-[#e6fcff]/20 p-2 text-[#e6fcff]/80 hover:bg-[#e6fcff]/10"
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide">Other Pages</h4>
            <ul className="mt-3 space-y-2 text-sm text-[#e6fcff]/80">
              {["Home", "About Us", "Services", "Token Sale", "Contact"].map((l) => (
                <li key={l}>
                  <Link href="#" className="hover:text-[#e6fcff]">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-[#e6fcff]/80">
              {["Privacy Policy", "Terms of Service", "Disclaimer", "Credits", "FAQ"].map((l) => (
                <li key={l}>
                  <Link href="#" className="hover:text-[#e6fcff]">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide">Newsletter</h4>
            <p className="mt-3 text-sm text-[#e6fcff]/80">Subscribe to receive updates and insights.</p>
            <div className="mt-3 flex items-center gap-2 w-full">
              <Input
                placeholder="Your email address"
                className=" bg-white border-[#e6fcff]/20    placeholder:text-gray-200"
              />
            </div>
            <div className="w-full mt-2">
            <p className=" bg-[#5f82ff] p-2 text-center rounded-xl text-[#0b0a0a] hover:bg-[#5f82ff]/90">Subscribe</p>

            </div>

          </div>
        </div>
      </div>

      <div className="border-t border-[#e6fcff]/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-[#e6fcff]/70 md:flex-row">
          <div className="flex items-center gap-2">
            <span>🌐</span>
            <span>Cestina</span>
            <span><ChevronDown className="w-3 h-3"/></span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="hover:text-[#e6fcff]">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#e6fcff]">
              Notice of Collection
            </a>
            <a href="#" className="hover:text-[#e6fcff]">
              Terms
            </a>
            <span>Copyright © 2023 Alusain</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
