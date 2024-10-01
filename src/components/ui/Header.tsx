import Link from 'next/link'
import React from 'react'

import { Button } from './button';
import Image from 'next/image';

type Props = {}

function Header({ }: Props) {
    return (
        <>
            <div className="w-full h-[15vh] p-4 absolute top-0 mix-blend-difference" id='navbar'>
                <div className="container flex flex-row justify-between align-middle items-center">
                    <Link href={'/'}>
                        <Image src="/img/strydo-logo.svg" alt="Strydo Labs Logo" width={75} height={75} />
                    </Link>
                    <ul className="nav-links flex flex-row gap-4 text-white font-bold">
                        <Link className="" href="/">
                            <Button variant={'ghost'} className='hover:bg-white text-md font-bold'>
                                Home
                            </Button>
                        </Link>
                        <Link className="" href="/about">
                            <Button variant={'ghost'} className='hover:bg-white text-md font-bold'>
                                About Us
                            </Button>
                        </Link>
                        <Link className="" href="/about">
                            <Button variant={'ghost'} className='hover:bg-white text-md font-bold'>
                                Services
                            </Button>
                        </Link>
                        <Link className="" href="/about">
                            <Button variant={'ghost'} className='hover:bg-white text-md font-bold'>
                                Projects
                            </Button>
                        </Link>
                        <Link className="" href="/about">
                            <Button variant={'ghost'} className='hover:bg-white text-md font-bold'>
                                Teams
                            </Button>
                        </Link>
                        <Link className="" href="/about">
                            <Button variant={'ghost'} className='hover:bg-white text-md font-bold'>
                                Contact
                            </Button>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;