import React from "react";
import { useState, useRef, TouchEvent } from "react";

import imgSlider from "../assets/imgSlide.jpg";

const Slider = () => {
  const [imgRevealFraq, setImageRevealFraq] = useState(0.5);

  const imageContainer = useRef(null);

  const slide = function (xPosition) {
    const containerBoundingRect =
      imageContainer.current.getBoundingClientRect();

    setImageRevealFraq(function () {
      if (xPosition < containerBoundingRect.left) {
        return 0;
      } else if (xPosition > containerBoundingRect.right) {
        return 1;
      }
      return (
        (xPosition - containerBoundingRect.left) / containerBoundingRect.width
      );
    });
  };

  const handleTouchMove = (event) => {
    slide(event.touches.item(0).clientX);
  };

  const handleMouseDown = () => {
    window.onmousemove = handleMouseMove;
    window.onmouseup = handleMouseUp;
  };

  const handleMouseMove = (event) => {
    slide(event.clientX);
  };

  const handleMouseUp = () => {
    window.onmousemove = undefined;
    window.onmouseup = undefined;
  };

  return (
    <div id="slider">
      <div 
        ref={imageContainer}
        className="w-full mx-auto relative select-none group"
      >
        <img
          className="md:h-[600px] w-full object-cover pointer-events-none"
          src={imgSlider}
          alt="slider imagem"
        />

        <img
          style={{
            filter: "grayscale(100%)",
            clipPath: `polygon(0 0, ${imgRevealFraq * 100}% 0, ${
              imgRevealFraq * 100
            }% 100%, 0 100%`,
          }}
          src={imgSlider}
          alt="slider imagem"
          className="md:h-[600px] w-full absolute object-cover inset-0 pointer-events-none"
        />

        {/* Container do manipulador */}
        <div
          style={{ left: `${imgRevealFraq * 100}%` }}
          className="absolute inset-y-0 group-hover:opacity-100 opacity-0"
        >
          <div className="relative h-full opacity-50 hover:opacity-100">
            <div className="absolute inset-y-0 bg-white w-0.5 -ml-px" />

            {/* Selector Container */}
            <div
              style={{ touchAction: "none" }}
              onMouseDown={handleMouseDown}
              onTouchMove={handleTouchMove}
              className="h-12 w-12 -ml-6 -mt-6 rounded-full absolute top-1/2 bg-white shadow-lg flex items-center justify-center cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="rotate-90 transform w-8 h-8 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
