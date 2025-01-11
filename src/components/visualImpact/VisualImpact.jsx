import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Example icon


export const VisualImpact = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://ik.imagekit.io/ajql7av7t/vayuratha/green-field-sunset.jpg?updatedAt=1736334364014",
    "https://ik.imagekit.io/ajql7av7t/vayuratha/right-img?updatedAt=1736334921965",
    "https://ik.imagekit.io/ajql7av7t/vayuratha/landscape?updatedAt=1736333938191",
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1 
    );
  };

  const getSafeIndex = (index) => (index + images.length) % images.length;

  return (
    <div className="2xl:container mx-auto bg-white p-2">
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 bg-[#151515] p-7 pb-4 mt-5 mb-2 gap-24 rounded-3xl md:hover:cursor-pointer">
        <div>
          <h1 className="font-[Montserrat] text-left font-semibold text-[38px] text-white">
            Get Your Maximum Visual Impact With Dronex
          </h1>
          <p className="text-white text-[14px] font-normal font-[Montserrat] pb-3 transition-opacity duration-1000 ease-in-out hover:opacity-80">
            Experience extraordinary visuals with Dronex, designed for maximum
            impact and superior video quality.
          </p>
          <div className="flex flex-row justify-end pb-5">
            <button className="text-white pr-3" onClick={nextImage}>
            <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button className="text-white" onClick={prevImage}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>

          <div className="hidden md:flex flex-row items-start gap-5">
            <img
              src={images[getSafeIndex(currentIndex - 1)]}
              alt={`Carousel ${currentIndex}`}
              className="rounded-3xl h-[200px] w-[300px]"
            />
            <img
              src={images[getSafeIndex(currentIndex - 2)]}
              alt={`Carousel ${currentIndex}`}
              className="rounded-3xl h-[200px] w-[300px]"
            />
          </div>
          <div className="space-y-5 px-14 hidden">
            <img
              src={images[getSafeIndex(currentIndex + 1)]}
              alt={`Carousel ${currentIndex}`}
              className="rounded-3xl h-[200px] w-[300px]"
            />
            <img
              src={images[getSafeIndex(currentIndex + 2)]}
              alt={`Carousel ${currentIndex}`}
              className="rounded-3xl h-[200px] w-[300px]"
            />
          </div>
        </div>
        {/* Grid-2 */}
        <div>
          <img
            src={images[currentIndex]}
            alt={`Carousel ${currentIndex}`}
            className="rounded-3xl h-[400px] w-[400px] ml-20"
          />
        </div>
      </div>
    </div>
  );
};