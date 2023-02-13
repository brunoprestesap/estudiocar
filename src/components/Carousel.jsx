import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="my-8">
      <div className="border-l-2 m-5 border-slate-900">
        <h2 className="text-4xl font-bold ml-5">Serviços</h2>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:items-start">
        <div className="w-5/6 p-5">
          <div className="overflow-hidden relative rounded-xl">
            <div
              className="flex transition-transform ease-out duration-500"
              style={{ transform: `translateX(-${curr * 100}%)` }}
            >
              {slides}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={prev}
                className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
              >
                <FaChevronLeft size={40} />
              </button>
              <button
                onClick={next}
                className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
              >
                <FaChevronRight size={40} />
              </button>
            </div>

            <div className="aboslute bottom-4 right-0 left-0">
              <div className="flex items-center justify-center gap-2">
                {slides.map((_, i) => (
                  <div
                    className={`transition-all w-3 h-3 bg-white rounded-full
                  ${curr === i ? "p-2" : "bg-opacity-50"}
                `}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="p-5">
          <h2 className="lg:underline lg:underline-offset-8 text-xl font-medium lg:text-6xl lg:text-right text-slate-800">Veja alguns de nossos serviços em fotos</h2>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
