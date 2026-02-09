"use client"

import { useState } from "react"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sunita Sharma",
    role: "Property Dispute Client",
    location: "South Delhi",
    rating: 5,
    text: "Advocate Mishra ji fought our family's property case for over a decade with absolute dedication. When everyone said it was impossible, he never gave up. The day we got the verdict, our entire family was in tears of joy. He is not just a lawyer, he is a guardian of justice.",
  },
  {
    name: "Amit Verma",
    role: "Criminal Defence Client",
    location: "Noida, UP",
    rating: 5,
    text: "My son was falsely accused in a serious criminal matter. We were devastated. Mishra sahab took the case and his courtroom skills were extraordinary. He secured a full acquittal within six months. Our family owes everything to him. Truly the best criminal lawyer in Delhi.",
  },
  {
    name: "Priya Kapoor",
    role: "Divorce & Custody Client",
    location: "Dwarka, Delhi",
    rating: 5,
    text: "Going through a divorce is the hardest thing I have ever faced. Advocate Mishra handled my case with such sensitivity and professionalism. He ensured I got fair maintenance and custody of my children. His empathy sets him apart from every other lawyer I consulted.",
  },
  {
    name: "Rajendra Singh",
    role: "Business Litigation Client",
    location: "Connaught Place, Delhi",
    rating: 5,
    text: "Our company was locked in a Rs. 15 crore contract dispute. Mishra ji's deep understanding of commercial law and his strategic approach in the High Court resulted in a complete victory. He saved our business. Highly recommended for corporate matters.",
  },
  {
    name: "Meena Devi",
    role: "Consumer Protection Client",
    location: "East Delhi",
    rating: 5,
    text: "A builder cheated us of our life savings. Advocate Mishra filed our case in the consumer forum and fought relentlessly. We got full compensation plus damages. He charges fairly and treats every client with the same respect, rich or poor.",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]

  return (
    <section className="py-24 lg:py-32 bg-cream text-cream-foreground">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
            Client Voices
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-cream-foreground sm:text-4xl lg:text-5xl text-balance">
            What Clients Say
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
        </div>

        {/* Testimonial Card */}
        <div className="mx-auto max-w-3xl">
          <div className="relative rounded-2xl border border-navy/20 bg-navy p-8 lg:p-12">
            {/* Quote Icon */}
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
              <Quote className="h-6 w-6 text-gold" />
            </div>

            {/* Stars */}
            <div className="mb-4 flex gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star
                  key={`star-${current}-${i}`}
                  className="h-4 w-4 fill-gold text-gold"
                />
              ))}
            </div>

            {/* Quote Text */}
            <blockquote className="font-serif text-lg leading-relaxed text-gray-200 italic lg:text-xl">
              &ldquo;{t.text}&rdquo;
            </blockquote>

            {/* Client Info */}
            <div className="mt-8 flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-100">{t.name}</p>
                <p className="text-sm text-gray-400">
                  {t.role} &middot; {t.location}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:border-gold hover:text-gold transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:border-gold hover:text-gold transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Dots */}
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={`dot-${i}`}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-6 bg-gold" : "w-2 bg-gray-600 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
