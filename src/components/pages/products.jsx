import { React, useState } from "react";
import CardProduct from "../Fragments/CardProduct";
import Button from "../Elements/Button";

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
    name: "Nike Airmax 1231",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 2000000,
    image: "./public/images/shoes-1.jpg",
  },
  {
    id: 4,
    name: "Nike Airmax 9483",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 2000000,
    image: "./public/images/shoes-1.jpg",
  },
  {
    id: 5,
    name: "Nike Airmax 123",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 2000000,
    image: "./public/images/shoes-1.jpg",
  },
  {
    id: 6,
    name: "Nike Airmax 231",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 2000000,
    image: "./public/images/shoes-1.jpg",
  },
  {
    id: 7,
    name: "Nike Airmax 989",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 2000000,
    image: "./public/images/shoes-1.jpg",
  },
  {
    id: 8,
    name: "Nike Airmax 893",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 2000000,
    image: "./public/images/shoes-1.jpg",
  },
  {
    id: 9,
    name: "Nike Airmax 361",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 2000000,
    image: "./public/images/shoes-1.jpg",
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      quantity: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    const itemInCart = cart.find((item) => item.id === id);
    if (itemInCart) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, quantity: 1 }]);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 flex justify-end bg-white shadow-md text-slate-400 items-center px-10 py-5">
        <span className="mx-5">
          Hello, <span className="font-bold">{email}</span>
        </span>
        <Button
          text="Logout"
          variant="bg-yellow-400"
          onClick={() => {
            localStorage.removeItem("email");
            localStorage.removeItem("password");
            window.location.href = "/login";
          }}
        />
      </div>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-10 py-20">
        <h1 className="text-yellow-400 text-3xl font-bold py-5">
          Halaman Produk
        </h1>
        <div className="grid md:grid-cols-5 w-full px-4 gap-4 items-start">
          <div className="md:col-span-3 flex flex-wrap">
            {products.map((product) => (
              <CardProduct key={product.id} className="w-full md:w-1/2 p-4">
                <CardProduct.HeaderProduct image={product.image} />
                <CardProduct.BodyProduct
                  name={product.name}
                  description={product.description}
                />
                <CardProduct.FooterProduct
                  price={product.price}
                  id={product.id}
                  handleAddToCart={handleAddToCart}
                />
              </CardProduct>
            ))}
          </div>
          <div className="w-full md:w-1/4 md:mr-10">
            <h1 className="text-yellow-400 text-3xl font-bold py-5">Cart</h1>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="w-1/4 py-2 px-4 border-b-2 border-gray-300">Nama</th>
                  <th className="w-1/4 py-2 px-4 border-b-2 border-gray-300">Harga</th>
                  <th className="w-1/4 py-2 px-4 border-b-2 border-gray-300">Quantity</th>
                  <th className="w-1/4 py-2 px-4 border-b-2 border-gray-300">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id}>
                      <td className="py-2 px-4 border-b border-gray-300">{product.name}</td>
                      <td className="py-2 px-4 border-b border-gray-300">
                        {product.price.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-300">{item.quantity}</td>
                      <td className="py-2 px-4 border-b border-gray-300">
                        {(product.price * item.quantity).toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;