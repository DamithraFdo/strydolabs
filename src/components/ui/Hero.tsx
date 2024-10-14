import Link from 'next/link'
import React from 'react'
import { Button } from './button'

type Props = {}

function Hero({ }: Props) {
    return (
        <section id="hero" className="hero-section mt-[60px]">
            <div className="flex flex-col bg-slate-400 gap-3 text-center align-middle ">
                <h2 className="">Innovating Future Technology</h2>
                <p className="">Empowering your ideas with cutting-edge IoT, robotics, and tech solutions.</p>
                <Link href={'/contact'}>
                    <Button className='' type='submit'>Get Started</Button>
                </Link>
            </div>
        </section>
    )
}

export default Hero