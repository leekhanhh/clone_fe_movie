import React from "react";
import { useParams } from "react-router";

const MovieVideos = () => {
  const { id } = useParams();
  // const { data, error } = useSWR(
  //   `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`,
  //   fetcher
  // );
  // if (!data) return null;

  // const { key, name, results } = data;
  // if (!results || results.length < 0) return null;
  return (
    // <div className="py-10">
    //   <div className="flex flex-col gap-10">
    //     {results.slice(0, 2).map((item: object) => (
    //       <div key={item.id} className="">
    //         {" "}
    //         <h2 className="mb-10 text-3xl font-bold text-center text-white">
    //           {item.name}
    //         </h2>
    //         <div key={item.id} className="w-full aspect-video">
    //           <iframe
    //             width="971"
    //             height="546"
    //             src={`https://www.youtube.com/embed/${item.key}`}
    //             title={`${item.name}`}
    //             frameBorder="0"
    //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //             allowFullScreen={true}
    //             className="object-fill w-full h-full"
    //           ></iframe>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="flex flex-col gap-3">
      <p className="mb-10 text-3xl font-bold text-center text-white ">Films</p>
      <video
        src="http://localhost:8088/v1/movie/videos/stream/665d89b8cc44a7787b814320"
        controls
      ></video>
    </div>
  );
};

export default MovieVideos;
