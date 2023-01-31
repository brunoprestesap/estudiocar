import React from 'react'

const ServicesItem = ({id, img, title, desc}) => {
  return (
    <div key={id} className='md:p-12 w-full'>
        <div className='md:flex'>
            <img className='object-cover w-full md:w-72 h-64 md:h-96' src={img} alt='Imagem do serviço' />
            <div className='md:flex md:flex-col md:px-8 md:text-xl'>
                <h2 className='text-stone-200 font-bold text-xl md:text-2xl mt-5 md:mt-0'>
                    {title}
                </h2>
                <h2 className='text-stone-200 text-sm md:text-xl leading-7 my-5 text-justify'>
                    {desc}
                </h2>

                <h2 className='text-stone-300 font-bold mb-8 md:text-xl'>Mais detalhes</h2>
            </div>
        </div>
    </div>
  )
}

export default ServicesItem