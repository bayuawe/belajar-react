import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/pages/login.jsx";
import RegisterPage from "./components/pages/register.jsx";
import ErrorPage from "./components/pages/ErrorPage.jsx";
import ProductPage from "./components/pages/products.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Selamat Datang</div>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "*", // Tangkap semua route yang tidak didefinisikan
    element: <ErrorPage statusCode="404" message="Oops! Page Not Found" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
