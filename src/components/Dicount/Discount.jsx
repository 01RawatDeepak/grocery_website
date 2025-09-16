import React from 'react'
import Button from '../Button/Button'
import FruitsSet from '../../assets/fresh-fruits.png'
export const Discount = () => {
  return (
    <section className='bg-zinc-100 bg-right bg-contain bg-no-repeat' style={{backgroundImage: `url(${FruitsSet})`}}>
        <div className='flex md:flex-row md:bg-transparent bg-zinc-100  flex-col max-w-[1400px] mx-auto px-10 py-10'>
            <span className='md:text-9xl text-5xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center'>20%</span>
            <div className="max-w-[700px]">
                <h3 className='md:text-7xl text-4xl text-zinc-800 font-bold '>First Order Dicount</h3>
                <p className='text-zinc-600 my-6'>Enjoy an exclusive first order discount on  our grocery
                    website! Shop fresh essentials and save big on your First
                    essential adn save big on Your first purpose. Fast delivery
                    quality guranteed.
                </p>
                <Button content="Get a Discount"/>
            </div>
        </div>
    </section>
  )
}
