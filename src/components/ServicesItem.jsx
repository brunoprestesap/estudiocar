import React from "react";

const ServicesItem = ({ id, img, title, desc }) => {
  return (
    <div key={id} className="w-full grid grid-cols-1 sm:grid-cols-2 sm:p-5">
      <div>
        <img
          className="object-cover w-full md:w-full h-64 md:h-96"
          src={img}
          alt="Imagem do serviço"
        />
      </div>
      <div className="md:flex md:flex-col px-0 sm:px-5 md:px-5 md:text-xl">
        <h2 className="text-stone-200 font-bold text-2xl mt-5 sm:mt-0">
          {title}
        </h2>
        <h2 className="text-stone-200 text-sm leading-5 my-5 text-justify">
          {desc}
        </h2>

        <div className="border-b-2 py-2 w-fit border-stone-300 mb-5">
            <h2 className="text-stone-300 font-boldsm:mb-0 md:text-lg">
                Mais detalhes
            </h2>
        </div>

      </div>
    </div>
  );
};

export default ServicesItem;
