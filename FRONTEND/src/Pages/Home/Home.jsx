import Partner from "../../components/partner";
import Banner from "../../Shared/Banner";
import About from "./About";
import BreakingNews from "./BreakingNews";
import CurrentEvent from "./CurrentEvent";
import JoinBattle from "./JoinBattle";
import NewsSlider from "./NewsSlider";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<BreakingNews></BreakingNews>
			<About></About>
			<Partner></Partner>
			<JoinBattle></JoinBattle>
			{/* <NewsSlider></NewsSlider> */}
			{/* <CurrentEvent></CurrentEvent> */}
		</div>
	);
};

export default Home;