import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

const navigation = {
  solutions: [
    {
      name: "Send us an email",
      subText: "support@martinlogan.com",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
      ),
    },
    {
      name: "Call us",
      subText: "333 333-33-3333",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
            clip-rule="evenodd"
          />
        </svg>
      ),
    },
  ],
  support: [
    { name: "Company History", href: "#" },
    { name: "News, Press & Images", href: "#" },
    { name: "Tour MartinLogan", href: "#" },
    { name: "Truth in Sound", href: "#" },
    { name: "Electrostatic (ESL) Theory", href: "#" },
    { name: "Folded Motion Technology", href: "#" },
    { name: "MartinLogan Bass Advances", href: "#" },
  ],
  company: [
    { name: "FAQ’S", href: "#" },
    { name: "Register Products", href: "#" },
    { name: "Online Shopping Policy", href: "#" },
    { name: "Contact Infromation", href: "#" },
    { name: "Warranty Information", href: "#" },
    { name: "Manuals and Literature", href: "#" },
    { name: "Product Museum", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/MartinLoganSpeakers",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/martinloganspeakers/",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/MartinLoganLtd",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "Youtube",
      href: "https://www.youtube.com/user/MartinLoganSpeakers",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 310 310"
          style={{
            enableBackground: "new 0 0 310 310",
          }}
          xmlSpace="preserve"
          {...props}
        >
          <path
            d="M297.9 64.6c-11.2-13.3-31.9-18.7-71.3-18.7H83.4c-40.4 0-61.4 5.8-72.5 20C0 79.7 0 100 0 128.2v53.7c0 54.6 12.9 82.2 83.4 82.2h143.2c34.2 0 53.2-4.8 65.4-16.5 12.6-12 17.9-31.7 17.9-65.7v-53.7c.1-29.7-.7-50.2-12-63.6zM199 162.4l-65 34c-1.5.8-3 1.1-4.6 1.1-1.8 0-3.6-.5-5.2-1.4-3-1.8-4.8-5.1-4.8-8.6v-67.8c0-3.5 1.8-6.7 4.8-8.5 3-1.8 6.7-1.9 9.8-.3l65 33.8c3.3 1.7 5.4 5.1 5.4 8.9 0 3.7-2.1 7.1-5.4 8.8z"
            style={{
              fill: "currentColor",
            }}
          />
        </svg>
      ),
    },
    {
      name: "Flickr",
      href: "https://www.flickr.com/photos/martinlogan/sets/",
      icon: (props) => (
        <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x={0}
          y={0}
          viewBox="0 0 360 360"
          style={{
            enableBackground: "new 0 0 360 360",
          }}
          xmlSpace="preserve"
          {...props}
        >
          <circle
            className="st0"
            cx={81.1}
            cy={181.7}
            r={76.6}
            style={{
              fill: "currentColor",
            }}
          />
          <circle
            className="st0"
            cx={278.4}
            cy={181.7}
            r={76.6}
            style={{
              fill: "currentColor",
            }}
          />
        </svg>
      ),
    },
  ],
};
const Footer = () => {
  return (
    <div className="bg-black mt-6">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-5">
            <div className="md:grid md:grid-cols-2 md:gap-16">
              <div>
                <h3 className="text-lg font-medium text-white">Contact</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <span className="text-base text-gray-300  flex gap-3">
                        <div className="mt-3">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div>
                          {item.name}
                          <br />
                          {item.subText}
                        </div>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-lg font-medium text-white">Explore</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="cursor-pointer text-base text-gray-300 hover:text-red-600"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg font-medium text-white">Support</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="cursor-pointer text-base text-gray-300 hover:text-red-600"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 xl:mt-0">
                <div className="flex lg:space-x-6 space-x-3 md:order-2">
                  {navigation.social.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-400 hover:text-red-600"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-1">
            <img
              className="ml-5 h-8 w-auto sm:h-10 scale-[2.5]"
              src={
                "https://cdn.pmlsound.com/martinlogan/Motion_Series/martinlogan_primary_logo_white.png"
              }
              alt="ML logo"
            />
          </div>
          <p className="mt-8 text-base text-gray-400 md:order-2 md:mt-0">
            &copy; {new Date().getFullYear()} MartinLogan, Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
