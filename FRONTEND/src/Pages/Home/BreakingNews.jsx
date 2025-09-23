import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { FaBullhorn, FaTrophy, FaUniversity, FaStar } from "react-icons/fa";

const BreakingNews = () => {
  return (
    <div className="flex my-4 md:my-6 items-center">
      <Marquee pauseOnHover={true} speed={75}>
        <Link className="mr-12 text-2xl md:text-3xl font-bold flex items-center" to="/">
          <FaBullhorn className="text-blue-500 mr-2" />
          Welcome to BizPilot.
        </Link>
        <Link className="mr-12 text-2xl md:text-3xl font-bold flex items-center" to="/">
          <FaTrophy className="text-yellow-500 mr-2" />
          BizPilot is your AI-powered startup co-pilot founded in 2025 to help ideas grow into businesses.
        </Link>
        <Link className="mr-12 text-2xl md:text-3xl font-bold flex items-center" to="/">
          <FaStar className="text-purple-500 mr-2" />
          New feature coming soon: AI Competitor Insights!
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
