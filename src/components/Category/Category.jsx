import React from "react";
import Fruits from "../../assets/fruits-and-veggies.png";
import SeaFood from "../../assets/meat-and-seafood.png";
import Dairy from "../../assets/dairy-and-eggs.png";
import { Heading } from "../Heading/Heading";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
// import { div } from "framer-motion/client";

export const Category = () => {
   const renderCards = CategoryData.map((card) => (
    <div key={card.id} className="flex-1 basis-[300px] mb-15">
      <div className="w-full min-h-[30vh] relative -mb-10">
        <img src={card.image} alt={card.title} className="absolute bottom-0" />
      </div>
      <div className="bg-zinc-100 pt-17 p-8 rounded-xl">
        <h3 className="text-3xl text-zinc-800 font-bold">{card.title}</h3>
        <p className="text-zinc-600 mt-3 mb-9">{card.description}</p>
        <div className="mt-3">
          {/* <Button content="See All" /> */}
          <Link to={`${card.slug}`} className="bg-gradient-to-b from bg-orange-400 to-bg-orange-500  text-white  px-8 py-3 rounded-lg text-lg hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer">See All</Link>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <section>
        <div className="max-w-[1400px]  mx-auto px-10 py-20">
          <Heading highlight="Shop" heading=" by Category" />
          {/* Cata=egoryCards */}
          <div className="flex gap-10 md:mt-15  flex-wrap">{renderCards}</div>
        </div>
      </section>
    </>
  );
};
const CategoryData = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description:
      "Fresh and organic fruits and vegetables for your daily nutrition",
    image: Fruits,
    slug: '/fruits'
  },
  {
    id: 2,
    title: "Dairy Products",
    description: "Pure and healthy milk, butter, cheese, and other dairy items",
    image: Dairy,
    slug: '/dairy'
  },
  {
    id: 3,
    title: "Meat & SeaFood",
    description: "High-quality fresh meat, chicken, and seafood for every meal",
    image: SeaFood,
    slug: '/sea-food'
  },
];
