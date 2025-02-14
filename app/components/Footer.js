"use client";

import { Facebook, Instagram, Twitter, Github, Dribbble } from "lucide-react";
import { MapPin, Phone, Mail } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <strong className="block text-xl font-bold text-gray-900 sm:text-3xl">
            Want us to email you with the latest blockbuster news?
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg mx-auto">
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="john@doe.com"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-8  place-items-center">
          <div className="text-center ">
            <div className="bg-white p-6 rounded-lg w-full max-w-full flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPin className="text-blue-500" />
                <span className="text-gray-700">
                  123 Anywhere St., Any City 12345
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="text-blue-500" />
                <span className="text-gray-700">123-456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="text-blue-500" />
                <span className="text-gray-700">hellocallcenter@gmail.com</span>
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-4 ">
              {[Facebook, Instagram, Twitter, Github, Dribbble].map(
                (Icon, index) => (
                  <a
                    key={index}
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
