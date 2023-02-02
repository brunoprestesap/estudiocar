import React from "react";
import imgCta from "../assets/IMG_0192.jpeg";

const Cta = () => {
  return (
    <div className="bg-stone-900 p-8">
      <div className="p-12 border border-white flex flex-col justify-center items-center">
        <img src={imgCta} alt="/" className="rounded-full w-32 h-32" />
        <h2 className="text-stone-200 text-3xl md:text-xl text-center lg:text-2xl font-bold my-8 md:mx-12">Pronto pra cuidar do seu carro?</h2>
        <button className="p-5 bg-stone-400 text-lg w-full md:w-52 lg:w-64 text-white/90 hover:bg-stone-600">
          Solicite uma cotação
        </button>
      </div>
    </div>
  );
};

export default Cta;
