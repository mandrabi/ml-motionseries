import React from "react";

const ModernDesign = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8 sm:px-6 px-6 sm:space-y-6 mb-6 lg:mt-6 mt-6">
      <div className="text-center mt-16">
        <p className="font-heading lg:text-5xl text-3xl font-bold text-gray-900">
          Modern Design Featuring Luxurious Finishes
        </p>
        <p className="font-body mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
          porttitor quis nisl turpis eget vulputate turpis at. Et ut cras rutrum
          viverra. Non vel amet, pharetra, faucibus viverra mi sollicitudin id
          mattis. Aliquet sed viverra dictum nunc ultrices dui dictum ut
          sagittis.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 max-w-6xl mx-auto">
        <div className="text-center">
          <img
            className="mt-6"
            src="https://cdn.pmlsound.com/martinlogan/Motion_Series/luxury-finishes-SatinWhite.png"
            alt=""
          />
          <p className="font-heading lg:text-5xl text-3xl font-bold text-gray-900 mt-6">
            Satin White
          </p>
        </div>
        <div className="text-center">
          <img
            className="mt-6"
            src="https://cdn.pmlsound.com/martinlogan/Motion_Series/luxury-finishes-walnut.png"
            alt=""
          />
          <p className="font-heading lg:text-5xl text-3xl font-bold text-gray-900 mt-6">
            Walnut
          </p>
        </div>
        <div className="text-center">
          <img
            className="mt-6"
            src="https://cdn.pmlsound.com/martinlogan/Motion_Series/luxury-finishes-black-gloss.png"
            alt=""
          />
          <p className="font-heading lg:text-5xl text-3xl font-bold text-gray-900 mt-6">
            Gloss Walnut
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModernDesign;
