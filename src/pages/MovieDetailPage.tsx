import React from "react";
import MovieCredit from "../components/movie/MovieCredit";
import MovieVideos from "../components/movie/MovieVideos";
import SimilarMovies from "../components/movie/SimilarMovies";
import { apiKey, fetcher } from "../config";
import { useParams } from "react-router";
import useSWR from "swr";

const MovieDetailPage = (props) => {
  console.log("Run");
  const { id } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`,
    fetcher
  );
  console.log(id);

  if (!data) {
    return null;
  }
  const { backdrop_path, poster_path, title, genres, overview } = data;
  console.log(data);

  return (
    <div className="py-10">
      <div className="w-full h-[600px] relative">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div
          className="h-full w-full bg-cover bg-no-repeat "
          style={{
            backgroundImage: `url(
              https://image.tmdb.org/t/p/original/${backdrop_path}
            )`,
          }}
        ></div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <h1 className="text-center text-4xl font-bold text-white mb-10">
        {title}
      </h1>
      {genres.length > 0 && (
        <div className="flex item-center gap-x-5 justify-center mb-10">
          {genres.map((item: object) => (
            <span
              key={item.id}
              className="py-2 px-4 border-primary text-primary border rounded"
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-center text-white leading-relaxed max-w-[650px] mx-auto mb-10">
        {overview}
      </p>
      <MovieCredit></MovieCredit>
      <MovieVideos></MovieVideos>
      <SimilarMovies></SimilarMovies>
    </div>
  );
};

export default MovieDetailPage;
