import React, { useState } from 'react'

import { FaLongArrowAltLeft, FaLongArrowAltRight, FaRegStar } from 'react-icons/fa'

const CardReview = ({ img, initialName, name, review, modelCar }) => {

  return (
    <div>

        <div className='w-full my-8'>
            <img src={img} className='w-full h-72 object-cover' />
        </div>

        <div className='w-full flex justify-start items-center'>
            <div className='bg-stone-800 rounded-full w-16 h-16 flex items-center justify-center p-5'>
                <h2 className='text-stone-200 text-2xl font-bold'>{initialName}</h2>
            </div>

            <div className='mx-5'>
                <h2 className='text-2xl font-medium'>{name}</h2>
            </div>
        </div>

        <div className='w-full my-5'>
            <h2 className='text-sm text-stone-700'>
                {review}
            </h2>
        </div>

        <div className='w-full grid grid-cols-2'>
            <div>
                <div className='flex gap-1 mb-2'>
                    <FaRegStar size={20} />
                    <FaRegStar size={20} />
                    <FaRegStar size={20} />
                    <FaRegStar size={20} />
                    <FaRegStar size={20} />
                </div>
                <h2 className='text-sm font-bold'>
                    {modelCar}
                </h2>
            </div>
            <div className='flex flex-row justify-end items-center gap-3'>
                <div className='rounded-full h-10 w-10 bg-stone-300 text-white flex justify-center items-center'>
                    <FaLongArrowAltLeft size={30}/>
                </div>
                <div className='rounded-full h-10 w-10 bg-stone-300 text-white flex justify-center items-center'>
                    <FaLongArrowAltRight size={30}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardReview