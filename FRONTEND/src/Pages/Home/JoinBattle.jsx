import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion"; 
import { Link } from "react-router-dom";

const JoinBattle = () => {
  return (
    <section className="JoinBattle max-w-6xl mx-auto px-4 mb-16">
      
      {/* Animated Headline */}
      <motion.h2
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        className="text-2xl md:text-4xl font-bold text-center mb-6 mt-6"
      >
        Are you ready to launch your startup idea?
      </motion.h2>

      {/* Video */}
      <motion.div
        variants={fadeIn("up", 0.85)}
        initial="hidden"
        whileInView="show"
        className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg"
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/dNZXLH4xeAs?autoplay=1&mute=1&controls=1"
          title="BizPilot Teaser"
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
        />
      </motion.div>

      {/* Join Button */}
      <motion.div
        variants={fadeIn("up", 0.9)}
        initial="hidden"
        whileInView="show"
        className="flex justify-center mt-8 mb-6"
      >
        <Link to="/signup">
          <button className="px-6 py-2 bg-yellow-400 hover:bg-red-400 text-violet-500 font-bold rounded-full shadow-md transition duration-300">
            Join Now
          </button>
        </Link>
      </motion.div>
      
    </section>
  );
};

export default JoinBattle;
