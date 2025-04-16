// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-700 via-blue-700 to-pink-600 shadow-xl sticky top-0 z-50 text-white">
      <div className="bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4 md:gap-0">
          
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-extrabold tracking-tight hover:text-yellow-300 transition duration-300"
          >
            Amazon
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm sm:text-base font-medium">
            <Link href="/" className="hover:text-yellow-300 transition duration-300">
              Home
            </Link>

            <Link href="/wishlist" className="relative hover:text-yellow-300 transition duration-300">
              ❤️ Wishlist
              <span className="absolute -top-2 -right-3 bg-pink-300 text-black text-xs px-1.5 py-0.5 rounded-full font-bold shadow-sm">
                3
              </span>
            </Link>

            <Link href="/cart" className="relative transition duration-300 hover:brightness-110">
              <span className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-1.5 rounded-full font-semibold shadow-md border border-white hover:bg-yellow-300 transition-all duration-300">
                🛒 Cart
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  2
                </span>
              </span>
            </Link>

            <Link href="/account" className="hover:text-yellow-300 transition duration-300">
              👤 Profile
            </Link>

            <Link
              href="/signup"
              className="bg-yellow-400 text-black px-5 py-1.5 rounded-full font-semibold hover:bg-yellow-300 shadow-md hover:shadow-lg transition duration-300"
            >
              Register
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
