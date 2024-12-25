import Image from 'next/image'

const values = [
  {
    title: 'Müşteri Odaklılık',
    icon: '/icons/customer.svg',
    description: 'Her müşterimizi benzersiz kabul ediyor, özel çözümler geliştiriyoruz.'
  },
  {
    title: 'Güvenilirlik',
    icon: '/icons/trust.svg',
    description: 'Şeffaf ve güvene dayalı ilişkiler kurarak çalışıyoruz.'
  },
  {
    title: 'Sürekli Gelişim',
    icon: '/icons/growth.svg',
    description: 'Kendimizi ve hizmetlerimizi sürekli geliştirmeyi hedefliyoruz.'
  },
  {
    title: 'Analitik Yaklaşım',
    icon: '/icons/analytics.svg',
    description: 'Mevcut durumu detaylı analiz ederek stratejik çözümler sunuyoruz.'
  }
]

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Hakkımızda</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Kurumsal danışmanlık ve eğitim alanında uzman kadromuzla işletmenizi geleceğe taşıyoruz.
        </p>
      </div>

      {/* Misyon & Vizyon */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 relative mr-4">
              <Image
                src="/icons/mission.svg"
                alt="Misyon"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold">Misyonumuz</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Elan, stratejik iş çözümleri ve yönetim danışmanlığı alanında uzmanlaşmış, sektörde deneyimli profesyonellerden oluşan bir kurumsal danışmanlık şirketidir. Misyonumuz, müşterilerimizin sürdürülebilir büyüme sağlamaları, rekabet avantajı elde etmeleri ve iş süreçlerini optimize etmeleri için yenilikçi ve uygulanabilir çözümler sunmaktır.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 relative mr-4">
              <Image
                src="/icons/vision.svg"
                alt="Vizyon"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold">Vizyonumuz</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Danışmanlık hizmetleri alanında küresel ölçekte güvenilen ve tercih edilen bir iş ortağı olarak, her sektörde fark yaratan sonuçlara ulaşmaktır. Elan, farklı sektörlerden gelen işletmelere yönetim, strateji, operasyonel verimlilik, insan kaynakları, dijital dönüşüm ve kurumsal yapılandırma gibi alanlarda danışmanlık hizmeti sunarak, iş dünyasında etkili ve sürdürülebilir sonuçlar elde etmelerini sağlar.
          </p>
        </div>
      </div>

      {/* Değerlerimiz */}
      <div className="bg-gray-50 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-center mb-12">Değerlerimiz</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {values.map((value) => (
            <div 
              key={value.title}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 relative mx-auto mb-4">
                <Image
                  src={value.icon}
                  alt={value.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
        
        {/* Değerlerimiz Açıklama */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <p className="text-gray-600 leading-relaxed mb-6">
            Müşteri odaklılık, güvenilirlik, şeffaflık ve sürekli gelişim ilkeleri üzerine inşa edilmiştir. Her müşterimizi benzersiz kabul ediyor, onların ihtiyaçlarına özel çözümler geliştiriyoruz. Danışmanlık sürecimiz, işletmelerin mevcut durumlarını analiz etmekle başlar, daha sonra stratejik öneriler ve yol haritaları sunarak uzun vadeli başarıya ulaşmalarını hedefleriz.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Bizimle çalışarak, işletmenizin potansiyelini en üst düzeye çıkarır, kurumsal süreçlerinizi optimize eder ve değişen iş dünyasına hızlı ve etkili bir şekilde uyum sağlarsınız.
          </p>
        </div>
      </div>
    </div>
  )
} 