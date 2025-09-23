import { useEffect } from "react";
import UnderConstruction from "../../Shared/UnderConstruction";
import Headline from "../Home/Headline";
import CurrentFest from "./CurrentFest";
import EventNews from "./EventNews";
import CurrentFestBanner from "./CurrentFestBanner";

const Event = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component is mounted
  }, []);
  return (
    <div className="">
      <EventNews></EventNews>
      <CurrentFestBanner></CurrentFestBanner>
      <CurrentFest></CurrentFest>
      {/* <UnderConstruction></UnderConstruction> */}
      <div className="my-2 pb-4">
        <Headline></Headline>
      </div>
    </div>
  );
};

export default Event;
