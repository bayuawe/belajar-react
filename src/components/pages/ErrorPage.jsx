import React from "react";

const ErrorPage = ({ statusCode, message }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold">{statusCode}</h1>
        <p className="text-lg">{message}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
