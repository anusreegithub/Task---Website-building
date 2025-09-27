import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Trusted from "@/components/trusted"
import TestimonialsRow from "@/components/testimonials-row"
import FAQ from "@/components/faq"
import SiteFooter from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-[#091c23] text-[#fafafa]">
      <div className="min-h-screen bg-cover bg-center bg-no-repeat"
  style={{
    background: `
      linear-gradient(180deg, #091D22 0%, rgba(9, 29, 34, 0) 49.49%, #091D22 100%),
      linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      url('/bitcoin-abstract 2.png')
    `,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }}>
        <Navbar />
      <Hero />
      </div>
     <section className="relative py-2 overflow-hidden">

  <div
    className="absolute -left-50 -top-40 h-full w-2/3 opacity-10 bg-no-repeat bg-left bg-contain pointer-events-none"
    style={{
      backgroundImage: `url('/section-img.png')`,
    }}
    aria-hidden="true"
  />

  <div className="relative z-10">
    <Trusted />
    <TestimonialsRow />
  </div>

</section>


  <section className="relative py-2 overflow-hidden">

  <div
    className="absolute right-2 h-full w-2/3 opacity-10 bg-no-repeat bg-right bg-contain pointer-events-none"
    style={{
      backgroundImage: `url('/section-img.png')`,
    }}
    aria-hidden="true"
  />

  <div className="relative z-10">
         <FAQ />

  </div>

</section>

  <section className="relative py-2 overflow-hidden">

  <div
    className="absolute left-2 h-full w-2/3 opacity-10 bg-no-repeat bg-left bg-contain pointer-events-none"
    style={{
      backgroundImage: `url('/section-img.png')`,
    }}
    aria-hidden="true"
  />

  <div className="relative z-10">
              <SiteFooter />


  </div>

</section>

    </main>
  )
}
