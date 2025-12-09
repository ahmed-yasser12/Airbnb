import Image from "next/image";
import Banner from "./components/Banner";
import Expoler from "./components/Expoler";
import { Live } from "./components/Live";
import GreatestOutdoors from "./components/GreatestOutdoors";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <div>
    <Banner/>
    <Expoler/>
    <Live/>
    <GreatestOutdoors/>
    <Footer/>
   </div>
  );
}
