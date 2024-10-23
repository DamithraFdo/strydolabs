import React from 'react';
import Image from 'next/image';

const services = [
    {
        id: 0,
        serviceTitle: 'IoT Solutions',
        img: '/img/Services/Electracker.jpg',
        description: 'Our IoT solutions enable businesses to automate their processes, improve efficiency, and enhance customer experiences.',
    },
    {
        id: 1,
        serviceTitle: 'Robotics & AI Solutions',
        img: '/img/Services/Robot.JPG',
        description: 'Our Robotics & AI solutions enable businesses to automate their processes, improve efficiency, and enhance customer experiences.',
    },
    {
        id: 2,
        serviceTitle: 'Software Development Solutions',
        img: '/img/Services/Software.jpg',
        description: 'Our AI solutions enable businesses to automate their processes, improve efficiency, and enhance customer experiences.',
    },
    {
        id: 3,
        serviceTitle: 'CCTV',
        img: '/img/Services/cctv_insulation.jpg',
        description: 'CCTV insulation',
    },
    {
        id: 4,
        serviceTitle: 'Solar',
        img: '/img/Services/solar_insulation.jpg',
        description: 'solar',
    },
    {
        id: 5,
        serviceTitle: '24X7 CCTV Insepection',
        img: '/img/Services/cctv_inspection.jpg',
        description: '24X7 Remote CCTV insepection service',
    }
]

const Services = () => {
    return (
        <div className='flex flex-row gap-8 align-center text-center md:justify-center justify-start overflow-x-auto scrollbar-hide'>
            {services.map((service, index) => (
                <div className="relative text-center align-center gap-3 justify-center my-3 min-w-[300px] group" key={index}>
                    <Image
                        className="rounded-lg object-cover max-h-[400px] group-hover:scale-105 transition-transform duration-300"
                        src={service.img}
                        alt={service.serviceTitle}
                        width={400}
                        height={300}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center scale-105 rounded-lg">
                        <h3 className="text-xl font-bold text-white">{service.serviceTitle}</h3>
                        <div className="text-md text-white mt-2 mx-6">{service.description}</div>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Services;