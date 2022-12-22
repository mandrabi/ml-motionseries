import React from "react";

const ElectrostaticLegacy = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8 sm:px-6 px-6 sm:space-y-6 mb-6 lg:mt-16">
      <div className="pt-16 lg:py-10">
        <div className=" lg:pb-16 lg:relative pb-0 rounded-xl border-solid border-t border-gray-200 shadow-md shadow-gray-500/40">
          <div className="lg:pl-16 mt-10 ">
            <p className="font-heading mt-2 max-w-4xl text-center lg:text-left lg:text-5xl text-3xl font-bold text-gray-900">
              MartinLogan's <br /> Electrostatic Legacy
            </p>
          </div>
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:pl-8">
            <div className="mt-12 lg:col-span-6 lg:m-0 lg:pl-8">
              <div className="px-4 sm:px-6 lg:px-0 lg:pb-10 lg:pt-10">
                <blockquote className="font-normal font-body">
                  <p>
                    For 40 years we at MartinLogan have taken the “Road Less
                    Traveled” when it comes to “Building a Better Mousetrap” in
                    our case, speakers. Like most high performance audio
                    companies, we have the goal of making products that create
                    beautiful sound, but we have always been “a little
                    different.”
                  </p>
                  <br />
                  <p>
                    {" "}
                    When it makes sense, we prefer to use more exotic, and
                    special thin film technologies combined with classic cone
                    technologies to deliver incredible detail, clarity, and
                    power that has to be heard to understand.
                  </p>
                  <br />
                  <p>
                    {" "}
                    For us, this began in 1983 with our Electrostatic Hybrid
                    models that would become an iconic expression of what can be
                    achieved through maximizing the strengths of each
                    technology. Many years later, in 2010, we launched the first
                    Motion series products which brought a taste of
                    Electrostatic’s “thin film magic” to more approachable price
                    points and a wider variety of applications. These mixtures
                    of classical and thin film technologies provide unique and
                    special listening experiences unmatched by conventional
                    technologies alone.
                  </p>
                  <br />
                  <p>
                    {" "}
                    “Truth In Sound” isn’t just a slogan for us, it’s a belief
                    that through the uncommon pairing of audio technologies at
                    our disposal we can reveal more detail, clarity, and realism
                    in everything you want to listen to.
                  </p>
                  <br />
                  <p>Let us help you discover the “Truth In Sound.”</p>
                </blockquote>
              </div>
            </div>
            <div className="lg:block hidden relative lg:col-span-6 lg:-my-96 -mr-5">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
              />
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                <div className="aspect-w-10 aspect-h-6 overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                  <img
                    className="lg:ml-6 object-contain lg:scale-[.85] rounded-xl"
                    src="https://cdn.pmlsound.com/martinlogan/Motion_Series/electrostatic_legacy_420.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="lg:hidden block">
              <img
                className="lg:ml-6 object-cover lg:scale-[.85] rounded-xl"
                src="https://cdn.pmlsound.com/martinlogan/Motion_Series/electrostatic_legacy_420.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectrostaticLegacy;
