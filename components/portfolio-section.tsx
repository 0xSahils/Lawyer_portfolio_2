"use client"

import { useState } from "react"
import { CheckCircle2, ArrowRight, Tag } from "lucide-react"

const categories = ["All", "Civil", "Criminal", "Property", "Family", "Constitutional"]

const cases = [
  {
    title: "Landmark Property Restitution",
    category: "Property",
    court: "Delhi High Court",
    year: "2023",
    outcome: "Won",
    description:
      "Successfully represented a family in a multi-crore property dispute in South Delhi, securing full restitution after a 12-year legal battle against encroachment by a builder.",
  },
  {
    title: "Murder Acquittal Defence",
    category: "Criminal",
    court: "Sessions Court, Tis Hazari",
    year: "2022",
    outcome: "Acquitted",
    description:
      "Secured acquittal for a wrongfully accused individual in a high-profile murder case by presenting compelling forensic evidence and witness testimony.",
  },
  {
    title: "Constitutional Writ for Education Rights",
    category: "Constitutional",
    court: "Supreme Court of India",
    year: "2021",
    outcome: "Won",
    description:
      "Filed a successful PIL under Article 32 challenging the denial of admission to underprivileged students under the Right to Education Act in Delhi schools.",
  },
  {
    title: "Matrimonial Settlement & Custody",
    category: "Family",
    court: "Family Court, Dwarka",
    year: "2023",
    outcome: "Settled",
    description:
      "Negotiated a comprehensive divorce settlement including favorable child custody arrangements and fair maintenance under the Hindu Marriage Act.",
  },
  {
    title: "Commercial Contract Enforcement",
    category: "Civil",
    court: "Delhi High Court",
    year: "2024",
    outcome: "Won",
    description:
      "Enforced a Rs. 15 crore commercial contract through specific performance decree for an SME client against a defaulting multinational corporation.",
  },
  {
    title: "Bail in NDPS Case",
    category: "Criminal",
    court: "Delhi High Court",
    year: "2024",
    outcome: "Bail Granted",
    description:
      "Secured regular bail for a first-time offender in an NDPS Act case by establishing procedural lapses in the investigation by the NCB.",
  },
]

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered =
    activeCategory === "All" ? cases : cases.filter((c) => c.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Case Studies
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Notable Case Portfolio
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>

        {/* Category Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cases Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <div
              key={c.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <Tag className="h-3 w-3" />
                  {c.category}
                </span>
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
                    c.outcome === "Won" || c.outcome === "Acquitted"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : c.outcome === "Settled"
                        ? "bg-blue-500/10 text-blue-400"
                        : "bg-primary/10 text-primary"
                  }`}
                >
                  <CheckCircle2 className="h-3 w-3" />
                  {c.outcome}
                </span>
              </div>

              <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {c.title}
              </h3>

              <p className="mt-1 text-xs text-muted-foreground">
                {c.court} | {c.year}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {c.description}
              </p>

              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Read More <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
