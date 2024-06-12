import React from "react";
import CardProduct from "../Fragments/CardProduct";

const ProductPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-yellow-400 text-3xl font-bold py-5">Product Page</h1>
      <div className="grid grid-cols-3 gap-4 w-full px-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white shadow-xl rounded-xl py-8 px-8">
            <CardProduct.HeaderProduct />
            <CardProduct.BodyProduct />
            <CardProduct.FooterProduct price={1000000} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
