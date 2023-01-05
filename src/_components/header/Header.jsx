import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
const navigation = [
  { name: "Explore MartinLogan", href: "https://www.martinlogan.com/en/" },
  { name: "Specifications", href: "#specs" },
  { name: "Downloads", href: "#" },
  { name: "Find a Dealer", href: "https://www.martinlogan.com/en/dealers" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Header = () => {
  const [animateHeader, setAnimateHeader] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 10) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);
  return (
    <div className="">
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 h-full w-full" aria-hidden="true">
          <div className="relative h-full">
            <video
              //   width="100%"
              autoPlay
              loop
              muted
              playsInline
              class="absolute w-auto h-max max-w-none"
            >
              <source
                src="https://cdn.pmlsound.com/martinlogan/Motion_Series/Motion_Tease_Final_121.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="relative pt-6 md:pb-16 pb-6">
          <Popover>
            <div className="">
              {/* <div
              className={classNames(
                animateHeader
                  ? "backdrop-filter backdrop-blur-lg border-b border-gray-200"
                  : null,
                "z-50 flex min-h-full flex-col top-0 bg-transparent mx-auto max-w-7xl px-4 sm:px-6"
              )}
            > */}
              <nav
                className={classNames(
                  animateHeader
                    ? "border-b border-gray-200 ease-in duration-500 backdrop-filter backdrop-blur-lg pb-10 bg-gray-50 bg-opacity-70"
                    : "border-b-0 border-transparent transition-all ease-out duration-300",
                  "z-50 flex top-0 bg-transparent fixed items-center justify-between sm:h-10 md:justify-center pt-10 w-full"
                )}
                // className="fixed flex items-center justify-between sm:h-10 md:justify-center"
                aria-label="Global"
              >
                <div className="relative flex-row justify-between items-center py-1">
                  <div className=" flex w-full items-center justify-between md:w-auto">
                    <a href="#">
                      <span className="sr-only">Your Company</span>
                      <img
                        className="md:h-8 w-auto h-20 md:scale-[2.5]"
                        src={
                          animateHeader
                            ? "https://cdn.pmlsound.com/martinlogan/Motion_Series/martinlogan_primary_logo_black.png"
                            : "https://cdn.pmlsound.com/martinlogan/Motion_Series/martinlogan_primary_logo_white.png"
                        }
                        alt="ML logo"
                      />
                    </a>
                    <div className="-mr-2 flex md:ml-0 ml-56 items-center md:hidden">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex lg:space-x-36">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-medium text-gray-500 hover:text-gray-900"
                    ></a>
                  ))}
                </div>
                <div
                  className={classNames(
                    animateHeader ? "text-gray-900" : "text-gray-100",
                    "hidden md:right-0 md:flex md:items-center md:justify-center"
                  )}
                >
                  <a
                    href="https://www.martinlogan.com/en/"
                    target="_blank"
                    className="ml-8 whitespace-nowrap text-base font-normal  hover:text-red-600"
                  >
                    Explore MartinLogan
                  </a>
                  <a
                    href="#specs"
                    className="ml-8 whitespace-nowrap text-base font-normal  hover:text-red-600"
                  >
                    Specifications
                  </a>
                  <a
                    href="#"
                    className="ml-8 whitespace-nowrap text-base font-normal  hover:text-red-600"
                  >
                    Downloads
                  </a>
                  <a
                    // type="button"
                    href="https://www.martinlogan.com/en/dealers"
                    target="_blank"
                    className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-normal text-white shadow-sm hover:bg-red-700"
                  >
                    <PlusIcon
                      className="-ml-0.5 mr-2 h-4 w-4"
                      aria-hidden="true"
                    />
                    Find a Dealer
                  </a>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="z-50 absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <img
                        className="h-8 w-auto scale-[2.5] ml-4"
                        src="https://cdn.pmlsound.com/martinlogan/Motion_Series/martinlogan_primary_logo_black.png"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <div className="mx-auto md:mt-36 max-w-7xl px-4 mt-44 sm:px-6">
            <div className="text-center">
              <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-50 sm:text-5xl md:text-9xl">
                <span className="block">Truth in Sound</span>
                {/* <span className="block text-indigo-600">online business</span> */}
              </h1>
              {/* <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p> */}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1" />
            <div className="w-full flex-1" />
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-56">
            <img
              className="relative mx-auto md:max-w-4xl max-w-xs"
              src="https://cdn.pmlsound.com/martinlogan/Motion_Series/hero_group_shot.png"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
