"use client";
import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext<any>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  useEffect(() => {
    const savedLang = localStorage.getItem('site_lang') as 'ar' | 'en';
    if (savedLang) setLang(savedLang);
  }, []);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    const nextLang = lang === 'ar' ? 'en' : 'ar';
    setLang(nextLang);
    localStorage.setItem('site_lang', nextLang);
  };

  const translations = {
    ar: {
      home: "الرئيسية",
      categories: "التصنيفات",
      services: "الخدمات",
      video: "فيديو",
      brands: "العلامات التجارية",
      aboutUs: "من نحن",
      contactUs: "اتصل بنا",
      signIn: "تسجيل الدخول",
      searchPlaceholder: "ابحث عن دواء...",
      trustedPharmacy: "صيدليتك الموثوقة عبر الإنترنت",
      option1: "خيار 1",
      option2: "خيار 2",
      option3: "خيار 3",
      //banner
      yourTrusted: "صيدليتك",
    onlinePharmacy: "الموثوقة عبر الإنترنت",
heroDescription: "أدوية آمنة، توصيل سريع، وإرشاد مهني في مكان واحد. نحن صيدلية إلكترونية معتمدة ملتزمة بجعل الرعاية الصحية بسيطة وآمنة وميسورة التكلفة.",
    shopMedicines: "تسوق الأدوية",
    uploadPrescription: "رفع الوصفة الطبية",
    supplements: "المكملات",
    medicines: "الأدوية",
    beautyProducts: "منتجات التجميل",
    oralCare: "العناية بالفم",

//footer
    footerDesc: "صيدليتك الإلكترونية الموثوقة للأدوية الآمنة، التوصيل السريع، والإرشاد المهني.",
    shop: "تسوق",
    allCategories: "جميع التصنيفات",
    medicines: "الأدوية",
    personalCare: "العناية الشخصية",
    helpSupport: "المساعدة والدعم",
    contactUs: "اتصل بنا",
    faqs: "الأسئلة الشائعة",
    shippingDelivery: "الشحن والتوصيل",
    returnsRefunds: "سياسة الاسترجاع",
    trackOrder: "تتبع طلبك",
    prescriptionGuide: "دليل الوصفات الطبية",
    aboutUs: "من نحن",
    aboutPharmaCare: "عن فارما كير",
    ourMission: "مهمتنا",
    careers: "الوظائف",
    blog: "المدونة",
    privacyPolicy: "سياسة الخصوصية",
    termsConditions: "الشروط والأحكام",
    stayUpdated: "ابق على اطلاع",
    newsletterDesc: "اشترك للحصول على عروض حصرية وتحديثات.",
    emailPlaceholder: "أدخل بريدك الإلكتروني",
    genuineProducts: "منتجات أصلية 100%",
    fastDelivery: "توصيل سريع وآمن",
    expertSupport: "دعم فني متخصص",
    securePayments: "دفع آمن",
    copyright: "© 2026 فارما كير. جميع الحقوق محفوظة.",
    tagline: "صحتك، أولويتنا."
    },
    en: {
      home: "Home",
      categories: "Categories",
      services: "Services",
      video: "Video",
      brands: "Brands",
      aboutUs: "About Us",
      contactUs: "Contact Us",
      signIn: "Sign In",
      searchPlaceholder: "Search medicine...",
      trustedPharmacy: "Trusted Online Pharmacy",
      option1: "Option 1",
      option2: "Option 2",
      option3: "Option 3",
      //panner
      yourTrusted: "Your Trusted",
    onlinePharmacy: "Online Pharmacy",
heroDescription: "Safe medicines, fast delivery, and professional guidance all in one place. We are a certified online pharmacy committed to making healthcare simple, secure, and affordable.",
    shopMedicines: "Shop Medicines",
    uploadPrescription: "Upload Prescription",
    supplements: "Supplements",
    medicines: "Medicines",
    beautyProducts: "Beauty Products",
    oralCare: "Oral Care",
    //footer
    yourTrusted: "Your Trusted",
    onlinePharmacy: "Online Pharmacy",
    heroDescription: "Safe medicines, fast delivery, and professional guidance all in one place. We are a certified online pharmacy committed to making healthcare simple, secure, and affordable.",
    shopMedicines: "Shop Medicines",
    uploadPrescription: "Upload Prescription",
    supplements: "Supplements",
    diabetes: "Diabetes",
    beautyProducts: "Beauty Products",
    oralCare: "Oral Care",
    footerDesc: "Your trusted online pharmacy for safe medicines, fast delivery, and professional guidance.",
    shop: "Shop",
    allCategories: "All Categories",
    medicines: "Medicines",
    personalCare: "Personal Care",
    helpSupport: "Help & Support",
    contactUs: "Contact Us",
    faqs: "FAQs",
    shippingDelivery: "Shipping & Delivery",
    returnsRefunds: "Returns & Refunds",
    trackOrder: "Track Your Order",
    prescriptionGuide: "Prescription Guide",
    aboutUs: "About Us",
    aboutPharmaCare: "About PharmaCare",
    ourMission: "Our Mission",
    careers: "Careers",
    blog: "Blog",
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms & Conditions",
    stayUpdated: "Stay Updated",
    newsletterDesc: "Subscribe to get exclusive offers and updates.",
    emailPlaceholder: "Enter your email",
    genuineProducts: "100% Genuine Products",
    fastDelivery: "Fast & Safe Delivery",
    expertSupport: "Expert Support",
    securePayments: "Secure Payments",
    copyright: "© 2026 PharmaCare. All rights reserved.",
    tagline: "Your health, our priority."
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);