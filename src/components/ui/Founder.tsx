import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription } from './card'

const Founder = () => {
    const founders = [
        {
            id: 0,
            name: 'Damithra Fernando',
            img: '/img/Damithra.jpeg',
            position: 'Founder & CEO',
            link: '/',
        },
        {
            id: 1,
            name: 'Anjar Tiyo',
            img: '/img/Anjar.jpeg',
            position: 'Co-Founder & CTO',
            link: '/',
        },
        // {
        //     id: 2,
        //     name: 'John Doe',
        //     img: '/img/Jovahir.jpeg',
        //     position: 'Mobile Developer',
        //     link: '/',
        // }
        {
            id: 3,
            name: 'TBA',
            img: '/img/dummy.jpeg',
            position: 'COO',
            link: '/',
        },
    ]
    return (
        <div className='flex flex-row overflow-x-scroll gap-10 text-center items-center justify-center p-4 '>
            {founders.map((founder) => (
                <Link href={founder.link} key={founder.id}>
                    <Card className="min-w-[300px] p-4">
                        <CardContent className="flex flex-col justify-center align-middle items-center">
                            <Image
                                className="hover:scale-105 rounded-lg mt-5"
                                src={founder.img}
                                width={200}
                                height={200}
                                alt={founder.name}
                            />
                            <CardDescription className="flex flex-col items-center mt-4">
                                <a className="text-black text-xl">{founder.name}</a>
                                <a className="text-gray-400">{founder.position}</a>
                            </CardDescription>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
    )
}
export default Founder