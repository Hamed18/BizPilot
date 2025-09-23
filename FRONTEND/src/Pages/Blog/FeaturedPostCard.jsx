import { Link } from "react-router-dom";

const FeaturedPostCard = ({ id, img, title, tag, desc, date, readTime }) => {
  return (
    <Link to={`/blog/${id}`} className="block"> {/* ✅ clickable card */}
      <div className="card flex flex-col md:flex-row shadow-[0px_3px_8px_0px_rgba(30,41,59,0.24)] rounded-xl p-3 gap-5 hover:shadow-lg transition-shadow bg-cyan-300">
        {/* Image */}
        <div className="img md:w-80 w-full h-56">
          <img
            src={img}
            className="rounded-md w-full h-full object-cover"
            alt={title}
          />
        </div>
        {/* content */}
        <div className="content flex flex-col gap-3">
          <span className="bg-blue-600 text-white rounded-full w-fit px-4 font-medium py-1">
            {tag}
          </span>
          <h3 className="text-3xl text-slate-800 font-bold hover:underline underline-offset-8">
            {title}
          </h3>
          <p className="text-lg text-black">{desc}...</p>
          <div className="dateTime text-lg flex font-medium gap-3 text-black">
            <small>{date}</small>
            <small>{readTime}</small>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedPostCard;
