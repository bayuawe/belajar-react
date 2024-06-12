import React from "react";
import CardProduct from "../Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Nike Airmax 1923",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 1000000,
    image: "./public/images/shoes-1.jpg",
  },
  {
    id: 2,
    name: "Nike Airmax 893",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 2000000,
    image: "./public/images/shoes-1.jpg",
  },
  {
    id: 3,
    name: "Nike Airmax 90",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 2000000,
    image: "./public/images/shoes-1.jpg",
  },
  {
    id: 4,
    name: "Nike Airmax 90",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 2000000,
    image: "./public/images/shoes-1.jpg",
  },
  {
    id: 5,
    name: "Nike Airmax 90",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 2000000,
    image: "./public/images/shoes-1.jpg",
  },
  {
    id: 6,
    name: "Nike Airmax 90",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 2000000,
    image: "./public/images/shoes-1.jpg",
  },
  {
    id: 7,
    name: "Nike Airmax 90",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 2000000,
    image: "./public/images/shoes-1.jpg",
  },
  {
    id: 8,
    name: "Nike Airmax 90",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 2000000,
    image: "./public/images/shoes-1.jpg",
  },
  {
    id: 9,
    name: "Nike Airmax 90",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 2000000,
    image: "./public/images/shoes-1.jpg",
  },
];

const ProductPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-10 py-10">
      <h1 className="text-yellow-400 text-3xl font-bold py-5">Halaman Produk</h1>
      <div className="grid md:grid-cols-3 w-full px-8 gap-4">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.HeaderProduct image={product.image} />
            <CardProduct.BodyProduct
              name={product.name}
              description={product.description}
            />
            <CardProduct.FooterProduct price={`Rp. ${product.price}`} />
          </CardProduct>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
