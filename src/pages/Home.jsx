import {
  CategoryCarousel,
  SearchCarousel,
  SearchForm,
  TrendingCarousel,
} from "../components/section";
import { Calendar } from "../components/section/Calendar";

export const Home = () => {
  return (
    <>
      <SearchCarousel />
      <SearchForm />
      <CategoryCarousel />
      <TrendingCarousel />
    </>
  );
};
