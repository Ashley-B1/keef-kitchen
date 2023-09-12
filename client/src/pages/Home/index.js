import React from "react";
import { Link } from "react-router-dom";

import "./Home.scss";

import Slider from "../../components/Carousel";
import Categories from "../../components/Categories";
import AgeVerifyModal from "../../components/AgeVerifyModal";

import { featuredImages, foodItems } from "../../resources/carouselData";
import categoryData from "../../resources/categoryData";

const Home = () => {
  return (
    <div className="home">
      <AgeVerifyModal />
      <Slider title="The Keef Experience" images={featuredImages} />
      <Categories data={categoryData} />
      <div className="del">
        <h4>
          Would you like to have your items delivered? If so, please go the{" "}
          <Link to="/contact" className="in-line link">Contact Page</Link> to see if you're in the delivery area!
        </h4>
      </div>
      <Slider title="Fan Favorites" images={foodItems} />
    </div>
  );
};

export default Home;
