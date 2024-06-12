import React from "react";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm rounded-xl shadow-xl flex flex-col m-4 min-h-full">
      {children}
    </div>
  );
};

const HeaderProduct = (props) => {
  const { image } = props;
  return (
    <div className="flex flex-col justify-center items-center w-full p-4">
      <a
        href="#"
        className="flex justify-center items-center rounded-md overflow-hidden"
      >
        <img src={image} alt="product" className="object-cover w-full h-48" />
      </a>
    </div>
  );
};

const BodyProduct = (props) => {
  const { name, description } = props;
  return (
    <div className="px-4 flex flex-col items-center flex-grow">
      <a href="#" className="w-full text-center">
        <h1 className="text-yellow-400 text-2xl font-bold py-2">{name}</h1>
      </a>
      <p className="text-gray-700 text-center py-2">{description}</p>
    </div>
  );
};

const FooterProduct = (props) => {
  const { price } = props;
  return (
    <div className="flex flex-row justify-between items-center mt-auto p-4">
      <span className="text-yellow-400 text-2xl font-bold">{price}</span>
      <button
        className="bg-yellow-400 text-white px-4 py-2 rounded-md"
        type="submit"
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
