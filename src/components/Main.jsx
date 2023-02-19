import React from "react";
import bgMain from "../assets/IMG_0192.jpeg";
import logo from "../assets/logo.png";

const Main = () => {
  return (
    <div id="main">
      {/* Backgroud hero */}
      <img src={bgMain} className="w-full h-screen object-cover" alt="/" />

      {/* Container main */}
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50 justify-center">
        <div className="w-32 h-32 p-5">
          <img src={logo} alt="logo estudio car" />
        </div>

        <div className="max-w-[850px] m-auto h-96 px-5 w-full absolute bottom-28 md:bottom-24">
          <div className="border-l-4 border-stone-800 p-2">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900">
              Cuide do seu veículo em nosso estúdio de detalhamento com os
              melhores produtos europeus
            </h1>
            <h2 className="text-base mt-2 md:mt-5 md:text-xl md:font-bold">
              Estamos preparados para cuidar do seu veículo que você acabou de
              comprar ou aumentar seu lucro na hora de vende-lo.
            </h2>
          </div>

          <div className="flex justify-center md:justify-start mt-5">
            <a
              href="https://wa.me/5532988713211"
              target="_blank"
              rel="noreferrer"
            >
              <button className="py-5 w-64 bg-slate-900 text-gray-200">
                Solicite uma cotação
              </button>
            </a>
          </div>
        </div>

        <div className="absolute bottom-2 left-24 md:bottom-4 md:right-4 flex flex-col md:flex-row md:mt-5 justify-center md:justify-end items-center">
          <div className="text-center">
            <h2 className="text-sm md:text-lg">Área de cobertura</h2>
            <h2 className="font-bold">Juiz de Fora - Minas Gerais</h2>
          </div>

          <div className="text-center md:m-3">
            <h2 className="text-sm md:text-lg">contato@estudiocar.com.br</h2>
            <h2 className="text-sm md:text-lg">32 988713211</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
