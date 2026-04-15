import React from "react";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-red-500">Oops!</h1>
      <p className="text-lg mt-2">Something went wrong.</p>
    </div>
  );
};

export default ErrorPage;
