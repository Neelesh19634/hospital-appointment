import { Handshake, Heart, Scale, Star, Users } from "lucide-react";
import React from "react";

const OurValues = () => {
  return (
    <div className="bg-white flex items-center justify-center min-h-screen px-10 py-24">
      {" "}
      {/* Increased top padding */}
      <div className="text-center w-full max-w-6xl">
        <h1 className="text-6xl font-bold text-[#274760] mb-20">Our Values</h1>{" "}
        {/* Increased bottom margin */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* First Row (3 items) */}
          <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-6 hover:scale-[1.1] hover:shadow-xl hover:cursor-pointer transition duration-300 ">
            <div className="flex items-center justify-center mb-4 gap-3">
              <div className="rounded-full bg-[#DBEAFE] p-2">
                <Heart className="text-4xl text-blue-600" />
              </div>
            </div>
            <h2 className="text-xl font-semibold text-[#274760] mb-2">
              Compassion
            </h2>
            <p className="text-zinc-400">
              We understand that seeking medical care can be a stressful and
              emotional experience, and we strive to create a welcoming and
              supportive environment that puts our patients at ease and every
              one.
            </p>
          </div>

          <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 relative hover:scale-[1.1] hover:shadow-xl hover:cursor-pointer transition duration-300">
            <div className="absolute inset-x-0 top-0 transform -translate-y-1/2 flex items-center justify-center">
              <div className="bg-blue-100 rounded-full p-4">
                <Star className="text-4xl text-blue-600" />
              </div>
            </div>
            <h2 className="text-xl font-semibold text-[#274760] mt-8 mb-2">
              Excellence
            </h2>
            <p className="text-zinc-400">
              We are committed to providing excellent medical care and services
              to our patients. We believe in continuously improving our skills,
              knowledge, and resources to ensure that we deliver the highest
              quality care possible.
            </p>
          </div>

          <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 hover:scale-[1.1] hover:shadow-xl hover:cursor-pointer transition duration-300">
            <div className="flex items-center justify-center mb-4">
              <Scale className="text-4xl text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-[#274760] mb-2">
              Integrity
            </h2>
            <p className="text-zinc-400">
              We believe in practicing medicine with integrity and honesty. We
              are transparent in our communication and decision-making
              processes, and we always put our patient's interests first &
              provide best solution.
            </p>
          </div>
        </div>
        {/* Centered Last Two Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 justify-center">
          <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 hover:scale-[1.1] hover:shadow-xl hover:cursor-pointer transition duration-300">
            <div className="flex items-center justify-center mb-4">
              <Handshake className="text-4xl text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-[#274760] mb-2">
              Respect
            </h2>
            <p className="text-zinc-400">
              We treat all individuals with respect and dignity, regardless of
              their background, beliefs, or circumstances. We believe that every
              person deserves to be treated with compassion and kindness.
            </p>
          </div>

          <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 hover:scale-[1.1] hover:shadow-xl hover:cursor-pointer transition duration-300">
            <div className="flex items-center justify-center mb-4">
              <Users className="text-4xl text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-[#274760] mb-2">
              Teamwork
            </h2>
            <p className="text-zinc-400">
              We believe in working collaboratively with our team membersvand
              other healthcare professionals to provide comprehensive and
              effective care to our patients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
