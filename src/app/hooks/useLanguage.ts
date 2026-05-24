import { useState, useEffect } from 'react';

// النصوص باللغتين
const translations = {
  ar: {
    dir: 'rtl' as const,
    loginTab: 'تسجيل الدخول',
    signupTab: 'إنشاء حساب',
    title: 'إنشاء حساب جديد',
    subtitle: 'اختر نوع حسابك',
    client: 'عميل',
    admin: 'مدير',
    firstName: 'الاسم الأول',
    lastName: 'الاسم الأخير',
    email: 'البريد الإلكتروني',
    password: 'كلمة المرور',
    confirmPassword: 'تأكيد كلمة المرور',
    pwdHint: 'ادخل كلمة مرور قوية',
    submitBtn: 'إنشاء الحساب',
    switchLang: 'English'
  },
  en: {
    dir: 'ltr' as const,
    loginTab: 'Login',
    signupTab: 'Sign Up',
    title: 'Create New Account',
    subtitle: 'Choose your account type',
    client: 'Client',
    admin: 'Admin',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email Address',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    pwdHint: 'Enter a strong password',
    submitBtn: 'Create Account',
    switchLang: 'العربية'
  }
};

export function useLanguage() {
  // بنبدأ بـ 'ar' كافتراضي، وبنتأكد إن الكود شغال في المتصفح الأول
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  // أول ما الـ Component يشتغل، هيروح يشوف هل المستخدم اختار لغة قبل كده في الـ LocalStorage؟
  useEffect(() => {
    const savedLang = localStorage.getItem('site_lang') as 'ar' | 'en';
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    setLang((prev) => {
      const nextLang = prev === 'ar' ? 'en' : 'ar';
      localStorage.setItem('site_lang', nextLang); // حفظ اللغة للموقع كله هنا
      return nextLang;
    });
  };

  const t = translations[lang];

  return { lang, toggleLanguage, t };
}