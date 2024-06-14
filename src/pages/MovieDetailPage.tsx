import React from "react";
import MovieCredit from "../components/movie/MovieCredit";
import MovieVideos from "../components/movie/MovieVideos";
import SimilarMovies from "../components/movie/SimilarMovies";

import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetailClientApi } from "../apis/movie";
import ChatBox from "../components/chat/ChatBox";
import { listAllEpisode } from "../apis/episode";
import Episode from "../components/movie/Episode";

const MovieDetailPage = (props) => {
  const { id } = useParams();
  const { data: movieDetail } = useQuery({
    queryKey: ["movieDetail", id],
    queryFn: () =>
      getMovieDetailClientApi(id).then((res) => {
        return res.data;
      }),
  });
  const { data: listEpisode } = useQuery({
    queryKey: ["listEpisode", id],
    queryFn: () =>
      listAllEpisode({ movieId: id }).then((res) => {
        return res.data;
      }),
  });
  return (
    <div className="flex flex-col gap-8 py-10">
      <div className="w-full h-[600px] relative">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover "
          // style={{
          //   backgroundImage: `url(
          //     https://image.tmdb.org/t/p/original/${backdrop_path}
          //   )`,
          // }}
          style={{
            backgroundImage: `url(https://i.pinimg.com/236x/a2/69/06/a26906e91bee2f22dbcd24b76f3ef5e2.jpg)`,
          }}
        ></div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
        <img
          src={`${movieDetail?.imagePath}`}
          alt=""
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
      <h1 className="mb-10 text-4xl font-bold text-center text-white">
        {movieDetail?.title}
      </h1>
      {movieDetail?.genres.length > 0 && (
        <div className="flex justify-center mb-10 item-center gap-x-5">
          {movieDetail?.genres?.map((item: object) => (
            <span
              key={item.categoryId}
              className="px-4 py-2 transition-all border rounded cursor-pointer border-primary text-primary hover:bg-primary hover:text-white"
            >
              {item.categoryName}
            </span>
          ))}
        </div>
      )}
      <p className="text-center text-white leading-relaxed max-w-[650px] mx-auto mb-10">
        {movieDetail?.overview}
      </p>
      <MovieCredit></MovieCredit>
      <MovieVideos linkvideo={movieDetail?.videoGridFs}></MovieVideos>
      <div className="flex flex-row items-center gap-4">
        <div className="text-xl text-white">Chapter:</div>
        {listEpisode?.totalElements > 0 &&
          listEpisode.content.map((item) => {
            return <Episode number={item.episodeNumber} />;
          })}
      </div>
      {/* <SimilarMovies></SimilarMovies> */}
      <div className="flex flex-col">
        <p className="mb-10 text-3xl font-bold text-center text-white ">
          Comment
        </p>
        <ChatBox />
      </div>
    </div>
  );
};

export default MovieDetailPage;
