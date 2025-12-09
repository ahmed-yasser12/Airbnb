import Image from "next/image";
import Link from "next/link";

const GreatestOutdoors = () => {
  return (
    <div className="container ">
      <div className="relative h-96 my-16">
        <Image
          src="https://links.papareact.com/2io"
          alt="Greatest Outdoors"
          fill
          className="greatest-outdoors-image object-cover rounded-xl "
        />
        <div className="absolute top-20 left-12 text-white">
          <h2 className="greatest-outdoors-title text-4xl mb-3 w-64">The Greatest Outdoors</h2>
          <p className="greatest-outdoors-description">
            Explore the world’s most beautiful places with us. From majestic
            mountains to serene beaches, discover your next adventure and create
            unforgettable memories in the great outdoors.
          </p>
          <Link href="/" className="greatest-outdoors-link text-lg font-semibold mt-5 inline-block bg-white text-black px-4 py-2 rounded-lg hover:shadow-lg transition">
            Get Inspired
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GreatestOutdoors;
