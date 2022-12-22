import React, { useState } from "react";

const imperialSpecs = [
  {
    model: "Motion Model A",
    tweeter_dispersion: "<span> 80° x 30°<br/>(Horizontal x Vertical)</span>",
    sensitivity: "<span> 94 dB/2.83 <br/> volts/meter</span>",
    tweeter: "<span> 1.25” × 2.4” <br/> Gen2 FMT XT </span>",
    midrange: "<span> (1) 6.5” <br/> Nomex/Kevlar </span>",
    mid_bass: "<span> (3) 8” <br/> Aluminium </span>",
    recommended_application: "Height Channel",
    product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
  },
  {
    model: "Motion Model A",
    tweeter_dispersion: "<span> 80° x 30°<br/>(Horizontal x Vertical)</span>",
    sensitivity: "<span> 94 dB/2.83 <br/> volts/meter</span>",
    tweeter: "<span> 1.25” × 2.4” <br/> Gen2 FMT XT </span>",
    midrange: "<span> (1) 6.5” <br/> Nomex/Kevlar </span>",
    mid_bass: "<span> (3) 8” <br/> Aluminium </span>",
    recommended_application: "EFX Channel",
    product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
  },
  {
    model: "Motion Model A",
    tweeter_dispersion: "<span> 80° x 30°<br/>(Horizontal x Vertical)</span>",
    sensitivity: "<span> 94 dB/2.83 <br/> volts/meter</span>",
    tweeter: "<span> 1.25” × 2.4” <br/> Gen2 FMT XT </span>",
    midrange: "<span> (1) 6.5” <br/> Nomex/Kevlar </span>",
    mid_bass: "<span> (3) 8” <br/> Aluminium </span>",
    recommended_application: "Two Channel",
    product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
  },
  {
    model: "Motion Model A",
    tweeter_dispersion: "<span> 80° x 30°<br/>(Horizontal x Vertical)</span>",
    sensitivity: "<span> 94 dB/2.83 <br/> volts/meter</span>",
    tweeter: "<span> 1.25” × 2.4” <br/> Gen2 FMT XT </span>",
    midrange: "<span> (1) 6.5” <br/> Nomex/Kevlar </span>",
    mid_bass: "<span> (3) 8” <br/> Aluminium </span>",
    recommended_application: "Home Theater",
    product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
  },
  {
    model: "Motion Model A",
    tweeter_dispersion: "<span> 80° x 30°<br/>(Horizontal x Vertical)</span>",
    sensitivity: "<span> 94 dB/2.83 <br/> volts/meter</span>",
    tweeter: "<span> 1.25” × 2.4” <br/> Gen2 FMT XT </span>",
    midrange: "<span> (1) 6.5” <br/> Nomex/Kevlar </span>",
    mid_bass: "<span> (3) 8” <br/> Aluminium </span>",
    recommended_application: "Two Channel",
    product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
  },
];

