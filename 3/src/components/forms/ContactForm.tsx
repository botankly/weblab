import { useState, type FormEvent } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Alert from "../ui/Alert";

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
  // Form state
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // --- Dogrulama (Validation) ---
  function validate(data: ContactFormData): FormErrors {
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
  }

  // --- Tek alan guncelleme ---
  function handleChange(field: keyof ContactFormData, value: string) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Hata mesajini temizle
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  }

  // --- Form gonderme ---
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Dogrula
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Simule edilmis API cagirisi
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form verisi:", formData);
      setSubmitSuccess(true);
      setFormData(initialFormData);
    } catch {
      alert("Gonderim basarisiz. Tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <p className="text-green-800 font-medium">Mesajiniz basariyla gonderildi!</p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="mt-4 text-sm text-green-600 underline"
        >
          Yeni mesaj gonder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg" noValidate>
      {/* Ad Soyad */}
      <Input
        id="name"
        label="Ad Soyad"
        value={formData.name}
        onChange={(e) => handleChange("name", e.target.value)}
        error={errors.name}
        placeholder="Adiniz Soyadiniz"
      />

      {/* E-posta */}
      <Input
        id="email"
        type="email"
        label="E-posta"
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
        error={errors.email}
        placeholder="ornek@mail.com"
      />

      {/* Konu */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Konu
        </label>
        <select
          id="subject"
          value={formData.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          className={`w-full border rounded-lg px-3 py-2 ${
            errors.subject ? "border-red-500" : "border-gray-300"
          } bg-gray-50 dark:bg-gray-900 dark:text-white`}
        >
          <option value="">Konu seciniz...</option>
          <option value="genel">Genel</option>
          <option value="destek">Teknik Destek</option>
          <option value="oneri">Oneri</option>
          <option value="isbirligi">Is Birligi</option>
        </select>
        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
      </div>

      {/* Mesaj */}
      <Input
        id="message"
        label="Mesaj"
        multiline
        value={formData.message}
        onChange={(e) => handleChange("message", e.target.value)}
        error={errors.message}
        placeholder="Mesajinizi yaziniz..."
      />

      {/* Gonder butonu */}
      <Button type="submit" disabled={isSubmitting} fullWidth>
        {isSubmitting ? "Gonderiliyor..." : "Gonder"}
      </Button>
    </form>
  );
}
