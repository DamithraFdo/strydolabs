import React from 'react';
import Image from 'next/image';

const services = [
    {
        id: 0,
        serviceTitle: 'IoT Solutions',
        img: '/img/Electracker.jpg',
        description: 'Our IoT solutions enable businesses to automate their processes, improve efficiency, and enhance customer experiences.',
    },
    {
        id: 1,
        serviceTitle: 'Robotics & AI Solutions',
        img: '/img/Robot.JPG',
        description: 'Our Robotics & AI solutions enable businesses to automate their processes, improve efficiency, and enhance customer experiences.',
    },
    {
        id: 2,
        serviceTitle: 'Software Development Solutions',
        img: '/img/Software.jpg',
        description: 'Our AI solutions enable businesses to automate their processes, improve efficiency, and enhance customer experiences.',
    }
]

const Services = () => {
    return (
        <div className='flex flex-row gap-8 align-center text-center justify-center'>
            {services.map((service, index) => (
                <div className="relative text-center align-center gap-3 justify-center my-3 max-w-sm group" key={index}>
                    {/* Image Section */}
                    <Image
                        className="rounded-lg object-cover max-h-[400px] group-hover:scale-105 transition-transform duration-300"
                        src={service.img}
                        alt={service.serviceTitle}
                        width={400}
                        height={300}
                    />

                    {/* Overlay Text */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center scale-105 rounded-lg">
                        <h3 className="text-xl font-bold text-white">{service.serviceTitle}</h3>
                        <p className="text-md text-white mt-2 mx-6">{service.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Services;