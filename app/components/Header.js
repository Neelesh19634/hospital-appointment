"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";

import { Menu } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const Header = () => {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-blue-50">
      <Head>
        <title>Phantom</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="flex justify-between items-center p-6 bg-transparent">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="ProHealth logo" width={40} height={40} />
          <span className="text-xl font-bold text-gray-800">Phantom</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 text-gray-700 mr-14 items-center">
          <a className="hover:text-gray-900" href="/">
            Home
          </a>
          <a className="hover:text-gray-900" href="/Contact">
            Contact
          </a>
          <a className="hover:text-gray-900" href="/AllAppointment">
            MyAppointment
          </a>

          <SignInButton>
            <UserButton />
          </SignInButton>

          <SignedOut>
            <SignInButton>
              <Button>Login</Button>
            </SignInButton>
          </SignedOut>
        </nav>

        {/* Mobile Menu */}
        <div
          className="md:hidden flex items-center gap-3 relative"
          ref={menuRef}
        >
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu className="text-gray-700 w-6 h-6 cursor-pointer" />
          </button>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute right-0 top-12 w-48 bg-white shadow-md rounded-lg py-2"
            >
              <a
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                href="/"
              >
                Home
              </a>
              <a
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                href="/Contact"
              >
                Contact
              </a>
              <a
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                href="/AllAppointment"
              >
                MyAppointment
              </a>

              <div className="border-t border-gray-200 my-2"></div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3">
              <SignInButton>
                <UserButton /> 
              </SignInButton>
              {user?.fullName}
              </div>

              <SignedOut>
                <SignInButton>
                  <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Button className="w-full">Login</Button>
                  </div>
                </SignInButton>
              </SignedOut>
            </motion.div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
