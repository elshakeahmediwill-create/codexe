import CategoriesHome from "../components/home/CategoryHome";
import Hero from "../components/home/Hero";
import ProductHome from "../components/home/ProductHome";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />



      <div className=" mx-auto px-4 space-y-12 py-10">
        <CategoriesHome />

        <ProductHome />
      </div>
    </main>
  );
}

