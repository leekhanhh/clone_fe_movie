import React from "react";
interface EpisodeProps {
  number: number;
}
const Episode = (props: EpisodeProps) => {
  return (
    <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full cursor-pointer hover:bg-red-400 hover:text-white ">
      <p>{props.number}</p>
    </div>
  );
};

export default Episode;
