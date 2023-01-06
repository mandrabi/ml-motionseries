import React from "react";
import "./model-lineup.css";
import { Parallax, Background } from "react-parallax";
const image1 =
  "https://cdn.pmlsound.com/martinlogan/Motion_Series/Motion-XT-F200-C100-MP10-overlay.png";

const image2 =
  "https://cdn.pmlsound.com/martinlogan/Motion_Series/Motion-F20-C10-MP10-overlay.png";

const motionXTModels = [
  {
    id: 1,
    front_image_url:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/new_motion_series_card_images/F200-Walnut-Front3qtr-NoGrille.png",
    back_image_url:
      "mix-blend-multiply bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_series_cards-rear_lifestyles/Motion-XT-f200-card-rear.png')] bg-cover bg-no-repeat",
    scale: "scale-[2.0]",
    name: "Motion XT F200",
    blurb:
      "Our Ultimate Performance Motion XT tower sets a new bar for performance in its class and beyond.",
    add_to_cart_icon:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/add-to-cart-icon_.gif",
    find_a_dealer_icon:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/dealer-locator-icon_.gif",
    extra_classes: "text-center lg:row-start-1 lg:row-end-4 mb-[85px]",
    card_height: "800px",
  },
  {
    id: 2,
    front_image_url:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/new_motion_series_card_images/F100-Walnut-Front3qtr-NoGrille.png",
    back_image_url:
      "mix-blend-multiply bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_series_cards-rear_lifestyles/Motion-XT-f100-card-rear.png')] bg-cover bg-no-repeat",
    scale: "scale-[2.0]",
    name: "Motion XT F100",
    blurb:
      "Step-up XT series performance upgrades with triple bass drivers make for a compelling option for a high-performance tower speaker.",
    add_to_cart_icon:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/add-to-cart-icon_.gif",
    find_a_dealer_icon:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/dealer-locator-icon_.gif",
    extra_classes: "text-center lg:row-start-1 lg:row-end-4 mb-[85px]",
    card_height: "800px",
  },
  {
    id: 3,
    front_image_url:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/new_motion_series_card_images/B100-Walnut-Front3qtr-NoStand-NoGrille.png",
    back_image_url:
      "mix-blend-multiply bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_series_cards-rear_lifestyles/Motion-XT-b100-card-rear.png')] bg-cover bg-no-repeat",
    scale: "scale-[1.2]",
    name: "Motion XT B100",
    blurb:
      "Our best bookshelf speaker for those wanting maximum performance without moving to a tower speaker.",
    add_to_cart_icon:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/add-to-cart-icon_.gif",
    find_a_dealer_icon:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/dealer-locator-icon_.gif",
    extra_classes: "text-center mb-[85px]",
    card_height: "350px",
  },
  {
    id: 4,
    front_image_url:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/new_motion_series_card_images/C100-Walnut-Front3qtr-NoGrille.png",
    back_image_url:
      "mix-blend-multiply bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_series_cards-rear_lifestyles/Motion-XT-c100-card-rear.png')] bg-cover bg-no-repeat",
    scale: "scale-[1.2]",
    name: "Motion XT C100",
    blurb:
      "The ideal performance-focused center channel for any Motion home theatre system.",
    add_to_cart_icon:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/add-to-cart-icon_.gif",
    find_a_dealer_icon:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/dealer-locator-icon_.gif",
    extra_classes: "text-center",
    card_height: "350px",
  },
];

