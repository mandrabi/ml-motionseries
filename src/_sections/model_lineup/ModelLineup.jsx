import { PlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import "./model-lineup.css";
const ModelLineup = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8 sm:px-6 px-6 sm:space-y-6 mb-6 lg:mt-16 mt-6">
      <div className="relative mt-16 lg:mt-0">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="font-heading font-bold bg-white px-3 lg:text-5xl text-3xl text-gray-900">
            Motion XT Family
          </span>
        </div>
      </div>
      <div class="motion-xt-family pb-20">
        {/* <div className="lg:pl-16">
          <p className="font-heading mt-2 max-w-4xl text-5xl font-bold text-gray-900">
            Motion XT Family
          </p>
        </div> */}
        <div class="grid lg:grid-cols-3 grid-cols-1 gap-4 grid-flow-row grid-">
          <div class="text-center lg:row-start-1 lg:row-end-4">
            <div
              className="flip-card-container max-w-6xl mx-auto rounded-xl border-solid border-t border-gray-200 shadow-md shadow-gray-500/40"
              style={{ width: "100%", height: "800px" }}
            >
              <div class="flip-card ">
                <div class="card-front rounded-xl">
                  <figure className="bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_XT_F200_satin-white_product-image_2.png')] bg-cover bg-no-repeat"></figure>
                </div>

                <div className="card-back bg-gray-400 rounded-xl">
                  <figure className="mix-blend-multiply bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_XT_F200_satin-white_product-image_2.png')] bg-cover bg-no-repeat "></figure>
                  <p className="font-body text-white text-sm text-center max-w-xs mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer interdum orci elit, ac convallis nulla condimentum
                    eu. In hac habitasse platea dictumst.
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
                              src="https://cdn.pmlsound.com/martinlogan/Motion_Series/add-to-cart-icon_.gif"
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
                              src="https://cdn.pmlsound.com/martinlogan/Motion_Series/dealer-locator-icon_.gif"
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
                Motion XT F200
              </h1>
            </div>
          </div>
          <div class="text-center lg:row-start-1 lg:row-end-4">
            <div
              className="flip-card-container max-w-6xl mx-auto bg-white rounded-xl border-solid border-t border-gray-200 shadow-md shadow-gray-500/40"
              style={{ width: "100%", height: "800px" }}
            >
              <div class="flip-card ">
                <div class="card-front rounded-xl">
                  <figure className="bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_XT_F100_satin-white_product-image_2.png')] bg-cover bg-no-repeat"></figure>
                </div>

                <div className="card-back bg-gray-400 rounded-xl">
                  <figure className="mix-blend-multiply bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_XT_F100_satin-white_product-image_2.png')] bg-cover bg-no-repeat"></figure>
                  <p className="font-body text-white text-sm text-center max-w-xs mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer interdum orci elit, ac convallis nulla condimentum
                    eu. In hac habitasse platea dictumst.
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
                              src="https://cdn.pmlsound.com/martinlogan/Motion_Series/add-to-cart-icon_.gif"
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
                              src="https://cdn.pmlsound.com/martinlogan/Motion_Series/dealer-locator-icon_.gif"
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
                Motion XT F100
              </h1>
            </div>
          </div>
          <div class="text-center">
            <div
              className="flip-card-container max-w-6xl mx-auto bg-white rounded-xl border-solid border-t border-gray-200 shadow-md shadow-gray-500/40"
              style={{ width: "100%", height: "350px" }}
            >
              <div class="flip-card ">
                <div class="card-front rounded-xl">
                  <figure className="bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_XT_B100_satin-white_product-image.png')] bg-cover bg-no-repeat"></figure>
                </div>

                <div className="card-back bg-gray-400 rounded-xl">
                  <figure className="mix-blend-multiply bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_XT_B100_satin-white_product-image.png')] bg-cover bg-no-repeat"></figure>
                  <p className="font-body text-white text-sm text-center max-w-xs mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer interdum orci elit, ac convallis nulla condimentum
                    eu. In hac habitasse platea dictumst.
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
                              src="https://cdn.pmlsound.com/martinlogan/Motion_Series/add-to-cart-icon_.gif"
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
                              src="https://cdn.pmlsound.com/martinlogan/Motion_Series/dealer-locator-icon_.gif"
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
                Motion XT B100
              </h1>
            </div>
          </div>
          <div class="text-center">
            <div
              className="flip-card-container max-w-6xl mx-auto bg-white rounded-xl border-solid border-t border-gray-200 shadow-md shadow-gray-500/40"
              style={{ width: "100%", height: "350px" }}
            >
              <div class="flip-card ">
                <div class="card-front rounded-xl">
                  <figure className="bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_MP10_satin-white_product-image.png')] bg-cover bg-no-repeat"></figure>
                </div>

                <div className="card-back bg-gray-400 rounded-xl">
                  <figure className="mix-blend-multiply bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_C10_satin-white_product-image.png')] bg-cover bg-no-repeat"></figure>
                  <p className="font-body text-white text-sm text-center max-w-xs mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer interdum orci elit, ac convallis nulla condimentum
                    eu. In hac habitasse platea dictumst.
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
                              src="https://cdn.pmlsound.com/martinlogan/Motion_Series/add-to-cart-icon_.gif"
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
                              src="https://cdn.pmlsound.com/martinlogan/Motion_Series/dealer-locator-icon_.gif"
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
                Motion XT C100
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="relative ">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="font-heading bg-white px-3 lg:text-5xl text-3xl font-bold text-gray-900">
            Motion Family
          </span>
        </div>
      </div>

      <div class="motion-family pt-6">
        {/* <div className="lg:pl-16">
          <p className="font-heading mt-2 max-w-4xl text-5xl font-bold text-gray-900">
            Motion Family
          </p>
        </div> */}
        <div class="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:grid-flow-row">
          <div class="text-center row-start-1 lg:row-end-4">
            <div
              className="flip-card-container max-w-6xl mx-auto rounded-xl border-solid border-t border-gray-200 shadow-md shadow-gray-500/40"
              style={{ width: "100%", height: "800px" }}
            >
              <div class="flip-card ">
                <div class="card-front rounded-xl">
                  <figure className="bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_F20_satin-white_product-image_2.png')] bg-cover bg-no-repeat"></figure>
                </div>

                <div className="card-back bg-gray-400 rounded-xl">
                  <figure className="mix-blend-multiply bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_F20_satin-white_product-image_2.png')] bg-cover bg-no-repeat"></figure>
                  <p className="font-body text-white text-sm text-center max-w-xs mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer interdum orci elit, ac convallis nulla condimentum
                    eu. In hac habitasse platea dictumst.
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
                              src="https://cdn.pmlsound.com/martinlogan/Motion_Series/add-to-cart-icon_.gif"
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
                              src="https://cdn.pmlsound.com/martinlogan/Motion_Series/dealer-locator-icon_.gif"
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
                Motion F20
              </h1>
            </div>
          </div>
          <div class="text-center">
            <div
              className="flip-card-container max-w-6xl mx-auto bg-white rounded-xl border-solid border-t border-gray-200 shadow-md shadow-gray-500/40"
              style={{ width: "100%", height: "350px" }}
            >
              <div class="flip-card ">
                <div class="card-front rounded-xl">
                  <figure className="bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_F10_satin-white_product-image.png')] bg-cover bg-no-repeat"></figure>
                </div>

                <div className="card-back bg-gray-400 rounded-xl">
                  <figure className="mix-blend-multiply bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_F10_satin-white_product-image.png')] bg-cover bg-no-repeat"></figure>
                  <p className="font-body text-white text-sm text-center max-w-xs mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer interdum orci elit, ac convallis nulla condimentum
                    eu. In hac habitasse platea dictumst.
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
                              src="https://cdn.pmlsound.com/martinlogan/Motion_Series/add-to-cart-icon_.gif"
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
                              src="https://cdn.pmlsound.com/martinlogan/Motion_Series/dealer-locator-icon_.gif"
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
                Motion F10
              </h1>
            </div>
          </div>
          <div class="text-center">
            <div
              className="flip-card-container max-w-6xl mx-auto bg-white rounded-xl border-solid border-t border-gray-200 shadow-md shadow-gray-500/40"
              style={{ width: "100%", height: "350px" }}
            >
              <div class="flip-card ">
                <div class="card-front rounded-xl">
                  <figure className="bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_B10_satin-white_product-image.png')] bg-cover bg-no-repeat"></figure>
                </div>

                <div className="card-back bg-gray-400 rounded-xl">
                  <figure className="mix-blend-multiply bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_B10_satin-white_product-image.png')] bg-cover bg-no-repeat"></figure>
                  <p className="font-body text-white text-sm text-center max-w-xs mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer interdum orci elit, ac convallis nulla condimentum
                    eu. In hac habitasse platea dictumst.
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
                              src="https://cdn.pmlsound.com/martinlogan/Motion_Series/add-to-cart-icon_.gif"
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
                              src="https://cdn.pmlsound.com/martinlogan/Motion_Series/dealer-locator-icon_.gif"
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
                Motion B10
              </h1>
            </div>
          </div>
          <div class="text-center">
            <div
              className="flip-card-container max-w-6xl mx-auto bg-white rounded-xl border-solid border-t border-gray-200 shadow-md shadow-gray-500/40"
              style={{ width: "100%", height: "350px" }}
            >
              <div class="flip-card ">
                <div class="card-front rounded-xl">
                  <figure className="bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_C10_satin-white_product-image.png')] bg-cover bg-no-repeat"></figure>
                </div>

                <div className="card-back bg-gray-400 rounded-xl">
                  <figure className="mix-blend-multiply bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_C10_satin-white_product-image.png')] bg-cover bg-no-repeat"></figure>
                  <p className="font-body text-white text-sm text-center max-w-xs mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer interdum orci elit, ac convallis nulla condimentum
                    eu. In hac habitasse platea dictumst.
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
                              src="https://cdn.pmlsound.com/martinlogan/Motion_Series/add-to-cart-icon_.gif"
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
                              src="https://cdn.pmlsound.com/martinlogan/Motion_Series/dealer-locator-icon_.gif"
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
                Motion C10
              </h1>
            </div>
          </div>
          <div class="text-center">
            <div
              className="flip-card-container max-w-6xl mx-auto bg-white rounded-xl border-solid border-t border-gray-200 shadow-md shadow-gray-500/40"
              style={{ width: "100%", height: "350px" }}
            >
              <div class="flip-card ">
                <div class="card-front rounded-xl">
                  <figure className="bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_MP10_satin-white_product-image.png')] bg-cover bg-no-repeat"></figure>
                </div>

                <div className="card-back bg-gray-400 rounded-xl">
                  <figure className="mix-blend-multiply bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_MP10_satin-white_product-image.png')] bg-cover bg-no-repeat"></figure>
                  <p className="font-body text-white text-sm text-center max-w-xs mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer interdum orci elit, ac convallis nulla condimentum
                    eu. In hac habitasse platea dictumst.
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
                              src="https://cdn.pmlsound.com/martinlogan/Motion_Series/add-to-cart-icon_.gif"
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
                              src="https://cdn.pmlsound.com/martinlogan/Motion_Series/dealer-locator-icon_.gif"
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
                Motion MP10
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelLineup;
