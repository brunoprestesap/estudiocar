import React from 'react'
import ServicesItem from './ServicesItem'
import coating from '../assets/IMG_0192.jpeg'
import film from '../assets/IMG_0203.jpeg'
import polimento from '../assets/IMG_9887.jpeg'
import lavagem from '../assets/IMG_0206.jpeg'

const Services = () => {
    const services = [
        {
            id: 1,
            img: film,
            title: 'Filme para proteção de pintura',
            desc: 'Usamos o filme mais claro e de melhor desempenho do setor, com qualidade de instalação incomparável. Da proteção frontal ao revestimento total de um veículo, podemos personalizar um pacote de proteção para suas necessidades exatas.'
        },
        {
            id: 2,
            img: polimento,
            title: 'Correção de pintura',
            desc: 'O polimento de pintura, também conhecido como correção de pintura, é a melhor maneira de melhorar o brilho e a clareza da pintura do seu veículo.'
        },
        {
            id: 3,
            img: coating,
            title: 'Coating Ceramico',
            desc: 'Se você dirige um Acura, BMW, Mercedes-Benz, Porsche, Ferrari, Lamborghini ou qualquer outro, estamos aqui para trabalhar com você e criar um pacote de revestimento cerâmico para atender às suas necessidades.'
        },
        {
            id: 4,
            img: lavagem,
            title: 'Lavagem detalhada',
            desc: 'Nossos serviços de detalhamento premium fornecem a mais alta qualidade de trabalho de detalhamento automotivo, por meio do uso dos melhores produtos e ferramentas de detalhamento do setor, tornando a experiência do cliente incomparável.'
        }
    ]

  return (
    <div id='services'>
        <div className='bg-stone-900 w-full px-5 py-8 md:flex md:flex-row'>
            <div className='md:w-5/6'>
                <div className='border-l-2 border-stone-100 p-3'>
                    
                    <h2 className='text-stone-200 font-bold text-4xl md:text-6xl'>Serviços<br/>Complexos</h2>

                </div>

                <div className='px-5 py-8'>
                    <h2 className='text-base md:text-xl text-stone-200 md:my-8 landing-7'>
                        O detalhamento tem um significado diferente para todos, e é por isso que, com o Estúdio Car,
                        oferecemos vários serviços para trazer de volta o brilho e a clareza do seu veículo,
                        até o nível de detalhe restaurador para trazer um veículo a uma condição de novo ou melhor.
                    </h2>

                    <h2 className='text-base font-bold text-stone-200 mt-5'>
                        Área de atendimento:
                    </h2>
                    <h2 className='text-stone-400 font-bold text-base'>
                        Juiz de Fora - Minas Gerais
                    </h2>
                </div>
            </div>

            <div className='md:h-full'>
                {services.map((e) => {
                    return (
                        <ServicesItem
                            id={e.id}
                            img={e.img}
                            title={e.title}
                            desc={e.desc}
                        />                    
                    )
                })}
            </div>

        </div>
    </div>
  )
}

export default Services