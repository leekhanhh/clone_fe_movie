import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { SwiperSlide, Swiper } from "swiper/react";
import { apiKey, fetcher } from "../../config";
import MovieCard from "./MovieCard";
interface MovieListProps {
  type: string;
}
const MovieList = (props: MovieListProps) => {
  const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${props.type}?api_key=${apiKey}`,
    fetcher
  );
  useEffect(() => {
    if (data && data.results) {
      setMovies(data.results);
    }
  }, [data]);
  return (
    <div className="movie-list ">
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item} key={item.id}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
