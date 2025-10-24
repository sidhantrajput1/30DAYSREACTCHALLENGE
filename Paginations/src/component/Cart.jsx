import React from "react";

const Cart = ({ product, startIdx, endIdx }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        🛒 Your Shopping Cart
      </h1>

      {product.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Your cart is empty. Start adding some products!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {product.slice(startIdx, endIdx).map((product) => (
            <DisplayCart
              key={product.id}
              image={product.images[0]}
              description={product.description}
              title={product.title}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
};

function DisplayCart({ image, description, title, price, rating }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      <img
        className="h-48 w-full object-cover"
        src={image}
        alt={title}
      />

      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-indigo-600">${price}</span>
          <span className="text-yellow-500 font-medium">
            ⭐ {rating.toFixed(1)}
          </span>
        </div>

        <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors cursor-pointer">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
