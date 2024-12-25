export default function TrainingServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">Eğitim Hizmetleri</h1>

      <div className="space-y-12">
        {/* Eğitim Modülü 1 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Kişisel Gelişim Programları</h2>
            <p className="text-gray-600 mb-6">
              Bireysel potansiyelinizi keşfedin ve kariyer hedeflerinize ulaşmak için gerekli 
              becerileri edinin.
            </p>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Program İçeriği:</h3>
              <ul className="space-y-3 text-gray-600 list-disc pl-5">
                <li>Zaman ve Stres Yönetimi</li>
                <li>Kişisel Marka Oluşturma</li>
                <li>Duygusal Zeka Geliştirme</li>
                <li>Kariyer Planlama</li>
                <li>İş-Yaşam Dengesi</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Eğitim Modülü 2 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Profesyonel Beceri Eğitimleri</h2>
            <p className="text-gray-600 mb-6">
              İş hayatında fark yaratacak teknik ve sosyal becerileri kazanın.
            </p>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Program İçeriği:</h3>
              <ul className="space-y-3 text-gray-600 list-disc pl-5">
                <li>Problem Çözme ve Analitik Düşünme</li>
                <li>Proje Yönetimi Temelleri</li>
                <li>Dijital Yetkinlikler</li>
                <li>Müzakere Teknikleri</li>
                <li>Takım Çalışması</li>
              </ul>
            </div>
          </div>
        </div>

        {/* İletişim CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-8">
            Size özel eğitim programı için bizimle iletişime geçin.
          </p>
          <a
            href="/iletisim"
            className="inline-block bg-[#B53017] text-white px-8 py-3 rounded-md hover:bg-[#922513] transition-colors"
          >
            Program Danışmanına Ulaşın
          </a>
        </div>
      </div>
    </div>
  )
} 