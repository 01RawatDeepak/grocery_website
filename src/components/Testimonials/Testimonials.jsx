import { section } from "framer-motion/client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Heading } from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import Customer4 from "../../assets/customer4.jpg";
import Customer5 from "../../assets/customer5.jpg";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export const Testimonials = () => {
  return (
    <section className="max-w-[14000px] mx-auto px-10 py-20">
      <Heading highlight="Customer" heading="Saying" />
      <div className="flex justify-end gap-x-3 mb-4 ">
        <button className="text-2xl custom-prev  w-11 h-11 bg-zinc-100 flex justify-center items-center text-zinc-800 hover:bg-gradient-to-b hover:from-orange-500 hover:to-orange-400 hover:text-white cursor-pointer rounded-lg">
          <IoIosArrowBack />
        </button>
        <button className="text-2xl custom-next w-11 h-11 bg-zinc-100 flex justify-center items-center text-zinc-800 hover:bg-gradient-to-b hover:from-orange-500 hover:to-orange-400 hover:text-white cursor-pointer rounded-lg">
          <IoIosArrowForward />
        </button>
      </div>
      <Swiper
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
        {testimonials.map((items) => {
          return (
            <SwiperSlide className="bg-zinc-100 p-8">
              <div className="flex gap-5 items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-red-500 outline-2 outline-orange-500 outline-offset-4">
                  <img src={`${items.image}`} className="w-full h-full" />
                </div>
                <div className="">
                  <h5 className="text-xl font-bold">{items.name}</h5>
                  <p className="text-zinc-600">{items.profession}</p>
                  <span className="flex gap-1 text-yellow-400 mt-3 text-xl">
                    {Array.from({ length: items.rating }, (_, index) => (
                      <FaStar />
                    ))}
                    {items.rating % 1 !== 0 && <FaStarHalfAlt/>}

                    {Array.from(
                      { length: 5 - Math.ceil(items.rating) },
                      (_, index) => (
                        <FaRegStar key={index} />
                      )
                    )}
                  </span>
                </div>
              </div>
              <div className="mt-10 min-h-[10vh]">
                <p className="text-zinc-600">{items.para}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <div className="bg-zinc-100 p-8">
        <div className="flex gap-5 items-center">
          <div className="w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4"></div>
          <div className="">
            <h5 className="text-xl font-bold">Name</h5>
            <p className="text-zinc-600">Profession</p>
            <span>stars</span>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-zinc-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            laborum repellat eos maxime similique nobis sit quasi? Qui, vel
            voluptas.
          </p>
        </div>
      </div> */}
    </section>
  );
};
const testimonials = [
  {
    id: 1,
    name: "Early Johnson",
    profession: "Food Blogger",
    rating: 4.5,
    para: "The flavors were absolutely delightful, I would definitely recommend this place!",
    image: Customer1,
  },
  {
    id: 2,
    name: "Sophia Lee",
    profession: "Travel Enthusiast",
    rating: 5,
    para: "Amazing experience! The ambiance and service were top-notch.",
    image: Customer2,
  },
  {
    id: 3,
    name: "Michael Smith",
    profession: "Software Engineer",
    rating: 4,
    para: "The food was great, but the waiting time could be improved.",
    image: Customer3,
  },
  {
    id: 4,
    name: "Aisha Khan",
    profession: "Lifestyle Vlogger",
    rating: 4.8,
    para: "Loved the cozy atmosphere and the staff was super friendly.",
    image: Customer4,
  },
  {
    id: 5,
    name: "David Miller",
    profession: "Fitness Coach",
    rating: 3.9,
    para: "Healthy options were good, but a bit more variety would be nice.",
    image: Customer5,
  },
];
