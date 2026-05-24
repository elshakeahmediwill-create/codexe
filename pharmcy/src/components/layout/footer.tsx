

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  ShieldCheck,
  Truck,
  Headphones,
  CreditCard,
  Send,
  Pill,
  ChevronRight,
} from "lucide-react";

import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden mt-16  border border-white/40 bg-gradient-to-r from-[#eef6ff] via-[#f5fbff] to-[#e7faf7] shadow-[0_20px_50px_rgba(15,118,110,0.08)] backdrop-blur-xl">
      {/* MAIN */}
      <div className="relative z-10 px-8 md:px-14 pt-10 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* LEFT SIDE */}
          <div className="lg:col-span-1">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-[#14b8a6]/10 p-3 rounded-2xl">
                <Pill className="text-[#14b8a6]" size={24} />
              </div>

              <div>
                <h1 className="text-3xl font-bold leading-none">
                  <span className="text-[#14b8a6]">Pharma</span>

                  <span className="text-[#115e59]">Care</span>
                </h1>

                <p className="text-xs text-gray-500 mt-1">
                  Trusted Online Pharmacy
                </p>
              </div>
            </Link>

            {/* DESCRIPTION */}
            <p className="mt-5 text-[#4A5565] leading-8 text-[15px]">
              Your trusted online pharmacy for safe medicines, fast delivery,
              and professional guidance.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-6">
              {[FiFacebook, FiInstagram, FiTwitter, FiYoutube].map(
                (Icon, index) => (
                  <button
                    key={index}
                    className="w-11 h-11 rounded-full bg-white border border-[#E3EEEB] flex items-center justify-center text-[#18B7A0] shadow-sm transition-all duration-300 hover:bg-[#14b8a6] hover:text-white hover:scale-110"
                  >
                    <Icon size={18} />
                  </button>
                ),
              )}
            </div>

            {/* LEFT IMAGE */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative w-[150px] h-[150px] mt-6"
            >
              <Image
                src="/images/footerpills.png"
                alt="capsule"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* SHOP */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                <Truck className="text-[#18B7A0]" size={22} />
              </div>

              <h3 className="text-xl font-semibold text-[#115e59]">Shop</h3>
            </div>

            <ul className="space-y-4">
              {[
                "All Categories",
                "Medicines",
                "Supplements",
                "Personal Care",
                "Beauty Products",
                "Oral Care",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[#4A5565] hover:text-[#18B7A0] transition-all duration-300 cursor-pointer hover:translate-x-1"
                >
                  <ChevronRight size={16} />

                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                <Headphones className="text-[#18B7A0]" size={22} />
              </div>

              <h3 className="text-xl font-semibold text-[#115e59]">
                Help & Support
              </h3>
            </div>

            <ul className="space-y-4">
              {[
                "Contact Us",
                "FAQs",
                "Shipping & Delivery",
                "Returns & Refunds",
                "Track Your Order",
                "Prescription Guide",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[#4A5565] hover:text-[#18B7A0] transition-all duration-300 cursor-pointer hover:translate-x-1"
                >
                  <ChevronRight size={16} />

                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ABOUT */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                <ShieldCheck className="text-[#18B7A0]" size={22} />
              </div>

              <h3 className="text-xl font-semibold text-[#115e59]">About Us</h3>
            </div>

            <ul className="space-y-4">
              {[
                "About PharmaCare",
                "Our Mission",
                "Careers",
                "Blog",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[#4A5565] hover:text-[#18B7A0] transition-all duration-300 cursor-pointer hover:translate-x-1"
                >
                  <ChevronRight size={16} />

                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                <Send className="text-[#18B7A0]" size={20} />
              </div>

              <h3 className="text-xl font-semibold text-[#115e59]">
                Stay Updated
              </h3>
            </div>

            <p className="text-[#4A5565] leading-7 mb-5 text-[15px]">
              Subscribe to get exclusive offers and updates.
            </p>

            {/* INPUT */}
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-13 rounded-full border border-white bg-white/90 backdrop-blur-md px-5 pr-14 outline-none shadow-sm focus:border-[#18B7A0]"
              />

              <button className="absolute right-2 top-1.5 w-10 h-10 rounded-full bg-gradient-to-r from-[#14b8a6] to-[#14b8a6] flex items-center justify-center text-white shadow-md">
                <Send size={18} />
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="relative w-full h-[200px] flex justify-end pr-6 mt-3"
            >
              <Image
                src="/images/medical.png"
                alt="medical"
                fill
                className="object-contain scale-100 object-right"
              />
            </motion.div>
          </div>
        </div>

        {/* FEATURES */}
        <div className="relative flex items-center justify-center -mt-4 z-20">
          <div className="w-full max-w-[1200px] rounded-[32px] bg-white/80 backdrop-blur-xl border border-white/60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden shadow-[0_15px_40px_rgba(15,118,110,0.08)]">
            {[
              {
                icon: ShieldCheck,
                title: "100% Genuine Products",
              },
              {
                icon: Truck,
                title: "Fast & Safe Delivery",
              },
              {
                icon: Headphones,
                title: "Expert Support",
              },
              {
                icon: CreditCard,
                title: "Secure Payments",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  whileHover={{ y: -4 }}
                  key={index}
                  className="flex items-center gap-4 p-5 border-r border-[#EDF3F1] last:border-r-0"
                >
                  <div className="w-14 h-14 rounded-full bg-[#F2FBF9] flex items-center justify-center">
                    <Icon className="text-[#18B7A0]" size={24} />
                  </div>

                  <h4 className="text-[#0B1533] font-semibold leading-6 text-[15px]">
                    {item.title}
                  </h4>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-[#DDEDEA] bg-white/30 backdrop-blur-md px-8 md:px-14 py-5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* COPYRIGHT */}
          <div>
            <p className="text-[#4A5565] text-center lg:text-left text-sm">
              © 2026 PharmaCare. All rights reserved.
            </p>

            <p className="text-[#18B7A0] mt-1 text-sm text-center lg:text-left">
              Your health, our priority.
            </p>
          </div>

          {/* PAYMENTS */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {[
              "/images/visa.png",
              "/images/mastercard.png",
              "/images/applepay.png",
              "/images/paypal.png",
            ].map((item, index) => (
              <motion.div
                whileHover={{ y: -3 }}
                key={index}
                className="w-[90px] h-[55px] bg-white border border-[#DDEDEA] rounded-2xl shadow-sm flex items-center justify-center"
              >
                <Image
                  src={item}
                  alt="payment"
                  width={55}
                  height={28}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>

          {/* STORE BUTTONS */}
          <div className="flex gap-3 flex-wrap justify-center">
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="w-[160px] h-[52px] relative"
            >
              <Image
                src="/images/googleplay.png"
                alt="google play"
                fill
                className="object-contain"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04 }}
              className="w-[160px] h-[52px] relative"
            >
              <Image
                src="/images/appstore.png"
                alt="app store"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
