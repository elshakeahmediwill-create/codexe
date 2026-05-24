"use client";

import Link from "next/link";
import { Home, SearchX } from "lucide-react";

export default function NotFoundComponent() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-6 ">

      <div className="text-center max-w-lg">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#14b8a6]/10 p-6 rounded-full">
            <SearchX
              size={55}
              className="text-[#14b8a6]"
            />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-7xl font-bold text-[#14b8a6] mb-3">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-[15px] leading-7 mb-8">
          Sorry, the page you are looking for doesn’t exist
          or may have been moved to another location.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">

          {/* Home Button */}
          <Link
            href="/"
            className="flex items-center gap-2 bg-[#14b8a6] hover:bg-[#0f9b8e] text-white px-7 py-3 rounded-full transition font-medium shadow-sm"
          >
            <Home size={18} />
            Back to Home
          </Link>

        </div>

      </div>

    </div>
  );
}