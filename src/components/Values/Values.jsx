
import { Heading } from "../Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from "../../assets/basket-full-vegetables.png";
export const Values = () => {
  const leftValue = values.slice(0, 2).map((items) => {
    return (
      <div key={items.id} className="flex md:flex-row-reverse flex-row gap-7 md:mb-0 mb-15">
        <div className="items-center flex  ">
          <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">{items.icon}</span>
        </div>
        <div className="md:text-right text-left">
          <h3 className="text-zinc-800 text-3xl font-bold">{items.title}</h3>
          <p className="text-zics-600 mt-2">{items.para}</p>
        </div>
      </div>
    );
  });
  const rightValue = values.slice(2).map((items) => {
    return (
      <div  key={items.id} className="flex gap-7 md:mb-0 mb-15">
        <div className="flex items-center ">
          <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">{items.icon}</span>
        </div>
        <div className="">
          <h3 className="text-zinc-800 text-3xl font-bold">{items.title}</h3>
          <p className="text-zics-600 mt-2">{items.para}</p>
        </div>
      </div>
    );
  });
  return (
    <>
      <section>
        <div className="max-w-[1400px]  mx-auto px-10 py-20">
          <Heading highlight="Our" heading=" Values" />
          <div className="flex md:flex-row flex-col mt-15  items-center">
            <div className="md:min-h-100 flex md:justify-between flex-col">{leftValue}</div>
            <div className="1/2 hidden md:flex">
              <img src={Basket} alt="" className="" />
            </div>
            <div className="md:min-h-100 flex md:justify-between flex-col">
                {rightValue}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
const values = [
  {
    id: 1,
    title: "Trust",
    para: "It is a long established fact that a render  will be distracted bt the readable.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "It is a long established fact that a render  will be distracted bt the readable.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "It is a long established fact that a render  will be distracted bt the readable.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Organic",
    para: "It is a long established fact that a render  will be distracted bt the readable.",
    icon: <FaSeedling />,
  },
];
