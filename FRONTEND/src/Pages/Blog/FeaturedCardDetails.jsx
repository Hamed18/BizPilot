import { useParams, Link } from "react-router-dom";

import data from "./Data/data";
const { BlogPosts } = data;

const FeaturedCardDetails = () => {
  const { id } = useParams();  // dynamic route
  const post = BlogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-red-500">Post not found!</h2>
        <Link to="/blog" className="text-blue-600 underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <img
        src={post.img}
        alt={post.title}
        className="w-full h-96 object-cover rounded-xl shadow-md mb-6"
      />
      <div className="flex gap-4 text-blue-600 text-sm font-medium mb-4">
        <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
          {post.tag}
        </span>
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>
      <h2 className="text-4xl font-bold text-blue-600 mb-4">{post.title}</h2>
      <p className="text-lg font-semibold text-blue-600 leading-relaxed">{post.longDesc}</p>

      <Link to="/blog" className="mt-6 inline-block font-bold text-blue-600 hover:underline">
        ← Back to Blog
      </Link>
    </div>
  );
};

export default FeaturedCardDetails;
