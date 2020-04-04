import React, { Component } from "react";
import Swiper from "react-id-swiper";

const swiperParams = {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  observer: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
};

class Slider extends Component {
  render() {
    return (
      <Swiper {...swiperParams} shouldSwiperUpdate>
        {this.props.photos.map((photo, key) => {
          return (
            <a
              key={photo}
              href={"https://buyandsellnepal.tech/images/" + photo}
              target="_blank"
            >
              <div>
                <img
                  className="img-fluid"
                  style={{ height: 600, width: 600 }}
                  src={"https://buyandsellnepal.tech/images/" + photo}
                />
              </div>
            </a>
          );
        })}
      </Swiper>
    );
  }
}

export default Slider;
