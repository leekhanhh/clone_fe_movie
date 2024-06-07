import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getListFavoriteMovieByAccountIdApi } from "../../apis/movie";

import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import { useParams } from "react-router";

const ListFavoriteMovie = () => {
  const [listFavoriteMovieState, setListFavoriteMovieState] = useState<
    object[]
  >([]); // Provide the correct type for the state variable
  const { id } = useParams();
  const { data: listFavoriteMovie } = useQuery({
    queryKey: ["listFavoriteMovie"],
    queryFn: () =>
      getListFavoriteMovieByAccountIdApi({ accountId: id }).then((res) => {
        // const tempdata = res.data.content.map((item) => {
        //   return item.movie;
        // });
        // return tempdata;
        if (res.data.totalElements === 0) {
          return [];
        } else {
          const tempData = res.data.content.map((item) => {
            return {
              listFavouriteMovieId: item.id,
              id: item.movie.id,
              status: item.movie.status,
              modifiedDate: item.movie.modifiedDate,
              createdDate: item.movie.createdDate,
              title: item.movie.title,
              overview: item.movie.overview,
              price: item.movie.price,
              imagePath: item.movie.imagePath,
              category: item.movie.category,
              genres: item.movie.genres,
              videoGridFs: item.movie.videoGridFs,
            };
          });

          return tempData;
        }
      }),
  });

  return (
    <div className="movie-list ">
      {listFavoriteMovie?.length === 0 ? (
        <div className="text-xl text-white">There is no favourite movie</div>
      ) : (
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
          {listFavoriteMovie?.length > 0 &&
            listFavoriteMovie?.map((item) => (
              // console.log(item)
              <SwiperSlide key={item.id}>
                <MovieCard
                  item={item}
                  key={item.id}
                  kind="favourite"
                ></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};

export default ListFavoriteMovie;