const metricSpecs = [
  {
    model: "Motion Model B",
    tweeter_dispersion: "<span> 80° x 30°<br/>(Horizontal x Vertical)</span>",
    sensitivity: "<span> 94 dB/2.83 <br/> volts/meter</span>",
    tweeter: "<span> 1.25” × 2.4” <br/> Gen2 FMT XT </span>",
    midrange: "<span> (1) 6.5” <br/> Nomex/Kevlar </span>",
    mid_bass: "<span> (3) 8” <br/> Aluminium </span>",
    recommended_application: "Height Channel",
    product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
  },
  {
    model: "Motion Model B",
    tweeter_dispersion: "<span> 80° x 30°<br/>(Horizontal x Vertical)</span>",
    sensitivity: "<span> 94 dB/2.83 <br/> volts/meter</span>",
    tweeter: "<span> 1.25” × 2.4” <br/> Gen2 FMT XT </span>",
    midrange: "<span> (1) 6.5” <br/> Nomex/Kevlar </span>",
    mid_bass: "<span> (3) 8” <br/> Aluminium </span>",
    recommended_application: "EFX Channel",
    product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
  },
  {
    model: "Motion Model B",
    tweeter_dispersion: "<span> 80° x 30°<br/>(Horizontal x Vertical)</span>",
    sensitivity: "<span> 94 dB/2.83 <br/> volts/meter</span>",
    tweeter: "<span> 1.25” × 2.4” <br/> Gen2 FMT XT </span>",
    midrange: "<span> (1) 6.5” <br/> Nomex/Kevlar </span>",
    mid_bass: "<span> (3) 8” <br/> Aluminium </span>",
    recommended_application: "Two Channel",
    product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
  },
  {
    model: "Motion Model B",
    tweeter_dispersion: "<span> 80° x 30°<br/>(Horizontal x Vertical)</span>",
    sensitivity: "<span> 94 dB/2.83 <br/> volts/meter</span>",
    tweeter: "<span> 1.25” × 2.4” <br/> Gen2 FMT XT </span>",
    midrange: "<span> (1) 6.5” <br/> Nomex/Kevlar </span>",
    mid_bass: "<span> (3) 8” <br/> Aluminium </span>",
    recommended_application: "Home Theater",
    product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
  },
  {
    model: "Motion Model B",
    tweeter_dispersion: "<span> 80° x 30°<br/>(Horizontal x Vertical)</span>",
    sensitivity: "<span> 94 dB/2.83 <br/> volts/meter</span>",
    tweeter: "<span> 1.25” × 2.4” <br/> Gen2 FMT XT </span>",
    midrange: "<span> (1) 6.5” <br/> Nomex/Kevlar </span>",
    mid_bass: "<span> (3) 8” <br/> Aluminium </span>",
    recommended_application: "Two Channel",
    product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Specifications = () => {
  const [currentSpecs, setCurrentSpecs] = useState(imperialSpecs);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="specs">
      <div class="font-heading lg:text-5xl text-3xl font-bold">
        Specifications
      </div>
      <div className="my-8 flex flex-col px-4 sm:px-6 lg:px-8">
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
                      <span className="isolate inline-flex rounded-md shadow-sm">
                        <span
                          onClick={() => setCurrentSpecs(imperialSpecs)}
                          className={classNames(
                            currentSpecs === imperialSpecs
                              ? "bg-red-600 text-white"
                              : currentSpecs === metricSpecs
                              ? "bg-white text-gray-500 hover:bg-gray-50"
                              : "bg-red-600 text-white",
                            "cursor-pointer relative inline-flex items-center rounded-l-md border border-gray-300 px-2 py-2 text-sm font-medium focus:z-10 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                          )}
                        >
                          Imperial
                        </span>
                        <span
                          onClick={() => setCurrentSpecs(metricSpecs)}
                          className={classNames(
                            currentSpecs === metricSpecs
                              ? "bg-red-600 text-white"
                              : "bg-white text-gray-500 hover:bg-gray-50",
                            "cursor-pointer relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 px-2 py-2 text-sm font-medium focus:z-10 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                          )}
                        >
                          Metric
                        </span>
                      </span>
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
                  {currentSpecs.map((_, productIdx) => (
                    <tr
                      key={_.email}
                      className={
                        productIdx % 2 === 0 ? undefined : "bg-red-100"
                      }
                    >
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {_.model}
                      </td>
                      <td
                        className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                        dangerouslySetInnerHTML={{
                          __html: _.tweeter_dispersion,
                        }}
                      ></td>
                      <td
                        className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                        dangerouslySetInnerHTML={{
                          __html: _.sensitivity,
                        }}
                      ></td>
                      <td
                        className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                        dangerouslySetInnerHTML={{
                          __html: _.tweeter,
                        }}
                      ></td>
                      <td
                        className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                        dangerouslySetInnerHTML={{
                          __html: _.midrange,
                        }}
                      ></td>
                      <td
                        className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                        dangerouslySetInnerHTML={{
                          __html: _.mid_bass,
                        }}
                      ></td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-red-600">
                          {_.recommended_application}
                        </div>
                      </td>
                      <td
                        className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                        dangerouslySetInnerHTML={{
                          __html: _.product_dimensions,
                        }}
                      ></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
