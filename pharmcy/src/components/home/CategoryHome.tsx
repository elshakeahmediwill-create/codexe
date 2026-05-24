"use client";

import Link from "next/link";
import Image from "next/image";

type Category = {
  _id: string;
  name: string;
  image: string;
};

const pharmacyCategories: Category[] = [
  {
    _id: "1",
    name: "Medicines",
    image: "/images/medicines.png",
  },
  {
    _id: "2",
    name: "Vitamins",
    image: "/images/vitamins.png",
  },
  {
    _id: "3",
    name: "Baby Care",
    image: "/images/baby-care.png",
  },
  {
    _id: "4",
    name: "Skin Care",
    image: "/images/skincare.png",
  },
  {
    _id: "5",
    name: "Hair Care",
    image: "/images/hair_care.png",
  },
  {
    _id: "6",
    name: "Dental Care",
    image: "/images/dental.png",
  },
  {
    _id: "7",
    name: "Medical Devices",
    image: "/images/devices.png",
  },
  {
    _id: "8",
    name: "Supplements",
    image: "/images/supplement.webp",
  },
];

export default function CategoriesHome() {
  return (
    <div>


      <div className="mb-3 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span className="h-6 w-1 rounded-full bg-[#14b8a6]"></span>
          Shop By
          <span className="text-[#14b8a6] ">Category</span>
        </h2>

        <Link
          href="/shop"
          className="text-sm font-medium text-[#14b8a6]  hover:underline"
        >
          View All →
        </Link>
      </div>

      {/* Scroll Row */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-2">
        {pharmacyCategories.map((cat) => (
          <div
            key={cat._id}
            className="min-w-[90px] flex-shrink-0 text-center group cursor-pointer"
          >
            {/* Circle */}
            <div className="relative w-20 h-20 mx-auto mb-2 rounded-full overflow-hidden border bg-gray-50 transition duration-300 group-hover:shadow-lg group-hover:scale-105">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Name */}
            <p className="text-xs font-medium transition group-hover:text-green-600">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
