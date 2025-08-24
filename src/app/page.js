import Banner from "../../components/HeroSection";
import Highlight from "../../components/Highlight";
import News from "../../components/News";
import Event from "../../components/Event";
import Travel from "../../components/Travel";

export default function Home() {
  return (
    <div>
      <Banner />
      <Highlight />
      <News />
      <Event />
      <Travel />
    </div>
  );
}
