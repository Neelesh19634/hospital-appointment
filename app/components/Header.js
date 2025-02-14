"use client";
import { Button } from "@/components/ui/button";
import {
  SignedOut,
  SignIn,
  SignInButton,
  SignUp,
  UserButton,
  useUser,
} from "@clerk/nextjs";

import { Menu, PlayCircle } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import React from "react";

// import '@fortawesome/fontawesome-free/css/all.min.css';
const Header = () => {
  const { user } = useUser();

  return (
    <div className="bg-blue-50 ">
      <Head>
        <title>ProHealth</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="flex justify-between items-center p-6 bg-transparent">
        <div className="flex items-center space-x-2">
          <Image
            src="https://storage.googleapis.com/a1aa/image/Wvv-lPTfjBP-stOGyOslfVYYVOXGfN00pSatzkFOhHI.jpg"
            alt="ProHealth logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold text-gray-800">ProHealth</span>
        </div>
        <nav className="hidden md:flex space-x-10 text-gray-700 mr-14 items-center">
          <a className="hover:text-gray-900" href="/">
            Home
          </a>
          <a className="hover:text-gray-900" href="#">
            About
          </a>
          <a className="hover:text-gray-900" href="/Contact">
            Contact
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
        <div className="md:hidden">
          <Menu className="text-gray-700" />
        </div>
      </header>
    </div>
  );
};

export default Header;
