"use client";

import Link from "next/link";
import ProductCard from "../product/ProductCard";

/* ================= PRODUCTS DATA ================= */

const products = [
  {
    _id: "1",
    title: "Panadol Extra",
    price: 120,
    sold: 1500,
    ratingsAverage: 4.8,
    ratingsQuantity: 120,
    category: {
      name: "Medicines",
    },
    imageCover: "/images/products/panadol.webp",
    images: ["/images/products/panadol.webp", "/images/products/panadol2.png"],
  },

  {
    _id: "2",
    title: "Vitamin C 1000mg",
    price: 250,
    sold: 800,
    ratingsAverage: 4.5,
    ratingsQuantity: 95,
    category: {
      name: "Vitamins",
    },
    imageCover: "/images/products/vitamin.webp",
    images: ["/images/products/vitamin.webp", "/images/products/vitamin2.png"],
  },

  {
    _id: "3",
    title: "Baby Shampoo",
    price: 180,
    sold: 2000,
    ratingsAverage: 4.9,
    ratingsQuantity: 180,
    category: {
      name: "Baby Care",
    },
    imageCover: "/images/products/shampo.png",
    images: ["/images/products/shampo.png", "/images/products/shampoo2.png"],
  },

  {
    _id: "4",
    title: "Face Wash",
    price: 300,
    sold: 950,
    ratingsAverage: 4.6,
    ratingsQuantity: 140,
    category: {
      name: "Skin Care",
    },
    imageCover: "/images/products/facewash.jpg",
    images: ["/images/products/facewash.jpg", "/images/products/facewash2.png"],
  },

  {
    _id: "5",
    title: "Omega 3",
    price: 450,
    sold: 1100,
    ratingsAverage: 4.7,
    ratingsQuantity: 210,
    category: {
      name: "Supplements",
    },
    imageCover: "/images/products/omega.jpg",
    images: ["/images/products/omega.jpg", "/images/products/omega2.png"],
  },
];

export default function ProductHome() {
  return (
    <section className="py-5">
      {/* HEADER */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span className="h-6 w-1 rounded-full bg-[#14b8a6]"></span>
          Featured
          <span className="text-[#14b8a6]">Products</span>
        </h2>

        <Link
          href="/shop"
          className="text-sm font-medium text-[#14b8a6] hover:underline"
        >
          View All →
        </Link>
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}
