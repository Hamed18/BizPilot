import Partner from "../../components/partner";
import Banner from "../../Shared/Banner";
import About from "./About";
import BreakingNews from "./BreakingNews";
import JoinBattle from "./JoinBattle";
import IdeaForm from "./IdeaForm";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BreakingNews></BreakingNews>
      <About></About>
      <Partner></Partner>
      <IdeaForm></IdeaForm>
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">Meet BizPilot AI Assistant</h1>
        <p className="text-gray-600 mt-2">
          Turn a raw idea into 2–3 actionable business models with quick what-if
          chats.
        </p>
        <a
          href="/dashboard"
          className="inline-block mt-4 px-4 py-2 bg-black text-white rounded-xl"
        >
          Go to Dashboard
        </a>
      </div>
      <JoinBattle></JoinBattle>
      {/* <NewsSlider></NewsSlider> */}
      {/* <CurrentEvent></CurrentEvent> */}
    </div>
  );
};

export default Home;
