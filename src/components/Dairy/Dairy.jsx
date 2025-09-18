import React from 'react'
import { CategoryPage } from '../CategoryPage/CategoryPage'
import BgDairy from '../../assets/dairy-banner.jpg'
export const Dairy = () => {
  return (
    <div><CategoryPage title="Dairy & Eggs" bgImage={BgDairy} categories={['Dairy']}/></div>
  )
}
