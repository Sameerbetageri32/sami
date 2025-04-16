// components/ProductCard.js
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-105 duration-300 p-5 flex flex-col items-center text-center border border-gray-200">
      <div className="w-full h-44 overflow-hidden rounded-xl mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
        />
      </div>
      <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
      <p className="text-indigo-600 font-bold text-xl mt-2">${product.price}</p>
      <button className="mt-5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-black px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-0.5">
        🛒 Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
