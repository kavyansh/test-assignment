import React, { useState } from "react";

const product1 = new URL("./../assets/product1.png", import.meta.url).href;
const product2 = new URL("./../assets/product2.png", import.meta.url).href;
const product3 = new URL("./../assets/product3.png", import.meta.url).href;

const product4 = new URL("./../assets/product4.png", import.meta.url).href;
const product5 = new URL("./../assets/product5.png", import.meta.url).href;

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const images = [
  {
    image: product1,
    id: "s1",
    description: "Modern substance high quality",
  },
  {
    image: product2,
    id: "s2",
    description: "High quality content",
  },
  {
    image: product3,
    id: "s3",
    description: "flower lorem ipsum",
  },
  {
    image: product4,
    id: "s4",
    description: "Some product lorem ipsum",
  },
  {
    image: product5,
    id: "s5",
    description: "Some ipsum lorem product",
  },
];

function Carousel() {
  const [selectedRadio, setSelectedRadio] = useState(2);

  function changeOption(e) {
    setSelectedRadio(Number(e.target.value));
  }

  function moveLeft() {
    setSelectedRadio((selectedRadio) =>
      selectedRadio > 0 ? selectedRadio - 1 : selectedRadio
    );
  }

  function moveRight() {
    setSelectedRadio((selectedRadio) =>
      selectedRadio < images.length - 1 ? selectedRadio + 1 : selectedRadio
    );
  }

  return (
    <section id="slider">
      <i className="slider__leftIcon" onClick={moveLeft}>
        <FiArrowLeft />
      </i>
      {images.map((item, i) => (
        <React.Fragment key={item.id}>
          <input
            key={item.id}
            value={i}
            type="radio"
            name="slider"
            className="slider__radio"
            id={item.id}
            checked={selectedRadio === i}
            onChange={changeOption}
          />
          <label className={`radio__label`} htmlFor={item.id}></label>
        </React.Fragment>
      ))}
      {images.map((item, i) => (
        <label key={item.id} htmlFor={item.id} id={`slide${i + 1}`}>
          <img className="carousel__img" src={item.image} alt="carousel item" />
          {item.id === `s${selectedRadio + 1}` && (
            <div className={`carousel__img-tag`}>{item.description}</div>
          )}
        </label>
      ))}
      <i className="slider__rightIcon" onClick={moveRight}>
        <FiArrowRight />
      </i>
    </section>
  );
}

export default Carousel;
