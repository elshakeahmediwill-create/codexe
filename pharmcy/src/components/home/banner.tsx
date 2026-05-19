"use client";

import Image from "next/image";
import { Pill, Upload } from "lucide-react";

export default function HeroBanner() {
  const categories = [
    {
      title: "Supplements",
      image: "/images/pill.webp",
    },
    {
      title: "Diabetes",
      image: "/images/medicine.webp",
    },
    {
      title: "Beauty Products",
      image: "/images/jar.png",
    },
    {
      title: "Oral Care",
      image: "/images/tooth.webp",
    },
  ];

  return (
    <section className="bg-[#f7fcfb] ">
      <div className="relative overflow-hidden rounded-[35px] bg-gradient-to-r from-[#eef6ff] via-[#f5fbff] to-[#e7faf7] min-h-[500px] pt-5">
        {/* Light Right Overlay */}

        <div className="grid lg:grid-cols-2 items-center h-full">
          {/* LEFT CONTENT */}
          <div className="relative z-10 px-8 lg:px-14 py-10">
            {/* Title */}
            <h1 className="text-[44px] lg:text-[62px] leading-[1] font-bold text-[#0f172a]">
              Your Trusted
              <span className="block mt-3 bg-gradient-to-r from-[#14b8a6] via-[#0f9b8e] to-[#115e59] bg-clip-text text-transparent">
                Online Pharmacy
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 text-gray-600 text-[17px] leading-8 max-w-[620px]">
              Safe medicines, fast delivery, and professional guidance all in
              one place. We are a trusted online pharmacy committed to making
              healthcare simple, secure, and affordable.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="flex items-center gap-2 bg-[#14b8a6] hover:bg-[#0f9b8e] text-white px-7 py-4 rounded-full transition shadow-sm text-base font-medium">
                <Pill size={18} />
                Shop Medicines
              </button>

              <button className="flex items-center gap-2 bg-white hover:bg-gray-50 text-[#115e59] border border-gray-200 px-7 py-4 rounded-full transition shadow-sm text-base font-medium">
                <Upload size={18} />
                Upload Prescription
              </button>
            </div>

            {/* Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {categories.map((item) => (
                <div
                  key={item.title}
                  className="bg-white/85 border border-white rounded-[24px] p-4 text-center shadow-sm hover:shadow-md transition duration-300"
                >
                  <div className="flex justify-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={55}
                      height={55}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="mt-3 text-[14px] font-semibold text-gray-700">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative flex items-end justify-center h-full pr-6">
            {/* Background Shape */}
            <div className="absolute bottom-0 right-43 w-[450px] h-[530px] bg-[#bfe9e5] rounded-t-[180px]" />

            {/* Doctor Image */}
            <Image
              src="/images/doctor.png"
              alt="Doctor"
              width={440}
              height={650}
              priority
              className="relative z-10 object-contain max-h-[600px] w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
