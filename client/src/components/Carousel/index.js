import React, { useRef, useState } from "react";

import "./Carousel.scss";

const Slider = ({ images, title }) => {
  const carousel = useRef();
  const [count, setCount] = useState(0);

  const incrementCarousel = (delta) => {
    const width = carousel.current.offsetWidth;

    if (!carousel.current) return;

    if (count + delta > images.length - 1) {
      setCount(0);
      carousel.current.scrollTo(0, 0);
      return;
    } else if (count + delta < 0) {
      setCount(images.length - 1);
      carousel.current.scrollTo(width * images.length -1, 0);
      return;
    }

    carousel.current.scrollTo(carousel.current.scrollLeft + width * delta, 0);

    setCount((c) => c + delta);
  };

  return (
    <div className="c-wrapper">
      <div className="carousel-container">
        <h2>{title}</h2>
        <div
          className="carousel-btn left-btn"
          onClick={() => incrementCarousel(-1)}
        ></div>
        <div
          className="carousel-btn right-btn"
          onClick={() => incrementCarousel(1)}
        ></div>
        <div className="carousel" ref={carousel}>
          {images.map((feat) => (
            <div key={feat.id} className="carousel-item">
              <img src={feat.img} alt={feat.desc} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
