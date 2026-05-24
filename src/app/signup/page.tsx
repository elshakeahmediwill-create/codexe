'use client';

import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { User, Mail, Lock, UserPlus, Shield, Activity, KeyRound } from 'lucide-react';

export default function SignUpPage() {
  // استدعاء الدالة والبيانات من الـ Hook المتطور اللي بيحفظ في الـ LocalStorage
  const { lang, t, toggleLanguage } = useLanguage();
  
  const [role, setRole] = useState<'user' | 'admin'>('user');
  const [activeTab, setActiveTab] = useState<'signup' | 'login'>('signup');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    adminCode: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. تحديد الرابط بناءً على التبويب (تسجيل أم دخول)
    const endpoint = activeTab === 'signup' ? '/register' : '/login';
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    
    console.log("جاري الاتصال بـ:", `${baseUrl}${endpoint}`);

   try {
      await fetch(`${baseUrl.replace('/api', '')}/sanctum/csrf-cookie`, {
        credentials: "include",
      });

      const response = await fetch(`${baseUrl}${endpoint}`, {
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          password: formData.password,
          password_confirmation: formData.confirmPassword,
          role: role,
          admin_code: formData.adminCode,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('تمت العملية بنجاح:', data);
        alert(lang === 'ar' ? 'تمت العملية بنجاح!' : 'Success!');
      } else {
        console.error('فشل:', data);
        alert(data.message || (lang === 'ar' ? 'حدث خطأ ما' : 'An error occurred'));
      }
    } catch (error) {
      console.error('خطأ في الاتصال:', error);
      alert(lang === 'ar' ? 'تعذر الاتصال بالسيرفر' : 'Unable to connect to server');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden bg-[#f8fafc]" dir={t.dir}>
      
      {/* 1. طبقة الصورة الخلفية المعزولة تماماً */}
      <div 
        className="absolute inset-0 bg-[url('/images/log.png')] bg-cover bg-center bg-no-repeat pointer-events-none z-0 opacity-40"
        style={{ filter: 'blur(6px)' }} 
      />

      {/* الهالة الطبية المضيئة (Medical Glow) ورا الكارت بالظبط */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#00a878]/10 to-teal-400/10 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* 2. زرار تغيير اللغة العائم اللي مربوط بالـ Global Hook مباشرة */}
      <button
        type="button"
        onClick={() => toggleLanguage()} // بينادي الدالة اللي بتغير في الـ localStorage للموقع كله فوراً
        className="absolute top-5 right-5 z-50 bg-white/80 backdrop-blur-md border border-slate-800 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 shadow-sm hover:bg-white transition-all flex items-center space-x-1"
      >
        <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
        <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
        </svg>
      </button>

      {/* الحاوية الرشيقة للفورم */}
      <div className="w-full max-w-[460px] flex flex-col space-y-6 z-10">
        
        {/* 3. اللوجو والعناوين بروح هادئة وطبية ومترجمة صح */}
        <div className="text-center space-y-2">
<div className="inline-flex items-center space-x-2 
                bg-gradient-to-tr from-primary to-secondary
                text-white px-4 py-2 rounded-2xl 
                shadow-lg shadow-[#19B0AD]/20 
                border border-white/20 
                transform hover:scale-105 transition-all duration-300">
     <Activity size={22} className="animate-pulse" />
     <span className="font-extrabold text-lg tracking-wider">PharmaCare</span>
</div>
          <h1 className="text-2xl font-black text-slate-800 tracking-tight pt-2">
            {t.title}
          </h1>
        </div>

        {/* 4. الـ Tabs الحديثة (Segmented Control) */}
        <div className="bg-slate-200/60 backdrop-blur-md p-1 rounded-2xl border border-slate-300/30 flex relative z-10 shadow-inner">
          <button
            type="button"
            onClick={() => setActiveTab('login')}
            className={`flex-1 text-center py-4.5 rounded-xl text-sm font-extrabold  transition-all duration-300 relative z-20 ${
              activeTab === 'login' 
                ? 'bg-white text-primary shadow-md shadow-slate-900/5' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.loginTab}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('signup')}
            className={`flex-1 text-center py-2.5 rounded-xl text-sm font-extrabold transition-all duration-300 relative z-20 ${
              activeTab === 'signup' 
                ? 'bg-white text-primary shadow-md shadow-slate-900/5' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.signupTab}
          </button>
        </div>

     
{/* الكارت بأقوى تأثير إبراز مع حماية كاملة من أخطاء الـ Build */}
<div 
  className="bg-white rounded-[24px] p-8 space-y-6 relative overflow-hidden z-10 border border-slate-100 shadow-[0_0_1px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,0,0,0.02),0_16px_32px_rgba(0,0,0,0.04),0_40px_80px_rgba(0,0,0,0.08)] before:absolute before:inset-0 before:rounded-[24px] before:padding-[1px] before:-z-10"
  style={{
    // نقلنا تأثير شطفة الإضاءة الزجاجية هنا في الـ style عشان نخلص من الـ Unterminated regexp
    backgroundImage: 'linear-gradient(to bottom, #ffffff, rgba(226, 232, 240, 0.5))',
  }}
>          <form onSubmit={handleSubmit} className="space-y-5">
            
                        {/* نوع الحساب */}
                         {activeTab === 'signup' && (
            <div className="space-y-2">
              {/* العنوان بعد تحسين الخط وتوضيحه */}
<label className="text-sm font-extrabold tracking-wide text-slate-600 block px-1">
  {t.subtitle}
</label>
              <div className="relative group">
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value as 'user' | 'admin')}
                  className="w-full h-12 px-4 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#00a878]/10 focus:border-[#1F82DE] bg-white text-slate-800 appearance-none cursor-pointer font-bold transition-all duration-200 shadow-[inset_0_1px_2px_rgba(0,0,0,0.01)] group-hover:border-slate-300"
                >
                  <option value="user">{t.client}</option>
                  <option value="admin">{t.admin}</option>
                </select>
                <div className={`absolute inset-y-0 flex items-center pointer-events-none text-slate-400 transition-colors group-hover:text-slate-600 ${lang === 'ar' ? 'left-4' : 'right-4'}`}>
                  <Shield size={16} />
                </div>
              </div>
            </div>
               )}

            {/* البيانات الشخصية */}
            <div className="space-y-3 pt-2">
              <label className="text-sm font-bold uppercase tracking-widest text-slate-700 block px-1">
                {lang === 'ar' ? 'البيانات الشخصية' : 'Personal Details'}
              </label>

              {/* حقل الاسم بالكامل */}
              {activeTab === 'signup' && (
              <div className="relative group">
                <div className={`absolute inset-y-0 flex items-center pointer-events-none text-slate-400 transition-colors group-hover:text-slate-600 ${lang === 'ar' ? 'right-4' : 'left-4'}`}>
                  <User size={16} />
                </div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder={lang === 'ar' ? 'الاسم بالكامل' : 'Full Name'}
                  className={`w-full h-12 bg-white border border-primary rounded-xl text-xs placeholder-slate-400/70 focus:outline-none focus:ring-2 focus:ring-[#00a878]/10 focus:border-primary text-slate-800 transition-all duration-200 shadow-[inset_0_1px_2px_rgba(0,0,0,0.01)] group-hover:border-slate-300 ${lang === 'ar' ? 'pr-11' : 'pl-11'}`}
                  required
                />
              </div>
)}
              {/* حقل البريد الإلكتروني */}
              <div className="relative group">
                <div className={`absolute inset-y-0 flex items-center pointer-events-none text-slate-400 transition-colors group-hover:text-slate-600 ${lang === 'ar' ? 'right-4' : 'left-4'}`}>
                  <Mail size={16} />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t.email}
                  className={`w-full h-12 bg-white border border-primary rounded-xl text-xs placeholder-slate-400/70 focus:outline-none focus:ring-2 focus:ring-[#00a878]/10 focus:border-primary text-slate-800 transition-all duration-200 shadow-[inset_0_1px_2px_rgba(0,0,0,0.01)] group-hover:border-slate-300 ${lang === 'ar' ? 'pr-11' : 'pl-11'}`}
                  required
                />
              </div>
            </div>

            {/* الحماية */}
            <div className="space-y-3 pt-2">
              <label className="text-sm font-bold uppercase tracking-widest text-slate-700 block px-1">
                {lang === 'ar' ? 'الحماية' : 'Security'}
              </label>

              {/* حقل كلمة المرور */}
              <div className="relative group">
                <div className={`absolute inset-y-0 flex items-center pointer-events-none text-slate-400 transition-colors group-hover:text-slate-600 ${lang === 'ar' ? 'right-4' : 'left-4'}`}>
                  <Lock size={16} />
                </div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder={t.password}
                  className={`w-full h-12 bg-white border border-primary rounded-xl text-xs placeholder-slate-400/70 focus:outline-none focus:ring-2 focus:ring-[#00a878]/10 focus:border-primary text-slate-800 transition-all duration-200 shadow-[inset_0_1px_2px_rgba(0,0,0,0.01)] group-hover:border-slate-300 ${lang === 'ar' ? 'pr-11' : 'pl-11'}`}
                  required
                />
              </div>

              {/* حقل تأكيد كلمة المرور */}
              {activeTab === 'signup' && (
              <div className="relative group">
                <div className={`absolute inset-y-0 flex items-center pointer-events-none text-slate-400 transition-colors group-hover:text-slate-600 ${lang === 'ar' ? 'right-4' : 'left-4'}`}>
                  <Lock size={16} />
                </div>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder={t.confirmPassword}
                  className={`w-full h-12 bg-white border border-primary rounded-xl text-xs placeholder-slate-400/70 focus:outline-none focus:ring-2 focus:ring-[#00a878]/10 focus:border-primary text-slate-800 transition-all duration-200 shadow-[inset_0_1px_2px_rgba(0,0,0,0.01)] group-hover:border-slate-300 ${lang === 'ar' ? 'pr-11' : 'pl-11'}`}
                  required
                />
              </div>
)}
            </div>
           
{role === 'admin' && (
  <div className="space-y-2 transition-all duration-300 ease-out">
    <label className="text-xs font-extrabold tracking-wide text-rose-500 block px-1">
      {lang === 'ar' ? 'كود التحقق الخاص بالإدارة *' : 'Admin Passcode *'}
    </label>
    <div className="relative group">
      <div className={`absolute inset-y-0 flex items-center pointer-events-none text-rose-400 ${lang === 'ar' ? 'right-4' : 'left-4'}`}>
        <KeyRound size={16} /> {/* اتأكد إنك عملت import لـ KeyRound من lucide-react فوق */}
      </div>
      <input
        type="password"
        name="adminCode"
        value={formData.adminCode}
        onChange={handleInputChange}
        placeholder={lang === 'ar' ? 'ادخل الكود السري الممنوح لك' : 'Enter secret admin code'}
        className={`w-full h-12 bg-white border border-rose-200 rounded-xl text-xs placeholder-slate-400/70 focus:outline-none focus:ring-2 focus:ring-rose-500/10 focus:border-rose-500 text-slate-800 font-bold transition-all duration-200 ${lang === 'ar' ? 'pr-11' : 'pl-11'}`}
        required={role === 'admin'}
      />
    </div>
  </div>
)}


            
            {/* زرار الـ Submit الأخضر المطور */}
            <button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-primary to-secondary hover:from-primary hover:to-secondary text-white font-bold rounded-xl shadow-lg shadow-[#00a878]/15 focus:outline-none focus:ring-2 focus:ring-[#00a878] transition-all duration-200 flex items-center justify-center space-x-2 text-xs uppercase tracking-wider active:scale-[0.98] mt-3"
            >
              <UserPlus size={16} className={lang === 'ar' ? 'ml-2' : 'mr-2'} />
              <span>{t.submitBtn}</span>
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}