import React, { useEffect, useState } from "react";
import ImperialSpecs from "./ImperialSpecs";
import MetricSpecs from "./MetricSpecs";

// const specs = [
//   {
//     name: "imperialSpecs",
//     imperialSpecs: [
//       {
//         model: "Motion XT F200",
//         tweeter_dispersion:
//           "<span> 90° x 45°<br/>(Horizontal x Vertical)</span>",
//         sensitivity: "<span> 92 dB </span>",
//         tweeter:
//           '<span>1.25" x 2.4" <br/> Gen2 FMT XT <br/> Obsidian transducer <br/> with 4.5" x 2.75" <br/> diaphragm.</span>',
//         midrange: "<span> One 6.5” Kevlar &reg; </span>",
//         mid_bass: "<span> Three 8” Aluminium </span>",
//         recommended_application: "Height Channel",
//         product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
//       },
//       {
//         model: "Motion XT F100",
//         tweeter_dispersion:
//           "<span> 90° x 45°<br/>(Horizontal x Vertical)</span>",
//         sensitivity: "<span> 92 dB </span>",
//         tweeter:
//           '<span>1.25" x 2.4" <br/> Gen2 FMT XT <br/> Obsidian transducer <br/> with 4.5" x 2.75" <br/> diaphragm.</span>',
//         midrange: "<span> One 6.5” Kevlar	&reg; </span>",
//         mid_bass: "<span> Three 6.5” Aluminium </span>",
//         recommended_application: "EFX Channel",
//         product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
//       },
//       {
//         model: "Motion XT B100",
//         tweeter_dispersion:
//           "<span> 90° x 45°<br/>(Horizontal x Vertical)</span>",
//         sensitivity: "<span> 93 dB</span>",
//         tweeter:
//           '<span>1.25" x 2.4" <br/> Gen2 FMT XT <br/> Obsidian transducer <br/> with 4.5" x 2.75" <br/> diaphragm.</span>',
//         midrange: "<span> One 6.5” Kevlar	&reg; </span>",
//         mid_bass: "<span> Three 8” Aluminium </span>",
//         recommended_application: "Two Channel",
//         product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
//       },
//       {
//         model: "Motion XT C100",
//         tweeter_dispersion:
//           "<span> 90° x 45°<br/>(Horizontal x Vertical)</span>",
//         sensitivity: "<span> 93 dB </span>",
//         tweeter:
//           '<span>1.25" x 2.4" <br/> Gen2 FMT XT <br/> Obsidian transducer <br/> with 4.5" x 2.75" <br/> diaphragm.</span>',
//         midrange: "<span> Two 6.5” Kevlar	&reg; </span>",
//         mid_bass: "<span> Three 8” Aluminium </span>",
//         recommended_application: "Home Theater",
//         product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
//       },
//       {
//         model: "Motion F20",
//         tweeter_dispersion:
//           "<span> 90° x 90°<br/>(Horizontal x Vertical)</span>",
//         sensitivity: "<span> 92 dB </span>",
//         tweeter:
//           "<span>1” x 1.4” <br/> Gen2 FMT XT <br/> Obsidian transducer <br/> with 5.25” x 1.75” <br/> diaphragm.</span>",
//         midrange: "<span> One 5.5” Fiberglass </span>",
//         mid_bass: "<span> Three 6.5” Aluminium </span>",
//         recommended_application: "Two Channel",
//         product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
//       },
//       {
//         model: "Motion F10",
//         tweeter_dispersion:
//           "<span> 90° x 90°<br/>(Horizontal x Vertical)</span>",
//         sensitivity: "<span> 92 dB </span>",
//         tweeter:
//           "<span>1” x 1.4” <br/> Gen2 FMT XT <br/> Obsidian transducer <br/> with 5.25” x 1.75” <br/> diaphragm.</span>",
//         midrange: "<span> One 5.5” Fiberglass </span>",
//         mid_bass: "<span> Three 5.5” Aluminium </span>",
//         recommended_application: "Two Channel",
//         product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
//       },
//       {
//         model: "Motion B10",
//         tweeter_dispersion:
//           "<span> 90° x 90°<br/>(Horizontal x Vertical)</span>",
//         sensitivity: "<span> 92 dB </span>",
//         tweeter:
//           "<span>1” x 1.4” <br/> Gen2 FMT XT <br/> Obsidian transducer <br/> with 5.25” x 1.75” <br/> diaphragm.</span>",
//         midrange: "<span> One 5.5” Fiberglass </span>",
//         mid_bass: "<span> Three 5.5” Aluminium </span>",
//         recommended_application: "Two Channel",
//         product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
//       },
//       {
//         model: "Motion C10",
//         tweeter_dispersion:
//           "<span> 90° x 90°<br/>(Horizontal x Vertical)</span>",
//         sensitivity: "<span> 92 dB </span>",
//         tweeter:
//           "<span>1” x 1.4” <br/> Gen2 FMT XT <br/> Obsidian transducer <br/> with 5.25” x 1.75” <br/> diaphragm.</span>",
//         midrange: "<span> Two 5.5” Fiberglass </span>",
//         mid_bass: "<span> Three 5.5” Aluminium </span>",
//         recommended_application: "Two Channel",
//         product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
//       },
//       {
//         model: "Motion MP10",
//         tweeter_dispersion:
//           "<span> 90° x 90°<br/>(Horizontal x Vertical)</span>",
//         sensitivity: "<span> 92 dB </span>",
//         tweeter:
//           "<span>1” x 1.4” <br/> Gen2 FMT XT <br/> Obsidian transducer <br/> with 5.25” x 1.75” <br/> diaphragm.</span>",
//         midrange: "<span> One 5.5” Fiberglass </span>",
//         mid_bass: "<span> Three 5.5” Aluminium </span>",
//         recommended_application: "Two Channel",
//         product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
//       },
//     ],
//   },
//   {
//     name: "metricSpecs",
//     data: [
//       {
//         model: "Motion Model B",
//         tweeter_dispersion:
//           "<span> 80° x 30°<br/>(Horizontal x Vertical)</span>",
//         sensitivity: "<span> 94 dB/2.83 <br/> volts/meter</span>",
//         tweeter: "<span> 1.25” × 2.4” <br/> Gen2 FMT XT </span>",
//         midrange: "<span> (1) 6.5” <br/> Nomex/Kevlar </span>",
//         mid_bass: "<span> (3) 8” <br/> Aluminium </span>",
//         recommended_application: "Height Channel",
//         product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
//       },
//       {
//         model: "Motion Model B",
//         tweeter_dispersion:
//           "<span> 80° x 30°<br/>(Horizontal x Vertical)</span>",
//         sensitivity: "<span> 94 dB/2.83 <br/> volts/meter</span>",
//         tweeter: "<span> 1.25” × 2.4” <br/> Gen2 FMT XT </span>",
//         midrange: "<span> (1) 6.5” <br/> Nomex/Kevlar </span>",
//         mid_bass: "<span> (3) 8” <br/> Aluminium </span>",
//         recommended_application: "EFX Channel",
//         product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
//       },
//       {
//         model: "Motion Model B",
//         tweeter_dispersion:
//           "<span> 80° x 30°<br/>(Horizontal x Vertical)</span>",
//         sensitivity: "<span> 94 dB/2.83 <br/> volts/meter</span>",
//         tweeter: "<span> 1.25” × 2.4” <br/> Gen2 FMT XT </span>",
//         midrange: "<span> (1) 6.5” <br/> Nomex/Kevlar </span>",
//         mid_bass: "<span> (3) 8” <br/> Aluminium </span>",
//         recommended_application: "Two Channel",
//         product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
//       },
//       {
//         model: "Motion Model B",
//         tweeter_dispersion:
//           "<span> 80° x 30°<br/>(Horizontal x Vertical)</span>",
//         sensitivity: "<span> 94 dB/2.83 <br/> volts/meter</span>",
//         tweeter: "<span> 1.25” × 2.4” <br/> Gen2 FMT XT </span>",
//         midrange: "<span> (1) 6.5” <br/> Nomex/Kevlar </span>",
//         mid_bass: "<span> (3) 8” <br/> Aluminium </span>",
//         recommended_application: "Home Theater",
//         product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
//       },
//       {
//         model: "Motion Model B",
//         tweeter_dispersion:
//           "<span> 80° x 30°<br/>(Horizontal x Vertical)</span>",
//         sensitivity: "<span> 94 dB/2.83 <br/> volts/meter</span>",
//         tweeter: "<span> 1.25” × 2.4” <br/> Gen2 FMT XT </span>",
//         midrange: "<span> (1) 6.5” <br/> Nomex/Kevlar </span>",
//         mid_bass: "<span> (3) 8” <br/> Aluminium </span>",
//         recommended_application: "Two Channel",
//         product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
//       },
//     ],
//   },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Specifications = () => {
  const [currentSpecs, setCurrentSpecs] = useState();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="specs">
      <div className="flex justify-between">
        <div className="font-heading lg:text-5xl text-3xl font-bold">
          Specifications
        </div>
        <span className="isolate inline-flex rounded-md shadow-sm">
          <button
            type="button"
            onClick={() => {
              setCurrentSpecs("imperialSpecs");
            }}
            className={classNames(
              currentSpecs === "imperialSpecs"
                ? "bg-red-600 text-white"
                : currentSpecs === "metricSpecs"
                ? "bg-white text-gray-500 hover:bg-gray-50"
                : "bg-red-600 text-white",
              "cursor-pointer relative inline-flex items-center rounded-l-md border border-gray-300 px-6 py-2 text-sm font-medium focus:z-10 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
            )}
          >
            Imperial
          </button>
          <button
            type="button"
            onClick={() => {
              setCurrentSpecs("metricSpecs");
            }}
            className={classNames(
              currentSpecs === "metricSpecs"
                ? "bg-red-600 text-white"
                : "bg-white text-gray-500 hover:bg-gray-50",
              "cursor-pointer relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 px-6 py-2 text-sm font-medium focus:z-10 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
            )}
          >
            Metric
          </button>
        </span>
      </div>

      <div className="my-8 flex flex-col px-4 sm:px-6 lg:px-0">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Model
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Tweeter
                      <br /> Dispersion
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Sensitivity
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Tweeter
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Midrange
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Mid-Bass/Bass
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Recommended
                      <br /> Application
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Product
                      <br /> Dimensions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {currentSpecs === "imperialSpecs" ? (
                    <ImperialSpecs />
                  ) : currentSpecs === "metricSpecs" ? (
                    <MetricSpecs />
                  ) : (
                    <ImperialSpecs />
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <span className="lg:hidden block font-body text-sm">
          Scroll Right &#8594;
        </span>
      </div>
    </div>
  );
};

export default Specifications;
