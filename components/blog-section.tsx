import Image from "next/image"
import { Calendar, ArrowRight, Clock } from "lucide-react"

const posts = [
  {
    image: "/images/blog-1.jpg",
    category: "Constitutional Law",
    title: "Understanding Your Fundamental Rights Under the Indian Constitution",
    excerpt:
      "A comprehensive guide to Articles 14-32 of the Indian Constitution and how citizens can enforce their fundamental rights through writ petitions in the High Court and Supreme Court.",
    date: "15 Jan 2025",
    readTime: "8 min read",
  },
  {
    image: "/images/blog-2.jpg",
    category: "Property Law",
    title: "New RERA Guidelines 2025: What Every Property Buyer in Delhi Must Know",
    excerpt:
      "The Real Estate Regulatory Authority has introduced significant amendments. Here is what homebuyers in Delhi-NCR need to understand about their enhanced rights and protections.",
    date: "8 Jan 2025",
    readTime: "6 min read",
  },
  {
    image: "/images/blog-3.jpg",
    category: "Family Law",
    title: "Divorce by Mutual Consent: Process, Timeline & Legal Requirements in India",
    excerpt:
      "An informative breakdown of the mutual consent divorce procedure under Hindu Marriage Act and Special Marriage Act, including cooling period, documentation, and court hearings.",
    date: "28 Dec 2024",
    readTime: "10 min read",
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Legal Insights
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Latest from the Blog
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
          </div>
          <a
            href="#blog"
            className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View All Articles <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                  Read Article <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
