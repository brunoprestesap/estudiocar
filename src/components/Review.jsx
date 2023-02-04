import React, { useState } from 'react'
import imgReview from '../assets/IMG_9887.jpeg'
import imgCompass from '../assets/IMG_9770.jpeg'
import imgSw4 from '../assets/IMG_9702.jpeg'
import imgPolo from '../assets/IMG_0330.jpeg'
import imgArgo from '../assets/IMG_0287.jpeg'

import CardReview from './CardReview'

const Review = () => {

    const reviews = [
        {
            id: 1,
            img: imgReview,
            initialName: 'T',
            name: 'Tim Koerner',
            review: 'Melhor atendimento! Profissional muito qualificado! Honestidade 100%! Parabéns pelo trabalho!',
            modelCar: 'Mini Cooper S'
        },
        {
            id: 2,
            img:imgCompass,
            initialName: 'P',
            name: 'Paulo Junior',
            review: 'Espetacular. O Melhor q já conheci! Tem o cuidado, a atenção, o carinho e nada passa desapercebido! Limpa e detalha o carro da gente de cotonete, literalmente! Parabéns Pablo e Nicolas 👏',
            modelCar: 'Compass T240'
        },
        {
            id: 3,
            img: imgSw4,
            initialName: 'G',
            name: 'Gustavo Halfeld',
            review: 'Produtos de muita qualidade, profissional de muita experiência. Fiz o full coating e indico.',
            modelCar: 'Hilux SW4'
        },
        {
            id: 4,
            img: imgPolo,
            initialName: 'L',
            name: 'Luiz Paulo',
            review: 'Produtos e serviços de qualidade.',
            modelCar: 'Vw Polo'
        },
        {
            id: 5,
            img: imgArgo,
            initialName: 'F',
            name: 'Filipe Jardel',
            review: 'Melhor atendimento! Profissional muito qualificado! Honestidade 100%! Parabéns pelo trabalho!',
            modelCar: 'Fiat Argo'
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentReview, setCurrentReview] = useState(reviews[currentIndex])

    const nextIndex = () => {
        if (currentIndex < 4) {
            setCurrentIndex(() => {
                return currentIndex + 1
            })
            setCurrentReview(reviews[currentIndex])
            
        } else if (currentIndex == 4) {
            setCurrentIndex(() => {
                return 0
            })
            setCurrentReview(reviews[currentIndex])
            
        }

    }

    const interval = setInterval(() => {
        nextIndex()
        
    }, 5000)


  return (
    <div id='reviews' className='bg-[#EFEFEF] w-full p-5'>
        <div className='w-full py-5 px-5 border-l-2 border-stone-800'>
            <h2 className='text-4xl font-bold font-stone-800'>
                Reviews de Clientes
            </h2>
        </div>

        <CardReview 
            img={currentReview.img} 
            initialName={currentReview.initialName} 
            name={currentReview.name}
            review={currentReview.review}
            modelCar={currentReview.modelCar}
        />
    </div>
  )
}

export default Review