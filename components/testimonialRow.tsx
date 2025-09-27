"use client"

import { useEffect, useRef } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Props = {
  speed?: number
}

const people = [
  { name: "Alex Carter", avatar: "/testimonial-1.jpg" },
  { name: "Jamie Lee", avatar: "/testimonial-2.jpg" },
  { name: "Taylor Ray", avatar: "/testimonial-3.jpg" },
  { name: "Morgan Diaz", avatar: "/testimonial-4.jpg" },
  { name: "Chris Stone", avatar: "/testimonial-5.jpg" },
]

export default function TestimonialsRow({ speed = 120 }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    const track = trackRef.current
    if (!container || !track) return

    let x = 0
    let direction = -1
    let last = performance.now()
    let minX = 0
    let rafId = 0

    const computeBounds = () => {
      const containerWidth = container.clientWidth
      const trackWidth = track.scrollWidth
      minX = Math.min(0, containerWidth - trackWidth)
      if (x < minX) x = minX
      if (x > 0) x = 0
      track.style.transform = `translateX(${x}px)`
    }

    computeBounds()
    const ro = new ResizeObserver(() => computeBounds())
    ro.observe(container)
    ro.observe(track)

    track.style.willChange = "transform"

    const step = (now: number) => {
      const dt = (now - last) / 1000
      last = now

      x += direction * speed * dt

      if (x <= minX) {
        x = minX
        direction = 1
      } else if (x >= 0) {
        x = 0
        direction = -1
      }

      track.style.transform = `translateX(${x}px)`
      rafId = requestAnimationFrame(step)
    }

    rafId = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
    }
  }, [speed])

  return (
    <section className="relative mx-auto max-w-6xl px-4 pb-14">


      <div
        ref={containerRef}
        className="overflow-hidden"
        aria-label="Testimonials carousel"
        role="region"
      >
        <div ref={trackRef} className="flex gap-6 py-2" role="list" aria-live="off">
          {people.map((p) => (
            <article
              key={p.name}
              role="listitem"
              className="relative min-w-[280px] max-w-sm shrink-0 rounded-3xl bg-[#0b0a0a]/30 p-6"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl [background:radial-gradient(200px_200px_at_80%_20%,#1f5464/15,transparent_60%),radial-gradient(180px_180px_at_0%_100%,#5f82ff/8,transparent_60%)]" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <img
                  src={p.avatar}
                  className="w-[148px] h-[148px] rounded-[50%]"
                  alt={`${p.name} avatar`}
                />

                <p className="mt-3 text-sm font-semibold">{p.name}</p>
                <p className="text-xs text-[#e6fcff]/70">Lorem ipsum dolor</p>

              </div>

              <div className="relative z-10 mt-6 space-y-2">
                <p className="text-sm font-semibold">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <p className="text-xs leading-6 text-[#e6fcff]/80">
                  Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim
                  sagittis malesuada consectetur. Suspendisse lectus in nulla
                  consectetur elementum.
                </p>


              </div>
              <img
                src="/Ellipse 47.png"
                alt="Decorative"
                className="absolute bottom-0 left-0 w-24 h-24 object-contain pointer-events-none"
              />

            </article>

          ))}
        </div>
      </div>
    </section >

  )
}


