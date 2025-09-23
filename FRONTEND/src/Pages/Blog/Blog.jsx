import { Link } from "react-router-dom";
import FeaturedPost from "./FeaturedPost";
import LatestPost from "./LatestPost";
import Subscribe from "./Subscribe";

const Blog = () => {
  return (
    <>
      <main className="px-24 mt-5 max-sm:px-5">
        <FeaturedPost></FeaturedPost>
        {/* <LatestPost></LatestPost> */}
        {/* <Subscribe></Subscribe> */}
    
      </main>
    </>
  );
};

export default Blog;
