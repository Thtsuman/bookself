import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import "./carousel.style.scss";

const Carousel = () => {
  const images = [
    {
      url: "http://fakeimg.pl/2000x800/0079D8/fff/?text=Without",
    },
    {
      url: "http://fakeimg.pl/2000x800/DA5930/fff/?text=JavaScript",
    },
    {
      url: "http://fakeimg.pl/2000x800/F90/fff/?text=Carousel",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndex = (type) => {
    switch (type) {
      case "next":
        currentIndex + 1 !== images.length
          ? setCurrentIndex(currentIndex + 1)
          : setCurrentIndex(0);
        break;
      case "prev":
        currentIndex === 0
          ? setCurrentIndex(images.length - 1)
          : setCurrentIndex(currentIndex - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div className="custom-carousel">
      <div className="carousel-btn-wrapper">
        <button
          onClick={() => handleChangeIndex("prev")}
          className="prev-btn inline-flex justify-center w-full px-3 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:bg-gray-400 hover:text-white cursor-pointer transition ease-in-out"
        >
          <ChevronLeftIcon className="w-10 h-10" />
        </button>
        <button
          onClick={() => handleChangeIndex("next")}
          className="next-btn inline-flex justify-center w-full px-3 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:bg-gray-400 hover:text-white cursor-pointer transition ease-in-out"
        >
          <ChevronRightIcon className="w-10 h-10" />
        </button>
      </div>
      <div className="images-wrapper">
        {images.map((image, index) => (
          <img
            src={image.url}
            className={`carousel-image${
              index === currentIndex ? "--active" : ""
            }`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
