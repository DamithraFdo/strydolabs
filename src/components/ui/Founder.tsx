import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from './card'

const Founder = () => {
    const founders = [
        {
            id: 0,
            name: 'Damithra Fernandp',
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
        {
            id: 2,
            name: 'John Doe',
            img: '/img/Jovahir.jpeg',
            position: 'Mobile Developer',
            link: '/',
        }
    ]
    return (

        <div className='flex flex-col overflow-x-scroll gap-10 text-center items-center justify-center p-4 '>
            {founders.map((founder) => (
                <Link href={founder.link} key={founder.id}>
                    <Card className="p-4 w-full max-w-[300px] hover:scale-105">
                        <CardContent className="flex justify-center items-center">
                            <Image
                                className="rounded-lg"
                                src={founder.img}
                                width={200}
                                height={200}
                                alt={founder.name}
                            />
                            <a className="text-black text-xl">{founder.name}</a>
                            <a>{founder.position}</a>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>



    )
}
export default Founder