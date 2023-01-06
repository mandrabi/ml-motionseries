import React from "react";

const imperialSpecs = [
  {
    model: "Motion XT F200",
    tweeter_dispersion: "<span> 90° x 45°<br/>(Horizontal x Vertical)</span>",
    sensitivity: "<span> 92 dB </span>",
    tweeter:
      '<span>1.25" x 2.4" <br/> Gen2 FMT XT <br/> Obsidian transducer <br/> with 4.5" x 2.75" <br/> diaphragm.</span>',
    midrange: "<span> One 6.5” Kevlar &reg; </span>",
    mid_bass: "<span> Three 8” Aluminium </span>",
    recommended_application: "Height Channel",
    product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
  },
  {
    model: "Motion XT F100",
    tweeter_dispersion: "<span> 90° x 45°<br/>(Horizontal x Vertical)</span>",
    sensitivity: "<span> 92 dB </span>",
    tweeter:
      '<span>1.25" x 2.4" <br/> Gen2 FMT XT <br/> Obsidian transducer <br/> with 4.5" x 2.75" <br/> diaphragm.</span>',
    midrange: "<span> One 6.5” Kevlar	&reg; </span>",
    mid_bass: "<span> Three 6.5” Aluminium </span>",
    recommended_application: "EFX Channel",
    product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
  },
  {
    model: "Motion XT B100",
    tweeter_dispersion: "<span> 90° x 45°<br/>(Horizontal x Vertical)</span>",
    sensitivity: "<span> 93 dB</span>",
    tweeter:
      '<span>1.25" x 2.4" <br/> Gen2 FMT XT <br/> Obsidian transducer <br/> with 4.5" x 2.75" <br/> diaphragm.</span>',
    midrange: "<span> One 6.5” Kevlar	&reg; </span>",
    mid_bass: "<span> Three 8” Aluminium </span>",
    recommended_application: "Two Channel",
    product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
  },
  {
    model: "Motion XT C100",
    tweeter_dispersion: "<span> 90° x 45°<br/>(Horizontal x Vertical)</span>",
    sensitivity: "<span> 93 dB </span>",
    tweeter:
      '<span>1.25" x 2.4" <br/> Gen2 FMT XT <br/> Obsidian transducer <br/> with 4.5" x 2.75" <br/> diaphragm.</span>',
    midrange: "<span> Two 6.5” Kevlar	&reg; </span>",
    mid_bass: "<span> Three 8” Aluminium </span>",
    recommended_application: "Home Theater",
    product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
  },
  {
    model: "Motion F20",
    tweeter_dispersion: "<span> 90° x 90°<br/>(Horizontal x Vertical)</span>",
    sensitivity: "<span> 92 dB </span>",
    tweeter:
      "<span>1” x 1.4” <br/> Gen2 FMT XT <br/> Obsidian transducer <br/> with 5.25” x 1.75” <br/> diaphragm.</span>",
    midrange: "<span> One 5.5” Fiberglass </span>",
    mid_bass: "<span> Three 6.5” Aluminium </span>",
    recommended_application: "Two Channel",
    product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
  },
  {
    model: "Motion F10",
    tweeter_dispersion: "<span> 90° x 90°<br/>(Horizontal x Vertical)</span>",
    sensitivity: "<span> 92 dB </span>",
    tweeter:
      "<span>1” x 1.4” <br/> Gen2 FMT XT <br/> Obsidian transducer <br/> with 5.25” x 1.75” <br/> diaphragm.</span>",
    midrange: "<span> One 5.5” Fiberglass </span>",
    mid_bass: "<span> Three 5.5” Aluminium </span>",
    recommended_application: "Two Channel",
    product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
  },
  {
    model: "Motion B10",
    tweeter_dispersion: "<span> 90° x 90°<br/>(Horizontal x Vertical)</span>",
    sensitivity: "<span> 92 dB </span>",
    tweeter:
      "<span>1” x 1.4” <br/> Gen2 FMT XT <br/> Obsidian transducer <br/> with 5.25” x 1.75” <br/> diaphragm.</span>",
    midrange: "<span> One 5.5” Fiberglass </span>",
    mid_bass: "<span> Three 5.5” Aluminium </span>",
    recommended_application: "Two Channel",
    product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
  },
  {
    model: "Motion C10",
    tweeter_dispersion: "<span> 90° x 90°<br/>(Horizontal x Vertical)</span>",
    sensitivity: "<span> 92 dB </span>",
    tweeter:
      "<span>1” x 1.4” <br/> Gen2 FMT XT <br/> Obsidian transducer <br/> with 5.25” x 1.75” <br/> diaphragm.</span>",
    midrange: "<span> Two 5.5” Fiberglass </span>",
    mid_bass: "<span> Three 5.5” Aluminium </span>",
    recommended_application: "Two Channel",
    product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
  },
  {
    model: "Motion MP10",
    tweeter_dispersion: "<span> 90° x 90°<br/>(Horizontal x Vertical)</span>",
    sensitivity: "<span> 92 dB </span>",
    tweeter:
      "<span>1” x 1.4” <br/> Gen2 FMT XT <br/> Obsidian transducer <br/> with 5.25” x 1.75” <br/> diaphragm.</span>",
    midrange: "<span> One 5.5” Fiberglass </span>",
    mid_bass: "<span> Three 5.5” Aluminium </span>",
    recommended_application: "Two Channel",
    product_dimensions: "<span> 48” x 11.4” x 14.4” <br/> (HxWxD) </span>",
  },
];

const ImperialSpecs = () => {
  return (
    <>
      {imperialSpecs.map((_, productIdx) => (
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

export default ImperialSpecs;
