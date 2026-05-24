"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Pill, Upload } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext"; 
export default function HeroBanner() {
  const { t } = useLanguage();
const categories = [
  { title: t.supplements, image: "/images/pill.webp" },
  { title: t.diabetes, image: "/images/medicine.webp" },
  { title: t.beautyProducts, image: "/images/jar.png" },
  { title: t.oralCare, image: "/images/tooth.webp" },
];

  return (
    <section className="bg-[#f7fcfb]">

      {/* MAIN BANNER */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#eef6ff] via-[#f5fbff] to-[#e7faf7] min-h-[300px] pt-5">

        {/* FLOATING ITEMS */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-2 left-10"
        >
          <Image
            src="/images/Footerpills.png"
            alt="pill"
            width={80}
            height={80}
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-14 left-[42%]"
        >
          <Image
            src="/images/jar.webp"
            alt="bottle"
            width={150}
            height={150}
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-12 right-10"
        >
          <Image
            src="/images/motiontwo.png"
            alt="capsule"
            width={100}
            height={100}
          />
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="relative z-10 grid lg:grid-cols-2 items-center min-h-[540px]">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="px-8 lg:px-16 py-6"
          >

            {/* TITLE */}
            <h1 className="text-[44px] lg:text-[62px] leading-[1] font-bold text-[#115e59]">

              {t.yourTrusted}

              <span className="block mt-3 bg-gradient-to-r from-[#14b8a6] via-[#0f9b8e] to-[#115e59] bg-clip-text text-transparent">
                {t.OnlinePharmacy}
              </span>
            </h1>

            {/* DESCRIPTION */}
          <p className="mt-5 text-[#4b5563] text-[18px] leading-8 max-w-[680px]">
  {t.heroDescription}
</p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-6">

              {/* SHOP BUTTON */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 bg-gradient-to-r from-[#14b8a6] to-[#0f9b8e] text-white px-8 py-4 rounded-full shadow-[0_12px_30px_rgba(20,184,166,0.28)] text-base font-medium"
              >
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <Pill size={18} />
                </div>

{t.shopMedicines}
              </motion.button>

              {/* UPLOAD BUTTON */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 bg-white/85 backdrop-blur-md text-[#115e59] border border-white px-8 py-4 rounded-full shadow-lg text-base font-medium"
              >
                <div className="w-9 h-9 rounded-full bg-[#14b8a6]/10 flex items-center justify-center">
                  <Upload size={18} />
                </div>

                {t.uploadPrescription}
              </motion.button>
            </div>

            {/* CATEGORIES */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">

              {categories.map((item, index) => (
                <motion.div
key={`${item.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-[28px] p-5 text-center shadow-[0_10px_30px_rgba(15,118,110,0.05)]"
                >

                  <div className="flex justify-center">
                    <Image
                      src={item.image}
                      alt={item.title || "Category Icon"} 
                      width={65}
                      height={65}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="mt-4 text-[15px] font-semibold text-[#111827]">
                    {item.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex items-end justify-center h-full"
          >

            {/* MAIN CURVED SHAPE */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[470px] h-[540px] bg-[#14b8a6] rounded-t-[240px]" />

            {/* DOCTOR IMAGE */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 flex justify-center"
            >
              <Image
                src="/images/doctor.png"
                alt="Doctor"
                width={450}
                height={700}
                priority
                className="object-contain w-auto h-[540px]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}