import React from "react";
import { useParams } from "react-router";
import useSWR from "swr";
import { apiKey, fetcher } from "../../config";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./MovieCard";

const SimilarMovies = () => {
  const { id } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  // console.log("file: MovieDetailsPage.jsx:134 🌇 SimilarMovie 🌇 data:", data);
  const { results } = data;
  if (!results || results.length < 0) return null;
  return (
    <div className="py-10">
      <h2 className="text-center text-3xl mb-10 font-bold text-white">
        Similar Movie
      </h2>
      <div className="movie-list">
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
          {results.length > 0 &&
            results.map((item: object) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item} key={item.id}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SimilarMovies;
