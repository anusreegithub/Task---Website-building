import { Button } from "@/components/ui/button"

const BG_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/figma_1.png-ojJhPGYi5eokntL5A7K9TcC0MgP8C2.jpeg" // provided Source URL

export default function Hero() {
  return (
      <section
  id="hero"
  aria-labelledby="hero-title"
  className="mx-auto max-w-4xl px-4 min-h-[80vh] flex items-end py-20 md:py-28"
>
  <div className="w-full">
    <h1
      id="hero-title"
      className="text-white text-4xl md:text-5xl font-semibold tracking-tight"
    >
    Ultrices ut etiam vulputate ante congue jokichn na <span>Lorem Ipsum</span>
    </h1>
    
    <div className="mt-8 flex items-center gap-5">
  <Button asChild className="bg-[#5F82FF] text-white hover:bg-[#4a6fd9]">
    <a href="#about">Learn More</a>
  </Button>

  <a href="#faq" className="text-white font-semibold inline-flex items-center h-10">
    Watch Video
  </a>
</div>

  </div>
</section>

  )
}
