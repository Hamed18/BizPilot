import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import {
  FaGamepad,
  FaUsers,
  FaGift,
  FaMobileAlt,
  FaChild,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { GiPartyPopper } from "react-icons/gi";
import { RiTeamLine } from "react-icons/ri";

const CurrentFest = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className=""
      id="current-fest"
    >
      <motion.div
        variants={fadeIn("up", 0.3)}
        className="p-4 flex justify-center"
      >
        <motion.div
          variants={fadeIn("up", 0.4)}
          className="max-w-2xl w-full mx-auto rounded-xl shadow-2xl my-4 bg-white px-6 py-6"
        >
          {/* Title */}
          <motion.h1
            variants={textVariant(0.5)}
            className="text-3xl font-extrabold text-center text-violet-600 flex items-center justify-center gap-3 mb-6"
          >
            <MdLocationOn className="text-violet-500 text-3xl" />
            Go On – Chittagong eSports Showdown 2025
            <GiPartyPopper className="text-yellow-400 text-3xl" />
          </motion.h1>

          <div className="space-y-6">
            {/* <motion.div
              variants={fadeIn("left", 0.6)}
              className="border-b pb-6"
            >
              <motion.h2
                variants={textVariant(0.7)}
                className="text-xl font-bold text-violet-500 my-2 flex items-center gap-2 justify-center"
              >
                <FaGamepad className="text-violet-500" />
                What is it?{" "}
                <span role="img" aria-label="thinking">
                  🤔
                </span>
              </motion.h2>
              <motion.p
                variants={fadeIn("right", 0.8)}
                className="my-2 text-center text-black-500 flex items-center justify-center gap-2"
              >
                <FaUsers className="text-blue-400" />
                Chittagong is about to witness one of its most exciting gaming
                events yet! Go On – Chittagong eSports Showdown 2025 is here to
                bring together the best of local talent, passionate students,
                and Free Fire fans from across the city.{" "}
                <FaGift className="text-yellow-400" />{" "}
                <span role="img" aria-label="money">
                  💰
                </span>{" "}
                With a prize pool of 1,50,000 Taka, this event promises a
                competitive and unforgettable experience for everyone involved.
              </motion.p>
              <motion.p
                variants={fadeIn("left", 0.9)}
                className="my-2 text-center text-black-500 flex items-center justify-center gap-2"
              >
                <FaGamepad className="text-violet-500" />
                This showdown isn’t just about competition.{" "}
                <span role="img" aria-label="trophy">
                  🏆
                </span>{" "}
                It’s about creating a stage where gamers can prove their skills,
                build confidence, and feel the energy of a true eSports
                tournament. Our mission is to promote eSports in Bangladesh and
                to show that gaming can be more than a hobby—it can be a
                community, a culture, and a pathway for future opportunities.{" "}
                <span role="img" aria-label="rocket">
                  🚀
                </span>
              </motion.p>
              <motion.p
                variants={fadeIn("right", 1.0)}
                className="my-2 text-center text-black-500 flex items-center justify-center gap-2"
              >
                <FaMobileAlt className="text-green-500" />
                The spotlight of this event will be on Free Fire{" "}
                <span role="img" aria-label="fire">
                  🔥
                </span>
                , one of the most popular battle royale games in the country.
                Teams will go head-to-head in fast-paced matches where strategy,
                reflexes, and teamwork will determine the champions. Every round
                will be a test of focus and determination, and the winners will
                walk away not only with prizes but also with recognition as some
                of Chittagong’s finest players.{" "}
                <span role="img" aria-label="medal">
                  🥇
                </span>
              </motion.p>
              <motion.p
                variants={fadeIn("left", 1.1)}
                className="my-2 text-center text-black-500 flex items-center justify-center gap-2"
              >
                <RiTeamLine className="text-pink-400" />
                Beyond the competition, the Go On – Chittagong eSports Showdown
                2025 is designed to bring people together.{" "}
                <span role="img" aria-label="handshake">
                  🤝
                </span>{" "}
                Students and young people will get the chance to connect and
                explore the exciting world of eSports. Spectators can cheer for
                their friends, discover new talent, and feel the rush of a live
                gaming atmosphere.{" "}
                <span role="img" aria-label="cheering">
                  🙌
                </span>
              </motion.p>
            </motion.div> */}
            <motion.div
  variants={fadeIn('left', 0.6)}
  className="border-b pb-6"
>
  <motion.h2
    variants={textVariant(0.7)}
    className="text-xl font-bold text-violet-500 my-2 flex items-center gap-2 justify-center"
  >
    <FaGamepad className="text-violet-500" />
    What is it? <span role="img" aria-label="thinking">🤔</span>
  </motion.h2>

  <motion.div variants={fadeIn('right', 0.8)} className="my-2 bg-gray-50 rounded-lg p-4">
    <p className="text-center text-black-500">
      <FaUsers className="text-blue-400 inline mr-1" />
      Chittagong is about to witness one of its most exciting gaming events yet! Go On – Chittagong eSports Showdown 2025 is here to bring together the best of local talent, passionate students, and Free Fire fans from across the city.
      <FaGift className="text-yellow-400 inline mx-1" />
      <span role="img" aria-label="money">💰</span>
      With a prize pool of 1,50,000 Taka, this event promises a competitive and unforgettable experience for everyone involved.
    </p>
  </motion.div>

  <motion.div variants={fadeIn('left', 0.9)} className="my-2 bg-gray-50 rounded-lg p-4">
    <p className="text-center text-black-500">
      <FaGamepad className="text-violet-500 inline mr-1" />
      This showdown isn’t just about competition.
      <span role="img" aria-label="trophy">🏆</span>
      It’s about creating a stage where gamers can prove their skills, build confidence, and feel the energy of a true eSports tournament. Our mission is to promote eSports in Bangladesh and to show that gaming can be more than a hobby—it can be a community, a culture, and a pathway for future opportunities.
      <span role="img" aria-label="rocket">🚀</span>
    </p>
  </motion.div>

  <motion.div variants={fadeIn('right', 1.0)} className="my-2 bg-gray-50 rounded-lg p-4">
    <p className="text-center text-black-500">
      <FaMobileAlt className="text-green-500 inline mr-1" />
      The spotlight of this event will be on Free Fire
      <span role="img" aria-label="fire">🔥</span>
      , one of the most popular battle royale games in the country. Teams will go head-to-head in fast-paced matches where strategy, reflexes, and teamwork will determine the champions. Every round will be a test of focus and determination, and the winners will walk away not only with prizes but also with recognition as some of Chittagong’s finest players.
      <span role="img" aria-label="medal">🥇</span>
    </p>
  </motion.div>

  <motion.div variants={fadeIn('left', 1.1)} className="my-2 bg-gray-50 rounded-lg p-4">
    <p className="text-center text-black-500">
      <RiTeamLine className="text-pink-400 inline mr-1" />
      Beyond the competition, the Go On – Chittagong eSports Showdown 2025 is designed to bring people together.
      <span role="img" aria-label="handshake">🤝</span>
      Students and young people will get the chance to connect and explore the exciting world of eSports. Spectators can cheer for their friends, discover new talent, and feel the rush of a live gaming atmosphere.
      <span role="img" aria-label="cheering">🙌</span>
    </p>
  </motion.div>
</motion.div>

            {/* Prerequisites section */}
            <motion.div
              variants={fadeIn("right", 1.2)}
              className="text-black-600 pt-6"
            >
              <motion.h1
                variants={textVariant(1.3)}
                className="text-2xl font-bold text-center text-violet-500 mb-2 md:mb-4 flex items-center gap-2 justify-center"
              >
                <FaGift className="text-yellow-400" />
                Prerequisites{" "}
                <span role="img" aria-label="clipboard">
                  📋
                </span>
              </motion.h1>
              <motion.p
                variants={fadeIn("left", 1.35)}
                className="flex items-center gap-2 justify-center"
              >
                ✓ No prior experience is required to participate.{" "}
                <span role="img" aria-label="thumbs up">
                  👍
                </span>
              </motion.p>
              <motion.p
                variants={fadeIn("right", 1.4)}
                className="flex items-center gap-2 justify-center"
              >
                ✓ Details of the competition:{" "}
                <span role="img" aria-label="sparkles">
                  ✨
                </span>
              </motion.p>
              <motion.ul
                variants={fadeIn("up", 1.45)}
                className="list-disc list-inside ml-4 space-y-2"
              >
                <motion.li
                  variants={fadeIn("left", 1.5)}
                  className="flex items-center gap-2"
                >
                  <FaGamepad className="text-violet-500" />
                  Ground: Battle ground{" "}
                  <span role="img" aria-label="stadium">
                    🏟️
                  </span>
                </motion.li>
                <motion.li
                  variants={fadeIn("right", 1.55)}
                  className="flex items-center gap-2"
                >
                  <FaUsers className="text-blue-400" />
                  Format: Each team consist of 5 players (1 extra player){" "}
                  <span role="img" aria-label="team">
                    👥
                  </span>
                </motion.li>
                <motion.li
                  variants={fadeIn("left", 1.6)}
                  className="flex items-center gap-2"
                >
                  <FaChild className="text-pink-400" />
                  Age must be above 11{" "}
                  <span role="img" aria-label="child">
                    🧒
                  </span>
                </motion.li>
                <motion.li
                  variants={fadeIn("right", 1.65)}
                  className="flex items-center gap-2"
                >
                  <FaMobileAlt className="text-green-500" />
                  Only mobile players are allowed{" "}
                  <span role="img" aria-label="mobile phone">
                    📱
                  </span>
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default CurrentFest;
