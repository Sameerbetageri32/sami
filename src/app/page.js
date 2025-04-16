// pages/index.js
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductList from '@/components/ProductList';


export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      {/* Product section */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Explore Products</h1>
        {/* Center: Search Bar + Button */}
        <div className="flex-1 w-full md:w-auto md:mx-6 flex items-center gap-2">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full md:w-[400px] px-5 py-2 rounded-full text-gray-800 placeholder-gray-500 bg-white shadow-inner focus:outline-black focus:ring-4 focus:ring-yellow-400 border-none transition"
          />
          <button className="bg-black-400 text-black font-semibold px-4 py-2 rounded-full hover:bg-300 transition">
            🔍
          </button>
        </div>
        <ProductList />
      </main>

      <Footer />
    </div>
  );
}
