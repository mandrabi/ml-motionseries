import React, { Suspense, Fragment, useEffect, useState } from "react";

import Dispatch from "../Dispatch";
import Header from "../_components/header/Header";
const Home = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <Fragment>
      <div className="w-full mx-auto">
        <Header />
        <Dispatch />
        {showButton && (
          <button
            onClick={scrollToTop}
            className="z-50 fixed bottom-6 right-6 text-3xl bg-black text-white cursor-pointer rounded-xl px-3 py-2 shadow-md shadow-gray-400 hover:bg-red-600 opacity-50 md:opacity-100"
          >
            &#8679;
          </button>
        )}
      </div>
    </Fragment>
  );
};

export default Home;
