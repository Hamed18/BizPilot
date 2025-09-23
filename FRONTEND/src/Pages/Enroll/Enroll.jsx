import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion"; // adjust the path if needed

const Enroll = () => {
  return (
    <section className="enroll">
      {/* First Banner Section */}
      <motion.section
        variants={fadeIn("up", 0.7)}
        initial="hidden"
        whileInView="show"
        className="relative bg-indigo-700 text-white text-center px-6 py-16 rounded-2xl shadow-md sm:mb-12 md:mb-16 overflow-hidden"
      >
        {/* Background Gaming Image */}
        <motion.div
          variants={fadeIn("up", 0.71)}
          className="absolute inset-0 opacity-20"
          initial="hidden"
          whileInView="show"
        >
          <motion.img
            variants={fadeIn("up", 0.715)}
            initial="hidden"
            whileInView="show"
            src="https://res.cloudinary.com/df5utoo6u/image/upload/v1757263229/HomePagePic1_erz15a.jpg"
            alt="Gaming event"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          variants={fadeIn("up", 0.72)}
          initial="hidden"
          whileInView="show"
          className="relative z-10 max-w-4xl mx-auto"
        >
          <motion.h1
            variants={fadeIn("up", 0.73)}
            initial="hidden"
            whileInView="show"
            className="text-2xl md:text-4xl font-bold mb-6"
          >
            Enrollment for{" "}
            <span className="text-yellow-300">
              Go On - Chittagong eSports Showdown 2025
            </span>{" "}
            is Coming Next!
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.74)}
            initial="hidden"
            whileInView="show"
            className="italic text-lg md:text-xl font-medium"
          >
            Stay connected and gear up for the ultimate gaming showdown.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Video Section */}
      <motion.section
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        className="rounded-2xl overflow-hidden shadow-lg mb-16 max-w-6xl mx-auto px-4"
      >
        {/* Animated Headline */}
        <motion.h2
          variants={fadeIn("up", 0.85)}
          initial="hidden"
          whileInView="show"
          className="text-2xl md:text-4xl font-bold text-center mb-6 mt-6"
        >
          Are you ready to prove yourself?
        </motion.h2>

        {/* Video */}
        <div className="relative w-full h-[350px]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/GCWkjdE8TQw?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1"
            title="Go On eSports Teaser"
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
          />
        </div>
      </motion.section>
    </section>
  );
};

export default Enroll;
