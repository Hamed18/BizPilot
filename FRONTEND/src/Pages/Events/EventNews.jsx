import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { FaBullhorn, FaTrophy, FaUniversity, FaStar } from "react-icons/fa";

const EventNews = () => {
  return (
    <div className="flex mb-2 md:mb-4 items-center">
      <Marquee pauseOnHover={true} speed={75}>
        <Link className="mr-12 text-2xl font-bold flex items-center" to="/">
          <FaBullhorn className="text-blue-500 mr-2" />
          Go on recently launched an event.
        </Link>
        <Link className="mr-12 text-2xl font-bold flex items-center" to="/">
          <FaTrophy className="text-yellow-500 mr-2" />
          A Great E-Sports Event Coming Next!
        </Link>
        {/* <Link className="mr-12 text-3xl font-bold flex items-center" to="/">
          <FaUniversity className="text-green-500 mr-2" />
          
        </Link>
        <Link className="mr-12 text-3xl font-bold flex items-center" to="/">
          <FaStar className="text-purple-500 mr-2" />
          New member recruitment is going on!
        </Link> */}
      </Marquee>
    </div>
  );
};
export default EventNews;