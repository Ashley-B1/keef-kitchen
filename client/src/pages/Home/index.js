import React from 'react';

import "./Home.scss";

import Slider from '../../components/Carousel';
import Categories from '../../components/Categories';
import AgeVerifyModal from '../../components/AgeVerifyModal'

import { featuredImages, foodItems } from '../../resources/carouselData';
import categoryData from "../../resources/categoryData";

const Home = () => {
  return (
    <div className='home'>
      <AgeVerifyModal />
      <Slider title="The Keef Experience" images={featuredImages} />
      <Categories data={categoryData} />
      <Slider title="Fan Favorites" images={foodItems} />
    </div>
  )
}

export default Home