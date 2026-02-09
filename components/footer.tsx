import { Scale, Phone, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Practice Areas", href: "#practice" },
  { label: "Case Portfolio", href: "#portfolio" },
  { label: "Achievements", href: "#achievements" },
  { label: "Blog", href: "#blog" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
]

const practiceLinks = [
  "Civil Litigation",
  "Criminal Defence",
  "Property Law",
  "Family Law",
  "Corporate Law",
  "Consumer Protection",
  "Constitutional Law",
  "Arbitration",
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/30">
                <Scale className="h-5 w-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-foreground">
                  Adv. Rajesh Mishra
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Advocate & Legal Counsel
                </span>
              </div>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Senior practicing advocate at the Delhi High Court and Supreme Court of India with
              over 25 years of experience in civil, criminal, and constitutional law.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">Practice Areas</h4>
            <ul className="space-y-2.5">
              {practiceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#practice"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">Contact</h4>
            <div className="space-y-4">
              <a href="tel:+919999999999" className="flex items-start gap-3 group">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  +91 99999 99999
                </span>
              </a>
              <a href="mailto:adv.rajeshmishra@email.com" className="flex items-start gap-3 group">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  adv.rajeshmishra@email.com
                </span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Chamber No. 312, Lawyers&apos; Chambers, Tis Hazari Courts, Delhi - 110054
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Advocate Rajesh Mishra. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Disclaimer: This website is meant for informational purposes only and does not constitute
            legal advertising or solicitation.
          </p>
        </div>
      </div>
    </footer>
  )
}
