import React from 'react'

import { FaInstagram } from 'react-icons/fa'
import imgAbout from '../assets/IMG_0330.jpeg'

const About = () => {
  return (
    <div className='flex flex-col w-full lg:justify-center lg:flex-row'>
      <div id='about' className='w-full p-5'>

        <div className='border-l-2 border-stone-800'>
          <h2 className='font-bold text-5xl ml-5 md:text-6xl md:font-bold'>Sobre<br />Estúdio Car Detalhamento</h2>
        </div>

        <p className='text-sm md:text-2xl leading-7 lg:ml-12 my-5'>
          Estúdio Car Detail was created for owners of fine automobiles who share the same appreciation for the art and beauty of cars that we do.
          We offer comprehensive yet flexible detailing and protection services to suit our clients needs, and we do it with unequaled quality, passion, and professionalism.
        </p>

        <div className=''>
          <p className='text-base md:text-xl'>
            contato@estudiocar.com.br
          </p>
          <p className='text-base md:text-xl'>
            (32)98871-3211
          </p>
          <p className='text-base md:text-xl'>
            R Regina Ladeira Halfeld - Tiguera, Juiz de Fora - MG / 36071-100
          </p>
          <div className='mt-3 md:mt-12 flex items-center gap-3'>
            <FaInstagram size={35} />
            <p className='font-sm text-stone-800'>@estudio_car_detalhamento</p>
          </div>
        </div>

      </div>


      <div className='flex flex-col justify-center md:w-full'>
        <div className='border-1 border-stone-700 w-full flex justify-center'>
          <img src={imgAbout} className='w-full' ></img>
        </div>

        <div className='flex flex-col md:flex-row p-5 gap-3 w-full justify-center items-center'>

          <div className='flex justify-around items-center w-full md:w-72 py-3 bg-stone-800'>
            <div>
              <h2 className='text-4xl md:text-6xl font-bold text-stone-200'>5+</h2>
            </div>
            <div>
              <p className='text-xl md:text-2xl text-right text-stone-200'>Anos de<br />experiência</p>
            </div>
          </div>

          <div className='flex justify-around items-center w-full md:w-72 py-3 bg-stone-800'>
            <div>
              <h2 className='text-4xl md:text-6xl font-bold text-stone-200'>1K+</h2>
            </div>
            <div>
              <p className='text-xl md:text-2xl text-right text-stone-200'>Carros<br />Detalhados</p>
            </div>
          </div>        

        </div>


        <div className='w-full flex justify-center'>
          <button className='py-5 px-12 bg-black text-gray-200 text-xl font-medium'>
            Solicite uma cotação
          </button>
        </div>

      </div>

    </div>
  )
}

export default About