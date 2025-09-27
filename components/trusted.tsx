"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function Trusted() {
  return (
    <section className="relative mx-auto mt-15 max-w-6xl px-4 py-16">
      <div
        className="pointer-events-none absolute opac top-0 h-full w-2/3 bg-left bg-contain bg-no-repeat opacity-90"
        aria-hidden="true"
      />

      <div className="relative z-10 text-center">
        <h2 className="text-2xl font-extrabold tracking-wide md:text-3xl">
          Most Trusted Cryptocurrency Platform
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#e6fcff]/80">
          Nec faucibus ut mauris iaculis tristique dolor aliquam. Euismod arcu arcu aliquet laoreet blandit. Nam
          velit euismod egestas in. Sed purus.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card
            key={i}
            className="group relative overflow-hidden border-none bg-[#0b0a0a]/30 backdrop-blur p-0"
          >
            {/* Image */}
            <img
              src="/Service Section.png"
              alt="Phone showing crypto trading charts"
              className="h-full w-full object-cover"
            />

            {/* Overlay Text */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "100%" }}
              whileHover={{ y: "-2rem" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-sm p-3 text-center"
            >
              <p>Secure, fast, and trusted by millions worldwide.</p>
            </motion.div>
          </Card>
        ))}
      </div>
    </section>
  );
}
