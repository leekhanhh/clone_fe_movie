import React from "react";
import { fetcher } from "../config";
import { SwiperSlide, Swiper } from "swiper/react";
import BannerItem from "./BannerItem";
import useSWR from "swr";

const Banner = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=de1adf65e096685049f0019b475d447d`,
    fetcher
  );
  console.log(data);

  const movies = data?.results || [];

  return (
    <section className="banner h-[700px] page-container mb-20 overflow-hidden">
      <Swiper grabCursor={true} slidesPerView={"auto"}>
        {data?.results?.length > 0 &&
          data?.results?.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Banner;
