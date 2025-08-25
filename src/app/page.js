import Banner from "../../components/HeroSection";
import Highlight from "../../components/Highlight";
import News from "../../components/News";
import Event from "../../components/Event";
import Travel from "../../components/Travel";
import Trending from "../../components/Trending";
import Info from "../../components/Info";
import Property from "../../components/Property";
import Testimonial from "../../components/Testimonial";
import Investment from "../../components/Investment";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <div>
      <Banner />
      <Highlight />

      <Travel />
      <Trending />
      <Event />
      <Info />
      <Property />

      <Investment />
      <Testimonial />

      <News />
      <Contact />
    </div>
  );
}
