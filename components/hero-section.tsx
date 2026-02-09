import React from "react"
import Image from "next/image"
import { ArrowRight, Award, BookOpen, Users } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-lawyer.jpg"
          alt="Advocate Rajesh Mishra at Delhi High Court"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
            <Scale className="h-3 w-3" />
            Senior Advocate, Delhi High Court
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Trusted Legal
            <br />
            <span className="text-primary">Counsel for Justice</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            With over 25 years of distinguished legal practice across Delhi High Court and the
            Supreme Court of India, Advocate Rajesh Mishra brings unwavering commitment to securing
            justice for every client.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="flex items-center gap-2 rounded-lg border border-border px-6 py-3.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-all bg-transparent"
            >
              View Case Portfolio
            </a>
          </div>

          {/* Quick Stats */}
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            <QuickStat icon={<Award className="h-5 w-5" />} value="25+" label="Years Experience" />
            <QuickStat icon={<Users className="h-5 w-5" />} value="5000+" label="Cases Handled" />
            <QuickStat icon={<BookOpen className="h-5 w-5" />} value="98%" label="Success Rate" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="h-8 w-px bg-primary/50 animate-pulse" />
      </div>
    </section>
  )
}

function Scale({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18" />
      <path d="M5 6l7-3 7 3" />
      <path d="M2 12l3-6 3 6a5.12 5.12 0 0 1-6 0Z" />
      <path d="M16 12l3-6 3 6a5.12 5.12 0 0 1-6 0Z" />
    </svg>
  )
}

function QuickStat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode
  value: string
  label: string
}) {
  return (
    <div className="flex flex-col items-start gap-1">
      <div className="text-primary mb-1">{icon}</div>
      <span className="font-serif text-2xl font-bold text-foreground">{value}</span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  )
}
