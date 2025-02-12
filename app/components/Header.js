"use client"
import { Menu, PlayCircle } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image'
import React from 'react'

// import '@fortawesome/fontawesome-free/css/all.min.css';
const Header = () => {
  return (

    <div className="bg-blue-50 ">
    <Head>
      <title>ProHealth</title>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
    </Head>

    <header className="flex justify-between items-center p-6 bg-transparent">
      <div className="flex items-center space-x-2">
        <Image src="https://storage.googleapis.com/a1aa/image/Wvv-lPTfjBP-stOGyOslfVYYVOXGfN00pSatzkFOhHI.jpg" alt="ProHealth logo" width={40} height={40} />
        <span className="text-xl font-bold text-gray-800">ProHealth</span>
      </div>
      <nav className="hidden md:flex space-x-10 text-gray-700 mr-14">
        <a className="hover:text-gray-900" href="#">Home</a>
        <a className="hover:text-gray-900" href="#">About</a>
        <a className="hover:text-gray-900" href="#">Find Doctor</a>
        <a className="hover:text-gray-900" href="#">Blog</a>
        <div className="relative group">
          <a className="hover:text-gray-900" href="#">Pages</a>
          <div className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2">
            <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">Page 1</a>
            <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">Page 2</a>
          </div>
        </div>
        <a className="hover:text-gray-900" href="#">Contact</a>
      </nav>
      <div className="md:hidden">
        <Menu className="text-gray-700" />
      </div>
    </header>

    

  </div>
   
  )
}

export default Header
