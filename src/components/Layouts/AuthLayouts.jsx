import React from "react";

const AuthLayouts = ({
  children,
  title = { title },
  subtitle = { subtitle },
}) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl py-8 px-8">
        <h1 className="text-yellow-400 text-3xl font-bold py-2">{title}</h1>
        <p className="font-medium text-slate-500">{subtitle}</p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayouts;
