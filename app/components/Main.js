"use client"
import { PlayCircle } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import { FaPlayCircle } from 'react-icons/fa';
const Main = () => {
  return (
    <main className=" flex flex-col items-center text-center px-4 py-8 md:flex-row md:text-left md:justify-between md:items-center md:px-8 md:py-16 lg:px-12 lg:py-20 mt-10">
  {/* Left Content */}
  <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
    <h1 className="text-3xl md:text-6xl lg:text-5xl font-bold text-[#274760] leading-tight md:leading-snug">
      Your Partner in Health and Wellness
    </h1>
    <p className="text-[#274760] text-sm md:text-xl">
      We are committed to providing you with the best medical and healthcare services to help you live healthier and happier.
    </p>
    <div className="flex items-center space-x-2">
      <PlayCircle className="text-xl md:text-4xl text-[#274760] hover:cursor-pointer transition hover:scale-125" />
      <span className="text-gray-700 text-sm md:text-base">See how we work</span>
    </div>
  </div>

  {/* Right Image Section */}
  <div className="w-full md:w-1/2 flex justify-center items-center relative mt-8 md:mt-0 mr-16">
    {/* Female Doctor Image */}
    <div className="relative w-44 h-60 md:w-52 md:h-72 lg:w-60 lg:h-80 ">
      <Image
        src="https://storage.googleapis.com/a1aa/image/VlSZ6sFtAFkgRPUnp8PrbH4mFIlAwjnZvENjiv3DHMU.jpg"
        alt="Female doctor smiling"
        layout="fill"
        objectFit="cover"
        className="rounded-lg shadow-lg"
      />
    </div>

    {/* Male Doctor Image - Adjusted Position */}
    <div className="absolute right-4 bottom-4 w-40 h-56 md:w-48 md:h-64 lg:w-56 lg:h-72">
      <Image
        src="https://storage.googleapis.com/a1aa/image/s6xr8fmpqvENwh_UVRS_qfpnsGqGBU95RsBxylFT61E.jpg"
        alt="Male doctor smiling"
        layout="fill"
        objectFit="cover"
        className="rounded-lg shadow-lg md:mt-32 md:m"
      />
    </div>

    {/* Patient Recover Stats */}
    <div className='absolute bottom-6 md:right-[60%] flex items-center space-x-2 bg-white rounded-lg p-4 shadow-lg'>
      <Image src="https://storage.googleapis.com/a1aa/image/csVcd1Na9VBKhT64FnvanPXrETsZPQPegIahlb6Y6gI.jpg" alt="Patient 1" width={32} height={32} className="w-10 h-10 rounded-full" />
      <Image src="https://storage.googleapis.com/a1aa/image/uOIVOgFTI-kQd5DtsmBTB5EWvic8j5LOVL0s5DoSd_4.jpg" alt="Patient 2" width={32} height={32} className="w-10 h-10 rounded-full" />
      <Image src="https://storage.googleapis.com/a1aa/image/BKIjy8stgFV_ojEJbFSAzpR0T3pClL7UE5S1ZIIzwGs.jpg" alt="Patient 3" width={32} height={32} className="w-10 h-10 rounded-full" />
      <div className="text-left">
        <span className="block text-gray-800 font-bold text-sm md:text-base">150K+</span>
        <span className="block text-gray-600 text-xs md:text-sm">Patient Recover</span>
      </div>
    </div>

    {/* Doctor Count Stats */}
    <div className="absolute top-16 right-8 bg-white p-3  rounded-lg shadow-md text-center w-24 md:w-20 md:py-4  ">
      <Image src="https://storage.googleapis.com/a1aa/image/lStIcRIsbu_JgU8O6puRhan9X6qgWLcYrIMmP9CH838.jpg" alt="Doctor icon" width={32} height={32} className="w-8 h-8 rounded-full mx-auto" />
      <span className="block text-gray-800 font-bold text-sm md:text-base">870+</span>
      <span className="block text-gray-600 text-xs md:text-sm">Doctors</span>
    </div>
  </div>
</main>

  )
}

export default Main
