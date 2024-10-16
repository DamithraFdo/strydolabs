'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const testimonials = [
    {
      name: 'Ruwan Gunasekara',
      role: 'Event Organizer',
      quote: `"Strydo Labs handled the projection mapping at our event entrance, and it was simply breathtaking. The attention to detail and creativity was beyond what we expected. I’ll definitely work with them again for future events!"`,
      image: `/img/dummy.jpeg`,
    },
    {
      name: 'Anjalika De Mel',
      role: 'Homeowner',
      quote: `"I hired Strydo Labs to automate my garden sprinklers, and it has been life-changing! Now, the garden is watered automatically at the perfect times, and I don’t have to worry about anything. Their automation solutions are brilliant!"`,
      image: `/img/dummy.jpeg`,
    },
    {
      name: 'Yasith Sirisena',
      role: 'CEO at Prodigi Interactive',
      quote: `"We consulted with Strydo Labs for the interactive wall project at Prodigi Interactive. Their insights and technical expertise were top-notch, and they helped bring our vision to life in the most efficient way possible. Highly recommend them for any tech-related consultancy!"`,
      image: `/img/dummy.jpeg`,
    },
    {
      name: 'Ishara Senanayake',
      role: 'Small Business Owner',
      quote: `"Strydo Labs helped me automate my shop’s lighting system. Now, I don’t need to worry about manually controlling the lights, as everything is timed perfectly. This has significantly reduced my energy costs. Highly recommend their automation services!"`,
      image: `/img/dummy.jpeg`,
    },
    {
      name: 'Ravindu Jayasekara',
      role: 'Final Year Student at SLIIT',
      quote: `"I consulted with Strydo Labs for my final year project on water quality measuring for fish tanks. Their expertise and guidance were invaluable. They helped me design a system that monitors pH levels, temperature, and oxygen levels with high accuracy."`,
      image: `/img/dummy.jpeg`,
    },
    {
      name: 'Eranda Hashan',
      role: 'SLIIT Undergraduate',
      quote: `"Strydo Labs helped me develop a PIR sensor-based security system for my project. They provided me with the right technical insights and even helped me with troubleshooting. The system worked flawlessly, and I got excellent feedback from my professors!"`,
      image: `/img/dummy.jpeg`,
    },
    {
        name: 'Gayan Silva',
        role: 'Event Coordinator for Idealize Event',
        quote: `"StrydoPrint provided printing services for one of our biggest event. The quality of the prints was fantastic, and their delivery was on time. Definitely a reliable partner for any event printing needs."`,
        image: `/img/dummy.jpeg`,
    },
    {
      name: 'Mahesh Wijeratne',
      role: 'Tech Enthusiast',
      quote: `"I reached out to Strydo Labs for a simple software project, and they were quick, professional, and delivered a great tool that fit my needs perfectly. Their communication throughout the process was excellent."`,
      image: `/img/dummy.jpeg`,
    },
    {
      name: 'Kamal Wijesinghe',
      role: 'Factory Owner',
      quote: `"We hired Strydo Labs for a complete CCTV setup at our factory, and they were fantastic. The installation was quick and smooth, and the team was very knowledgeable. Now, our security system is top-notch thanks to them!"`,
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