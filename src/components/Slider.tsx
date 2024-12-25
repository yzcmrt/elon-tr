'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const slides = [
  {
    url: '/slider/slide1.jpg',
    title: 'Kurumsal Danışmanlık',
    description: 'İşletmenizi bir adım öteye taşıyoruz'
  },
  {
    url: '/slider/slide2.jpg',
    title: 'Profesyonel Eğitimler',
    description: 'Uzman kadromuzla yanınızdayız'
  },
  {
    url: '/slider/slide3.jpg',
    title: 'İş Süreçleri Yönetimi',
    description: 'Süreçlerinizi optimize ediyoruz'
  }
]

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-screen h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.url}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl md:text-2xl">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
} 