const motionSeriesModels = [
  {
    id: 5,
    front_image_url:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/new_motion_series_card_images/F20-Walnut-Front3qtr-NoGrille.png",
    back_image_url:
      "mix-blend-multiply bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_series_cards-rear_lifestyles/Motion-f20-card-rear.png')] bg-cover bg-no-repeat",
    scale: "scale-[2.3]",
    name: "Motion F20",
    blurb:
      "The flagship of the Motion range delivers even more performance while keeping a very manageable footprint.",
    add_to_cart_icon:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/add-to-cart-icon_.gif",
    find_a_dealer_icon:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/dealer-locator-icon_.gif",
    extra_classes: "text-center row-start-1 lg:row-end-4 mb-[85px]",
    card_height: "800px",
  },
  {
    id: 6,
    front_image_url:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/new_motion_series_card_images/F10-Walnut-Front3qtr-NoGrille.png",
    back_image_url:
      "mix-blend-multiply bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_series_cards-rear_lifestyles/Motion-f10-card-rear.png')] bg-cover bg-no-repeat",
    scale: "scale-[1.2]",
    name: "Motion F10",
    blurb:
      "Our most compact tower model, F10, absolutely defies expectations with its tremendous performance and compact size.",
    add_to_cart_icon:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/add-to-cart-icon_.gif",
    find_a_dealer_icon:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/dealer-locator-icon_.gif",
    extra_classes: "text-center mb-[85px]",
    card_height: "350px",
  },
  {
    id: 7,
    front_image_url:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/new_motion_series_card_images/B10-Walnut-Front3qtr-NoStand-NoGrille.png",
    back_image_url:
      "mix-blend-multiply bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_series_cards-rear_lifestyles/Motion-b10-card-rear.png')] bg-cover bg-no-repeat",
    scale: "scale-[1.2]",
    name: "Motion B10",
    blurb: "Redefining what to expect from a compact bookshelf speaker.",
    add_to_cart_icon:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/add-to-cart-icon_.gif",
    find_a_dealer_icon:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/dealer-locator-icon_.gif",
    extra_classes: "text-center mb-[85px]",
    card_height: "350px",
  },
  {
    id: 8,
    front_image_url:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/new_motion_series_card_images/C10-Walnut-Front3qtr-NoGrille.png",
    back_image_url:
      "mix-blend-multiply bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_series_cards-rear_lifestyles/Motion-c10-card-rear.png')] bg-cover bg-no-repeat",
    scale: "scale-[1.2]",
    name: "Motion C10",
    blurb:
      "The ideal compact center channel option to deliver crystal clear dialogue perfectly complements your Motion home theatre system.",
    add_to_cart_icon:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/add-to-cart-icon_.gif",
    find_a_dealer_icon:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/dealer-locator-icon_.gif",
    extra_classes: "text-center mb-[85px]",
    card_height: "350px",
  },
  {
    id: 9,
    front_image_url:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/new_motion_series_card_images/MP10-Walnut-Front3qtr-NoGrille.png",
    back_image_url:
      "mix-blend-multiply bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_series_cards-rear_lifestyles/Motion-mp10-card-rear.png')] bg-cover bg-no-repeat",
    scale: "scale-[1.2]",
    name: "Motion MP10",
    blurb:
      "Its incredible versatility delivers exceptional performance wherever you need it.",
    add_to_cart_icon:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/add-to-cart-icon_.gif",
    find_a_dealer_icon:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/dealer-locator-icon_.gif",
    extra_classes: "text-center mb-[85px]",
    card_height: "350px",
  },
];
const ModelLineup = () => {
  return (
    <>
      <div className="text-center bg-gray-400 mt-16">
        <Parallax
          bgImage={image1}
          strength={500}
          // className="mix-blend-multiply"
        >
          <div style={{ height: 500 }}>
            <div className="font-heading absolute -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%]  text-white">
              <h2 className="lg:text-7xl text-3xl font-bold">
                {" "}
                Motion XT Family
              </h2>
              <p className="font-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                porttitor quis nisl turpis eget vulputate turpis at. Et ut cras
                rutrum viverra. Non vel amet, pharetra, faucibus viverra mi
                sollicitudin id mattis. Aliquet sed viverra dictum nunc ultrices
                dui dictum ut sagittis.
              </p>
            </div>
          </div>
        </Parallax>
      </div>
      <div className="">
        <div className="motion-xt-family pb-0 max-w-7xl mx-auto space-y-8 sm:px-6 px-6 sm:space-y-6 mb-6 lg:mt-16 mt-6">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 grid-flow-row grid-">
            {motionXTModels.map((_) => {
              return (
                <div className={_.extra_classes}>
                  <div
                    className="flip-card-container max-w-6xl mx-auto rounded-xl border-solid border-t border-gray-200 shadow-md shadow-gray-500/40"
                    style={{ width: "100%", height: _.card_height }}
                  >
                    <div className="flip-card ">
                      <div className="card-front rounded-xl">
                        <img src={_.front_image_url} className={_.scale}></img>
                      </div>

                      <div className="card-back bg-gray-400 rounded-xl">
                        <figure className={_.back_image_url}></figure>
                        <p className="font-body text-white text-sm text-center max-w-xs mx-auto">
                          {_.blurb}
                        </p>

                        <div className="max-w-2xl mx-auto flex py-16">
                          <div className="space-y-4 ">
                            <div className="space-y-2 ml-2">
                              <div className="text-xs font-medium lg:text-sm">
                                <button
                                  type="button"
                                  className="rounded-full inline-flex items-center justify-center whitespace-nowrap border border-transparent bg-red-600 px-4 py-2 text-base font-normal text-white shadow-sm hover:bg-red-700"
                                >
                                  <img
                                    className="-ml-0.5 mr-2 mx-auto h-6 w-6 rounded-lg lg:h-8 lg:w-8 backdrop-filter backdrop-blur-md bg-white"
                                    src={_.add_to_cart_icon}
                                    alt=""
                                  />
                                  Add to Cart
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="space-y-2 ml-3">
                              <div className="text-xs font-medium lg:text-sm">
                                <button
                                  type="button"
                                  className="ml-8 rounded-full inline-flex items-center justify-center whitespace-nowrap border border-transparent bg-red-600 px-4 py-2 text-base font-normal text-white shadow-sm hover:bg-red-700"
                                >
                                  <img
                                    className="-ml-0.5 mr-2 mx-auto h-6 w-6 rounded-lg lg:h-8 lg:w-8 backdrop-filter backdrop-blur-md bg-white"
                                    src={_.find_a_dealer_icon}
                                    alt=""
                                  />
                                  Find a Dealer
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h1 className="font-heading font-normal lg:text-5xl text-3xl p-6">
                      {_.name}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center bg-gray-400 mt-16">
          <Parallax
            bgImage={image2}
            strength={500}
            // className="mix-blend-multiply"
          >
            <div style={{ height: 500 }}>
              <div className="font-heading absolute -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%]  text-white">
                <h2 className="lg:text-7xl text-3xl font-bold">
                  {" "}
                  Motion Family
                </h2>
                <p className="font-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cursus porttitor quis nisl turpis eget vulputate turpis at. Et
                  ut cras rutrum viverra. Non vel amet, pharetra, faucibus
                  viverra mi sollicitudin id mattis. Aliquet sed viverra dictum
                  nunc ultrices dui dictum ut sagittis.
                </p>
              </div>
            </div>
          </Parallax>
        </div>

        <div className="motion-family pt-6 pb-0 max-w-7xl mx-auto space-y-8 sm:px-6 px-6 sm:space-y-6 mb-6 lg:mt-16 mt-6">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:grid-flow-row">
            {motionSeriesModels.map((_) => {
              return (
                <div className={_.extra_classes}>
                  <div
                    className="flip-card-container max-w-6xl mx-auto rounded-xl border-solid border-t border-gray-200 shadow-md shadow-gray-500/40"
                    style={{ width: "100%", height: _.card_height }}
                  >
                    <div className="flip-card ">
                      <div className="card-front rounded-xl">
                        <img src={_.front_image_url} className={_.scale}></img>
                      </div>

                      <div className="card-back bg-gray-400 rounded-xl">
                        <figure className={_.back_image_url}></figure>
                        <p className="font-body text-white text-sm text-center max-w-xs mx-auto">
                          {_.blurb}
                        </p>

                        <div className="max-w-2xl mx-auto flex py-16">
                          <div className="space-y-4 ">
                            <div className="space-y-2 ml-2">
                              <div className="text-xs font-medium lg:text-sm">
                                <button
                                  type="button"
                                  className="rounded-full inline-flex items-center justify-center whitespace-nowrap border border-transparent bg-red-600 px-4 py-2 text-base font-normal text-white shadow-sm hover:bg-red-700"
                                >
                                  <img
                                    className="-ml-0.5 mr-2 mx-auto h-6 w-6 rounded-lg lg:h-8 lg:w-8 backdrop-filter backdrop-blur-md bg-white"
                                    src={_.add_to_cart_icon}
                                    alt=""
                                  />
                                  Add to Cart
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="space-y-2 ml-3">
                              <div className="text-xs font-medium lg:text-sm">
                                <button
                                  type="button"
                                  className="ml-8 rounded-full inline-flex items-center justify-center whitespace-nowrap border border-transparent bg-red-600 px-4 py-2 text-base font-normal text-white shadow-sm hover:bg-red-700"
                                >
                                  <img
                                    className="-ml-0.5 mr-2 mx-auto h-6 w-6 rounded-lg lg:h-8 lg:w-8 backdrop-filter backdrop-blur-md bg-white"
                                    src={_.find_a_dealer_icon}
                                    alt=""
                                  />
                                  Find a Dealer
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h1 className="font-heading font-normal lg:text-5xl text-3xl p-6">
                      {_.name}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* <div className="relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="font-heading bg-white px-3 lg:text-5xl text-3xl font-bold text-gray-900">
              Accessories
            </span>
          </div>
        </div> */}

        <div className="max-w-7xl mx-auto space-y-8 sm:px-6 px-6 sm:space-y-10 mb-6 lg:mt-6">
          <div className="pt-16 lg:pt-10 lg:py-10">
            <div className="rounded-xl border-solid border-t border-gray-200 shadow-md shadow-gray-500/40 ">
              <div className="grid lg:grid-cols-3 grid-cols-1">
                <div className="col-span-1 p-10 flex justify-center">
                  <img
                    src="https://cdn.pmlsound.com/martinlogan/Motion_Series/STAND_SILVER_200.png"
                    alt="stand"
                  />
                </div>
                <div className="h-[508px] col-span-2 lg:bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/Motion_B10_lifestyle_11.png')] bg-white bg-contain bg-no-repeat p-10 rounded-r-xl lg:grid lg:content-end ">
                  <div className="lg:text-white text-black">
                    <h2 className="font-heading lg:text-5xl text-3xl font-bold">
                      STAND 25
                    </h2>
                    <p className="font-body mt-6">
                      The perfect match for B10 and B100, STAND25 includes
                      interchangeable color trim pieces and attaches to the
                      speaker base for maximum stability.
                    </p>
                    <div className="flex justify-start">
                      <div className="-ml-7">
                        <img
                          src="https://cdn.pmlsound.com/martinlogan/Motion_Series/stand-25-colour-black.png"
                          className="scale-[0.5] border-white border-2"
                        />
                      </div>
                      <div className="-ml-7">
                        <img
                          src="https://cdn.pmlsound.com/martinlogan/Motion_Series/stand-25-colour-copper.png"
                          className="scale-[0.5] border-white border-2"
                        />
                      </div>
                      <div className="-ml-7">
                        <img
                          src="https://cdn.pmlsound.com/martinlogan/Motion_Series/stand-25-colour-silver.png"
                          className="scale-[0.5] border-white border-2"
                        />
                      </div>
                    </div>
                    <p className="font-body font-medium">Learn more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModelLineup;
