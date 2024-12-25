export default function TrainingsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">Eğitimlerimiz</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Eğitim Kartı 1 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Kurumsal Eğitimler</h2>
            <p className="text-gray-600 mb-6">
              Şirketinizin ihtiyaçlarına özel tasarlanmış eğitim programları ile çalışanlarınızın 
              performansını artırın.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li>• Liderlik ve Yönetim Eğitimleri</li>
              <li>• İletişim Becerileri</li>
              <li>• Proje Yönetimi</li>
              <li>• Satış ve Pazarlama Teknikleri</li>
            </ul>
          </div>
        </div>

        {/* Eğitim Kartı 2 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Kişisel Gelişim Eğitimleri</h2>
            <p className="text-gray-600 mb-6">
              Bireysel ve profesyonel gelişiminiz için tasarlanmış özel eğitim programları.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li>• Zaman Yönetimi</li>
              <li>• Stres Yönetimi</li>
              <li>• Problem Çözme Teknikleri</li>
              <li>• Etkili Sunum Teknikleri</li>
            </ul>
          </div>
        </div>
      </div>

      {/* İletişim CTA */}
      <div className="mt-16 text-center">
        <p className="text-xl text-gray-600 mb-8">
          Eğitim programlarımız hakkında detaylı bilgi almak için bizimle iletişime geçin.
        </p>
        <a
          href="/iletisim"
          className="inline-block bg-[#B53017] text-white px-8 py-3 rounded-md hover:bg-[#922513] transition-colors"
        >
          İletişime Geç
        </a>
      </div>
    </div>
  )
}
