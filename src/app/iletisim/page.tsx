'use client'
import { useState } from 'react'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'

export default function Contact() {
  const [status, setStatus] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.target as HTMLFormElement
    const formElements = form.elements as any

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "7010f089-3101-49a9-98b2-6632cdd1e17a",
          name: formElements.name.value,
          email: formElements.email.value,
          phone: formElements.phone.value,
          message: formElements.message.value,
        }),
      })

      const result = await response.json()
      console.log(result)

      if (result.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">İletişim</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* İletişim Bilgileri */}
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-8">İletişim Bilgileri</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <HiOutlineMail className="text-[#B53017] text-xl mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">E-posta</h3>
                  <a href="mailto:info@elan-tr.com" className="text-gray-600 hover:text-[#B53017]">
                    info@elan-tr.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <HiOutlinePhone className="text-[#B53017] text-xl mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Telefon</h3>
                  <a href="tel:+905326356446" className="text-gray-600 hover:text-[#B53017]">
                    +90 532 635 64 46
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <HiOutlineLocationMarker className="text-[#B53017] text-xl mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Adres</h3>
                  <p className="text-gray-600">
                    Alsancak Mahallesi, Talatpaşa Bulvarı 45/13<br />
                    Konak / İzmir
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.2662877245866!2d27.14107667656433!3d38.43531777182653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd85bf3309bb3%3A0x9f6b719404b4f6c6!2sAlsancak%2C%20Talatpa%C5%9Fa%20Blv%20No%3A45%2C%2035220%20Konak%2F%C4%B0zmir!5e0!3m2!1str!2str!4v1735159112686!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* İletişim Formu */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Bize Ulaşın</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Ad Soyad
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#B53017] focus:border-[#B53017] text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-posta
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#B53017] focus:border-[#B53017] text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#B53017] focus:border-[#B53017] text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mesajınız
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#B53017] focus:border-[#B53017] text-gray-900"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-[#B53017] text-white py-3 px-6 rounded-md hover:bg-[#922513] transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Gönderiliyor...' : 'Gönder'}
            </button>

            {status === 'success' && (
              <p className="text-green-600 text-center">Mesajınız başarıyla gönderildi!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center">Bir hata oluştu. Lütfen tekrar deneyin.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
} 