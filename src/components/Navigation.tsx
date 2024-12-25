'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Hakkımızda', href: '/hakkimizda' },
  { name: 'Ekibimiz', href: '/ekibimiz' },
  {
    name: 'Eğitimlerimiz',
    href: '/egitimlerimiz',
    submenu: [
      { name: 'Eğitimcinin Eğitimi', href: '/egitimlerimiz/egitimcinin-egitimi' },
      { name: 'Finansçı Olmayan Yöneticiler için Finans', href: '/egitimlerimiz/finansci-olmayan-yoneticiler-icin-finans' },
      { name: 'Liderlik', href: '/egitimlerimiz/liderlik' },
      { name: 'Yöneticilik Becerileri', href: '/egitimlerimiz/yoneticilik-becerileri' },
      { name: 'Problem Çözme', href: '/egitimlerimiz/problem-cozme' },
      { name: 'Fuar ve Sergi Yönetimi', href: '/egitimlerimiz/fuar-sergi-yonetimi' },
      { name: 'Yenilik (İnovasyon) Kültürü', href: '/egitimlerimiz/yenilik-inovasyon-kulturu' }
    ]
  },
  {
    name: 'Hizmetlerimiz',
    href: '/hizmetlerimiz',
    submenu: [
      { name: 'Aile Anayasası', href: '/hizmetlerimiz/aile-anayasasi' },
      { name: 'İnovasyon Kültürü', href: '/hizmetlerimiz/inovasyon-kulturu' },
      { name: 'İş Süreçleri Yönetimi', href: '/hizmetlerimiz/is-surecleri-yonetimi' },
      { name: 'Kurumsal Check-Up', href: '/hizmetlerimiz/kurumsal-check-up' }
    ]
  },
  { name: 'İletişim', href: '/iletisim' }
]

export default function Navigation() {
  return (
    <Disclosure as="nav" className="bg-[#B53017]">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <Link href="/" className="text-white text-2xl font-bold">
                  ELON TR
                </Link>
              </div>
              
              {/* Masaüstü Menü */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-4">
                  {navigation.map((item) => (
                    <div key={item.name} className="relative group">
                      <Link 
                        href={item.href}
                        className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {item.name}
                      </Link>
                      
                      {item.submenu && (
                        <div className="absolute z-10 hidden group-hover:block w-72 bg-white rounded-md shadow-lg py-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobil Menü Butonu */}
              <div className="md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200">
                  {open ? (
                    <XIcon className="block h-6 w-6" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobil Menü */}
          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Disclosure.Button
                    as={Link}
                    href={item.href}
                    className="text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.name}
                  </Disclosure.Button>
                  {item.submenu && (
                    <div className="pl-4">
                      {item.submenu.map((subItem) => (
                        <Disclosure.Button
                          key={subItem.name}
                          as={Link}
                          href={subItem.href}
                          className="text-gray-300 block px-3 py-2 rounded-md text-sm"
                        >
                          {subItem.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
} 