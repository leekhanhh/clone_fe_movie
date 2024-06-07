import React, { useState } from "react";

import { SwiperSlide, Swiper } from "swiper/react";

import MovieCard from "./MovieCard";
import { useQuery } from "@tanstack/react-query";
import { getListMovieClientApi } from "../../apis/movie";
interface MovieListProps {
  type: string;
}
const MovieList = (props: MovieListProps) => {
  const [listMovieState, setListMovieState] = useState<object[]>([]); // Provide the correct type for the state variable
  const { data: listMovie } = useQuery({
    queryKey: ["listMovie", props.type],
    queryFn: () =>
      getListMovieClientApi(props.type).then((res) => {
        console.log(res.data.content);
        const tempData = res.data.content.map((item: object) => {
          return item.movie;
        });
        setListMovieState(tempData);
        return res.data.content.movie;
      }),
  });

  return (
    <div className="movie-list ">
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
        {listMovieState?.length > 0 &&
          listMovieState?.map((item) => (
            // console.log(item)
            <SwiperSlide key={item.id}>
              <MovieCard item={item} key={item.id} kind="default"></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
