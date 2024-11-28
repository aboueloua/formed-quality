"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import LanguageSwitcher from "./LanguageSwitcher";
import {useTranslations} from 'next-intl';

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
            <div className="flex items-center justify-between relative mx-auto p-8">
                {/* Logo */}
                <Link href={"/"} className="text-2xl md:text-5xl font-semibold">
                    <Image
                        src="/images/[removal.ai]_0d93b1ac-7ec9-474b-bd8f-be0378c817e9-logo_formed.png"
                        width={150}
                        height={50}
                        alt="Logo"
                    />
                </Link>

                {/* Centered Language Switcher */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <LanguageSwitcher />
                </div>

                {/* Hamburger Menu */}
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

                {/* Desktop Navigation */}
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={t(link.title)} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};

export default NavBar;