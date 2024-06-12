import React from "react";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <>
      <HeaderProduct />
      <BodyProduct />
      <FooterProduct />
    </>
  );
};

const HeaderProduct = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <a href="#" className="flex justify-center items-center rounded-md">
        <img
          src="./public/images/shoes-1.jpg"
          alt="product"
          className="object-cover"
        />
      </a>
    </div>
  );
};

const BodyProduct = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-yellow-400 text-3xl font-bold py-2">Sepatu</h1>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-yellow-400 font-bold py-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, unde.
          Consequuntur, placeat optio aliquid quisquam enim corporis
          reprehenderit magni tempore ab atque, dolorum velit ea? Est commodi
          minus placeat eaque.
        </p>
      </div>
    </div>
  );
};

const FooterProduct = (props) => {
  const { price } = props;
  return (
    <div className="flex flex-row justify-between items-center">
      <h1 className="text-yellow-400 text-3xl font-bold py-2">{price}</h1>
      <button className="bg-yellow-400 text-white px-4 py-2 rounded-md" type="submit">
        Add to Cart
      </button>
    </div>
  ); 
};

CardProduct.HeaderProduct = HeaderProduct;
CardProduct.BodyProduct = BodyProduct;
CardProduct.FooterProduct = FooterProduct;

export default CardProduct;
