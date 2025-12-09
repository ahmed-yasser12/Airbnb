import Image from "next/image";
import { getLive } from "../utils/api";

export const Live =async () => {
    const data= await getLive()
  return (
    <section className="container py-8 pt-6">
      <h2 className="text-4xl font-bold mb-5 "> Live AnyWhere </h2>
      <div className="flex space-x-2 overflow-scroll no-scrollBar p-3 -ml-3">
  {data?.map((item: { img: string; title: string }, index: number) => (
      <div key={index} className="cursor-pointer hover:scale-105 transition transform duration-300 ease-in-out">
        <Image src={item.img} alt={item.title} width={300} height={300} className="rounded-xl" />
        <h3 className="text-lg mt-2">{item.title}</h3>
      </div>
        ))}
      </div>
    </section>
  );
};
