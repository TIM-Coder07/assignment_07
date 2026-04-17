import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
      <span className="loading loading-spinner text-error"></span>
    </div>
  );
};

export default Loader;
