import React from "react";

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

const MetricSpecs = () => {
  return (
    <>
      {metricSpecs.map((_, productIdx) => (
        <tr
          key={_.model}
          className={productIdx % 2 === 0 ? undefined : "bg-red-100"}
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
    </>
  );
};

export default MetricSpecs;
