import React, { useEffect, useState } from "react";
import MovieCard from "../components/movie/MovieCard";
import useDebounce from "../hooks/useDebounce";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";
import { useQuery } from "@tanstack/react-query";
import { getListMovieClientApi } from "../apis/movie";
const MoviePage = () => {
  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");
  const { data: listMovie } = useQuery({
    queryKey: ["listMovie", "all"],
    queryFn: () =>
      getListMovieClientApi("all").then((res) => {
        console.log(res.data);
        return res.data.content;
      }),
  });
  // const [url, setUrl] = useState(
  //   `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${nextPage}`
  // );
  const filterDebounce = useDebounce(filter, 500);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  // const { data, error } = useSWR(url, fetcher);
  // const loading = !data && !error;

  const loadpage = (operator: string) => {
    if (operator === "prev") {
      setNextPage(nextPage - 1);
    } else if (operator === "next") {
      setNextPage(nextPage + 1);
    }
  };

  // useEffect(() => {
  //   if (filterDebounce) {
  //     setUrl(
  //       `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${filterDebounce}&page=${nextPage}`
  //     );
  //   } else {
  //     setUrl(
  //       `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${nextPage}`
  //     );
  //   }
  // }, [filterDebounce, nextPage]);

  // if (!data) {
  //   return null;
  // }
  // const movies = data?.results || [];

  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 text-white outline-none bg-slate-800"
            placeholder="Type here to search..."
            onChange={handleFilterChange}
          />
        </div>
        <button className="p-4 text-white bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      {/* {loading && (
        <div className="w-10 h-10 mx-auto text-white border-4 border-t-4 rounded-full border-primary border-t-transparent animate-spin"></div>
      )} */}

      <div className="">
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-4">
          {listMovie?.length > 0 &&
            listMovie?.map((item: object) => (
              <MovieCard key={item.id} item={item}></MovieCard>
            ))}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full gap-2 mt-10 xl:gap-4">
        <button
          className={`${
            nextPage === 1 ? "bg-pink-700 " : "bg-primary"
          } w-24 text-white p-2 rounded-lg`}
          onClick={() => loadpage("prev")}
          disabled={nextPage === 1}
        >
          Previous
        </button>
        <button
          className="w-24 p-2 text-white rounded-lg bg-primary"
          onClick={() => loadpage("next")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MoviePage;
