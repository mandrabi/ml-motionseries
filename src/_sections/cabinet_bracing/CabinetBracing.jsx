import React from "react";

const CabinetBracing = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8 sm:px-6 sm:space-y-6 mb-6 lg:mt-36 mt-6">
      <div className="grid grid-cols-2 gap-10 content-end">
        <div className="lg:py-20">
          <p className="font-heading text-5xl font-bold text-gray-900">
            Enhanced Cabinet Bracing
          </p>
          <p className="font-body mt-3">
            The cabinet of a speaker is crucial to achieving the best sound
            quality. If a speaker cabinet is not properly rigid it will vibrate
            or resonate which can mask clarity and detail that would otherwise
            be present. With a XX% increase to structural rigidity, the latest
            Motion series has the quietest cabinet yet, allowing all the audio
            technologies to perform at their best.
          </p>
          <p className="font-heading text-5xl font-bold text-gray-900 mt-6">
            Stealth Bass Port
          </p>
          <p className="font-body mt-3">
            Properly porting a speaker cabinet is a great way to increase the
            bass output, but towers with rear ports do need some “room to
            breathe” that can be at odds with your room's layout or decor. Since
            the distance from the wall can vary, the results can often be hot or
            miss in regards to bass clarity and articulation.
            <br />
            Motion’s all new bottom mounted Single and Twin Cannon bass ports
            maintain a consistent distance to the floor, allowing our engineers
            to tune the speaker allowing for deep, powerful, articulate bass in
            any room.
          </p>
        </div>
        <div className="rounded-xl border-solid border-t border-gray-200 shadow-md shadow-gray-500/40">
          <img
            className="mt-6"
            src="https://cdn.pmlsound.com/martinlogan/Motion_Series/luxury-finishes-SatinWhite.png"
            alt=""
          />
        </div>
      </div>
      <div class="grid-container grid grid-cols-5 pt-20 ">
        <div class="item1 col-span-2 mr-10 my-10">
          <p className="font-heading text-5xl font-bold text-gray-900">
            Secure Lock Grilles
          </p>
          <p className="font-body mt-3">
            Besides looking modern and elegant, our new “Secure Lock” grille
            design uses clever, stealth mounting tabs to firmly, and securely
            hold the grilles in place while also allowing for easy removal when
            needed.
            <br />
            <br />
            <b>Your Sound, Your Way ---</b>
          </p>
        </div>
        <div class="item2 col-span-3">
          <div className="rounded-xl border-solid border-t border-gray-200 shadow-md shadow-gray-500/40">
            <img
              className="mt-6"
              src="https://cdn.pmlsound.com/martinlogan/Motion_Series/Motion-Series---Collection-shot---grilles.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabinetBracing;
