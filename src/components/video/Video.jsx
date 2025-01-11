import React, { useRef, useState } from "react";
import pause_icon from "../../assets/pause_icon.png";
import play_icon from "../../assets/play_icon.png";
import video1 from "../../assets/video1.mp4";

const Video = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;

    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="2xl:container mx-auto bg-white">
      <div className="w-[90%] md:w-[80%] mx-auto md:block grid-cols-2 bg-[#F6F6F6] p-5 gap-x-4 py-2 pb-4 gap-2 rounded-3xl md:hover:cursor-pointer">
        <div className="flex flex-row justify-center items-center pb-5 pt-5">
          <h1 className="font-[Montserrat] text-center lg:font-semibold lg:text-[45px] text-black lg:w-[75%] lg:pr-3 sm:pr-2 sm:text-[30px] sm:w-[150%] sm:text-justify">
            Aerial Excellence in Action
          </h1>

          <p className="text-black lg:text-[14px] lg:font-normal font-[Montserrat] pb-3 transition-opacity duration-1000 ease-in-out hover:opacity-80 lg:flex lg:justify-center lg:items-start sm:text-[14px] sm:text-justify sm:justify-items-end">
            Watch videos highlighting the exceptional performance and innovative
            features of our state-of-the-art drones
          </p>
        </div>
        <div className="relative">
          <video
            ref={videoRef}
            className="w-full rounded-lg shadow-md video"
            loop
            muted
          >
            <source src={video1} type="video/mp4" />
          </video>
          <img
            src={isPlaying ? pause_icon : play_icon}
            alt="Play/Pause"
            onClick={togglePlay}
            className="absolute right-5 bottom-5 cursor-pointer "
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
