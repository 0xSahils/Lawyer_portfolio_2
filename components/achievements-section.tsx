import { Trophy, Medal, Award, Star, BookOpen, Newspaper } from "lucide-react"

const achievements = [
  {
    icon: <Trophy className="h-6 w-6" />,
    year: "2023",
    title: "Best Advocate Award",
    org: "Delhi Bar Association",
    description:
      "Recognised as the Best Advocate for outstanding contributions to legal practice and the justice delivery system in Delhi.",
  },
  {
    icon: <Medal className="h-6 w-6" />,
    year: "2021",
    title: "Legal Luminary Award",
    org: "Indian Law Society",
    description:
      "Honoured with the Legal Luminary Award for exceptional service in pro bono litigation and community legal awareness.",
  },
  {
    icon: <Award className="h-6 w-6" />,
    year: "2019",
    title: "Distinguished Service Medal",
    org: "Government of NCT Delhi",
    description:
      "Awarded by the Lt. Governor of Delhi for distinguished service as Additional Public Prosecutor over eight years.",
  },
  {
    icon: <Star className="h-6 w-6" />,
    year: "2017",
    title: "PIL Champion",
    org: "Supreme Court Bar Association",
    description:
      "Commended for successfully arguing landmark PILs in the Supreme Court advancing constitutional rights and public welfare.",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    year: "2015",
    title: "Published Author",
    org: "Indian Law Review Journal",
    description:
      "Published a widely cited research paper on 'Evolving Jurisprudence of Article 21: Right to Life and Personal Liberty'.",
  },
  {
    icon: <Newspaper className="h-6 w-6" />,
    year: "2012",
    title: "Young Achiever in Law",
    org: "National Law Day Committee",
    description:
      "Recognized as Young Achiever in Law for securing acquittals in over 50 wrongful prosecution cases across Delhi.",
  },
]

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Milestones & Recognitions
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Career Achievements
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {achievements.map((item, index) => (
              <div
                key={item.title}
                className="group relative flex gap-6 md:gap-10"
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex shrink-0 items-start">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-border bg-card text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {item.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 rounded-xl border border-border bg-card p-6 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/5 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {item.year}
                    </span>
                    <span className="text-xs text-muted-foreground">{item.org}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
