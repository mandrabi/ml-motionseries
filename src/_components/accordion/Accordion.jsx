import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import "./accordion.css";

const Accordion = ({ specs, reviews, news }) => {
  return (
    <div class="lg:m-8 rounded overflow-hidden">
      {/* <div
        class="group outline-none accordion-section border-b border-gray-500 "
        tabindex="1"
      >
        <div class="-z-50 max-w-7xl mx-auto sm:px-6 group bg-white flex justify-between px-4 py-3 items-center text-gray-900 transition ease duration-500  pr-10 relative">
          <div class=" group-focus:text-gray-500 transition ease duration-500 font-heading lg:text-5xl text-3xl font-bold">
            Specifications
          </div>
          <div class=" group-focus:hidden h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-gray-900 group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto lg:mt-6 mt-3 mr-2">
            <PlusCircleIcon />
          </div>
          <div class=" h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-gray-900 group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto lg:mt-6 mt-3 mr-2">
            <MinusCircleIcon />
          </div>
        </div>
        <div class="group-focus:max-h-screen max-h-0 bg-gray-100 px-4 overflow-scroll ease duration-500">
          <p class="p-2 text-gray-900 text-justify font-body">{specs}</p>
        </div>
      </div> */}

      <div
        class="group outline-none accordion-section border-b border-gray-500"
        tabindex="2"
      >
        <div class="-z-50 max-w-7xl mx-auto sm:px-6  group bg-white flex justify-between px-4 py-3 items-center text-gray-900 transition ease duration-500  pr-10 relative">
          <div class="group-focus:text-gray-500 transition ease duration-500 font-heading lg:text-5xl text-3xl font-bold">
            Recent Reviews
          </div>
          <div class=" group-focus:hidden h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-gray-900 group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto lg:mt-6 mt-3 mr-2">
            <PlusCircleIcon />
          </div>
          <div class=" h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-gray-900 group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto lg:mt-6 mt-3 mr-2">
            <MinusCircleIcon />
          </div>
        </div>
        <div class="group-focus:max-h-screen max-h-0 bg-gray-100 px-4 overflow-scroll ease duration-500">
          <p class="p-2 pb-6 text-gray-900 text-justify font-body">{reviews}</p>
        </div>
      </div>

      <div class="group outline-none accordion-section " tabindex="3">
        <div class="-z-50 max-w-7xl mx-auto sm:px-6 group bg-white flex justify-between px-4 py-3 items-center text-gray-900 transition ease duration-500  pr-10 relative">
          <div class="group-focus:text-gray-500 lg:text-5xl text-3xl font-bold transition ease duration-500 font-heading">
            News & Announcements
          </div>
          <div class=" group-focus:hidden h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-gray-900 group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto lg:mt-6 mt-3 mr-2">
            <PlusCircleIcon />
          </div>
          <div class=" h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-gray-900 group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto lg:mt-6 mt-3 mr-2">
            <MinusCircleIcon />
          </div>
        </div>
        <div class="group-focus:max-h-screen max-h-0 bg-gray-100 px-4 overflow-scroll ease duration-500">
          <p class="p-2 text-gray-900 text-justify font-body">{news}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
