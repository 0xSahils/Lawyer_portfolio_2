"use client"

import Image from "next/image"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Law chamber of Advocate Rajesh Mishra in Delhi", caption: "The Law Chamber" },
  { src: "/images/gallery-2.jpg", alt: "Free legal aid camp conducted by Advocate Mishra", caption: "Legal Aid Camp" },
  { src: "/images/gallery-3.jpg", alt: "Delhi District Court complex", caption: "Delhi District Courts" },
  { src: "/images/gallery-4.jpg", alt: "Advocate Mishra arguing in courtroom", caption: "In the Courtroom" },
  { src: "/images/gallery-5.jpg", alt: "Law seminar and legal education event", caption: "Legal Seminar" },
  { src: "/images/gallery-6.jpg", alt: "Advocates discussing case at Delhi High Court", caption: "At Delhi High Court" },
]

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prevImage = () =>
    setLightboxIndex((i) => (i !== null ? (i === 0 ? galleryImages.length - 1 : i - 1) : null))
  const nextImage = () =>
    setLightboxIndex((i) => (i !== null ? (i === galleryImages.length - 1 ? 0 : i + 1) : null))

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Visual Journey
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Photo Gallery
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {galleryImages.map((img, index) => (
            <button
              key={img.src}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border"
              aria-label={`View ${img.caption}`}
            >
              <Image
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-colors duration-300 flex items-center justify-center">
                <span className="font-serif text-sm font-bold text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.caption}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground hover:text-primary transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground hover:text-primary transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="relative h-[70vh] w-[90vw] max-w-4xl">
            <Image
              src={galleryImages[lightboxIndex].src || "/placeholder.svg"}
              alt={galleryImages[lightboxIndex].alt}
              fill
              className="object-contain"
            />
            <p className="absolute -bottom-10 left-0 right-0 text-center font-serif text-foreground">
              {galleryImages[lightboxIndex].caption}
            </p>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground hover:text-primary transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  )
}
