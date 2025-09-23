import { Swiper, SwiperSlide } from "swiper/react"; // npm install swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules"; // Removed Navigation
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

const slides = [
  {
    img: "https://res.cloudinary.com/df5utoo6u/image/upload/v1758633168/banner1_nwntmo.jpg",
    alt: "Image 1",
    link: "/enroll",
    btnColor: "bg-gradient-to-r from-[rgb(220,38,38)] to-[rgb(37,99,235)] hover:from-[rgb(185,28,28)] hover:to-[rgb(29,78,216)] text-white",
    text : "BizPilot — AI Assistant for Small Business",
  },
  {
    img: "https://res.cloudinary.com/df5utoo6u/image/upload/v1758633513/63d57adb-aea7-4896-8eb3-96179a48ff40.png",
    alt: "Image 2",
    link: "/enroll",
    btnColor: "bg-gradient-to-r from-[rgb(220,38,38)] to-[rgb(37,99,235)] hover:from-[rgb(185,28,28)] hover:to-[rgb(29,78,216)] text-white",
    text: "Turn your idea into a business in minutes."
  },
  {
    img: "https://res.cloudinary.com/df5utoo6u/image/upload/v1757263229/HomePagePic1_erz15a.jpg",
    alt: "Image 3",
    link: "/enroll",
    btnColor: "bg-gradient-to-r from-[rgb(220,38,38)] to-[rgb(37,99,235)] hover:from-[rgb(185,28,28)] hover:to-[rgb(29,78,216)] text-white",
    text: "BizPilot — AI Assistant for Small Business"
  },
  {
    img: "https://res.cloudinary.com/df5utoo6u/image/upload/v1757263230/HomePagePic2_fttq6g.jpg",
    alt: "Image 4",
    link: "/enroll",
    btnColor: "bg-gradient-to-r from-[rgb(220,38,38)] to-[rgb(37,99,235)] hover:from-[rgb(185,28,28)] hover:to-[rgb(29,78,216)] text-white",
    text:"Turn your idea into a business in minutes."  
  }
];

const Banner = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.05)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full h-60 md:h-96 lg:h-[600px] bg-black"
    >
      <Swiper
        modules={[Pagination, Autoplay]} // Removed Navigation
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.img}>
            <motion.div
              variants={fadeIn("up", 0.08 + i * 0.05)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative w-full h-full"
            >
              <motion.img
                variants={fadeIn("up", 0.1 + i * 0.05)}
                initial="hidden"
                whileInView="show"
                src={slide.img}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              <motion.div
                variants={fadeIn("up", 0.12 + i * 0.05)}
                initial="hidden"
                whileInView="show"
                className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-center pb-8 text-center"
              >
                <motion.h2
                  variants={fadeIn("up", 0.14 + i * 0.05)}
                  initial="hidden"
                  whileInView="show"
                  className="text-xl md:text-2xl font-bold md:font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 tracking-wide drop-shadow-lg font-montserrat mx-4 "
                >
                  {slide.text}
                </motion.h2>
                <Link to={slide.link}>
                  <motion.button
                    variants={fadeIn("up", 0.16 + i * 0.05)}
                    initial="hidden"
                    whileInView="show"
                    className={`${slide.btnColor} text-white font-semibold md:font-bold  mt-4 px-2 md:px-4 py-1 md:py-2 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105`}
                  >
                    Start Demo
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Banner;