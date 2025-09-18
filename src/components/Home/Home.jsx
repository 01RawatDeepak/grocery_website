import React from 'react'
import { Hero } from '../Hero/Hero'
import { Category} from '../Category/Category'
import { Values } from '../Values/Values'
import {Products} from '../Products/Products'
import { Discount } from '../Dicount/Discount'
import { Process } from '../process/Process'
import { Testimonials } from '../Testimonials/Testimonials'
export const Home = () => {
  return (
    <>
    <Hero/>
    <Category/>
     <Values/>
     <Products/>
     <Discount/>
     <Process/>
     <Testimonials/>   
    </>
  )
}
