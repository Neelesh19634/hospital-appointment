import { Award } from "lucide-react";
import Head from "next/head";
import React from "react";

const Achievements = () => {
  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-auto py-16">
      <Head>
        <title>Awards</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* Title Section */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-10 tracking-wide">
          Our <span className="text-blue-600">Achievements</span>
        </h1>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Malcolm Baldrige National Quality Award",
              description:
                "Recognizes excellence in leadership, strategic planning, customer and employee satisfaction, and operational efficiency.",
            },
            {
              title: "HIMSS Davies Award",
              description:
                "Awarded to healthcare organizations that have used health IT to improve patient outcomes and reduce costs.",
            },
            {
              title: "Healthgrades National’s Best Hospital",
              description:
                "Recognized hospitals with high ratings for clinical quality and patient safety across multiple specialties.",
            },
            {
              title: "Joint Commission Gold Seal of Approval",
              description:
                "Given to hospitals that have met rigorous standards for patient safety and quality of care.",
            },
          ].map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 transition duration-300 hover:shadow-lg hover:scale-[1.05] hover:cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <Award className="text-white text-3xl" />
                </div>
                <h3 className="ml-4 text-lg font-semibold text-gray-900">
                  {award.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
