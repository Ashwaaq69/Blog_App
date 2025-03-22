
import React from 'react'
import imageone from '../assets/1.jpg'

const blog = () => {
  return (
    <div className="flex flex-col justify-between max-w-9/10 p-10 m-0 auto gap-8 m">
        
        <div className="flex justify-between gap-8">
            <img className="w-[300px] h-[260px] ml-8"  src={imageone} alt="Hero Image" />
            <div className='items-center'>
                <h1 className='font-bold text-4xl mb-4'>How Chat GPT and Other Ai Tools Can Transform Our World</h1>
                <p className="mb-2">
                <a className="text-gray-400">miki </a>
                <time className="text-gray-400">2025-01-07 11:014</time>
                </p>
                <p className='text-2xl bold mt-6'>Have you heard about the new Ai tool called ChatGPT? it stands for Generate pre-trained Transformer, And its about you can talk to and have a conversation with.</p>
            </div>
        </div>
    </div>
    
  )
}

export default blog