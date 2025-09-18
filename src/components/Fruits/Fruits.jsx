import React from 'react'
import { CategoryPage } from '../CategoryPage/CategoryPage'
import BgFruits from '../../assets/fruits-banner.jpg'   // ✅ import the image

export const Fruits = () => {
  return (
    <div>
      {/* pass the imported image */}
      <CategoryPage title="Fruits & Veggies" bgImage={BgFruits} categories={['Fruits','Vegetables']} />
    </div>
  )
}
