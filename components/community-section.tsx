import Image from "next/image"
import { Heart, Users, BookOpen, HandHeart } from "lucide-react"

const contributions = [
  {
    icon: <HandHeart className="h-6 w-6" />,
    title: "Free Legal Aid Camps",
    description:
      "Organised over 100 free legal aid camps across Delhi-NCR, providing legal guidance to underprivileged communities in areas like Jehangirpuri, Bawana, and Sangam Vihar.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Women's Rights Advocacy",
    description:
      "Actively mentors and represents women in domestic violence and dowry cases pro bono. Partnered with Delhi Commission for Women on awareness drives.",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Legal Literacy Programme",
    description:
      "Founded a legal literacy initiative in government schools across Delhi, educating students about their fundamental rights and the Indian judicial system.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Senior Citizen Legal Support",
    description:
      "Provides free legal consultation to senior citizens through the Delhi Legal Services Authority, assisting with maintenance claims and property protection.",
  },
]

export default function CommunitySection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Giving Back
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
              Community & Societal Contributions
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Advocate Mishra firmly believes that the true purpose of law is to serve the people.
              Beyond his professional practice, he dedicates significant time and resources to
              community welfare, legal awareness, and social justice initiatives across Delhi.
            </p>

            <div className="mt-8 space-y-6">
              {contributions.map((item) => (
                <div key={item.title} className="flex gap-4 group">
                  <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/community.jpg"
              alt="Advocate Rajesh Mishra at a community legal awareness camp in Delhi"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-serif text-lg font-bold text-foreground">
                &ldquo;Justice delayed is justice denied. Every citizen deserves access to the law, regardless of their means.&rdquo;
              </p>
              <p className="mt-2 text-sm text-primary">- Adv. Rajesh Mishra</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
