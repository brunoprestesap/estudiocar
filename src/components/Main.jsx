import React from 'react'
import bgMain from '../assets/IMG_0192.jpeg'
import logo from '../assets/logo.png'

const Main = () => {
  return (
    <div id='main'>

            {/* Backgroud hero */}
            <img src={bgMain} className='w-full h-screen object-cover' alt='/' />

            {/* Container main */}
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50 justify-center'>

                <div className='w-32 h-32 p-5'>
                    <img src={logo} alt='logo estudio car' />
                </div>


                <div className='max-w-[600px] m-auto h-96 px-5 w-full absolute bottom-24'>

                    <div className='border-l-4 border-stone-800 p-2'>
                        <h1 className='sm:text-5xl text-3xl font-bold text-stone-800'>
                            Restaure o brilho do seu carro com a nossa equipe especializada na melhores marcas de produtos da Europa.
                        </h1>
                    </div>


                    <div className='flex justify-center md:justify-start'>
                        <button className='mt-8 px-8 py-5 w-72 bg-black text-gray-200'>
                            Solicite uma cotação
                        </button>
                    </div>


                </div>

                    <div className='absolute bottom-7 left-24 md:bottom-4 md:right-4 flex flex-col md:flex-row md:mt-5 justify-center md:justify-end items-center'>
                        <div className='text-center'>
                            <h2>
                                Área de cobertura
                            </h2>
                            <h2 className='font-bold'>
                                Juiz de Fora - Minas Gerais
                            </h2>
                        </div>
                    
                        <div className='text-center m-3'>
                            <h2>
                                contato@estudiocar.com.br
                            </h2>
                            <h2>
                                32 988713211
                            </h2>
                        </div>

                    </div>
            </div>
        </div>
  )
}

export default Main