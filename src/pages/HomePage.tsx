import React, { Fragment } from "react";
import Banner from "../shared/Banner";
import MovieList from "../components/movie/MovieList";

interface HomePageProps {}
const HomePage = (props: HomePageProps) => {
  return (
    <div className="">
      <Banner />
      <Fragment>
        <section className="movies-layout page-container pb-20">
          <h2 className="capitalize text-white mb-10 text-3xl font-bold">
            Now playing
          </h2>
          <MovieList type="now_playing"></MovieList>
        </section>

        <section className="movies-layout page-container pb-20">
          <h2 className="capitalize text-white mb-10 text-3xl font-bold">
            Top rated
          </h2>
          <MovieList type="top_rated"></MovieList>
        </section>
        <section className="movies-layout page-container pb-20">
          <h2 className="capitalize text-white mb-10 text-3xl font-bold">
            Trending
          </h2>
          <MovieList type="popular"></MovieList>
        </section>
      </Fragment>
    </div>
  );
};

export default HomePage;
