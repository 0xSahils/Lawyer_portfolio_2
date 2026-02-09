import Image from "next/image"
import { GraduationCap, MapPin, Briefcase, CheckCircle2 } from "lucide-react"

const credentials = [
  "B.A. LL.B., Faculty of Law, University of Delhi",
  "LL.M. in Constitutional Law, National Law University",
  "Enrolled with Bar Council of Delhi (D/1234/1999)",
  "Member, Supreme Court Bar Association",
  "Former Additional Public Prosecutor, Govt. of NCT Delhi",
]

const highlights = [
  { icon: <Briefcase className="h-5 w-5" />, label: "Practice Since", value: "1999" },
  { icon: <MapPin className="h-5 w-5" />, label: "Based In", value: "New Delhi" },
  { icon: <GraduationCap className="h-5 w-5" />, label: "Education", value: "Delhi University" },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-cream text-cream-foreground">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
            Know Your Advocate
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-cream-foreground sm:text-4xl lg:text-5xl text-balance">
            About Rajesh Mishra
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image Column */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/about-lawyer.jpg"
                alt="Advocate Rajesh Mishra in his law chamber"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 rounded-xl border border-gold/30 bg-navy p-5 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-gold">25+</p>
                  <p className="text-xs text-gray-400">Years at the Bar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-cream-foreground lg:text-3xl">
              A Legacy of Legal Excellence in the Heart of Delhi
            </h3>
            <p className="mt-5 leading-relaxed text-cream-foreground/70">
              Advocate Rajesh Mishra has been a stalwart of the Delhi legal community since 1999.
              Beginning his illustrious career at the Tis Hazari Court complex, he has risen through
              the ranks to become one of the most sought-after legal practitioners at the Delhi High
              Court and the Supreme Court of India.
            </p>
            <p className="mt-4 leading-relaxed text-cream-foreground/70">
              His deep understanding of Indian law, combined with an unwavering commitment to his
              clients, has earned him a reputation for securing favorable outcomes in complex
              civil, criminal, and constitutional matters. He has served as Additional Public
              Prosecutor for the Government of NCT of Delhi, demonstrating his dedication to both
              justice and public service.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-cream-foreground/15 bg-cream-foreground/5 p-4 text-center"
                >
                  <div className="mx-auto mb-2 text-gold">{item.icon}</div>
                  <p className="text-xs text-cream-foreground/60">{item.label}</p>
                  <p className="mt-1 font-serif font-bold text-cream-foreground">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Credentials */}
            <div className="mt-8 space-y-3">
              {credentials.map((cred) => (
                <div key={cred} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span className="text-sm text-cream-foreground/70">{cred}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
