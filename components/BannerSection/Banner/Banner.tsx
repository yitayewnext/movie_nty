"use client";
import { useContext, useEffect, useState } from "react";
import { MasterContext } from "@/context/MasterContext";
import BannerSingle from "../BannerSingle/BannerSingle";
// import "./Banner.css";

const Banner = () => {
  const { movies } = useContext(MasterContext);

  const [currentItem, setCurrentItem] = useState(1);
  const [progress, setProgress] = useState(0);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(0);
      setCountdown(5);
      setCurrentItem((prevItem) => (prevItem === 6 ? 1 : prevItem + 1));
    }, 5000); // Switch image every 5 seconds

    const progressInterval = setInterval(() => {
      setProgress((prev) => prev + 1);
      setCountdown((prev) => (prev > 1 ? prev - 0.05 : prev)); // Decrease countdown
    }, 50);

    // Cleanup function
    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [currentItem]);

  return (
    <div className="relative w-full">
      <div className="carousel  w-full">
        {movies.map((movie, index) => {
          return (
            <BannerSingle
              key={movie.id}
              movie={movie}
              currentItem={currentItem}
              itemIndex={index + 1}
            />
          );
        })}
      </div>

      {/* buttons for the slider */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center gap-2 py-2  w-full">
        <button
          onClick={() => setCurrentItem(1)}
          className={`btn btn-xs ${currentItem === 1 ? "btn-active" : ""}`}
        >
          1
        </button>
        <button
          onClick={() => setCurrentItem(2)}
          className={`btn btn-xs ${currentItem === 2 ? "btn-active" : ""}`}
        >
          2
        </button>
        <button
          onClick={() => setCurrentItem(3)}
          className={`btn btn-xs ${currentItem === 3 ? "btn-active" : ""}`}
        >
          3
        </button>
        <button
          onClick={() => setCurrentItem(4)}
          className={`btn btn-xs ${currentItem === 4 ? "btn-active" : ""}`}
        >
          4
        </button>
        <button
          onClick={() => setCurrentItem(5)}
          className={`btn btn-xs ${currentItem === 5 ? "btn-active" : ""}`}
        >
          5
        </button>
        <button
          onClick={() => setCurrentItem(6)}
          className={`btn btn-xs ${currentItem === 6 ? "btn-active" : ""}`}
        >
          6
        </button>
      </div>

      {/* Circular progress bar with countdown
      <div className="absolute top-6 right-4">
        <svg className="w-12 h-12">
          <circle
            className="text-[#5a5a5a]"
            strokeWidth="4"
            stroke="currentColor"
            fill="transparent"
            r="18"
            cx="24"
            cy="24"
          />
          <circle
            className="text-[white]"
            strokeWidth="4"
            strokeDasharray="113"
            strokeDashoffset={113 - (113 * progress) / 100}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="18"
            cx="24"
            cy="24"
          />
          <text
            x="24"
            y="28"
            textAnchor="middle"
            className="text-sm font-bold fill-current text-[white]"
          >
            {Math.ceil(countdown)}
          </text>
        </svg>
      </div> */}
    </div>
  );
};

export default Banner;
