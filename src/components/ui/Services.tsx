import React from 'react';
import Image from 'next/image';

const services = [
    {
        id: 0,
        serviceTitle: 'Hardware & Robotics Solutions',
        img: '/img/Services/Electracker.jpg',
        description: ['Custom Hardware Design','Robotics Development & Automation','IoT Device Integration','Embedded Systems Engineering'],
    },
    {
        id: 1,
        serviceTitle: 'Software & Digital Solutions',
        img: '/img/Services/Software.jpg',
        description: ['Web & Mobile Application Development','Custom Software Solutions','Game Development','System Integration Services'],
    },
    {
        id: 2,
        serviceTitle: 'Software Development Solutions',
        img: '/img/Services/Robot.JPG',
        description: ['Technical Consulting & Prototyping','Strydo Academy (STEM Workshops)','Product R&D Support','Digital Transformation Consulting'],
    },
    // {
    //     id: 3,
    //     serviceTitle: 'CCTV',
    //     img: '/img/Services/cctv_insulation.jpg',
    //     description: 'CCTV insulation',
    // },
    // {
    //     id: 4,
    //     serviceTitle: 'Solar',
    //     img: '/img/Services/solar_insulation.jpg',
    //     description: 'solar',
    // },
    // {
    //     id: 5,
    //     serviceTitle: '24X7 CCTV Insepection',
    //     img: '/img/Services/cctv_inspection.jpg',
    //     description: '24X7 Remote CCTV insepection service',
    // }
]

const Services = () => {
    return (
        <div className='flex flex-row gap-8 align-center text-center justify-start z-10'>
            {services.map((service, index) => (
                <div className="relative text-center align-center gap-3 justify-center my-3 min-w-[300px] group" key={index}>
                    <Image
                        className="rounded-lg object-cover max-h-[400px] transition-transform duration-300 group-hover:scale-105"
                        src={service.img}
                        alt={service.serviceTitle}
                        width={400}
                        height={300}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 transition-transform duration-300 flex flex-col justify-center items-center rounded-lg group-hover:scale-105">
                        <h3 className="text-xl font-bold text-white">{service.serviceTitle}</h3>
                        {/* <div className="text-md text-white mt-2 mx-6">{service.description}</div> */}
                        {service.description.map((desc, index)=>(
                            <li className='text-md text-white' key={index}>{desc}</li>
                        ))}
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Services;