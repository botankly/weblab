import { useState, type FormEvent } from "react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = (data: ContactFormData): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Ad soyad zorunludur.";
    } else if (data.name.trim().length < 2) {
      newErrors.name = "Ad soyad en az 2 karakter olmalıdır.";
    }

    if (!data.email.trim()) {
      newErrors.email = "E-posta zorunludur.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Geçerli bir e-posta adresi giriniz.";
    }

    if (!data.subject.trim()) {
      newErrors.subject = "Konu zorunludur.";
    }

    if (!data.message.trim()) {
      newErrors.message = "Mesaj zorunludur.";
    } else if (data.message.trim().length < 10) {
      newErrors.message = "Mesaj en az 10 karakter olmalıdır.";
    }

    return newErrors;
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validate(formData);
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Simüle edilmiş API çağrısı
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form verisi:", formData);
      setSubmitSuccess(true);
      setFormData(initialFormData);
    } catch {
      alert("Gönderim başarısız. Tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
          ✓
        </div>
        <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-2">Başarıyla Gönderildi!</h3>
        <p className="text-green-700 dark:text-green-400 mb-6">Mesajınız tarafımıza ulaştı. En kısa sürede dönüş yapacağız.</p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="text-green-600 dark:text-green-400 font-semibold hover:underline"
        >
          Yeni mesaj gönder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Ad Soyad</label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Adınız Soyadınız"
          className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${
            errors.name ? "border-red-500 focus:ring-red-200" : "border-gray-200 dark:border-gray-600 focus:ring-blue-100 focus:border-blue-500"
          } bg-gray-50 dark:bg-gray-900 dark:text-white`}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">E-posta</label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="ornek@mail.com"
          className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${
            errors.email ? "border-red-500 focus:ring-red-200" : "border-gray-200 dark:border-gray-600 focus:ring-blue-100 focus:border-blue-500"
          } bg-gray-50 dark:bg-gray-900 dark:text-white`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Konu</label>
        <select
          id="subject"
          value={formData.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${
            errors.subject ? "border-red-500 focus:ring-red-200" : "border-gray-200 dark:border-gray-600 focus:ring-blue-100 focus:border-blue-500"
          } bg-gray-50 dark:bg-gray-900 dark:text-white`}
        >
          <option value="">Konu seçiniz...</option>
          <option value="genel">Genel Sorular</option>
          <option value="is">İş Birliği</option>
          <option value="destek">Teknik Destek</option>
        </select>
        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Mesajınız</label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Mesajınızı buraya yazınız..."
          className={`w-full px-4 py-3 rounded-xl border outline-none transition-all resize-none ${
            errors.message ? "border-red-500 focus:ring-red-200" : "border-gray-200 dark:border-gray-600 focus:ring-blue-100 focus:border-blue-500"
          } bg-gray-50 dark:bg-gray-900 dark:text-white`}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 dark:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-[0.98]"
      >
        {isSubmitting ? "Gönderiliyor..." : "Mesajı Gönder"}
      </button>
    </form>
  );
}
