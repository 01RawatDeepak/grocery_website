import React from 'react'
import { CategoryPage } from '../CategoryPage/CategoryPage'
import BgSeaFood from '../../assets/seafood-banner.jpg'
export const SeaFood = () => {
  return (
    <div className="">
      <CategoryPage title="Meat & SeaFood" bgImage={BgSeaFood}categories={['SeaFood']} />
    </div>
  )
}
