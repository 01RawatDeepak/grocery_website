import React from "react";
import { Heading } from "../Heading/Heading";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

export const Process = () => {
  const renderSteps = steps.map((items) => {
    return (
      <div className={`flex-1 basis-[300px] ${items.id%2===0 ?'md:-mt-100':''}`} key={items.id}>
        <span className=" flex rounded-full mx-auto justify-center items-center text-white w-18 h-18 text-8xl bg-zinc-800 outline-[3px] outline-offset-7 outline-zinc-800 outline-dashed ">{items.number}</span>
        <div className="">
          <div className="flex items-center mt-10 gap-x-5">
            <span className=" flex bg-gradient-to-b w-15 h-15 rounded-full justify-center items-center text-3xl from-orange-400 to-orange-500">{items.icon}</span>
          
          <div className=" flex-1">
            <h4 className="text-zinc-800 text-2xl font=bold">{items.title}</h4>
            <p className="text-zinc-600 mt-2">{items.para}</p>
          </div></div>
        </div>
      </div>
    );
  });
  return (
    <section className="max-w-[1400px] px-10 mx-auto py-20">
      <div className="mr-auto w-fit">
        <Heading highlight="Our" heading="Process" />
        <div className="flex flex-wrap gap-y-17 md:pt-50 md:mt-20 mt-10 items-center justify-center  ">
            {renderSteps}
        </div>
      </div>
    </section>
  );
};
const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "It is a long established fact that a rander",
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "It is a long established fact that a rander",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Controll",
    para: "It is a long established fact that a rander",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistic",
    para: "It is a long established fact that a rander",
    icon: <BsTruck />,
  },
];
