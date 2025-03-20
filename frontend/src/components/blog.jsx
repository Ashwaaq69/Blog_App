
import React from 'react'
import imageone from '../assets/1.jpg'
import imagetwo from '../assets/2.jpg'
import imagethree from '../assets/3.jpg'
import imagefour from '../assets/4.jpg'


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

        <div className="flex justify-between gap-8">
            <img className="w-[300px] h-[260px] ml-8"  src={imagetwo} alt="Hero Image" />
            <div className='items-center'>
                <h1 className='font-bold text-4xl mb-2'>How Chat GPT and Other Ai Tools Can Transform Our World</h1>
                <small className="text-gray-400 mb-4">miki 2025-01-07 11:014</small>
                <p className='text-2xl bold'>Have you heard about the new Ai tool called ChatGPT? it stands for Generate pre-trained Transformer, And its about you can talk to and have a conversation with.</p>
            </div>
        </div>

        <div className="flex justify-between gap-8">
            <img className="w-[300px] h-[260px] ml-8"  src={imagethree} alt="Hero Image" />
            <div className='items-center'>
                <h1 className='font-bold text-4xl mb-2'>How Chat GPT and Other Ai Tools Can Transform Our World</h1>
                <small className="text-gray-400 mb-4">miki 2025-01-07 11:014</small>
                <p className='text-2xl bold'>Have you heard about the new Ai tool called ChatGPT? it stands for Generate pre-trained Transformer, And its about you can talk to and have a conversation with.</p>
            </div>
        </div>

        <div className="flex justify-between gap-8">
            <img className="w-[300px] h-[260px] ml-8"  src={imagefour} alt="Hero Image" />
            <div className='items-center'>
                <h1 className='font-bold text-4xl mb-2'>How Chat GPT and Other Ai Tools Can Transform Our World</h1>
                <small className="text-gray-400 mb-4">miki 2025-01-07 11:014</small>
                <p className='text-2xl bold'>Have you heard about the new Ai tool called ChatGPT? it stands for Generate pre-trained Transformer, And its about you can talk to and have a conversation with.</p>
            </div>
        </div>
       
    </div>
    
  )
}

export default blog