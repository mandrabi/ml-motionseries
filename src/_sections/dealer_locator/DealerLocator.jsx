import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const DealerLocator = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8 sm:px-6 px-6 sm:space-y-6 mb-6 lg:mt-6 mt-6">
      <div className="grid lg:grid-cols-12 grid-cols-1">
        <div className="lg:block hidden col-span-8 bg-[url('http://cdn.pmlsound.com/martinlogan/ml-dealer-locator-graphic-3.png')] bg-cover bg-no-repeat">
          <h2 className="font-heading mt-2 lg:text-5xl text-3xl font-bold text-gray-900 px-4 text-center pt-20 pb-10">
            Find your Local Authorized <br /> MartinLogan Dealer Now
          </h2>
          <div className="text-center">
            <a
              // type="button"
              href="https://www.martinlogan.com/en/dealers"
              target="_blank"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-normal text-gray-50 shadow-sm hover:bg-gray-900 hover:text-gray-50"
            >
              Discover More
              <ArrowRightCircleIcon
                className="ml-1 mr-2 h-4 w-4"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
        <div className="lg:hidden block">
          <h2 className="font-heading mt-2 lg:text-5xl text-3xl font-bold text-gray-900 text-center pb-3">
            Find your Local Authorized <br /> MartinLogan Dealer Now
          </h2>
          <div className="text-center">
            <a
              // type="button"
              href="https://www.martinlogan.com/en/dealers"
              target="_blank"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-normal text-gray-50 shadow-sm hover:bg-gray-900 hover:text-gray-50"
            >
              Discover More
              <ArrowRightCircleIcon
                className="ml-1 mr-2 h-4 w-4"
                aria-hidden="true"
              />
            </a>
            <img
              src="http://cdn.pmlsound.com/martinlogan/ml-dealer-locator-graphic-3-mobile.png"
              className=""
            />
          </div>
        </div>
        <div className="col-span-4 bg-[url('http://cdn.pmlsound.com/martinlogan/online-dealer-bg-3.png')] flex-cols items-center">
          <h2 className="font-heading mt-2 lg:text-5xl text-3xl font-bold text-gray-50 px-4 text-center lg:pt-20 pt-6">
            Find a MartinLogan Online Dealer Now
          </h2>
          <img
            src="http://cdn.pmlsound.com/martinlogan/online-shopping-icon-3.png"
            className="lg:pb-10 pb-3"
          />
          <div className="lg:pb-20 pb-10 text-center">
            <a
              // type="button"
              href="https://www.martinlogan.com/en/dealers"
              target="_blank"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-gray-50 px-4 py-2 text-base font-normal text-red-500 shadow-sm hover:bg-gray-900 hover:text-gray-50"
            >
              Discover More
              <ArrowRightCircleIcon
                className="ml-1 mr-2 h-4 w-4"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealerLocator;
