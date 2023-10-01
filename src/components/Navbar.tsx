"use client";

import Image from "next/image";
import React from "react";
import logo from "../../public/images/profile.jpg";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="fixed top-0 w-full h-12 shadow-xl bg-slate-400">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-10">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={48}
            height={48}
            className="cursor-pointer rounded-full"
            priority
          />
        </Link>
        <div>
          <ul className="hidden sm:flex gap-4">
            <Link href="/projects">
              <li className="text-xl uppercase hover:border-b">Projects</li>
            </Link>
            <Link href="/projects">
              <li className="text-xl uppercase hover:border-b">Resume</li>
            </Link>
            <Link href="/projects">
              <li className="text-xl uppercase hover:border-b">Contact me</li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer ">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div className={
        menuOpen? "fixed left-0 top-0 w-[65%] sm:hidden h-screen p-5 ease-in duration-500 bg-slate-500":
        "fixed left-[-100%] top-0 sm:hidden h-screen p-10 ease-in duration-500"
      }>
        <div className="flex w-full justify-end">
            <div onClick={handleNav} className="cursor-pointer">
                <AiOutlineClose size={25} />
            </div>
        </div>
        <div className="py-4">
          <ul>
            <Link href="/projects">
              <li onClick={handleNav} className="text-xl uppercase py-4">Projects</li>
            </Link>
            <Link href="/projects">
              <li onClick={handleNav} className="text-xl uppercase py-4">Resume</li>
            </Link>
            <Link href="/projects">
              <li onClick={handleNav} className="text-xl uppercase py-4">Contact me</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
