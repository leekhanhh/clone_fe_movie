import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getListFavoriteMovieApi } from "../../apis/movie";

import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";

const ListFavoriteMovie = () => {
  const [listFavoriteMovieState, setListFavoriteMovieState] = useState<
    object[]
  >([]); // Provide the correct type for the state variable
  const { data: listFavoriteMovie } = useQuery({
    queryKey: ["listFavoriteMovie"],
    queryFn: () =>
      getListFavoriteMovieApi().then((res) => {
        console.log(res.data);
        res.data.content.map((item: object) => {
          setListFavoriteMovieState((prev: object[]) => [...prev, item.movie]); // Provide the correct type for the state update function
        });
        return res.data;
      }),
  });
  console.log(listFavoriteMovieState);
  return (
    <div className="movie-list ">
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
        {listFavoriteMovieState?.length > 0 &&
          listFavoriteMovieState?.map((item) => (
            // console.log(item)
            <SwiperSlide key={item.id}>
              <MovieCard item={item} key={item.id}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ListFavoriteMovie;
