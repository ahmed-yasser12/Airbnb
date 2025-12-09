import Image from "next/image";
import { ExploreData } from "../types/app";
import { getExplolerCards } from "../utils/api"


const  ExpolerCards = async () => {
    const exploreData:ExploreData = await getExplolerCards();
  return (
    <div>
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {exploreData?.map((item: { img: string; distance: string; location: string }, index: number) => (
                <div key={index} className="flex items-center m-2 mt-5 relative space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out p-4">
                    <Image className="h-16 w-16 rounded-lg object-contain" fill  src={item.img} alt={item.location} />
                    <div>
                        <h2 className="font-semibold">{item.location}</h2>
                        <h3 className="text-gray-500">{item.distance}</h3>
                    </div>
                </div>
            ))}
        </div>
        </div>
  )
}

export default ExpolerCards