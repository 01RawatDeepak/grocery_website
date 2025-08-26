import React from "react";
import { GoHeartFill } from "react-icons/go";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
export const Navbar = () => {
  return (
    <>
      <header className="bg-white fixed top-0  right-0 left-0">
        <nav className="max-w-[1400px] md:h-[14vh] h-[10vh] px-10  items-center m-auto flex justify-between">
          {/* logo */}
          <a href="#" className="font-bold md:text-3xl text-xl text-black">
            <span class="text-orange-400">O</span>ne{" "}
            <span class="text-orange-400 font-bold">M</span>in Gr
            <span class="text-orange-400 font-bold">oc</span>ery
          </a>
          {/* Desktop Menu Bar */}
          <ul className="md:flex items-center gap-x-15 hidden">
            <li>
              <a
                href="#"
                className="font-bold tracking-wider text-orange-500 hover:text-orange-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-bold tracking-wider text-zinc-800 hover:text-orange-500"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-bold tracking-wider text-zinc-800 hover:text-orange-500"
              >
                Process
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-bold tracking-wider text-zinc-800 hover:text-orange-500"
              >
                Contact Us
              </a>
            </li>
          </ul>
          {/* Nav Action */}
          <div className="flex items-center gap-x-5">
            {/* input search field  */}
            <div className="md:flex border-2 border-orange-500 rounded-full p-1 hidden">
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Search..."
                autoComplete="off"
                className="flex-1  px-3 focus:outline-none"
              />
              <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
                <IoSearchOutline />
              </button>
            </div>
            <a href="" className="text-zinc-800 text-2xl">
              <GoHeartFill />
            </a>
            <a href="" className="text-zinc-800 text-2xl">
              <HiMiniShoppingBag />
            </a>
            {/* mobile menu  */}
            <a href="#" className="text-zinc-800 text-3xl md:hidden ">
              <TbMenu2 />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};
