import React from "react";
import "./masonry.css";
const Masonry = (props) => {
  return (
    <section className="relative sm:px-6 mt-24" id="masonry-grid">
      <div class="sprite-svg">
        <svg height={64} width={64} {...props}>
          <path d="M17.919 55.738c-.858.867-.858 2.266 0 3.133s2.243.867 3.101 0l25.056-25.302a2.228 2.228 0 0 0 0-3.133L21.02 5.13c-.858-.867-2.243-.867-3.101 0s-.858 2.266 0 3.133l22.848 23.738-22.848 23.738z" />
        </svg>
      </div>
      <div class="wrapper">
        <a class="grid-image" href="#img1">
          <img
            alt="image 1"
            src="https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&amp;cs=tinysrgb&amp;w=400"
          />
        </a>
        <a class="grid-image" href="#img2">
          <img
            alt="image 2"
            src="https://images.pexels.com/photos/774861/pexels-photo-774861.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"
          />
        </a>
        <a class="grid-image" href="#img3">
          <img
            alt="image 3"
            src="https://images.pexels.com/photos/1367179/pexels-photo-1367179.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"
          />
        </a>
        <a class="grid-image" href="#img4">
          <img
            alt="image 3"
            src="https://images.pexels.com/photos/1367105/pexels-photo-1367105.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"
          />
        </a>
        <a class="grid-image" href="#img5">
          <img
            alt="image 3"
            src="https://images.pexels.com/photos/1292115/pexels-photo-1292115.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"
          />
        </a>
        <a class="grid-image" href="#img6">
          <img
            alt="image 3"
            src="https://images.pexels.com/photos/794079/pexels-photo-794079.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"
          />
        </a>
        <a class="grid-image" href="#img7">
          <img
            alt="image 3"
            src="https://images.pexels.com/photos/640809/pexels-photo-640809.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"
          />
        </a>
        <a class="grid-image" href="#img8">
          <img
            alt="image 3"
            src="https://images.pexels.com/photos/1000559/pexels-photo-1000559.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"
          />
        </a>
        <a class="grid-image" href="#img9">
          <img
            alt="image 4"
            src="https://images.pexels.com/photos/708921/pexels-photo-708921.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"
          />
        </a>
      </div>

      <div class="zoom-wrapper" id="img1">
        <div class="zoom-wrapper__image">
          <div class="cell">
            <img
              alt="image 1"
              class="zoom-image"
              src="https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&amp;cs=tinysrgb&amp;w=1000"
            />
          </div>
        </div>
        <a
          class="zoom-wrapper__close lg:top-[70px] top-[150px]"
          href="#masonry-grid"
        >
          ×
        </a>
        <a class="navigation-arrow navigation-arrow__next" href="#img2">
          <span class="navigation-arrow__image">
            <img
              alt="image 2"
              src="https://images.pexels.com/photos/774861/pexels-photo-774861.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"
            />
          </span>
          <span class="navigation-arrow__icon">
            <svg class="icon" height="28" viewbox="0 0 64 64" width="28">
              <use
                xlinkHref="#arrow-right-1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              ></use>
            </svg>
          </span>
        </a>
      </div>
      <div class="zoom-wrapper" id="img2">
        <div class="zoom-wrapper__image">
          <div class="cell">
            <img
              alt="image 2"
              class="zoom-image"
              src="https://images.pexels.com/photos/774861/pexels-photo-774861.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1000"
            />
          </div>
        </div>
        <a
          class="zoom-wrapper__close lg:top-[70px] top-[150px]"
          href="#masonry-grid"
        >
          ×
        </a>
        <a class="navigation-arrow navigation-arrow__prev" href="#img1">
          <span class="navigation-arrow__image">
            <img
              alt="image 1"
              src="https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&amp;cs=tinysrgb&amp;w=400"
            />
          </span>
          <span class="navigation-arrow__icon">
            <svg className="icon" height={28} width={28} {...props}>
              <use />
            </svg>
          </span>
        </a>
        <a class="navigation-arrow navigation-arrow__next" href="#img3">
          <span class="navigation-arrow__image">
            <img
              alt="image 3"
              src="https://images.pexels.com/photos/1367179/pexels-photo-1367179.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"
            />
          </span>
          <span class="navigation-arrow__icon">
            <svg class="icon" height="28" viewbox="0 0 64 64" width="28">
              <use
                xlinkHref="#arrow-right-1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              ></use>
            </svg>
          </span>
        </a>
      </div>
      <div class="zoom-wrapper" id="img3">
        <div class="zoom-wrapper__image">
          <div class="cell">
            <img
              alt="image 3"
              class="zoom-image"
              src="https://images.pexels.com/photos/1367179/pexels-photo-1367179.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1000"
            />
          </div>
        </div>
        <a
          class="zoom-wrapper__close lg:top-[70px] top-[150px]"
          href="#masonry-grid"
        >
          ×
        </a>
        <a class="navigation-arrow navigation-arrow__prev" href="#img2">
          <span class="navigation-arrow__image">
            <img
              alt="image 2"
              src="https://images.pexels.com/photos/774861/pexels-photo-774861.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"
            />
          </span>
          <span class="navigation-arrow__icon">
            <svg class="icon" height="28" viewbox="0 0 64 64" width="28">
              <use
                xlinkHref="#arrow-left-1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              ></use>
            </svg>
          </span>
        </a>
        <a class="navigation-arrow navigation-arrow__next" href="#img4">
          <span class="navigation-arrow__image">
            <img
              alt="image 3"
              src="https://images.pexels.com/photos/1367105/pexels-photo-1367105.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"
            />
          </span>
          <span class="navigation-arrow__icon">
            <svg class="icon" height="28" viewbox="0 0 64 64" width="28">
              <use
                xlinkHref="#arrow-right-1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              ></use>
            </svg>
          </span>
        </a>
      </div>
      <div class="zoom-wrapper" id="img4">
        <div class="zoom-wrapper__image">
          <div class="cell">
            <img
              alt="image 3"
              class="zoom-image"
              src="https://images.pexels.com/photos/1367105/pexels-photo-1367105.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1000"
            />
          </div>
        </div>
        <a
          class="zoom-wrapper__close lg:top-[70px] top-[150px]"
          href="#masonry-grid"
        >
          ×
        </a>
        <a class="navigation-arrow navigation-arrow__prev" href="#img3">
          <span class="navigation-arrow__image">
            <img
              alt="image 3"
              src="https://images.pexels.com/photos/1367179/pexels-photo-1367179.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"
            />
          </span>
          <span class="navigation-arrow__icon">
            <svg class="icon" height="28" viewbox="0 0 64 64" width="28">
              <use
                xlinkHref="#arrow-left-1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              ></use>
            </svg>
          </span>
        </a>
        <a class="navigation-arrow navigation-arrow__next" href="#img5">
          <span class="navigation-arrow__image">
            <img
              alt="image 3"
              src="https://images.pexels.com/photos/1292115/pexels-photo-1292115.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"
            />
          </span>
          <span class="navigation-arrow__icon">
            <svg class="icon" height="28" viewbox="0 0 64 64" width="28">
              <use
                xlinkHref="#arrow-right-1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              ></use>
            </svg>
          </span>
        </a>
      </div>
      <div class="zoom-wrapper" id="img5">
        <div class="zoom-wrapper__image">
          <div class="cell">
            <img
              alt="image 3"
              class="zoom-image"
              src="https://images.pexels.com/photos/1292115/pexels-photo-1292115.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1000"
            />
          </div>
        </div>
        <a
          class="zoom-wrapper__close lg:top-[70px] top-[150px]"
          href="#masonry-grid"
        >
          ×
        </a>
        <a class="navigation-arrow navigation-arrow__prev" href="#img4">
          <span class="navigation-arrow__image">
            <img
              alt="image 3"
              src="https://images.pexels.com/photos/1367105/pexels-photo-1367105.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"
            />
          </span>
          <span class="navigation-arrow__icon">
            <svg class="icon" height="28" viewbox="0 0 64 64" width="28">
              <use
                xlinkHref="#arrow-left-1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              ></use>
            </svg>
          </span>
        </a>
        <a class="navigation-arrow navigation-arrow__next" href="#img6">
          <span class="navigation-arrow__image">
            <img
              alt="image 3"
              src="https://images.pexels.com/photos/794079/pexels-photo-794079.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"
            />
          </span>
          <span class="navigation-arrow__icon">
            <svg class="icon" height="28" viewbox="0 0 64 64" width="28">
              <use
                xlinkHref="#arrow-right-1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              ></use>
            </svg>
          </span>
        </a>
      </div>
      <div class="zoom-wrapper" id="img6">
        <div class="zoom-wrapper__image">
          <div class="cell">
            <img
              alt="image 3"
              class="zoom-image"
              src="https://images.pexels.com/photos/794079/pexels-photo-794079.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1000"
            />
          </div>
        </div>
        <a
          class="zoom-wrapper__close lg:top-[70px] top-[150px]"
          href="#masonry-grid"
        >
          ×
        </a>
        <a class="navigation-arrow navigation-arrow__prev" href="#img5">
          <span class="navigation-arrow__image">
            <img
              alt="image 3"
              src="https://images.pexels.com/photos/1292115/pexels-photo-1292115.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"
            />
          </span>
          <span class="navigation-arrow__icon">
            <svg class="icon" height="28" viewbox="0 0 64 64" width="28">
              <use
                xlinkHref="#arrow-left-1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              ></use>
            </svg>
          </span>
        </a>
        <a class="navigation-arrow navigation-arrow__next" href="#img7">
          <span class="navigation-arrow__image">
            <img
              alt="image 3"
              src="https://images.pexels.com/photos/640809/pexels-photo-640809.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"
            />
          </span>
          <span class="navigation-arrow__icon">
            <svg class="icon" height="28" viewbox="0 0 64 64" width="28">
              <use
                xlinkHref="#arrow-right-1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              ></use>
            </svg>
          </span>
        </a>
      </div>
      <div class="zoom-wrapper" id="img7">
        <div class="zoom-wrapper__image">
          <div class="cell">
            <img
              alt="image 3"
              class="zoom-image"
              src="https://images.pexels.com/photos/640809/pexels-photo-640809.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1000"
            />
          </div>
        </div>
        <a
          class="zoom-wrapper__close lg:top-[70px] top-[150px]"
          href="#masonry-grid"
        >
          ×
        </a>
        <a class="navigation-arrow navigation-arrow__prev" href="#img6">
          <span class="navigation-arrow__image">
            <img
              alt="image 3"
              src="https://images.pexels.com/photos/794079/pexels-photo-794079.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"
            />
          </span>
          <span class="navigation-arrow__icon">
            <svg class="icon" height="28" viewbox="0 0 64 64" width="28">
              <use
                xlinkHref="#arrow-left-1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              ></use>
            </svg>
          </span>
        </a>
        <a class="navigation-arrow navigation-arrow__next" href="#img8">
          <span class="navigation-arrow__image">
            <img
              alt="image 3"
              src="https://images.pexels.com/photos/1000559/pexels-photo-1000559.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"
            />
          </span>
          <span class="navigation-arrow__icon">
            <svg class="icon" height="28" viewbox="0 0 64 64" width="28">
              <use
                xlinkHref="#arrow-right-1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              ></use>
            </svg>
          </span>
        </a>
      </div>
      <div class="zoom-wrapper" id="img8">
        <div class="zoom-wrapper__image">
          <div class="cell">
            <img
              alt="image 3"
              class="zoom-image"
              src="https://images.pexels.com/photos/1000559/pexels-photo-1000559.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1000"
            />
          </div>
        </div>
        <a
          class="zoom-wrapper__close lg:top-[70px] top-[150px]"
          href="#masonry-grid"
        >
          ×
        </a>
        <a class="navigation-arrow navigation-arrow__prev" href="#img7">
          <span class="navigation-arrow__image">
            <img
              alt="image 3"
              src="https://images.pexels.com/photos/640809/pexels-photo-640809.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"
            />
          </span>
          <span class="navigation-arrow__icon">
            <svg class="icon" height="28" viewbox="0 0 64 64" width="28">
              <use
                xlinkHref="#arrow-left-1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              ></use>
            </svg>
          </span>
        </a>
        <a class="navigation-arrow navigation-arrow__next" href="#img9">
          <span class="navigation-arrow__image">
            <img
              alt="image 4"
              src="https://images.pexels.com/photos/708921/pexels-photo-708921.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"
            />
          </span>
          <span class="navigation-arrow__icon">
            <svg class="icon" height="28" viewbox="0 0 64 64" width="28">
              <use
                xlinkHref="#arrow-right-1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              ></use>
            </svg>
          </span>
        </a>
      </div>
      <div class="zoom-wrapper" id="img9">
        <div class="zoom-wrapper__image">
          <div class="cell">
            <img
              alt="image 4"
              class="zoom-image"
              src="https://images.pexels.com/photos/708921/pexels-photo-708921.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1000"
            />
          </div>
        </div>
        <a
          class="zoom-wrapper__close lg:top-[70px] top-[150px]"
          href="#masonry-grid"
        >
          ×
        </a>
        <a class="navigation-arrow navigation-arrow__prev" href="#img8">
          <span class="navigation-arrow__image">
            <img
              alt="image 3"
              src="https://images.pexels.com/photos/1000559/pexels-photo-1000559.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"
            />
          </span>
          <span class="navigation-arrow__icon">
            <svg class="icon" height="28" viewbox="0 0 64 64" width="28">
              <use
                xlinkHref="#arrow-left-1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              ></use>
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Masonry;
