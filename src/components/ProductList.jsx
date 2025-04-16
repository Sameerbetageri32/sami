import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'rcb jersy',
    price: 99.99,
    image: '/images/rcb.jpg',
  },
  {
    id: 2,
    name: 'laptop',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: '4K Action Camera',
    price: 179.99,
    image: '/images/camera.jpg',
  },
  {
    id: 4,
    name: 'Bluetooth Speaker',
    price: 49.99,
    image: '/images/speaker.jpg',
  },
  {
    id: 5,
    name: 'Gaming Mouse RGB',
    price: 39.99,
    image: '/images/mouse.jpg',
  },
  {
    id: 6,
    name: 'LED Desk Lamp',
    price: 29.99,
    image: '/images/lamp.jpg',
  },
  {
    id: 7,
    name: 'earbuds',
    price: 29.99,
    image: '/images/ear.jpg',
  },
  {
    id: 8,
    name: 'smart watch',
    price: 29.99,
    image: '/images/watch1.jpg',
  },
  {
    id: 9,
    name: 'Wireless Headphones',
    price: 99.99,
    image: '/images/head.webp',
  },
];

const ProductList = () => {
  return (
    <div className="px-4 md:px-6 py-12 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center px-4">
            Discover the Best Tech Deals
          </h1>
      </div>
      

      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
          Featured Products
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Curated gadgets and gear just for you
        </p>
      </div>

      {/* Responsive Product Grid */}
      <div className="grid  grid-cols-3 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center">
        {products.map((product) => (
          <div
            className="w-full max-w-xs transition-transform transform hover:scale-105 duration-300"
            key={product.id}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
