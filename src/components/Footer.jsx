// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-black py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">About Amazon</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Amazon is your go-to platform for a wide range of quality products. We are committed to delivering the best online shopping experience, with fast shipping, secure payments, and top-notch customer service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-black-400">Home</Link></li>
            <li><Link href="/categories" className="hover:text-black-400">Categories</Link></li>
            <li><Link href="/cart" className="hover:text-black-400">Cart</Link></li>
            <li><Link href="/account" className="hover:text-black-400">My Account</Link></li>
          </ul>
        </div>

        {/* Contact or Support (Optional Extra) */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-black-300">
            <li><Link href="/help" className="hover:text-black-400">Help Center</Link></li>
            <li><Link href="/contact" className="hover:text-black-400">Contact Us</Link></li>
            <li><Link href="/privacy" className="hover:text-black-400">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-black-400">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-sm text-gray-400 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} MiniAmazon. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

