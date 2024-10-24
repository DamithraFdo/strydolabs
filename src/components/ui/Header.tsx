'use client'
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "/",
            navName: "home",
        },
        {
            id: 2,
            link: "/#about",
            navName: "about",
        },
        {
            id: 3,
            link: "/#services",
            navName: "services",
        },
        {
            id: 4,
            link: "/#team",
            navName: "teams",
        },
        {
            id: 5,
            link: "/#testimonials",
            navName: "experience",
        },
        {
            id: 6,
            link: "/#contact",
            navName: "contact",
        },
    ];

    return (
        <div className={`flex justify-between items-center w-full h-20 text-white fixed pr-4 nav ${nav ? "bg-black" : "bg-transparent mix-blend-difference"}`}>
            <div className="hidden md:block">
                <h1 className="text-5xl font-signature ml-2">
                    <Link href={'/'}>
                        <Image src={'/img/strydo-logo.svg'} width={150} height={100} alt="Strydo Logo" />
                    </Link>
                </h1>
            </div>

            <div className="md:hidden">
                <h1 className="text-5xl font-signature ml-2 font-bold">
                    <Link href={'/'}>
                        <Image src={'/img/Strydolabs PNG White-01.svg'} width={70} height={70} alt="Strydo Logo" />
                    </Link>
                </h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link, navName }) => (
                    <li
                        key={id}
                        className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-105 hover:text-white duration-200 link-underline"
                    >
                        <Link href={link}>{navName}</Link>
                    </li>
                ))}
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-white md:hidden"
            >
                {nav ? <X size={30} /> : <Menu size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black text-white">
                    {links.map(({ id, link, navName }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                        >
                            <Link onClick={() => setNav(!nav)} href={link}>
                                {navName}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;
