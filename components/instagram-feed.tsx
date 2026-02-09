import Image from "next/image"
import { ExternalLink, Heart, MessageCircle } from "lucide-react"

const instaPosts = [
  { src: "/images/gallery-1.jpg", likes: 234, comments: 18 },
  { src: "/images/gallery-4.jpg", likes: 189, comments: 12 },
  { src: "/images/blog-1.jpg", likes: 312, comments: 27 },
  { src: "/images/gallery-5.jpg", likes: 156, comments: 9 },
  { src: "/images/community.jpg", likes: 278, comments: 31 },
  { src: "/images/gallery-2.jpg", likes: 201, comments: 15 },
]

export default function InstagramFeed() {
  return (
    <section className="py-24 lg:py-32 bg-cream text-cream-foreground">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Social Updates
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-cream-foreground sm:text-4xl">
              Follow on Instagram
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-gold" />
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors bg-transparent"
          >
            <InstagramIcon className="h-4 w-4" />
            @adv.rajeshmishra
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {instaPosts.map((post, index) => (
            <a
              key={`insta-${index}`}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl border border-border"
            >
              <Image
                src={post.src || "/placeholder.svg"}
                alt={`Instagram post ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/70 transition-colors duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                <span className="flex items-center gap-1 text-sm text-foreground">
                  <Heart className="h-4 w-4 fill-primary text-primary" />
                  {post.likes}
                </span>
                <span className="flex items-center gap-1 text-sm text-foreground">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  {post.comments}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}
