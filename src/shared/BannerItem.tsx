import React from "react";
import { useNavigate } from "react-router";
interface BannerItemProps {
  item: object;
}
const BannerItem = (props: BannerItemProps) => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${props.item.poster_path}`}
        alt=""
        className="w-full h-full object-cover rounded-lg object-center"
      ></img>
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">{props.item.original_title}</h2>

        <div className="flex items-center gap-x-3 mb-8">
          <h3 className=" font-bold text-xl text-white">Score</h3>
          <span className="py-2 px-4 border border-white rounded-md">
            {props.item.vote_average}
          </span>
        </div>
        <button
          onClick={() => navigate(`/movie/${props.item.id}`)}
          className="py-3 px-6 rounded-lg bg-primary text-white font-medium "
        >
          Watch now
        </button>
      </div>
    </div>
  );
};

export default BannerItem;
