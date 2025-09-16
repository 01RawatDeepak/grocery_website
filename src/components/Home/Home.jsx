import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Hero } from '../Hero/Hero'
import { Category} from '../Category/Category'
import { Values } from '../Values/Values'
import {Products} from '../Products/Products'
import { Discount } from '../Dicount/Discount'
import { Process } from '../process/Process'
import { Testimonials } from '../Testimonials/Testimonials'
import { Footer } from '../Footer/Footer'

export const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Category/>
     <Values/>
     <Products/>
     <Discount/>
     <Process/>
     <Testimonials/>
     <Footer/>
    </>
  )
}
