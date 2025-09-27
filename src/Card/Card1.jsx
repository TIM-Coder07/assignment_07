// Card1.js
import React from "react";
import victorImg from "../assets/vector1.png"; 

const Card = ({ title, count, bgImage, onClick }) => {
  return (
    <div
      className="relative w-full h-40 shadow-md rounded-lg overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Gradient Overlay color */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#632EE3]/70 to-[#9F62F2]/70"></div>

      {/* Card Content  */}
      <div className="relative flex flex-col justify-center items-center h-full text-white">
        <h2 className="text-lg font-semibold">{title}</h2>
        <h2 className="text-3xl font-bold">{count}</h2>
      </div>
    </div>
  );
};

const Card1 = ({ progressCount, onProgressClick }) => {
  return (
    <div className="grid grid-cols-2 gap-6 mt-8 w-full">
      <Card
        title="In-Progress"
        count={progressCount}
        bgImage={victorImg}  
        onClick={onProgressClick}
      />

      <Card
        title="Resolved"
        count={12}
        bgImage={victorImg}  
      />
    </div>
  );
};

export default Card1;
