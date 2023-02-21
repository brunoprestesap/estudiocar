import React from "react";

import { FaInstagram } from "react-icons/fa";
import imgAbout from "../assets/IMG_0330.jpeg";

const About = () => {
  return (
    <div className="flex flex-col w-full lg:justify-center lg:flex-row md:mb-5">
      <div id="about" className="w-full p-5">
        <div className="border-l-4 border-stone-800">
          <h2 className="font-bold text-5xl ml-3 md:text-6xl md:font-bold">
            Sobre
            <br />
            Estúdio Car Detalhamento
          </h2>
        </div>

        <p className="text-sm md:text-lg leading-7 md:my-5">
          Estúdio Car Detalhamento já a 9 anos no marcado. Com formação internacional na Alemanha e Espanha.
          Certifield na gyeon Alemanha em full detail. Trabalha evoluindo o detalhamento no Brasil aplicando ppf, Coating cerâmico, detalhamento full. 
          Com as melhores marcas do mundo com alta tecnologia. Alem disso, ministramos cursos na área e atualmente somos detail oficial da fábrica do 
          grupo Fiat Brasil
        </p>

        <div className="md:my-5">
          <p className="text-sm md:text-base">contato@estudiocar.com.br</p>
          <p className="text-sm md:text-base">(32)98871-3211</p>
          <p className="text-sm md:text-base">
            R Regina Ladeira Halfeld - Tiguera, Juiz de Fora - MG / 36071-100
          </p>
          <div className="mt-3 md:mt-3 flex items-center gap-2">
            <FaInstagram size={35} />
            <p className="font-sm text-stone-800">@estudio_car_detalhamento</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center md:w-full">
        <div className="w-full flex justify-center items-center">
          <img src={imgAbout} className="w-full"></img>
        </div>

        <div className="flex flex-col md:flex-row p-5 gap-3 w-full justify-center items-center">
          <div className="flex justify-around items-center w-full py-3 bg-stone-800">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-200">
                9+
              </h2>
            </div>
            <div>
              <p className="text-xl text-right text-stone-200">
                Anos de
                <br />
                experiência
              </p>
            </div>
          </div>

          <div className="flex justify-around items-center w-full py-3 bg-stone-800">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-200">
                1K+
              </h2>
            </div>
            <div>
              <p className="text-xl text-right text-stone-200">
                Carros
                <br />
                Detalhados
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <a
            href="https://wa.me/5532988713211"
            target="_blank"
            rel="noreferrer"
          >
            <button className="py-5 px-12 bg-black text-gray-200 text-xl font-medium">
              Solicite uma cotação
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
