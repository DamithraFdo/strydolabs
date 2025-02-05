import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from './card'

const Founder = () => {
    const founders = [
        {
            id: 0,
            name: 'Damithra Fernando',
            img: '/img/damithranew.jpeg',
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
            name: 'Tharuka',
            img: '/img/Tharuka.png',
            position: 'COO',
            link: '/',
        },
    ]
    return (
        <div className='flex flex-row gap-8 align-center text-center md:justify-start justify-center'>
            {founders.map((founder) => (
                <Link href={founder.link} key={founder.id}>
                    <Card className="min-w-[300px] p-4">
                        <CardContent className="flex flex-col justify-center items-center">
                            <Image
                                className="hover:scale-105 rounded-lg mt-5"
                                src={founder.img}
                                width={200}
                                height={200}
                                alt={founder.name}
                            />
                                <div className="text-black text-xl mt-4">{founder.name}</div>
                                <div className="text-gray-400">{founder.position}</div>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
    )
}
export default Founder
