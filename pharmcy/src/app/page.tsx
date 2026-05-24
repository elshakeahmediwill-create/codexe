import BannerHome from "../components/home/BannerHome";
import CategoriesHome from "../components/home/CategoryHome";
import Hero from "../components/home/Hero";
import ProductHome from "../components/home/ProductHome";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fbff]">

      {/* HERO */}
      <Hero />

      {/* FLOATING BANNER */}
      <section className="relative z-30 -mt-8 lg:-mt-14">

        <div className="mx-auto max-w-[1200px] px-4">

          <BannerHome />

        </div>
      </section>

      {/* PRODUCTS */}
      <div className="mx-auto px-4 space-y-12 py-10">

        <CategoriesHome />

        <ProductHome />

      </div>
    </main>
  );
}