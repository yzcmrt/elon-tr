import Slider from '@/components/Slider'
import ServiceWidget from '@/components/ServiceWidget'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: 'Aile Anayasası',
    icon: '/icons/constitution.svg',
    href: '/hizmetlerimiz/aile-anayasasi'
  },
  {
    title: 'İnovasyon Kültürü',
    icon: '/icons/innovation.svg',
    href: '/hizmetlerimiz/inovasyon-kulturu'
  },
  {
    title: 'İş Süreçleri Yönetimi',
    icon: '/icons/process.svg',
    href: '/hizmetlerimiz/is-surecleri-yonetimi'
  },
  {
    title: 'Kurumsal Check-Up',
    icon: '/icons/checkup.svg',
    href: '/hizmetlerimiz/kurumsal-check-up'
  }
]

const trainings = [
  {
    title: 'Eğitimcinin Eğitimi',
    icon: '/icons/trainer.svg',
    href: '/egitimlerimiz/egitimcinin-egitimi'
  },
  {
    title: 'Finansçı Olmayan Yöneticiler için Finans',
    icon: '/icons/finance.svg',
    href: '/egitimlerimiz/finansci-olmayan-yoneticiler-icin-finans'
  },
  {
    title: 'Liderlik',
    icon: '/icons/leadership.svg',
    href: '/egitimlerimiz/liderlik'
  },
  {
    title: 'Yöneticilik Becerileri',
    icon: '/icons/management.svg',
    href: '/egitimlerimiz/yoneticilik-becerileri'
  },
  {
    title: 'Problem Çözme',
    icon: '/icons/problem-solving.svg',
    href: '/egitimlerimiz/problem-cozme'
  },
  {
    title: 'Fuar ve Sergi Yönetimi',
    icon: '/icons/exhibition.svg',
    href: '/egitimlerimiz/fuar-sergi-yonetimi'
  },
  {
    title: 'Yenilik (İnovasyon) Kültürü',
    icon: '/icons/innovation-culture.svg',
    href: '/egitimlerimiz/yenilik-inovasyon-kulturu'
  }
]

export default function Home() {
  return (
    <>
      <Slider />
      
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Eğitimlerimiz</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {trainings.map((training, index) => (
            <div 
              key={training.title} 
              className={`flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col items-center gap-8 bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className="w-full lg:w-1/3">
                <div className="relative w-32 h-32 mx-auto">
                  <Image
                    src={training.icon}
                    alt={training.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="w-full lg:w-2/3 text-center lg:text-left">
                <h3 className="text-2xl font-semibold mb-4">{training.title}</h3>
                <p className="text-gray-600 mb-6">Detaylı bilgi için tıklayınız</p>
                <Link 
                  href={training.href}
                  className="inline-block bg-[#B53017] text-white px-8 py-3 rounded-md hover:bg-[#922513] transition-colors"
                >
                  İncele
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto bg-gray-50 mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Hizmetlerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceWidget
              key={service.title}
              title={service.title}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>
      </section>
    </>
  )
}
