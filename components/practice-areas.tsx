"use client"

import {
  Scale,
  Shield,
  Home,
  Users,
  Building2,
  FileText,
  Landmark,
  Gavel,
} from "lucide-react"
import { useState } from "react"

const practices = [
  {
    icon: <Scale className="h-7 w-7" />,
    title: "Civil Litigation",
    description:
      "Comprehensive representation in civil suits including property disputes, recovery suits, injunctions, and declaratory actions before District Courts and Delhi High Court.",
  },
  {
    icon: <Shield className="h-7 w-7" />,
    title: "Criminal Defence",
    description:
      "Vigorous criminal defence for all offences under the Indian Penal Code, CrPC proceedings, bail applications, appeals, and revision petitions at every judicial level.",
  },
  {
    icon: <Home className="h-7 w-7" />,
    title: "Property & Real Estate",
    description:
      "Expert legal counsel on property title verification, sale deed execution, mutation disputes, tenancy matters, and RERA compliance across Delhi-NCR.",
  },
  {
    icon: <Users className="h-7 w-7" />,
    title: "Family & Matrimonial",
    description:
      "Compassionate handling of divorce proceedings, child custody, maintenance, domestic violence under Protection of Women Act, and Hindu Marriage Act matters.",
  },
  {
    icon: <Building2 className="h-7 w-7" />,
    title: "Corporate & Commercial",
    description:
      "Business formation, partnership disputes, contract enforcement, NCLT proceedings, and corporate advisory services for enterprises across India.",
  },
  {
    icon: <FileText className="h-7 w-7" />,
    title: "Consumer Protection",
    description:
      "Strong consumer advocacy before District, State, and National Consumer Disputes Redressal Commissions under the Consumer Protection Act, 2019.",
  },
  {
    icon: <Landmark className="h-7 w-7" />,
    title: "Constitutional Law",
    description:
      "Writ petitions, PIL filings, and fundamental rights enforcement before the Delhi High Court and Supreme Court of India under Articles 226 and 32.",
  },
  {
    icon: <Gavel className="h-7 w-7" />,
    title: "Arbitration & Mediation",
    description:
      "Efficient dispute resolution through domestic and international arbitration, mediation, and conciliation under the Arbitration & Conciliation Act, 1996.",
  },
]

export default function PracticeAreas() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="practice" className="py-24 lg:py-32 bg-cream text-cream-foreground">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
            Legal Services
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-cream-foreground sm:text-4xl lg:text-5xl text-balance">
            Areas of Practice
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
          <p className="mx-auto mt-5 max-w-2xl text-cream-foreground/60">
            From the corridors of Tis Hazari to the courtrooms of the Supreme Court, Advocate
            Mishra provides expert legal representation across a wide spectrum of practice areas.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {practices.map((practice, index) => (
            <div
              key={practice.title}
              className={`group relative rounded-xl border p-6 transition-all duration-300 cursor-pointer ${
                hoveredIndex === index
                  ? "border-gold bg-navy scale-[1.02] shadow-lg shadow-gold/10"
                  : "border-navy/20 bg-navy hover:border-gold/50"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`mb-4 inline-flex items-center justify-center rounded-lg p-3 transition-colors ${
                  hoveredIndex === index
                    ? "bg-gold text-navy"
                    : "bg-gold/10 text-gold"
                }`}
              >
                {practice.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-100">{practice.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {practice.description}
              </p>
              <div
                className={`mt-4 h-0.5 rounded-full transition-all duration-300 ${
                  hoveredIndex === index ? "w-full bg-gold" : "w-0 bg-gold/50"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
