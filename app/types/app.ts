type ExploreItem = {
  img: string;
  location: string;
  distance: string;
};
type LiveItem = {
  img: string;
  title: string;
};
type ExploreData = ExploreItem[];
type LiveData = LiveItem[];

export type { ExploreItem, ExploreData ,LiveData,LiveItem };