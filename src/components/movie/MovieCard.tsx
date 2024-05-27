import React from "react";
import { useNavigate } from "react-router";
interface MovieCardProps {
  item: object;
  key: string;
}
const MovieCard = (props: MovieCardProps) => {
  const navigate = useNavigate();
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full select-none">
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.item.poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className=" text-xl font-bold mb-3">{props.item.title}</h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
          <span>{new Date(props.item.release_date).getFullYear()}</span>
          <span>{props.item.vote_average}</span>
        </div>

        <button
          onClick={() => navigate(`/movie/${props.item.id}`)}
          className="py-3 px-6 rounded-lg capitalize bg-primary w-full mt-auto"
        >
          Watch now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
