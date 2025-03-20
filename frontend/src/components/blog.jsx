import React from 'react'
import image from '../assets/1.jpg'

const hero = () => {
  return (
    <div className="flex justify-between max-w-9/10 p-10 m-0 auto gap-8">
        
        <img className="w-[300px] h-[260px] ml-8"  src={image} alt="Hero Image" />
        
        <div className='items-center'>
        <h1 className='font-bold text-4xl mb-2'>How Chat GPT and Other Ai Tools Can Transform Our World</h1>
        <small className="text-gray-400 mb-4">miki 2025-01-07 11:014</small>
        <p className='text-2xl bold'>Have you heard about the new Ai tool called ChatGPT? it stands for Generate pre-trained Transformer, And its about you can talk to and have a conversation with.</p>
       </div>

       
       
    </div>
    
  )
}

export default hero