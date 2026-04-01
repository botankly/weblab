import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Benimle İletişime Geçin</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Yeni projeler, iş birlikleri veya sadece merhaba demek için bana mesaj gönderebilirsiniz. 
              En kısa sürede size geri döneceğim.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center">
                  📧
                </div>
                <div>
                   <p className="text-sm text-gray-500">E-posta</p>
                   <p className="font-semibold text-gray-900 dark:text-white">iletisim@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center">
                  📍
                </div>
                <div>
                   <p className="text-sm text-gray-500">Konum</p>
                   <p className="font-semibold text-gray-900 dark:text-white">İstanbul, Türkiye</p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
