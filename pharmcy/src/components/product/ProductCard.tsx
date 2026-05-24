"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Card } from "@heroui/react";

import {
  Heart,
  ShoppingCart,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-EG", {
    style: "currency",
    currency: "EGP",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function ProductCard({
  product,
}: any) {
  const {
    _id,
    title,
    price,
    images,
    imageCover,
    category,
    ratingsAverage,
    ratingsQuantity,
    sold,
  } = product;

  const [currentImage, setCurrentImage] =
    useState(0);

  const [isFav, setIsFav] = useState(false);

  const productImages =
    images?.length > 0 ? images : [imageCover];

  const isPopular = sold > 1000;

  const discount = 20;

  const oldPrice = price;

  const newPrice =
    price - price * (discount / 100);

  const nextImage = () => {
    setCurrentImage((prev: number) =>
      prev === productImages.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev: number) =>
      prev === 0
        ? productImages.length - 1
        : prev - 1
    );
  };

  return (
    <Card className="group flex h-[420px] flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* IMAGE */}
      <div className="relative h-56 overflow-hidden bg-gray-50">
        <Image
          src={productImages[currentImage]}
          alt={title}
          fill
          className="object-contain p-4 transition duration-300 group-hover:scale-105"
        />

        {isPopular && (
          <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-[11px] font-semibold text-white shadow">
            🔥 Popular
          </span>
        )}

        {/* FAVORITE */}
        <button
          onClick={() => setIsFav(!isFav)}
          className={`absolute right-3 top-3 rounded-full p-2 shadow-md transition
          ${
            isFav
              ? "bg-red-500 text-white"
              : "bg-white hover:bg-red-500 hover:text-white"
          }`}
        >
          <Heart
            size={16}
            fill={isFav ? "white" : "none"}
          />
        </button>

        {/* SLIDER */}
        {productImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 opacity-0 shadow transition group-hover:opacity-100"
            >
              <ChevronLeft size={16} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 opacity-0 shadow transition group-hover:opacity-100"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}

        {/* ADD TO CART */}
        <div className="absolute bottom-0 left-0 w-full translate-y-6 p-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#14b8a6] py-2.5 text-sm font-medium text-white hover:bg-[#115e59]">
            <ShoppingCart size={16} />
            Add To Cart
          </button>
        </div>
      </div>

      {/* BODY */}
      <Link href={`/shop/${_id}`}>
        <div className="flex-grow space-y-2 px-4 pt-4">
          <p className="text-[11px] uppercase tracking-wide text-gray-400">
            {category.name}
          </p>

          <h3 className="line-clamp-2 text-sm font-semibold leading-6 text-gray-800 transition group-hover:text-[#14b8a6]">
            {title}
          </h3>

          <div className="flex items-center gap-1 text-xs text-yellow-500">
            <Star
              size={14}
              fill="currentColor"
            />

            <span className="text-gray-600">
              {ratingsAverage} (
              {ratingsQuantity})
            </span>
          </div>
        </div>
      </Link>

      {/* FOOTER */}
      <div className="flex items-center justify-between px-4 pb-5 pt-2">
        <div className="flex flex-col">
          <span className="text-lg font-bold text-[#14b8a6]">
            {formatPrice(newPrice)}
          </span>

          <span className="text-xs text-gray-400 line-through">
            {formatPrice(oldPrice)}
          </span>
        </div>

        <button className="rounded-full bg-[#b3e5df] p-3 transition hover:bg-[#14b8a6] hover:text-white">
          <ShoppingCart size={18} />
        </button>
      </div>
    </Card>
  );
}