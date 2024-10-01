import Link from 'next/link'
import React from 'react'

type Props = {}

function Header({ }: Props) {
    return (
        <>
            <nav className="w-full h-[15%] my-4 p-4" id='navbar'>
                <div className="container flex flex-row justify-between">
                    <h1 className="animated-title">Strydo Labs</h1>
                    <ul className="nav-links flex flex-row gap-4">
                        <Link className="" href="/">Home</Link>
                        <Link href="/about">About Us</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/projects">Projects</Link>
                        <Link href="/team">Team</Link>
                        <Link href="/contact">Contact</Link>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header;