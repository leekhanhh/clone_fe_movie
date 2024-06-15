import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
interface MovieVideosProps {
  linkvideo?: string;
}
const MovieVideos = (props: MovieVideosProps) => {
  const { id } = useParams();
  console.log("linkvideo", props.linkvideo);
  // console.log("link video", props.linkvideo);
  // const videoRef = useRef(null);
  // const [blobUrl, setBlobUrl] = useState(null);

  // useEffect(() => {
  //   if (props.linkvideo) {
  //     fetchVideoData();
  //   }
  // }, [props.linkvideo]);

  // const fetchVideoData = async () => {
  //   try {
  //     const response = await axios.get(props.linkvideo, {
  //       responseType: "arraybuffer",
  //     });

  //     const blob = new Blob([response.data], { type: "video/mp4" });
  //     const url = URL.createObjectURL(blob);
  //     setBlobUrl(url);
  //     console.log("Video fetched", url);
  //   } catch (error) {
  //     console.error("Error fetching video", error);
  //   }
  // };
  return (
    <div className="flex flex-col gap-3">
      <p className="mb-10 text-3xl font-bold text-center text-white ">Films</p>
      <video controls>
        <source src={props.linkvideo} type="video/mp4" />
        <source src={props.linkvideo} type="video/mkv" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default MovieVideos;
