import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import React from "react";

const downloadFiles = [
  {
    id: 1,
    title: "Motion XT F200",
    imageSrc:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_XT_F200_satin-white_product-image_2.png",
    specs: "",
    drawing: "",
  },
  {
    id: 2,
    title: "Motion XT F100",
    imageSrc:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_XT_F100_satin-white_product-image_2.png",
    specs: "",
    drawing: "",
  },
  {
    id: 3,
    title: "Motion XT B100",
    imageSrc:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_XT_B100_satin-white_product-image.png",
    specs: "",
    drawing: "",
  },
  {
    id: 4,
    title: "Motion XT C100",
    imageSrc:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_XT_C100_satin-white_product-image.png",
    specs: "",
    drawing: "",
  },
  {
    id: 5,
    title: "Motion F20",
    imageSrc:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_F20_satin-white_product-image_2.png",
    specs: "",
    drawing: "",
  },
  {
    id: 6,
    title: "Motion F10",
    imageSrc:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_F10_satin-white_product-image.png",
    specs: "",
    drawing: "",
  },
  {
    id: 7,
    title: "Motion C10",
    imageSrc:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_C10_satin-white_product-image.png",
    specs: "",
    drawing: "",
  },
  {
    id: 8,
    title: "Motion B10",
    imageSrc:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_B10_satin-white_product-image.png",
    specs: "",
    drawing: "",
  },
  {
    id: 9,
    title: "Motion MP10",
    imageSrc:
      "https://cdn.pmlsound.com/martinlogan/Motion_Series/motion_MP10_satin-white_product-image.png",
    specs: "",
    drawing: "",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Downloads = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-6" id="downloads">
      <div class="font-heading lg:text-5xl text-3xl font-bold">Downloads</div>
      <div className="bg-white">
        <div className="">
          <div className="mt-6 grid grid-cols-1 gap-1 md:grid-cols-3 lg:mt-8">
            {downloadFiles.map((_) => {
              return (
                <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                  <div key={_.id} className="col-span-1 flex">
                    <div
                      className={classNames(
                        // project.bgColor,
                        "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium"
                      )}
                    >
                      <img
                        src={_.imageSrc}
                        className={classNames(
                          _.id === 1 || _.id === 2 || _.id === 5
                            ? "scale-1"
                            : "scale-[2.5]"
                        )}
                      />
                    </div>
                    <div className="flex flex-1 items-center justify-between truncate">
                      <div className="flex-1 truncate px-4 py-2 text-sm">
                        <a
                          //   href={project.href}
                          className="font-body font-medium text-gray-900 hover:text-gray-600"
                        >
                          {_.title}
                        </a>
                        <p className="text-gray-500 mt-4 font-body">
                          {/* {project.members} Members */}
                          <div className="flex items-end">
                            <ArrowDownTrayIcon className="h-6 w-6 mr-2 text-gray-900" />{" "}
                            Dimensional Drawing
                          </div>

                          <div className="flex mt-3 items-end">
                            <ArrowDownTrayIcon className="h-6 w-6 mr-2 text-gray-900" />{" "}
                            Spec Sheet
                          </div>
                        </p>
                      </div>
                      <div className="flex-shrink-0 pr-2">
                        <button
                          type="button"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          <span className="sr-only">Open options</span>
                          {/* <EllipsisVerticalIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          /> */}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
