import React from "react";
import { useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
export const Navbar = () => {
  // function mobileMenu(){
  // const mobileMenu= document.getElementById('mobileContainer');
  // let visbile= true;
  // if(visbile== true){
  //   mobileMenu.style('display':'block');
  //   visbile= false;
  // }else{
  //   mobileMenu.style('display':'none');
  //   visbile =true;
  // }
  const [isVisible, setIsVisible] = useState(false);
  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };
  // }
  return (
    <>
      <header className="bg-white fixed top-0  right-0 left-0">
        <nav className="max-w-[1400px] md:h-[14vh] h-[10vh] px-10  items-center m-auto flex justify-between">
          {/* logo */}
          <a
            href="#"
            className="font-bold md:text-2xl lg:text-2xl xl:text-3xl text-xl text-black "
          >
            <span class="text-orange-400">O</span>ne{" "}
            <span class="text-orange-400 font-bold">M</span>in Gr
            <span class="text-orange-400 font-bold">oc</span>ery
          </a>
          {/* Desktop Menu Bar */}
          <ul className="lg:flex items-center md:gap-x-6 lg:gap-x-6 xl:gap-x-15 hidden">
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
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="text-zinc-800 text-3xl lg:hidden"
              onClick={toggleMenu}
            >
              <motion.div
                key={isVisible ? "close" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isVisible ? <RxCross2 /> : <TbMenu2 />}
              </motion.div>
            </motion.button>
          </div>
        </nav>
      </header>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-[10vh] left-0 right-0 bottom-0 z-40 flex justify-end  mt-10"
            onClick={toggleMenu} // 👈 closes menu when clicking overlay
          >
            {/* Menu Box */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white backdrop-blur-md shadow-lg w-[70%] max-w-md h-full p-6 flex flex-col gap-y-16"
              onClick={(e) => e.stopPropagation()} // 👈 prevents closing when clicking inside menu
            >
              {["Home", "About Us", "Process", "Contact Us"].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ scale: 1.1, color: "#f97316" }}
                  className="font-semibold text-xl sm:text-2xl md:text-3xl text-black"
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
