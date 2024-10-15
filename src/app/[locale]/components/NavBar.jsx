"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';
import {useTranslations} from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher'


const navLinks = [
    {
      title: "À propos de nous",
      path: "#about",
    },
    {
      title: "Services",
      path: "#services",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];


const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const t = useTranslations('Index');

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
        <div className="flex flex-wrap items-center justify-between mx-auto p-8">
            <Link href={"/"} className='text-2xl md:text-5xl text-black font-semibold'>
                <Image 
                    src= "/images/[removal.ai]_0d93b1ac-7ec9-474b-bd8f-be0378c817e9-logo_formed.png"
                    width={150}
                    height={50}
                />
            </Link>
            <div className="mobile-menu block md:hidden">
              {!navbarOpen ? (
                <button
                  onClick={() => setNavbarOpen(true)}
                  className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                >
                  <Bars3Icon className="h-5 w-5" />
                </button>
              ) : (
                <button
                  onClick={() => setNavbarOpen(false)}
                  className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              )}
            </div>
            <LanguageSwitcher ></LanguageSwitcher>
            <div className="menu hidden md:block md:w-auto" id ="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={t(link.title)} />
                            </li>
                        ))}
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default NavBar