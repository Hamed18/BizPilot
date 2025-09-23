import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import data from "../Blog/Data/data";

const BlogPosts = data.BlogPosts;
const featuredBlogs = BlogPosts.filter((blog) => blog.posttype === "feature");

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
    transition: { type: "spring", duration: 0.7, delay },
  },
});

const NewsSlider = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.05)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full border-t border-b border-gray-300 px-4"
    >
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        loop
        pagination={false} // dots invisible
      >
        {featuredBlogs.map((blog, i) => (
          <SwiperSlide key={blog.id}>
            <motion.div
              variants={fadeIn("up", 0.08 + i * 0.05)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-row items-center w-full min-h-[160px]"
            >
              {/* Image */}
              <div className="flex-shrink-0 w-1.5/3 h-40 md:h-56">
                <img
                  src={blog.img}
                  className="w-full h-full object-cover rounded-md"
                  alt={blog.title}
                />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center ml-4 w-1.5/3">
                <Link to={`/blog/${blog.id}`}>
                  <h3 className="text-lg md:text-2xl text-slate-800 font-bold hover:underline underline-offset-4">
                    {blog.title}
                  </h3>
                </Link>
                {/* Optional description */}
                {/* <p className="text-sm md:text-base text-gray-700 mt-1 line-clamp-3">
                  {blog.desc}...
                </p> */}
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default NewsSlider;
