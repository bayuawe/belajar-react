import React from "react";
import { Link } from "react-router-dom";

const AuthLayouts = ({
  children,
  title = { title },
  subtitle = { subtitle },
  type = { type },
}) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl py-8 px-8">
        <h1 className="text-yellow-400 text-3xl font-bold py-2">{title}</h1>
        <p className="font-medium text-slate-500">{subtitle}</p>
        {children}
        <div className="mt-4 flex justify-center">
          <p className="text-sm text-slate-500">
            {type === "login" ? "Don't have an account? " : "Have an account? "}{" "}
            {type === "login" && (
              <Link to="/register" className="text-yellow-400 font-bold">
                Register
              </Link>
            )}
            {type === "register" && (
              <Link to="/login" className="text-yellow-400 font-bold">
                Login
              </Link>
            )}
          </p> 
        </div>
      </div>
    </div>
  );
};

export default AuthLayouts;
