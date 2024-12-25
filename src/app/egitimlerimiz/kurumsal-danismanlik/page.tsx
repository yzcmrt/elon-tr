export default function CorporateTrainingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">Kurumsal Danışmanlık Eğitimleri</h1>

      <div className="space-y-12">
        {/* Eğitim Modülü 1 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Liderlik ve Yönetim Eğitimleri</h2>
            <p className="text-gray-600 mb-6">
              Modern iş dünyasının gerektirdiği liderlik becerilerini geliştirin. Ekip yönetimi, 
              stratejik düşünme ve karar alma süreçlerinde uzmanlaşın.
            </p>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Program İçeriği:</h3>
              <ul className="space-y-3 text-gray-600 list-disc pl-5">
                <li>Liderlik Stilleri ve Etkileri</li>
                <li>Ekip Motivasyonu ve Performans Yönetimi</li>
                <li>Stratejik Planlama ve Karar Verme</li>
                <li>Değişim Yönetimi</li>
                <li>Kriz Yönetimi</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Eğitim Modülü 2 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">İletişim ve Sunum Becerileri</h2>
            <p className="text-gray-600 mb-6">
              Etkili iletişim tekniklerini öğrenin, ikna edici sunumlar yapın ve profesyonel 
              ilişkilerinizi güçlendirin.
            </p>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Program İçeriği:</h3>
              <ul className="space-y-3 text-gray-600 list-disc pl-5">
                <li>Etkili İletişim Teknikleri</li>
                <li>Beden Dili ve Ses Kullanımı</li>
                <li>Sunum Hazırlama ve Sunma</li>
                <li>İkna Teknikleri</li>
                <li>Topluluk Önünde Konuşma</li>
              </ul>
            </div>
          </div>
        </div>

        {/* İletişim CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-8">
            Kurumsal eğitim programlarımız hakkında detaylı bilgi almak ve özel teklif için bizimle iletişime geçin.
          </p>
          <a
            href="/iletisim"
            className="inline-block bg-[#B53017] text-white px-8 py-3 rounded-md hover:bg-[#922513] transition-colors"
          >
            Teklif Alın
          </a>
        </div>
      </div>
    </div>
  )
} 