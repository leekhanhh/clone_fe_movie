import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
interface MovieVideosProps {
  linkvideo?: string;
}
const MovieVideos = (props: MovieVideosProps) => {
  const { id } = useParams();

  // const videoRef = useRef(null);
  // const [blobUrl, setBlobUrl] = useState(null);

  // useEffect(() => {
  //   if (props.linkvideo) {
  //     fetchVideoData(props.linkvideo);
  //   }
  // }, [props.linkvideo]);

  // const fetchVideoData = async (url) => {
  //   try {
  //     const response = await axios.get(url, {
  //       responseType: 'arraybuffer'
  //     });

  //     const blob = new Blob([response.data], { type: 'video/mp4' });
  //     const url = URL.createObjectURL(blob);
  //     setBlobUrl(url);
  //   } catch (error) {
  //     console.error('Error fetching video', error);
  //   }
  // };
  return (
    <div className="flex flex-col gap-3">
      <p className="mb-10 text-3xl font-bold text-center text-white ">Films</p>
      <video src={props.linkvideo} controls>
        <source type="video/mp4" />
      </video>
    </div>
  );
};

export default MovieVideos;
