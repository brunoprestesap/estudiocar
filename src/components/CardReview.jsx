import React, { useState } from "react";

import imgReview from "../assets/IMG_9887.jpeg";
import imgCompass from "../assets/IMG_9770.jpeg";
import imgSw4 from "../assets/IMG_9702.jpeg";
import imgPolo from "../assets/IMG_0330.jpeg";
import imgArgo from "../assets/IMG_0287.jpeg";

import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaRegStar,
} from "react-icons/fa";

const CardReview = () => {
  const reviews = [
    {
      id: 1,
      img: imgReview,
      initialName: "T",
      name: "Tim Koerner",
      review:
        "Melhor atendimento! Profissional muito qualificado! Honestidade 100%! Parabéns pelo trabalho!",
      modelCar: "Mini Cooper S",
    },
    {
      id: 2,
      img: imgCompass,
      initialName: "P",
      name: "Paulo Junior",
      review:
        "Espetacular. O Melhor q já conheci! Tem o cuidado, a atenção, o carinho e nada passa desapercebido! Limpa e detalha o carro da gente de cotonete, literalmente! Parabéns Pablo e Nicolas 👏",
      modelCar: "Compass T240",
    },
    {
      id: 3,
      img: imgSw4,
      initialName: "G",
      name: "Gustavo Halfeld",
      review:
        "Produtos de muita qualidade, profissional de muita experiência. Fiz o full coating e indico.",
      modelCar: "Hilux SW4",
    },
    {
      id: 4,
      img: imgPolo,
      initialName: "L",
      name: "Luiz Paulo",
      review: "Produtos e serviços de qualidade.",
      modelCar: "Vw Polo",
    },
    {
      id: 5,
      img: imgArgo,
      initialName: "F",
      name: "Filipe Jardel",
      review:
        "Melhor atendimento! Profissional muito qualificado! Honestidade 100%! Parabéns pelo trabalho!",
      modelCar: "Fiat Argo",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevIndex = () => {
    // isFirst vai ser true quando currentIndex for igual 0
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? reviews.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextIndex = () => {
    const isLast = currentIndex === reviews.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="w-full flex justify-center my-5">
        <img
          src={reviews[currentIndex].img}
          className="w-full h-72 lg:h-96 object-cover"
        />
      </div>

      <div className="lg:p-8">
        <div className="w-full flex justify-start items-center">
          <div className="bg-stone-800 rounded-full w-16 h-16 flex items-center justify-center p-5">
            <h2 className="text-stone-200 text-2xl font-bold">
              {reviews[currentIndex].initialName}
            </h2>
          </div>

          <div className="ml-5">
            <h2 className="text-2xl font-medium">
              {reviews[currentIndex].name}
            </h2>
          </div>
        </div>

        <div className="w-full h-24 my-5">
          <h2 className="text-sm md:text-lg text-stone-800">
            {reviews[currentIndex].review}
          </h2>
        </div>

        <div className="w-full grid grid-cols-2">
          <div>
            <div className="flex gap-1 mb-2">
              <FaRegStar size={20} />
              <FaRegStar size={20} />
              <FaRegStar size={20} />
              <FaRegStar size={20} />
              <FaRegStar size={20} />
            </div>
            <h2 className="text-sm md:text-xl font-bold">
              {reviews[currentIndex].modelCar}
            </h2>
          </div>
          <div className="flex flex-row justify-end items-center gap-3">
            <div
              onClick={prevIndex}
              className="rounded-full h-10 w-10 bg-stone-300 text-white flex justify-center items-center"
            >
              <FaLongArrowAltLeft size={30} />
            </div>
            <div
              onClick={nextIndex}
              className="rounded-full h-10 w-10 bg-stone-300 text-white flex justify-center items-center"
            >
              <FaLongArrowAltRight size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardReview;
