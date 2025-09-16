import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";

export const Cards = ( { title, price, image }) => {
  return (
    <div className="bg-zinc-100 p-5">
      <div className="flex justify-between">
        <span className="text-zinc-100 text-3xl">
          <FaHeart />
        </span>
        <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-xl px-4 py-2 rounded-lg">
          <FaPlus />
        </button>
      </div>
      <div className="w-full h-50">
        <img src={image} alt={title} />
      </div>
      <div className="text-center">
        <h3 className="">{title}</h3>
        <p>{price}</p>
        <Button content="Shop Now" />
      </div>
    </div>
  );
};
