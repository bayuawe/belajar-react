import React from "react";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full md:w-1/2 p-4">
      <div className="max-w-sm rounded-xl shadow-xl flex flex-col m-4 min-h-full bg-white">
        {children}
      </div>
    </div>
  );
};

const HeaderProduct = (props) => {
  const { image } = props;
  return (
    <div className="flex justify-center items-center w-full p-4">
      <img src={image} alt="product" className="object-cover w-full h-48 rounded-md" />
    </div>
  );
};

const BodyProduct = (props) => {
  const { name, description } = props;
  return (
    <div className="px-4 flex flex-col items-center flex-grow">
      <h1 className="text-yellow-400 text-xl font-bold py-2">{name}</h1>
      <p className="text-gray-700 text-center py-2">{description}</p>
    </div>
  );
};

const FooterProduct = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="flex flex-row justify-between items-center mt-auto p-4">
      <span className="text-yellow-400 text-md font-bold flex-grow">
        {price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
      </span>
      <button
        className="bg-yellow-400 text-white px-2 py-2 rounded-md flex-shrink-0"
        onClick={() => handleAddToCart(id)}
      >
        Add to Cart
      </button>
    </div>
  );
};

CardProduct.HeaderProduct = HeaderProduct;
CardProduct.BodyProduct = BodyProduct;
CardProduct.FooterProduct = FooterProduct;

export default CardProduct;