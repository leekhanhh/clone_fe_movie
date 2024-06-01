import React from "react";
import { useNavigate } from "react-router";
interface MovieCardProps {
  item: object;
  key: string;
}
const MovieCard = (props: MovieCardProps) => {
  const navigate = useNavigate();
  console.log(props.item);
  return (
    <div className="flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800">
      <img
        src={`https://image.tmdb.org/t/p/w500/${props?.item?.imagePath}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="mb-3 text-xl font-bold ">{props.item.title}</h3>
        <div className="flex items-center justify-between mb-10 text-sm opacity-50">
          <span>{props.item.category.name}</span>
          <span>{props.item.vote_average}</span>
        </div>

        <button
          onClick={() => navigate(`/movie/${props.item.id}`)}
          className="w-full px-6 py-3 mt-auto capitalize rounded-lg bg-primary"
        >
          Watch now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
