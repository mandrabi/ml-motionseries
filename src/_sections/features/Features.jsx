import React from "react";

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8 sm:px-6 px-6 sm:space-y-6 mb-6 lg:mt-16 mt-6">
      <div className="columns-1 lg:columns-2 gap-4 space-y-4 md:p-8 p-0 mx-auto max-w-6xl">
        <div className="h-min w-full bg-white rounded-xl border-solid border-t border-gray-200 shadow-xl shadow-gray-500/40">
          <div className="lg:py-20 py-6 lg:px-16 px-6 col-start-2">
            <header className="font-heading font-bold text-3xl">
              Controlled Dispersion
            </header>
            <p className="font-body mt-6">
              Minimizes sound degrading early reflections by controlling the
              spread of sound into the room. Focusing the sound where it
              actually matters, your ears. Better sound in any room.
            </p>
            <p className="font-body font-bold mt-10">Learn More</p>
          </div>
        </div>
        <div className="h-min w-full lg:pt-16">
          <img
            src="https://cdn.pmlsound.com/martinlogan/Motion_Series/test_feature.png"
            atl="video"
            className="rounded-xl shadow-xl shadow-gray-500/40 "
          />
        </div>
      </div>
      <div className="columns-1 lg:columns-2 gap-4 space-y-4 md:p-8 mx-auto max-w-6xl">
        <div className="h-min w-full lg:pt-36 ">
          <img
            src="https://cdn.pmlsound.com/martinlogan/Motion_Series/test_feature.png"
            atl="video"
            className="rounded-xl shadow-xl shadow-gray-500/40"
          />
        </div>
        <div className=" h-min w-full bg-white  rounded-xl border-solid border-t border-gray-200 shadow-xl shadow-gray-500/40">
          <div className="lg:py-20 py-6 lg:px-16 px-6 col-start-2">
            <header className="font-heading font-bold text-3xl">
              Gen2 Folded Motion Tweeter
            </header>
            <p className="font-body mt-6">
              Available in “standard size” on the latest Motion series and in a
              40% larger “XT version” on the even higher performance Motion XT
              series, the Gen 2 Folded Motion Tweeters elevate our signature FMT
              technology to new heights. Outside of our legendary Electrostatic
              speakers, these new tweeters provide our cleanest, most detailed
              and accurate high frequency presentation to date.
            </p>
            <p className="font-body font-bold mt-10">Learn More</p>
          </div>
        </div>
      </div>

      <div className="columns-1  lg:columns-2 gap-4 space-y-4 md:p-8 mx-auto max-w-6xl">
        <div className="h-min w-full bg-white rounded-xl border-solid border-t border-gray-200 shadow-xl shadow-gray-500/40">
          <div className="lg:py-20 py-6 lg:px-16 px-6 col-start-2">
            <header className="font-heading font-bold text-3xl">
              Motion Waveguide
            </header>
            <p className="font-body mt-6">
              Enhances the output and performance of our already incredible Gen
              2 Folded Motion Tweeters. The Motion Waveguide blankets the
              listening area in incredible detail and precision while avoiding
              acoustic issues that obscure detail, realism, and immersion.
            </p>
            <p className="font-body font-bold mt-10">Learn More</p>
          </div>
        </div>
        <div className="h-min w-full lg:pt-24">
          <img
            src="https://cdn.pmlsound.com/martinlogan/Motion_Series/test_feature.png"
            atl="video"
            className="rounded-xl shadow-xl shadow-gray-500/40"
          />
        </div>
      </div>

      <div className="columns-1  lg:columns-2 gap-4 space-y-4 md:p-8 mx-auto max-w-6xl">
        <div className="h-min w-full lg:pt-28">
          <img
            src="https://cdn.pmlsound.com/martinlogan/Motion_Series/test_feature.png"
            atl="video"
            className="rounded-xl shadow-xl shadow-gray-500/40"
          />
        </div>
        <div className="h-min w-full bg-white rounded-xl border-solid border-t border-gray-200 shadow-xl shadow-gray-500/40">
          <div className="lg:py-20 py-6 lg:px-16 px-6 col-start-2">
            <header className="font-heading font-bold text-3xl">
              Quick Foot
            </header>
            <p className="font-body mt-6">
              Allows quick and easy height adjustability on any floor (includes
              soft or hard surface options) allowing you to perfectly level the
              speaker for maximum stability. The built in anti-vibration
              properties also lower distortion by reducing the transfer of
              vibrations between the speaker and the flooring, leaving nothing
              but pure sound.
            </p>
            <p className="font-body font-bold mt-10">Learn More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
