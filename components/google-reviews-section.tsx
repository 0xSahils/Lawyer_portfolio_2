"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

/**
 * Google Reviews Section
 *
 * EFFICIENT SETUP: Add your real Google reviews below. Copy name, rating, date, and text
 * from your Google Business Profile. Update GOOGLE_PLACE_URL with your profile link.
 */

// ⬇️ Replace with your actual Google Business Profile URL (e.g. from maps.google.com)
const GOOGLE_PLACE_URL =
  "https://www.google.com/maps/place/Your+Law+Firm+Name/@lat,lng"

const googleReviews = [
  {
    name: "Sunita Sharma",
    rating: 5,
    date: "2 weeks ago",
    text: "Advocate Mishra ji fought our family's property case with absolute dedication. When everyone said it was impossible, he never gave up. Truly the best lawyer in Delhi.",
  },
  {
    name: "Amit Verma",
    rating: 5,
    date: "1 month ago",
    text: "My son was falsely accused in a serious criminal matter. Mishra sahab took the case and secured a full acquittal within six months. Our family owes everything to him.",
  },
  {
    name: "Priya Kapoor",
    rating: 5,
    date: "3 weeks ago",
    text: "Going through a divorce was the hardest thing I've faced. Advocate Mishra handled my case with sensitivity and ensured I got fair custody. His empathy sets him apart.",
  },
]

export default function GoogleReviewsSection() {
  const [current, setCurrent] = useState(0)
  const r = googleReviews[current]

  const prev = () =>
    setCurrent((c) => (c === 0 ? googleReviews.length - 1 : c - 1))
  const next = () =>
    setCurrent((c) => (c === googleReviews.length - 1 ? 0 : c + 1))

  return (
    <section className="py-24 lg:py-32 bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span className="text-sm font-medium text-gray-200">
              Google Reviews
            </span>
          </div>
          <h2 className="mt-4 font-serif text-3xl font-bold text-cream sm:text-4xl lg:text-5xl text-balance">
            What People Say on Google
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
        </div>

        {/* Review Card */}
        <div className="mx-auto max-w-3xl">
          <div className="relative rounded-2xl border border-white/10 bg-navy-light p-8 lg:p-12">
            {/* Stars */}
            <div className="mb-4 flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < r.rating ? "fill-gold text-gold" : "text-white/20"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-400">{r.date}</span>
            </div>

            {/* Review Text */}
            <blockquote className="font-serif text-lg leading-relaxed text-gray-200 italic lg:text-xl">
              &ldquo;{r.text}&rdquo;
            </blockquote>

            {/* Reviewer */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold font-semibold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-100">{r.name}</p>
                  <p className="text-sm text-gray-400">Google Review</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-gray-400 transition-colors hover:border-gold hover:text-gold"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-gray-400 transition-colors hover:border-gold hover:text-gold"
                  aria-label="Next review"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Dots */}
            <div className="mt-6 flex justify-center gap-2">
              {googleReviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-6 bg-gold" : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CTA: See all reviews / Leave a review */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={GOOGLE_PLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gold bg-gold px-6 py-3 font-medium text-navy transition-colors hover:bg-gold/90"
            >
              See All Google Reviews
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href={`${GOOGLE_PLACE_URL}/reviews`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-medium text-cream transition-colors hover:border-gold hover:text-gold"
            >
              Leave a Review
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
