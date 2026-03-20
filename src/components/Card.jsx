import React from "react";

const Card = ({ title, desc, img }) => {
  return (
    <div className="bg-white h-full min-h-[260px] p-6 shadow-md rounded hover:text-orange-600 hover:-translate-y-3 transition-all duration-300 cursor-pointer flex flex-col justify-between">
      <div>
        <div style={{ color: "#EA580C", fontSize: "36px" }}>{img}</div>

        <h1 className="text-xl font-semibold mt-3 mb-3">{title}</h1>

        <p className="text-sm text-zinc-700">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
