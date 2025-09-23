import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion"; // Adjust path if needed

const CurrentEvent = () => {
  return (
    <motion.section
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="flex flex-col items-center my-2 md:my-4"
      id="current-event"
    >
      <motion.h2
        variants={textVariant(0.3)}
        className="font-bold text-2xl lg:text-3xl text-violet-500 text-center py-2"
      >
        Next Event
      </motion.h2>
      <motion.h3
        variants={textVariant(0.4)}
        className="font-bold text-2xl lg:text-3xl text-violet-500 text-center py-2"
      >
        Go On - Chittagong eSports Showdown 2025
      </motion.h3>
      <Link to="/events">
        <motion.img
          variants={fadeIn('up', 0.5)}
          src="https://res.cloudinary.com/df5utoo6u/image/upload/v1757273311/2cba5ff7-ffb3-4c8c-bdac-0b12bf0a3465.png"
          alt="Current Event"
          className="py-2 md:py-4 max-w-full h-auto rounded-lg shadow-md"
        />
      </Link>
      <Link to="/events">
  <motion.button
    variants={fadeIn('up', 0.6)}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    className="
      flex items-center gap-2
      bg-gradient-to-r from-violet-500 to-blue-500
      text-white font-bold
      px-4 py-2
      rounded-full
      shadow-lg
      transition-all
      hover:from-violet-600 hover:to-blue-600
      hover:shadow-xl
      focus:outline-none
      focus:ring-2 focus:ring-offset-2 focus:ring-blue-400
      my-2 md:my-4
    "
  >
    <span className="mr-2 text-lg md:text-xl">View Event</span>
    <FaArrowRight className="text-white text-xl" />
  </motion.button>
</Link>
    </motion.section>
  );
};

export default CurrentEvent;