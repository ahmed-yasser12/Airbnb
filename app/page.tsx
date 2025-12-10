import Image from "next/image";
import Banner from "./components/Banner";
import Expoler from "./components/Expoler";
import { Live } from "./components/Live";
import GreatestOutdoors from "./components/GreatestOutdoors";
import Footer from "./components/Footer";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div>
        <Banner />
        <Expoler />
        <Live />
        <GreatestOutdoors />
      </div>
      <Footer />
    </>
  );
}
