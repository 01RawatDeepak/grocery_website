import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { LuCopyright } from "react-icons/lu";

export const Footer = () => {
  return (
    <section className="bg-zinc-100 py-20">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="flex flex-wrap  gap-y-12">
          <div className="flex-1 basis-[300px]">
            <a
              href="#"
              className="font-bold md:text-2xl lg:text-2xl xl:text-3xl text-xl text-black "
            >
              Gr
              <span className="text-orange-400 font-bold">O</span>cify
            </a>
            <p className="text-zinc-600 mt-6 max-w-[350px]">
              Bred for a high content of beneficial substances. Our products are
              all fresh and healthy.
            </p>
            <p className="text-zinc-800 mt-6">2025 &copy; All Right Reserved</p>
          </div>
          <ul className="flex-1">
            <li>
              <h5 className="text-zinc-800 font-bold text-2xl">Company</h5>
            </li>
            <li className="mt-6">
              <a href="#" className="text-zinc-800 hover:text-orange-500 ">
                About
              </a>
            </li>
            <li className="mt-6">
              <a href="#" className="text-zinc-800 hover:text-orange-500">
                FAQ'S
              </a>
            </li>
          </ul>
          <ul className="flex-1">
            <li>
              <h5 className="text-zinc-800 font-bold text-2xl">Support</h5>
            </li>
            <li className="mt-6">
              <a href="#" className="text-zinc-800 hover:text-orange-500 ">
                Support Center
              </a>
            </li>
            <li className="mt-6">
              <a href="#" className="text-zinc-800 hover:text-orange-500">
                Feedback
              </a>
            </li>
            <li className="mt-6">
              <a href="#" className="text-zinc-800 hover:text-orange-500">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="flex-1">
            <h5 className="text-zinc-800 font-bold text-2xl">Stay Connected</h5>
            <p className="text-zinc-600 mt-6">
              Question or Feedback? <br /> we'd love to hear from you
            </p>
            <div className="p-1 flex bg-white rounded-lg mt-6">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="Email address"
                className="h-[5vh] flex-1"
              />
              <button className="bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-2xl focus:outline-none hover:orange-600 cursor-pointer text-white">
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
