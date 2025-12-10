import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { format } from "date-fns";

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
console.log(location)
  let formattedStartDate = "";
  let formattedEndDate = "";

  if (StartDate && EndDate) {
    formattedStartDate = format(new Date(StartDate), "dd MMMM yy");
    formattedEndDate = format(new Date(EndDate), "dd MMMM yy");
  }

  const range = `${formattedStartDate}-${formattedEndDate}`;

  return (
    <>
      <Header placeholder={`${location}|${range}|${guests}Guests`} />

      <div>SearchResult Page</div>
      <p>Location: {location}</p>
      <p>Guests: {guests}</p>
      <p>Date: {range}</p>

      <Footer />
    </>
  );
}
