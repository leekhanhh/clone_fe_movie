import React from "react";
import { useParams } from "react-router";
import useSWR from "swr";
import { apiKey, fetcher } from "../../config";
const MovieCredit = () => {
  const { id } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`,
    fetcher
  );

  // Check Data if not return null
  if (!data) return null;

  const { cast, order, profile_path, name } = data;
  // Check Cast if not return null
  if (!cast || cast.length < 0) return null;
  return (
    <>
      <h2 className="text-center text-3xl mb-10 font-bold text-white">Casts</h2>
      <div className="grid grid-cols-4 gap-5">
        {cast.slice(0, 4).map((item: object) => (
          <div className="cast-item" key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
              className="w-full h-[350px] rounded-lg object-cover mb-3"
              alt=""
            />
            <h2 className="text-center text-white text-xl font-medium">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieCredit;
