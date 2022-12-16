import React from "react";

const newsAndAnnouncements = [
  {
    id: 1,
    img: "https://cdn.pmlsound.com/martinlogan/Motion_Series/Rectangle_68.png",
    date: "12/07/2022",
    headline: "Headline Here",
    content:
      "Lorem ipsum dolor sit amet consectetur. Interdum phasellus volutpat nam in mauris sed gravida risus sollicitudin. Eu mi aenean ut duis. Aenean malesuada augue massa faucibus ac.",
    button: "",
  },
  {
    id: 2,
    img: "https://cdn.pmlsound.com/martinlogan/Motion_Series/Rectangle_82.png",
    date: "12/07/2022",
    headline: "Headline Here",
    content:
      "Lorem ipsum dolor sit amet consectetur. Interdum phasellus volutpat nam in mauris sed gravida risus sollicitudin. Eu mi aenean ut duis. Aenean malesuada augue massa faucibus ac.",
    button: "",
  },
  {
    id: 3,
    img: "https://cdn.pmlsound.com/martinlogan/Motion_Series/Rectangle_86.png",
    date: "12/07/2022",
    headline: "Headline Here",
    content:
      "Lorem ipsum dolor sit amet consectetur. Interdum phasellus volutpat nam in mauris sed gravida risus sollicitudin. Eu mi aenean ut duis. Aenean malesuada augue massa faucibus ac.",
    button: "",
  },
];
const News = () => {
  return newsAndAnnouncements.map((_) => {
    return (
      <div className="pt-6 lg:py-16">
        <div className="lg:mx-auto lg:max-w-6xl bg-red-600 pb-16 lg:relative lg:z-10 lg:pb-0 rounded-xl">
          <div className="lg:mx-auto lg:grid lg:max-w-5xl lg:grid-cols-3 lg:gap-8 lg:px-8">
            <div className="relative lg:-my-8">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
              />
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                  <img
                    className="object-cover lg:h-full lg:w-full"
                    src={_.img}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-6">
                <blockquote>
                  <div className="mb-6">
                    <p className="mt-6 text-md font-normal text-white">
                      {_.date}
                    </p>
                    <p className="font-heading text-4xl font-bold text-white">
                      {_.headline}
                    </p>
                    <p className="mt-6 font-body text-lg font-normal text-white leading-6">
                      {_.content}
                    </p>

                    <button className="mt-6 border px-4 py-2 rounded-lg border-1 text-white border-white">
                      Read more
                    </button>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default News;
