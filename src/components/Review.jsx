import React from 'react'

import CardReview from './CardReview'

const Review = () => {

  return (
    <div id='reviews' className='bg-[#EFEFEF] w-full p-5'>
        <div className='w-full py-2 px-5 border-l-2 border-stone-800'>
            <h2 className='text-4xl font-bold font-stone-800'>
                Reviews de Clientes
            </h2>
        </div>

        <CardReview />
    </div>
  )
}

export default Review