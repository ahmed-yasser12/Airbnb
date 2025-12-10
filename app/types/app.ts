type ExploreItem = {
  img: string;
  location: string;
  distance: string;
};
type LiveItem = {
  img: string;
  title: string;
};
type SearchItem = {
  img: string;
  location: string;
  description: string;
  star: number;
  price: string;
  title: string;
  total: string;
  long: number;
  lat: number;
};
export type ListingCardItem = {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
};
type ExploreData = ExploreItem[];
type SearchData = SearchItem[];
// export type SearchResultData = ListingCardItem[]
type LiveData = LiveItem[];

export type { ExploreItem, SearchData,SearchItem, ExploreData ,LiveData,LiveItem };