import {
  FaGamepad,
  FaLeaf,
  FaPhoneAlt,
  FaEnvelope,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

const SectionTitle = ({ subtitle, title }) => (
  <motion.div variants={fadeIn("up", 0.2)} className="mb-6">
    <motion.p
      variants={textVariant(0.3)}
      className="text-green-600 font-semibold uppercase"
    >
      {subtitle}
    </motion.p>
    <motion.h2 variants={textVariant(0.4)} className="text-3xl font-bold">
      {title}
    </motion.h2>
    <motion.div
      variants={fadeIn("up", 0.5)}
      className="w-16 h-1 bg-green-500 mt-2 mb-4"
    />
  </motion.div>
);

const About = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-black-500"
    >
      {/* Hero Banner with Image */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        className="relative h-[300px] md:h-[400px] overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <motion.img
            variants={fadeIn("up", 0.3)}
            src="https://res.cloudinary.com/df5utoo6u/image/upload/v1757263230/HomePagePic2_fttq6g.jpg"
            alt="Cycling adventure"
            className="w-full h-full object-cover"
          />
          <motion.div
            variants={fadeIn("up", 0.4)}
            className="absolute inset-0 bg-gradient-to-r from-red-700/80 to-blue-700/80"
          />
        </div>

        {/* Content */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          className="relative z-10 h-full flex items-center justify-center text-center px-4 text-white"
        >
          <motion.div variants={fadeIn("up", 0.6)} className="max-w-2xl">
            <motion.h1
              variants={textVariant(0.7)}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Welcome to Go On
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.8)}
              className="text-lg md:text-xl mb-6"
            >
              Compete to win!
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* About Section */}
        <motion.section
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          className="mb-12"
        >
          <SectionTitle subtitle="We Are For Social Cause" title="About Us" />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.img
                variants={fadeIn("up", 0.35)}
                initial="hidden"
                whileInView="show"
                src="https://res.cloudinary.com/df5utoo6u/image/upload/v1757263233/HomePagePic3_wdl3we.jpg"
                alt="Go On"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div>
              <motion.p
                variants={fadeIn("up", 0.38)}
                initial="hidden"
                whileInView="show"
                className="leading-relaxed mb-4 font-semibold"
              >
                Go On is a new esports tournament organizer founded in 2025 with
                one clear goal: to give players the stage they deserve. Every
                match we host is built to challenge your skills, highlight your
                talent, and bring out the best in you and your team.
              </motion.p>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                className="leading-relaxed font-semibold"
              >
                Go On was founded in 2025, we believe every player has a shot at
                greatness, and our tournaments are designed to give you the
                opportunity to prove it. Whether you’re competing for glory,
                growth, or the thrill of the game, Go On is here to push you
                forward.
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Mission, Values, Contact */}
        {/* <motion.section
          variants={fadeIn("up", 0.5)}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <motion.div
            variants={fadeIn("left", 0.51)}
            className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition hover:-translate-y-1"
          >
            <motion.div variants={fadeIn("up", 0.52)}>
              <FaGamepad className="text-green-600 text-4xl mx-auto mb-4" />
            </motion.div>
            <motion.h3
              variants={textVariant(0.53)}
              className="font-bold text-xl mb-3 text-center text-gray-700"
            >
              Our Mission
            </motion.h3>
            <motion.p
              variants={fadeIn("up", 0.54)}
              className="text-center text-gray-700 font-semibold "
            >
              To empower gamer and esports communities with joy and
              entertainment.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.55)}
            className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition hover:-translate-y-1"
          >
            <motion.div variants={fadeIn("up", 0.56)}>
              <FaLeaf className="text-blue-500 text-4xl mx-auto mb-4" />
            </motion.div>
            <motion.h3
              variants={textVariant(0.57)}
              className="font-bold text-xl mb-3 text-center text-gray-700"
            >
              Our Values
            </motion.h3>
            <motion.ul
              variants={fadeIn("up", 0.58)}
              className="text-gray-700 space-y-2 text-center font-semibold"
            >
              <li>• Fair Play</li>
              <li>• Trust</li>
              <li>• Customer-Centricity</li>
              <li>• Inclusiveness</li>
            </motion.ul>
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.59)}
            className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition hover:-translate-y-1"
          >
            <motion.div variants={fadeIn("up", 0.6)}>
              <FaPhoneAlt className="text-yellow-600 text-3xl mx-auto mb-3" />
            </motion.div>
            <motion.h3
              variants={textVariant(0.61)}
              className="font-bold text-xl mb-3 text-center text-gray-700"
            >
              Contact Us
            </motion.h3>
            <motion.div
              variants={fadeIn("up", 0.62)}
              className="text-gray-700 space-y-2 text-center font-semibold"
            >
              <p className="flex items-center justify-center">
                <FaEnvelope className="mr-2" /> goonbdofficial@gmail.com
              </p>
              <p className="flex items-center justify-center">
                <FaPhoneAlt className="mr-2" /> +880 1806263784
              </p>
              <p className="mt-4 text-sm">Lalkhan Bazar, Chittagong</p>
            </motion.div>
          </motion.div>
        </motion.section> */}
        <motion.section
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div>
            <motion.div
              variants={fadeIn("left", 0.51)}
              initial="hidden"
              whileInView="show"
              className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition hover:-translate-y-1"
            >
              <motion.div variants={fadeIn("up", 0.52)}>
                <FaGamepad className="text-green-600 text-4xl mx-auto mb-4" />
              </motion.div>
              <motion.h3
                variants={textVariant(0.53)}
                className="font-bold text-xl mb-3 text-center"
              >
                Our Mission
              </motion.h3>
              <motion.p
                variants={fadeIn("up", 0.54)}
                className="text-center text-gray-700 font-semibold "
              >
                To empower gamer and esports communities with joy and
                entertainment.
              </motion.p>
            </motion.div>
          </div>

          <div>
            <motion.div
              variants={fadeIn("up", 0.55)}
              initial="hidden"
              whileInView="show"
              className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition hover:-translate-y-1"
            >
              <motion.div variants={fadeIn("up", 0.56)}>
                <FaLeaf className="text-blue-500 text-4xl mx-auto mb-4" />
              </motion.div>
              <motion.h3
                variants={textVariant(0.57)}
                className="font-bold text-xl mb-3 text-center"
              >
                Our Values
              </motion.h3>
              <motion.ul
                variants={fadeIn("up", 0.58)}
                className="text-gray-700 space-y-2 text-center font-semibold"
              >
                <li>• Fair Play</li>
                <li>• Trust</li>
                <li>• Customer-Centricity</li>
                <li>• Inclusiveness</li>
              </motion.ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              variants={fadeIn("right", 0.59)}
              initial="hidden"
              whileInView="show"
              className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition hover:-translate-y-1"
            >
              <motion.div variants={fadeIn("up", 0.6)}>
                <FaPhoneAlt className="text-yellow-600 text-3xl mx-auto mb-3" />
              </motion.div>
              <motion.h3
                variants={textVariant(0.61)}
                className="font-bold text-xl mb-3 text-center"
              >
                Contact Us
              </motion.h3>
              <motion.div
                variants={fadeIn("up", 0.62)}
                className="text-gray-700 space-y-2 text-center font-semibold"
              >
                <p className="flex items-center justify-center">
                  <FaEnvelope className="mr-2" /> goonbdofficial@gmail.com
                </p>
                <p className="flex items-center justify-center">
                  <FaPhoneAlt className="mr-2" /> +880 1806263784
                </p>
                <p className="mt-4 text-sm">Lalkhan Bazar, Chittagong</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Quote Section */}
       
        {/* <motion.section
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          whileInView="show"
          className="relative bg-blue-600 text-white text-center px-6 py-12 rounded-2xl shadow-md mb-16 overflow-hidden"
        >
          <motion.div
            variants={fadeIn("up", 0.71)}
            className="absolute inset-0 opacity-10"
            initial="hidden"
            whileInView="show"
          >
            <motion.img
              variants={fadeIn("up", 0.715)}
              initial="hidden"
              whileInView="show"
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80"
              alt="Gaming contest"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.72)}
            initial="hidden"
            whileInView="show"
            className="relative z-10 max-w-3xl mx-auto"
          >
            <motion.blockquote
              variants={fadeIn("up", 0.73)}
              initial="hidden"
              whileInView="show"
              className="italic text-xl md:text-2xl mb-6"
            >
              "Life is like playing with mind. To keep your balance, you must
              keep playing."
            </motion.blockquote>
            <motion.p
              variants={fadeIn("up", 0.74)}
              initial="hidden"
              whileInView="show"
              className="font-semibold text-lg"
            >
              – Mr. De Caprio
            </motion.p>
          </motion.div>
        </motion.section> */}

        {/* Meet the Team */}
        <motion.section
          variants={fadeIn("up", 0.75)}
          initial="hidden"
          whileInView="show"
          className="text-center mb-16"
        >
          <div>
            <motion.h2
              variants={textVariant(0.76)}
              initial="hidden"
              whileInView="show"
              className="text-2xl font-bold mb-2 "
            >
              Meet the Team
            </motion.h2>
          </div>
          <div>
            <motion.div
              variants={fadeIn("up", 0.77)}
              initial="hidden"
              whileInView="show"
              className="w-20 h-1 bg-green-500 mx-auto mb-8"
            />
          </div>
          <div>
            <motion.div
              variants={fadeIn("up", 0.78)}
              initial="hidden"
              whileInView="show"
            >
              <FaUsers className="text-4xl text-indigo-600 mx-auto mb-6" />
            </motion.div>
          </div>
          <div>
            <motion.p
              variants={fadeIn("up", 0.79)}
              initial="hidden"
              whileInView="show"
              className="max-w-2xl mx-auto mb-8"
            >
              Our team is made up of passionate gamers, expert organizers, and
              support staff who are here to help you get the most out of your
              gaming experience.
            </motion.p>
          </div>
          {/* Team Members Grid */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
            {[
              {
                name: "Rafiul Islam Alvi",
                role: "Founder",
                img: "https://res.cloudinary.com/df5utoo6u/image/upload/v1757832478/0e28382d-956f-4433-82b0-2ebcabafb869.png",
                bio: "Rafiul Islam Alvi is a former eSports player and the founder of Go On, a company dedicated to organizing competitive gaming tournaments.",
              },
              {
                name: "Alfaz Uddin",
                role: "Co-Founder",
                img: "https://res.cloudinary.com/df5utoo6u/image/upload/v1757832552/67494320-22ad-44e9-8dd9-d3be524aaf6f.png",
                bio: "Alfaz Uddin is a hardworking entrepreneur and the co-founder of Go On Now. Known for his dedication and drive.",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn(
                  index % 2 === 0 ? "left" : "right",
                  0.81 + index * 0.02
                )}
                initial="hidden"
                whileInView="show"
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <motion.img
                  variants={fadeIn("up", 0.82)}
                  initial="hidden"
                  whileInView="show"
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-green-100"
                />
                <motion.h4
                  variants={textVariant(0.83)}
                  initial="hidden"
                  whileInView="show"
                  className="font-bold text-lg"
                >
                  {member.name}
                </motion.h4>
                <motion.p
                  variants={fadeIn("up", 0.84)}
                  initial="hidden"
                  whileInView="show"
                  className="text-gray-600"
                >
                  {member.role}
                </motion.p>
                <motion.p
                  variants={fadeIn("up", 0.85)}
                  initial="hidden"
                  whileInView="show"
                  className="text-gray-600"
                >
                  {member.bio}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={fadeIn("up", 0.86)}
          initial="hidden"
          whileInView="show"
          className="bg-gradient-to-r from-red-700/80 to-blue-700/80 text-white rounded-xl p-8 text-center"
        >
          <div>
            <motion.h3
              variants={textVariant(0.87)}
              initial="hidden"
              whileInView="show"
              className="text-2xl font-bold mb-4"
            >
              Ready to Start Your gaming Journey?
            </motion.h3>
          </div>
          <div>
            <motion.p
              variants={fadeIn("up", 0.88)}
              initial="hidden"
              whileInView="show"
              className="mb-6 max-w-2xl mx-auto"
            >
              Visit our shop or browse our online platform to find your perfect
              gaming experience.
            </motion.p>
          </div>
        </motion.section>
      </main>
    </motion.div>
  );
};

export default About;
