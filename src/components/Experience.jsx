import React from "react";
import bgExperience from "../assets/IMG_0483.jpeg";

const Experience = () => {
  return (
    <div className="relative">
      <img
        src={bgExperience}
        className="w-full h-96  object-cover"
        alt="background experiencia"
      />

      <div className="bg-white/50 w-full h-full absolute top-0 left-0">
        <div className="h-full w-full flex justify-around items-center p-5 gap-3">
          <div className="w-80 md:w-96 md:m-0 group bg-stone-800 bg-opacity-90 drop-shadow-lg bg-blend-screen text-stone-200 py-8 px-5">
            <h2 className="font-bold text-xl md:text-3xl">Experiência</h2>

            <div>
              <div className="flex justify-between items-center mt-8 border-l-4 pl-2 border-l-gray-200">
                <h2 className="text-5xl lg:text-5xl">5+</h2>
                <h2 className="text-sm lg:text-xl text-right">
                  Anos de
                  <br />
                  experëncia
                </h2>
              </div>

              <div className="flex justify-between items-center mt-4 border-l-4 pl-2 border-l-gray-200">
                <h2 className="text-5xl lg:text-5xl">1K+</h2>
                <h2 className="text-sm lg:text-xl text-right">
                  Serviços
                  <br />
                  Realizados
                </h2>
              </div>
            </div>
          </div>

          <div>
            <h2 className="align-middle	text-2xl leading-7 tracking-wider md:text-6xl text-right md:text-justify font-bold text-gray-900">
              Baseado em<br/> Experiência
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
