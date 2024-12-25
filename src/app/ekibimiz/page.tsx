import Image from 'next/image'

const team = [
  {
    name: 'Erdinç UĞUR',
    title: 'Makine Mühendisi',
    education: 'ODTÜ 1980',
    image: '/team/placeholder.jpg',
    description: `TÜPRAŞ İzmir Rafinerisi'nde 8+ yıl Proje Mühendisliği yaptı. Philip Morris International Şirketi'nde 27 yıl bakım, üretim, proje, mühendislik ve eğitim bölümlerinde yöneticilik yaptı. ABD, İsviçre, Libya ve Mısır'da çalıştı.`,
    languages: 'İyi derecede İngilizce, orta seviyede Fransızca ve İspanyolca'
  },
  {
    name: 'Doğuhan DUMAN',
    title: 'Siyaset Bilimi ve Uluslararası İlişkiler',
    education: 'İtalyan Lisesi (IMI), Yeditepe Üniversitesi',
    image: '/team/placeholder.jpg',
    description: `İş hayatına öğrenciyken İtalyan firmalara mihmandarlık yaparak başladı. Garipoğlu Şirketler Grubu, Desa Deri, Çetin Plastik gibi firmalarda yöneticilik yaptı. Düzce ve Cezayir'de fabrika kurdu.`,
    languages: 'İyi derecede İngilizce ve İtalyanca'
  },
  {
    name: 'Burhan TERLEMEZ',
    title: 'Serbest Muhasebeci Mali Müşavir',
    education: 'İstanbul Üniversitesi, 2006',
    image: '/team/placeholder.jpg',
    description: `Lise yıllarından itibaren ailesine ait mali müşavirlik ofisinde muhasebeci olarak çalıştı. Ailesinden devraldığı mali müşavirlik işine 2018 yılından itibaren İzmir'de devam etmektedir. Tüm sektörlerden işletmelerin, mali müşavirlik işlemlerinin yapılmasının yanında muhasebe ve finans departmanlarının kurulmasını sağlamaktadır.`,
    languages: 'İyi derecede İngilizce'
  },
  {
    name: 'A. Batuhan DUMAN',
    title: 'Art Direktör ve Marka Yöneticisi',
    education: 'Kadir Has Üniversitesi, 2010',
    image: '/team/placeholder.jpg',
    description: `Creatif reklam ajanlarında 10+ yıl Art Direktörlük, Global pazarlama ve Marka yöneticiliği yaptı.`,
    languages: 'İyi derecede İngilizce'
  },
  {
    name: 'Can UĞUR',
    title: 'Endüstri Mühendisi',
    education: 'The University of Nottingham, 2010',
    image: '/team/placeholder.jpg',
    description: `Uzmanlık alanı IT operasyonları ve web geliştirme. .NET, Full Stack teknolojileriyle çalışma deneyimine sahip. Web geliştirme projelerinde yazılım mimarisi, responsive tasarım, UI/UX ve Backend altyapı alanlarında çalıştı. Çeşitli sektörlerden şirketler için ölçeklenebilir ve sürdürülebilir çözümler geliştirdi.`,
    languages: 'İyi derecede İngilizce ve Fransızca'
  },
  {
    name: 'Canberk HIDIROĞLU',
    title: 'Avukat',
    education: 'Dokuz Eylül Üniversitesi Hukuk Fakültesi, 2009',
    image: '/team/placeholder.jpg',
    description: `Bornova Anadolu Lisesi'nde (BAL/2004) lise öğrenimini tamamladı. Dokuz Eylül Üniversitesi'nde Ekonomi Hukuku Yüksek Lisans (2011) programına katıldı. Sanayi ve hizmet sektöründe faaliyet gösteren şirketlere hukuki danışmanlık yapan Hukuk Bürolarında yönetici-sorumlu avukat görevlerini yürüttü. 2017 yılından itibaren Hıdıroğlu Hukuk Bürosunda Kurucu Avukat olarak Şirketler Hukuku, Ticaret Hukuku ve İş Hukuku başta olmak üzere Şirket Danışmanlığı ve Serbest Avukatlık yapmaktadır.`,
    languages: ''
  },
  {
    name: 'Umut SAĞLAM',
    title: 'Avukat & Marka - Patent Vekili - Partner',
    education: 'Anadolu Üniversitesi Hukuk Fakültesi, 2004',
    image: '/team/placeholder.jpg',
    description: `Ankara Barosu'na kayıtlı olarak Avukatlık ve Türk Patent ve Marka Kurumu'na kayıtlı olarak Patent ve Marka Vekilliği yapmaktadır. Ankara Üniversitesi, Fikri ve Sınaî Haklar Araştırma ve Uygulama Merkezi, Fikri ve Sınaî Mülkiyet Hakları, Ulusal ve Uluslararası Uygulamaları; Türkiye Barolar Birliği, Fikri Haklar Hukuku İleri Eğitimi; The World Intellectual Property Organization (WIPO), Union Internationale des Avocats (UIA) gibi çeşitli kurum ve organizasyonlarda, marka & patent danışmanlığı, mentörlük yapmaktadır.`,
    languages: ''
  }
]

export default function Team() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Ekibimiz</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Deneyimli ve uzman kadromuzla işletmenizin başarısı için çalışıyoruz
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {team.map((member) => (
          <div 
            key={member.name}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="aspect-w-16 aspect-h-9 relative">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
              <h3 className="text-lg text-[#B53017] font-semibold mb-1">{member.title}</h3>
              <p className="text-gray-600 mb-4">{member.education}</p>
              
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  {member.description}
                </p>
                
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Yabancı Diller: </span>
                    {member.languages}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 