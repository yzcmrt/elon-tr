'use client'
import Link from 'next/link'
import Image from 'next/image'

type ServiceProps = {
  title: string
  icon: string
  href: string
}

export default function ServiceWidget({ title, icon, href }: ServiceProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform hover:scale-105">
      <div className="w-24 h-24 relative mb-4">
        <Image
          src={icon}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{title}</h3>
      <Link 
        href={href}
        className="bg-[#B53017] text-white px-6 py-2 rounded-md hover:bg-[#922513] transition-colors"
      >
        İncele
      </Link>
    </div>
  )
} 