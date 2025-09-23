import { Link } from "react-router-dom";
import logo from "../../src/assets/logo.jpg"; // Example logo
import { motion } from "framer-motion";

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

const Footer = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.footer
        variants={fadeIn("up", 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="footer text-white footer-center bg-gradient-to-r from-red-700/80 to-blue-700/80 rounded p-8 mt-12 md:mt-16 mt-2"
      >
        <motion.nav
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          className="grid grid-flow-col gap-4"
        >
          <motion.a
            variants={fadeIn("up", 0.22)}
            initial="hidden"
            whileInView="show"
            className="link link-hover"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            About us
          </motion.a>
          <motion.a
            variants={fadeIn("up", 0.24)}
            initial="hidden"
            whileInView="show"
            className="link link-hover"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </motion.a>
          <motion.a
            variants={fadeIn("up", 0.26)}
            initial="hidden"
            whileInView="show"
            className="link link-hover"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Events
          </motion.a>
        </motion.nav>
        <motion.nav
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
        >
          <motion.div
            variants={fadeIn("up", 0.32)}
            initial="hidden"
            whileInView="show"
            className="grid grid-flow-col gap-4"
          >
            <motion.a
              variants={fadeIn("up", 0.34)}
              initial="hidden"
              whileInView="show"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.svg
                variants={fadeIn("up", 0.35)}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </motion.svg>
            </motion.a>
            <motion.a
              variants={fadeIn("up", 0.37)}
              initial="hidden"
              whileInView="show"
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.svg
                variants={fadeIn("up", 0.38)}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </motion.svg>
            </motion.a>
            <motion.a
              variants={fadeIn("up", 0.39)}
              initial="hidden"
              whileInView="show"
              href="https://www.facebook.com/darkshooteralvi?rdid=MSB6PER9hKJUHtzT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1E12UhnQKh%2F#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.svg
                variants={fadeIn("up", 0.4)}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </motion.svg>
            </motion.a>
          </motion.div>
        </motion.nav>
        <motion.aside
          variants={fadeIn("up", 0.42)}
          initial="hidden"
          whileInView="show"
        >
          <motion.p
            variants={fadeIn("up", 0.43)}
            initial="hidden"
            whileInView="show"
          >
            Copyright © {new Date().getFullYear()} - All right reserved by
            BizPilot
          </motion.p>
        </motion.aside>
      </motion.footer>
    </motion.div>
  );
};

export default Footer;