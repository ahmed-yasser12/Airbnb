import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[500px]">
      <Image
        src="https://images.unsplash.com/photo-1609688669309-fc15db557633?ixlib=rb-4.0.
        3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80FFF"
        alt="banner-image"
        fill 
        className="object-cover object-left"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-red-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
            I'm flexible
    </button>
    </div>
    </div>
  );
}

export default Banner;
