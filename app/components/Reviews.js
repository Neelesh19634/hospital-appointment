import { Quote, Star, StarHalf } from "lucide-react";
import React from "react";

const Reviews = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Some Reviews</h2>
          <p className="text-xl text-blue-600">OF OUR CLIENTS</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex flex-col items-center md:items-start md:w-1/2 space-y-8">
            <div className="flex items-center space-x-4">
              <img
                src="https://storage.googleapis.com/a1aa/image/nSJirJaYBomAJbyjAUZuqV_m4FMCyw1Sk3ghIe27llw.jpg"
                alt="Portrait of Paulo Hubert"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">PAULO HUBERT</h3>
                <p className="text-gray-500">New York, USA</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-white shadow-lg rounded-lg p-4">
              <img
                src="https://storage.googleapis.com/a1aa/image/jyRLHKO9O1OOAqH_yzkG3khhQGGKBVgXjyJ2rJZ8GYs.jpg"
                alt="Portrait of Laurence Vendetta"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">LAURENCE VENDETTA</h3>
                <p className="text-gray-500">California, USA</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="https://storage.googleapis.com/a1aa/image/nZcUDaGP5FiabOkEQ7MmJxR3w0hfOwe5Rl4eCXNamtc.jpg"
                alt="Portrait of Cassandra Raul"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">CASSANDRA RAUL</h3>
                <p className="text-gray-500">Florida</p>
              </div>
            </div>
          </div>
          <div className="relative md:w-1/2 mt-8 md:mt-0 md:ml-[-10%] flex ">
            <div className="relative w-1 bg-blue-500 h-96 flex flex-col items-center">
              {/* Large Circle (Top) */}
              <div className="absolute top-0 -translate-y-1/2 w-6 h-6 bg-blue-500 rounded-full"></div>
              {/* Middle Circle */}
              <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
              {/* Small Circle (Bottom) */}
              <div className="absolute bottom-0 translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
            </div>

            <div className="ml-8 pl-8 flex flex-col justify-center">
              <div className="text-blue-600 text-4xl mb-4">
                <Quote fill="#307BC4"/>
              </div>
              <p className="text-gray-500 mb-4">
                The pediatrician was great with him and made him feel at ease,
                and the entire staff was kind and attentive. I recently had to
                bring my child to ProHealth for a minor injury, and I was so
                impressed with the care he received.
              </p>
              <div className="text-blue-600 flex">
                <Star fill="#307BC4" />
                <Star fill="#307BC4" />
                <Star fill="#307BC4" />
                <Star fill="#307BC4" />
                <StarHalf fill="#307BC4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
