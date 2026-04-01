export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Hakkımda</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center">
             <span className="text-gray-400">Profil Fotoğrafı</span>
          </div>
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Merhaba! Ben tutkulu bir frontend geliştiricisiyim. Modern web teknolojileri kullanarak
              kullanıcı dostu, performanslı ve erişilebilir dijital deneyimler oluşturmayı seviyorum.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Özellikle React, TypeScript ve Tailwind CSS ekosisteminde uzmanlaşmaya odaklanıyorum.
              Sürekli öğrenmeye ve yeni teknolojileri keşfetmeye açığım.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
