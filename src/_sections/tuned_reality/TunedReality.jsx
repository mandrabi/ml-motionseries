import React from "react";

const TunedReality = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8 sm:px-6 px-6 sm:space-y-6 mb-6 lg:mt-6 mt-6">
      <div className="lg:pl-16 lg:mt-20">
        <p className="font-heading mt-2 max-w-4xl lg:text-5xl text-3xl font-bold text-gray-900">
          Tuned for Reality
        </p>
        <p className="font-body mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
          porttitor quis nisl turpis eget vulputate turpis at. Et ut cras rutrum
          viverra. Non vel amet, pharetra, faucibus viverra mi sollicitudin id
          mattis. Aliquet sed viverra dictum nunc ultrices dui dictum ut
          sagittis.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-10">
        <div className="lg:relative bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/crossover.png')]  bg-cover bg-no-repeat  rounded-xl border-solid border-t border-gray-200 shadow-md shadow-gray-500/40 lg:h-[50rem] ">
          <div className="lg:absolute inset-x-0 bottom-0 lg:pb-16 lg:py-0 py-6  pb-6 sm:flex sm:justify-end lg:inset-y-0 lg:inset-x-auto lg:w-[33rem] lg:flex-col lg:px-16 px-6">
            <p className="font-heading mt-2 lg:text-5xl text-3xl font-bold text-gray-50">
              McCracken Tuned <br /> Vojtko Crossover
            </p>
            <p className="font-body mt-3 text-gray-50">
              Combining the Low Distortion Topology of our signature Vojtko
              Crossover philosophy with a combination of anechoic measurements,
              in room measurements, and extensive blind listening tests to fine
              tune the sound profile for each speaker's unique application, we
              have refined our signature sound into the best sounding Motion
              products to date. Take a listen and we think you’ll agree. Named
              after the Dynamic Duo of MartinLogan Acoustic Engineering, Joe
              Vojtko and Joe McCracken.
            </p>
          </div>
        </div>
        <div className="">
          <div className="lg:relative bg-gray-400 rounded-xl border-solid border-t border-gray-200 shadow-md shadow-gray-500/40  lg:h-[50rem] ">
            <div className="lg:absolute inset-x-0 bottom-0 lg:pb-16 lg:py-0 py-6 pb-6 sm:flex sm:justify-end lg:inset-y-0 lg:inset-x-auto lg:w-[33rem] lg:flex-col lg:px-16 px-6">
              <p className="font-heading mt-2 lg:text-5xl text-3xl font-bold text-gray-50">
                Floor Bounce <br /> Compensation
              </p>
              <p className="font-body mt-3 text-gray-50">
                Through precise woofer placement and purposeful crossover
                tuning, ML engineers have designed the Motion towers to produce
                a more natural and full sound by taking advantage of a constant
                found in all listening rooms, the floor! By using the fact that
                all customers have floors in their room, we use this to our
                advantage to create a more consistent, natural, and accurate
                sound than conventional designs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 lg:relative bg-[url('https://cdn.pmlsound.com/martinlogan/Motion_Series/kevlar-fibre.png')] bg-cover bg-no-repeat h-[35rem]  rounded-xl border-solid border-t border-gray-200 shadow-md shadow-gray-500/40">
        <div className="lg:absolute inset-x-0 bottom-0 grid lg:grid-cols-2 grid-cols-1 content-end">
          <div></div>

          <div className="mt-6 rounded-md lg:py-16 py-6 text-white sm:mt-0 lg:pl-28 pl-0 lg:pr-10 pr-0">
            <p className="font-heading mt-2 lg:text-5xl text-3xl font-bold text-gray-50 lg:px-0 px-6">
              Folded Motion <br /> Tweeters at Work
            </p>
            <p className="font-body text-gray-50 mt-6 lg:px-0 px-6">
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

export default TunedReality;
