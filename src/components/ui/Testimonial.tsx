'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const testimonials = [
    {
      name: 'Kavinda Perera',
      role: 'Robotics Engineer, MAS Holdings',
      quote: `Working with Strydo Labs has been an exceptional experience. Their robotics solutions have revolutionized our production lines, bringing unparalleled efficiency and automation.`,
      image: `/img/dummy.jpeg`,
    },
    {
      name: 'Amaya De Silva',
      role: 'Lead IoT Developer, Dialog Axiata',
      quote: `Strydo Labs' IoT integration helped us enhance our smart home devices with cutting-edge features, making our products more competitive in the market.`,
      image: `/img/dummy.jpeg`,
    },
    {
      name: 'Tharindu Jayasinghe',
      role: 'Hardware Architect, John Keells Holdings',
      quote: `The expertise of Strydo Labs in hardware development has been crucial in creating scalable and robust solutions for our company. Their innovation is unmatched.`,
      image: `/img/dummy.jpeg`,
    },
    {
      name: 'Dinusha Fernando',
      role: 'Automation Specialist, Hayleys PLC',
      quote: `Strydo Labs’ robotic systems have transformed our factory floor operations. Their attention to detail and customization capabilities are simply top-notch.`,
      image: `/img/dummy.jpeg`,
    },
    {
      name: 'Nimasha Weerasinghe',
      role: 'Software Engineer, Brandix',
      quote: `Collaborating with Strydo Labs has significantly boosted our IoT capabilities. Their advanced solutions have enabled us to offer seamless connectivity and automation to our customers.`,
      image: `/img/dummy.jpeg`,
    },
    {
      name: 'Ashan Wickramasinghe',
      role: 'AI Researcher, WSO2',
      quote: `Strydo Labs' blend of AI and robotics technology has allowed us to venture into new realms of innovation. Their dedication to pushing the boundaries is truly inspiring.`,
      image: `/img/dummy.jpeg`,
    },
    {
      name: 'Dilini Jayawardena',
      role: 'Product Manager, HNB',
      quote: `Thanks to Strydo Labs, we’ve implemented IoT-driven solutions that have modernized our financial services. They helped us bridge the gap between traditional systems and cutting-edge technology.`,
      image: `/img/dummy.jpeg`,
    },
    {
      name: 'Kasun Rathnayake',
      role: 'Operations Director, Ceylon Biscuits Limited',
      quote: `Strydo Labs played a pivotal role in automating our production with their advanced robotics systems. The efficiency and precision we've achieved are phenomenal.`,
      image: `/img/dummy.jpeg`,
    }
  ];
  

const TestimonialSlider = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials
            .length);
    };

    return (
        <div className="relative w-full max-w-4xl
                    mx-auto py-4 p-6 rounded-lg
                    ">
            <div className="overflow-hidden">
                <div className="flex transition-transform 
                        duration-700 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="flex-shrink-0 w-full p-8">
                            <div className="bg-white
                              shadow-lg rounded-lg 
                              hover:shadow-2xl transition-shadow
                              duration-300 p-6">
                                <div className="flex justify-center mb-4">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={80}
                                        height={80}
                                        className="w-20 h-20 rounded-full"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold 
                               text-center text-gray-800">{testimonial.name}
                                </h3>
                                <p className="text-center text-sm
                              font-semibold text-gray-500">
                                    <span className="text-gray-600">{testimonial.role}

                                    </span>
                                </p>
                                <div className="mt-4 text-gray-600 
                                text-center italic">
                                    <p className="max-w-xs
                                mx-auto">{testimonial.quote}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots for navigation */}
            <div className="flex justify-center space-x-2 mt-4">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 w-2 
                        rounded-full ${current === index ? 'bg-gray-600' :
                                'bg-gray-300'} transition-all duration-300`}
                        onClick={() => setCurrent(index)}
                    />
                ))}
            </div>

            {/* Previous button */}
            <div className="absolute top-1/2 
                      left-0 transform -translate-y-1/2">
                <button
                    className="p-2 bg-gray-500
                     hover:bg-gray-600 
                     text-white rounded-full
                     transition-colors duration-300"
                    onClick={prevSlide}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            </div>

            {/* Next button */}
            <div className="absolute top-1/2 
                      right-0 transform -translate-y-1/2">
                <button
                    className="p-2 bg-gray-500
                     hover:bg-gray-600
                     text-white rounded-full 
                     transition-colors duration-300"
                    onClick={nextSlide}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default TestimonialSlider;