import React from "react";

const LegendReinvented = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8 sm:px-6 px-6 sm:space-y-6 mb-6 lg:mt-16 mt-6">
      <div className="bg-white pt-16 lg:py-10">
        <div className="lg:pl-16 pb-6">
          <h3 className=" pl-1 text-md font-normal leading-6 text-gray-900">
            MartinLogan Motion Series
          </h3>
          <p className="font-heading mt-2 max-w-4xl lg:text-5xl text-3xl font-bold text-gray-900">
            A Legend Reinvented
          </p>
        </div>
        <div className="bg-white pb-16 lg:relative lg:pb-0 rounded-xl border-solid border-t border-gray-200 shadow-md shadow-gray-500/40">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
            <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
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
            <div className="lg:block hidden relative lg:-my-20">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
              />
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                <div className="aspect-w-10 aspect-h-6 overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                  <img
                    className="lg:ml-6 object-cover lg:scale-110 mt-6"
                    src="https://cdn.pmlsound.com/martinlogan/Motion_Series/legend_reinvented_313.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegendReinvented;
