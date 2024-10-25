'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const testimonials = [
    {
        name: 'Undergraduate Research Symposium',
        title: 'Research Symposium',
        quote: `Best Research Award, 2024`,
        image: `/img/research_symposium_2024.JPG`,
    },
    {
        name: 'Sri Lanka IoT Challenge',
        title: 'SLIoT Challenge 2022',
        quote: `2nd Runner Up, 2022`,
        image: `/img/sliot_challange_2022.jpg`,
    },
    {
        name: 'Future Innovators Challenge',
        title: 'FINNC 2022',
        quote: `2nd Runner Up, 2022`,
        image: `/img/finnc_2023.jpg`,
    },
    {
        name: 'Apicta Nominee',
        title: 'APICTA 2019',
        quote: `The Asia Pacific ICT Alliance Awards Nominee`,
        image: `/img/apicta_awards_2019.JPG`,
    }
];

const AchievementSlider = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="relative w-full py-4 p-6 rounded-lg">
            <div className="overflow-hidden">
                <div
                    className="flex flex-row gap-3 transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${current * (100 / (typeof window !== 'undefined' && window.innerWidth >= 640 ? 2 : 1))}%)`
                    }}
                >

                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="w-full sm:w-1/2 flex-shrink-0">
                            <div className="hover:shadow-2xl transition-shadow duration-300 rounded-lg">
                                <div className="relative text-center align-center gap-3 justify-start my-3 min-w-[300px] group item flex">
                                    <Image
                                        className="rounded-lg object-cover max-h-[400px] transition-transform duration-300"
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={600}
                                        height={400}
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center rounded-lg">
                                        <h3 className="text-xl font-bold text-white">{testimonial.title}</h3>
                                        <div className="text-md text-white mt-2 mx-6 max-w-[500px]">{testimonial.quote}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-row items-center gap-8 justify-center space-x-2 mt-4">
                <button
                    className="p-2 bg-gray-500 hover:bg-gray-600 text-white rounded-full transition-colors duration-300"
                    onClick={prevSlide}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 w-2 rounded-full ${current === index ? 'bg-gray-600' : 'bg-gray-300'} transition-all duration-300`}
                        onClick={() => setCurrent(index)}
                    />
                ))}


                <button
                    className="p-2 bg-gray-500 hover:bg-gray-600 text-white rounded-full transition-colors duration-300"
                    onClick={nextSlide}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default AchievementSlider;
