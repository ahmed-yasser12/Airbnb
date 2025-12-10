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
};
type ExploreData = ExploreItem[];
type SearchData = SearchItem[];

type LiveData = LiveItem[];

export type { ExploreItem, SearchData,SearchItem, ExploreData ,LiveData,LiveItem };