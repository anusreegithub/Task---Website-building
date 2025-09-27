"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useEffect, useState } from "react";



export default function FAQ() {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://mocki.io/v1/94cb45d3-da0b-4d55-b874-0afbf87f3fd3")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setFaqs(data);
      })
      .catch((err) => {
        console.error("Failed to fetch FAQs:", err);
        setError(err.message);
      });
  }, []);
  return (
    <section className="mx-auto max-w-7xl px-4 pt-12 bg-[#E4E4E42E] rounded-4xl">
      <div className=" md:p-10">
        <h3 className="text-center text-2xl font-extrabold md:text-3xl">Most Trusted Cryptocurrency Platform</h3>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-[#e6fcff]/80">
          Nec faucibus ut mauris iaculis tristique dolor aliquam. Euismod arcu arcu aliquet laoreet blandit. Nam velit
          euismod egestas in. Sed purus.
        </p>

        <div className="mt-8 bg-[#5E767F] p-3 rounded-2xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((q, i) => (
              <AccordionItem
                key={q.question}
                value={`item-${i}`}
                className="text-black px-4"
              >
                <AccordionTrigger className="py-4 text-left text-sm hover:no-underline">
                  {q.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#252525]">
                  {q.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

        </div>
      </div>
    </section>
  )
}
