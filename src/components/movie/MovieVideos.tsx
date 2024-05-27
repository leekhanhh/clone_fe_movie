import React from "react";
import { useParams } from "react-router";
import useSWR from "swr";
import { apiKey, fetcher } from "../../config";
const MovieVideos = () => {
  const { id } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;

  const { key, name, results } = data;
  if (!results || results.length < 0) return null;
  return (
    <div className="py-10">
      <div className="flex flex-col gap-10">
        {results.slice(0, 2).map((item: object) => (
          <div key={item.id} className="">
            {" "}
            <h2 className="text-center text-3xl mb-10 font-bold text-white">
              {item.name}
            </h2>
            <div key={item.id} className="w-full aspect-video">
              <iframe
                width="971"
                height="546"
                src={`https://www.youtube.com/embed/${item.key}`}
                title={`${item.name}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
                className="w-full h-full object-fill"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieVideos;
