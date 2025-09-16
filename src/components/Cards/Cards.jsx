import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";

export const Cards = ( { title, price, image }) => {
  return (
    <div className="bg-zinc-50/2 shadow-sm p-5 rounded-xl">
      <div className="flex justify-between">
        <span className="text-zinc-400 text-3xl">
          <FaHeart />
        </span>
        <button className="bg-gradient-to-b mx-aut text-white from-orange-400 to-orange-500 text-xl px-4 py-2 rounded-lg">
          <FaPlus />
        </button>
      </div>
      <div className="w-full h-50 m-auto">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-semibold ">{title}</h3>
        <p className="text-2xl font-bold mt-4 mb-3">${price}</p>
        <Button content="Shop Now" />
      </div>
    </div>
  );
};
