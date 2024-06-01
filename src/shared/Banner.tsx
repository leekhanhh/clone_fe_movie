import React from "react";
import { fetcher } from "../config";
import { SwiperSlide, Swiper } from "swiper/react";
import BannerItem from "./BannerItem";
import useSWR from "swr";
import { useQuery } from "@tanstack/react-query";
import { getListMovieClientApi } from "../apis/movie";

const Banner = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=de1adf65e096685049f0019b475d447d`,
    fetcher
  );
  const { data: listMovie } = useQuery({
    queryKey: ["listMovieClient", "all"],
    queryFn: () =>
      getListMovieClientApi("all").then((res) => {
        console.log(res.data);
        return res.data.content;
      }),
  });

  console.log(data);

  const movies = data?.results || [];

  return (
    <section className="banner h-[700px] page-container mb-20 overflow-hidden">
      <Swiper grabCursor={true} slidesPerView={"auto"}>
        {listMovie?.length > 0 &&
          listMovie?.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Banner;
