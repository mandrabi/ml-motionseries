import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import "./masonry.css";

const images = [
  {
    id: 1,
    url: "https://cdn.pmlsound.com/martinlogan/Motion_Series/Motion-Shoot-004-tv-retouched.png",
    alt: "image 1",
  },
  {
    id: 2,
    url: "https://cdn.pmlsound.com/martinlogan/Motion_Series/MotionShoot-019.jpg",
    alt: "image 13",
  },

  {
    id: 3,
    url: "https://cdn.pmlsound.com/martinlogan/Motion_Series/Motion-Shoot-014-tv-touched-up.png",
    alt: "image 3",
  },
  {
    id: 4,
    url: "https://cdn.pmlsound.com/martinlogan/Motion_Series/Motion-Shoot-015-tv-touched-up.png",
    alt: "image 4",
  },

  {
    id: 5,
    url: "https://cdn.pmlsound.com/martinlogan/Motion_Series/MotionShoot-007.jpg",
    alt: "image 10",
  },

  {
    id: 6,
    url: "https://cdn.pmlsound.com/martinlogan/Motion_Series/MotionShoot-011.jpg",
    alt: "image 11",
  },
  {
    id: 7,
    url: "https://cdn.pmlsound.com/martinlogan/Motion_Series/Motion_B10_lifestyle_2.jpg",
    alt: "image 8",
  },
  {
    id: 8,
    url: "https://cdn.pmlsound.com/martinlogan/Motion_Series/A7300391.jpg",
    alt: "image 18",
  },

  {
    id: 9,
    url: "https://cdn.pmlsound.com/martinlogan/Motion_Series/Motion_B10_lifestylee.jpg",
    alt: "image 7",
  },
  {
    id: 10,
    url: "https://cdn.pmlsound.com/martinlogan/Motion_Series/Motion_B10_lifestyle_3.jpg",
    alt: "image 9",
  },
  {
    id: 11,
    url: "https://cdn.pmlsound.com/martinlogan/Motion_Series/Motion-Shoot-018-tv-touched-up.png",
    alt: "image 5",
  },

  {
    id: 12,
    url: "https://cdn.pmlsound.com/martinlogan/Motion_Series/Motion-Shoot-017-tv-touched-up.png",
    alt: "image 6",
  },
  {
    id: 13,
    url: "https://cdn.pmlsound.com/martinlogan/Motion_Series/Motion-Shoot-013-tv-touched-up.png",
    alt: "image 2",
  },

  {
    id: 14,
    url: "https://cdn.pmlsound.com/martinlogan/Motion_Series/A7300415.jpg",
    alt: "image 14",
  },
  {
    id: 15,
    url: "https://cdn.pmlsound.com/martinlogan/Motion_Series/A7300412.jpg",
    alt: "image 15",
  },
  {
    id: 16,
    url: "https://cdn.pmlsound.com/martinlogan/Motion_Series/A7300409.jpg",
    alt: "image 16",
  },
  {
    id: 17,
    url: "https://cdn.pmlsound.com/martinlogan/Motion_Series/A7300408.jpg",
    alt: "image 17",
  },

  {
    id: 18,
    url: "https://cdn.pmlsound.com/martinlogan/Motion_Series/A7300100.jpg",
    alt: "image 26",
  },
  {
    id: 19,
    url: "https://cdn.pmlsound.com/martinlogan/Motion_Series/A7300333.jpg",
    alt: "image 20",
  },
  {
    id: 20,
    url: "https://cdn.pmlsound.com/martinlogan/Motion_Series/A7300268.jpg",
    alt: "image 21",
  },
  {
    id: 21,
    url: "https://cdn.pmlsound.com/martinlogan/Motion_Series/A7300178.jpg",
    alt: "image 22",
  },
  {
    id: 22,
    url: "https://cdn.pmlsound.com/martinlogan/Motion_Series/A7300174.jpg",
    alt: "image 23",
  },
  {
    id: 23,
    url: "https://cdn.pmlsound.com/martinlogan/Motion_Series/A7300146.jpg",
    alt: "image 24",
  },
  {
    id: 24,
    url: "https://cdn.pmlsound.com/martinlogan/Motion_Series/A7300143.jpg",
    alt: "image 25",
  },
  {
    id: 25,
    url: "https://cdn.pmlsound.com/martinlogan/Motion_Series/A7300389.jpg",
    alt: "image 19",
  },

  {
    id: 26,
    url: "https://cdn.pmlsound.com/martinlogan/Motion_Series/A7300099.jpg",
    alt: "image 27",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Masonry = (props) => {
  const [loadMore, setLoadMore] = useState(false);

  const imagesToLoad = loadMore ? images : images?.slice(1, 10);
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="font-heading lg:text-5xl text-3xl font-bold text-center mt-16">
          Gallery
        </div>
      </div>

      <section className="relative sm:px-6 mt-16" id="masonry-grid">
        <div className="sprite-svg">
          <svg height={64} width={64} {...props}>
            <path d="M17.919 55.738c-.858.867-.858 2.266 0 3.133s2.243.867 3.101 0l25.056-25.302a2.228 2.228 0 0 0 0-3.133L21.02 5.13c-.858-.867-2.243-.867-3.101 0s-.858 2.266 0 3.133l22.848 23.738-22.848 23.738z" />
          </svg>
        </div>
        <div className="wrapper">
          {imagesToLoad.map((_) => {
            return (
              <a
                className="grid-image"
                href={`#img${_.id}`}
                style={{ paddingTop: "0px" }}
              >
                <img alt={_.alt} src={_.url} />
              </a>
            );
          })}
        </div>
        <div
          className={classNames(
            loadMore ? "hidden" : "block max-w-7xl mx-auto px-6"
          )}
        >
          <div className="rounded-lg text-center backdrop-filter backdrop-blur-sm bg-white bg-opacity-50 -mt-96 pt-44 pb-36">
            <a
              type="button"
              onClick={() => setLoadMore(true)}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-normal text-gray-50 shadow-sm hover:bg-gray-900 hover:text-gray-50"
            >
              Show All
              <ArrowRightCircleIcon
                className="ml-1 mr-2 h-4 w-4"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {images.map((_) => {
          return (
            <div className="zoom-wrapper pt-20 z-50" id={`img${_.id}`}>
              <div className="zoom-wrapper__image">
                <div className="cell">
                  <img alt={_.alt} className="zoom-image" src={_.url} />
                </div>
              </div>
              <a
                className="zoom-wrapper__close lg:top-[20px] top-[150px]"
                href="#masonry-grid"
              >
                ×
              </a>
              <a
                className="navigation-arrow navigation-arrow__prev flex items-center"
                href={`#img${_.id - 1}`}
              >
                {/* <span className="navigation-arrow__image">
                  <img
                    alt={_.alt}
                    src={images.find((image) => {
                      const obj = _.id === _.id;
                      const src = obj.id;

                      return obj;
                    })}
                  />
                </span> */}
                <span className="navigation-arrow__icon flex items-center">
                  <ArrowLeftIcon className="text-black h-6 w-6 " />
                </span>
              </a>
              <a
                className="navigation-arrow navigation-arrow__next"
                href={`#img${_.id + 1}`}
              >
                {/* <span className="navigation-arrow__image">
                  <img
                    alt={_.alt}
                    src="https://cdn.pmlsound.com/martinlogan/Motion_Series/Motion-Shoot-013-tv-touched-up.png"
                  />
                </span> */}
                <span className="navigation-arrow__icon flex items-center">
                  <ArrowRightIcon className="text-black h-6 w-6 ml-1" />
                </span>
              </a>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Masonry;
