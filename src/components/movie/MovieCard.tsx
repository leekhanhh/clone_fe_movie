import { useNavigate } from "react-router";
import FavouriteIcon from "../../shared/icons/FavouriteIcon";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createFavoriteMovieApi,
  deleteFavoriteMovieApi,
} from "../../apis/favorite";
interface MovieCardProps {
  item: object;
  key: string;
  kind: string;
}
const MovieCard = (props: MovieCardProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const accounrtProfile = JSON.parse(
    localStorage.getItem("AccountProfile") as string
  );
  const [color, setColor] = useState(
    props.kind === "favourite" ? "#FF0000" : "#fff"
  );
  const { mutateAsync: createFavouriteMovie } = useMutation({
    mutationKey: ["createFavorite"],
    mutationFn: createFavoriteMovieApi,
    onSuccess: (data) => {
      setColor("#FF0000");
      if (props.kind === "favourite") {
        queryClient.invalidateQueries(["listFavoriteMovie"]);
      }
    },
  });
  const { mutateAsync: deleteFavouriteMovie } = useMutation({
    mutationKey: ["deleteFavorite"],
    mutationFn: deleteFavoriteMovieApi,
    onSuccess: (data) => {
      setColor("#000");
      if (props.kind === "favourite") {
        queryClient.invalidateQueries(["listFavoriteMovie"]);
      }
    },
  });
  const handleReactMovie = () => {
    if (props.kind === "favourite") {
      deleteFavouriteMovie(props.item.listFavouriteMovieId);
    } else {
      createFavouriteMovie({
        accountId: accounrtProfile.account.id,
        movieId: props.item.id,
      });
    }
  };
  return (
    <div className="relative flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800">
      <div
        className="absolute cursor-pointer top-2 right-2 hover:opacity-50"
        onClick={() => handleReactMovie()}
      >
        <FavouriteIcon width={30} height={30} color={color} />
      </div>
      <img
        src={props?.item?.imagePath}
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
