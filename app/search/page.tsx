import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { format } from "date-fns";
import { getSearchResult } from "../utils/api";
import { SearchData } from "../types/app";
import ListingCard from "../components/ListingCard";

type SearchParams = {
  location?: string;
  StartDate?: string;
  EndDate?: string;
  guests?: string;
};

export default async function SearchResult({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams; // ⭐ Important fix!

  const { location, StartDate, EndDate, guests } = params;
  console.log(location);
  let formattedStartDate = "";
  let formattedEndDate = "";

  if (StartDate && EndDate) {
    formattedStartDate = format(new Date(StartDate), "dd MMMM yy");
    formattedEndDate = format(new Date(EndDate), "dd MMMM yy");
  }

  const range = `${formattedStartDate}-${formattedEndDate}`;
  let filters = [
    "Cancellation Flexibility",
    "Type of Place",
    "Price",
    "Rooms and Beds",
    "More filters",
  ];
  const searchData: SearchData = await getSearchResult();

  return (
    <>
      <Header placeholder={`${location}|${range}|${guests}Guests`} />
      <main className="flex min-h-screen flex-col px-6 pt-14">
        <section className="pt-6">
          <div className="container">
            <p className="text-xs">
              300+ Stays - {range} - for {guests} guests
            </p>
            <h1 className="mt-2 mb-6 text-3xl font-semibold">
              Stays in {location}
            </h1>
            {/* Search Results would go here */}
            <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
              {filters.map((filter) => (
                <button
                  type="button"
                  key={filter}
                  className="px-4 py-2 border rounded-full cursor-pointer  hover:shadow-lg active:scale-105 transition transform duration-100 ease-out"
                >
                  {filter}
                </button>
              ))}
            </div>
            {searchData?.map((item, index: number) => (
              <ListingCard key={index} img={item.img} description={item.description} total={item.total} star={item.star} location={item.location} title={item.title} price={item.price}/>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
