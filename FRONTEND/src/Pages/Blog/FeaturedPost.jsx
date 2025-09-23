import data from "./Data/data";
import FeaturedPostCard from "./FeaturedPostCard";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion"; // adjust path if needed

const FeaturedPost = () => {
  const BlogPosts = data.BlogPosts;
  const featuredBlogs = BlogPosts.filter((blog) => blog.posttype === "feature");

  return (
    <section className="featuredPost mt-9">
      {/* Quote Section */}
      <motion.section
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
      </motion.section>

      {/* Featured News Section */}
      <h2 className="text-2xl font-semibold border-b-4 w-fit border-b-blue-600 text-slate-800">
        Featured News
      </h2>

      <div className="cardContainer mt-8 flex flex-col gap-12">
        {featuredBlogs.map((blog, index) => (
          <motion.div
            key={blog.title}
            variants={fadeIn("up", 0.1 + index * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <FeaturedPostCard {...blog} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPost;
