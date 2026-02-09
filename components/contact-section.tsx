"use client"

import React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", phone: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Get in Touch
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Book a Consultation
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                Chamber Address
              </h3>
              <div className="space-y-5">
                <ContactItem
                  icon={<MapPin className="h-5 w-5" />}
                  title="Office"
                  text="Chamber No. 312, Block-C, Lawyers' Chambers, Tis Hazari Courts, Delhi - 110054"
                />
                <ContactItem
                  icon={<Phone className="h-5 w-5" />}
                  title="Phone"
                  text="+91 99999 99999"
                  href="tel:+919999999999"
                />
                <ContactItem
                  icon={<Mail className="h-5 w-5" />}
                  title="Email"
                  text="adv.rajeshmishra@email.com"
                  href="mailto:adv.rajeshmishra@email.com"
                />
                <ContactItem
                  icon={<Clock className="h-5 w-5" />}
                  title="Working Hours"
                  text="Mon - Sat: 9:00 AM - 7:00 PM"
                />
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl border border-border overflow-hidden aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.5398!2d77.2186!3d28.6802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd00d8b5b5f5%3A0x5f2a0b0c0e5d0b0c!2sTis%20Hazari%20Courts%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location of Advocate Rajesh Mishra's chamber at Tis Hazari Courts, Delhi"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-border bg-card p-6 lg:p-8 space-y-5"
            >
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Describe your legal matter briefly and we will get back to you within 24 hours.
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
                    Phone Number <span className="text-primary">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-foreground">
                  Subject <span className="text-primary">*</span>
                </label>
                <select
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="">Select type of legal matter</option>
                  <option value="civil">Civil Litigation</option>
                  <option value="criminal">Criminal Defence</option>
                  <option value="property">Property Dispute</option>
                  <option value="family">Family / Matrimonial</option>
                  <option value="corporate">Corporate / Commercial</option>
                  <option value="consumer">Consumer Protection</option>
                  <option value="constitutional">Constitutional / Writ</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  placeholder="Briefly describe your legal matter..."
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                {submitted ? (
                  "Message Sent Successfully!"
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({
  icon,
  title,
  text,
  href,
}: {
  icon: React.ReactNode
  title: string
  text: string
  href?: string
}) {
  const content = (
    <div className="flex gap-4 group">
      <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <p className="text-xs text-muted-foreground">{title}</p>
        <p className={`mt-0.5 text-sm font-medium text-foreground ${href ? "group-hover:text-primary transition-colors" : ""}`}>
          {text}
        </p>
      </div>
    </div>
  )
  if (href) return <a href={href}>{content}</a>
  return content
}
