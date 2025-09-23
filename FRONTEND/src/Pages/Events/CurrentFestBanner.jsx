import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // npm install swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import a from "../../../src/assets/Events/gatewayCover1.jpg";
import b from "../../../src/assets/Events/neon.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Simple fadeIn variant
const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.7,
      delay,
    },
  },
});

const CurrentFestBanner = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.05)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex justify-center w-full bg-gray-100 my-4 md:my-6"
    >
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full h-60 md:h-96 lg:h-[600px] max-w-6xl"
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="h-full"
        >
          <SwiperSlide>
            <motion.div
              variants={fadeIn("up", 0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative w-full h-full"
            >
              <motion.img
                variants={fadeIn("up", 0.17)}
                initial="hidden"
                whileInView="show"
                src="https://res.cloudinary.com/df5utoo6u/image/upload/v1757263233/HomePagePic3_wdl3we.jpg"
                alt="Library Image 1"
                className="w-full h-full object-cover rounded-lg"
              />
              {/* 
              <motion.div
                variants={fadeIn("up", 0.19)}
                initial="hidden"
                whileInView="show"
                className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center p-4"
              >
                <motion.h2
                  variants={fadeIn("up", 0.21)}
                  initial="hidden"
                  whileInView="show"
                  className="text-2xl md:text-4xl text-white font-bold text-center"
                >
                  Boost your Public Speaking Skill
                </motion.h2>
                <Link to="/join">
                  <motion.button
                    variants={fadeIn("up", 0.23)}
                    initial="hidden"
                    whileInView="show"
                    className="mt-4 px-6 py-2 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-lg transition duration-200"
                  >
                    Join
                  </motion.button>
                </Link>
              </motion.div>
              */}
            </motion.div>
          </SwiperSlide>

          {/* 
          <SwiperSlide>
            <motion.div
              variants={fadeIn("up", 0.25)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative w-full h-full"
            >
              <motion.img
                variants={fadeIn("up", 0.27)}
                initial="hidden"
                whileInView="show"
                src="https://res.cloudinary.com/df5utoo6u/image/upload/v1736013961/neon_c9skef.jpg"
                alt="Library Image 2"
                className="w-full h-full rounded-lg"
              />
              <motion.div
                variants={fadeIn("up", 0.29)}
                initial="hidden"
                whileInView="show"
                className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center p-4"
              >
                <motion.h2
                  variants={fadeIn("up", 0.31)}
                  initial="hidden"
                  whileInView="show"
                  className="text-2xl md:text-4xl text-white font-bold text-center"
                >
                  Be a Part of the Legacy
                </motion.h2>
                <Link to="/join">
                  <motion.button
                    variants={fadeIn("up", 0.33)}
                    initial="hidden"
                    whileInView="show"
                    className="mt-4 px-6 py-2 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-lg transition duration-200"
                  >
                    Join
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </SwiperSlide>
          */}

        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default CurrentFestBanner;