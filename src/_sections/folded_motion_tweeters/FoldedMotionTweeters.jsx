import React from "react";

const FoldedMotionTweeters = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8 sm:px-6 sm:space-y-6 mb-6 lg:mt-6 mt-6">
      <div className="relative overflow-hidden rounded-xl lg:h-[35rem]">
        <div className="absolute inset-0">
          <img
            src="https://cdn.pmlsound.com/martinlogan/Motion_Series/FMT_XT_tweeter.png"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div aria-hidden="true" className="relative h-96 w-full lg:hidden" />
        <div aria-hidden="true" className="relative h-32 w-full lg:hidden" />
        <div className="absolute inset-x-0 bottom-0 pb-6 items-end sm:flex sm:items-center sm:justify-end lg:inset-y-0 lg:inset-x-auto lg:w-[33rem] lg:flex-col lg:items-end">
          <div className="mt-6 flex-col flex-shrink-0 items-center justify-center rounded-md py-3 text-white sm:mt-0 lg:pl-16 lg:w-full">
            <p className="font-heading mt-2 text-5xl font-bold text-gray-50">
              Folded Motion <br /> Tweeters at Work.
            </p>
            <p className="font-body text-gray-50 mt-6">
              An array of neodymium magnets hold constant charges. A circuit
              trace on the folded polyamide diaphragm, driven by the amplifier,
              is given a charge that continuously reverses in reaction to the
              audio signal. Opposite charges attract and like charges repel,
              causing the diaphragm to “squeeze” air like an accordion and
              produce sound as the charges of the magnets and diaphragm
              interact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoldedMotionTweeters;
