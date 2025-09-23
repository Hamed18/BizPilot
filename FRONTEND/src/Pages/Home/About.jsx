import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

const About = () => {
  return (
    <motion.section
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="sm:mx-4 md:mx-12 lg:16 flex flex-col md:flex-row gap-4 items-center md:items-start py-8 md:py-12"
      id="about"
    >
      {/* Left Side - Content */}
      <motion.div
        variants={fadeIn('left', 0.3)}
        className="text-center md:text-left md:w-1/2 space-y-4 p-2"
      >
        <motion.h3
          variants={textVariant(0.4)}
          className="font-bold text-lg md:text-xl"
        >
          Curious what BizPilot is all about?
        </motion.h3>
        <motion.h2
          variants={textVariant(0.5)}
          className="font-bold text-2xl lg:text-3xl md:text-3xl"
        >
          Your AI-Powered Startup Co-Pilot
        </motion.h2>
        <motion.p
          variants={fadeIn('up', 0.6)}
          className="text-lg md:text-xl"
        >
          BizPilot is designed to help aspiring entrepreneurs and innovators bring their ideas to life. 
          From validating concepts to forecasting revenue and mapping out business roadmaps, 
          BizPilot gives you the tools you need to move forward with confidence. 
          Whether you are just brainstorming or preparing to launch, BizPilot acts as your 
          trusted partner every step of the way.
        </motion.p>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        variants={fadeIn('right', 0.3)}
        className="relative md:w-1/2"
      >
        <motion.img
          variants={fadeIn('up', 0.4)}
          src="https://res.cloudinary.com/df5utoo6u/image/upload/v1757263233/HomePagePic3_wdl3we.jpg"
          alt="BizPilot illustration"
          className="rounded-xl w-full"
        />
        <motion.div
          variants={fadeIn('up', 0.5)}
          className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 rounded-b-xl px-4 py-2"
        >
          <p className="text-white text-center text-lg md:text-xl font-semibold">
            Empowering startups with insights, forecasts, and smart planning.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
