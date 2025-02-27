import AchievementSlider from "@/components/ui/Achievements";
import ContactUs from "@/components/ui/ContactUs";
import Founder from "@/components/ui/Founder";
import Services from "@/components/ui/Services";
import SnowEffect from "@/components/ui/Snowflake";
import TestimonialSlider from "@/components/ui/Testimonial";
import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
      <SnowEffect />
      <section className="flex flex-col">
        <video
          muted
          loop
          autoPlay
          className="fixed top-0 left-0 w-full h-full -z-50 object-cover bg-black"
        >
          <source src='/img/bg-robo.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <section id="hero" className="snap-always snap-center">
          <div className="flex flex-col h-screen w-screen gap-3 text-center align-middle justify-center p-4 bg-black bg-opacity-80">
            <div className="my-[30px] sm:my-[60px]">
              <h2 className="text-white">Innovating Future Technology</h2>
              <p className="text-[16px] sm:text-[18px] mt-8 text-white">Empowering your ideas with cutting-edge IoT, robotics, and tech solutions.</p>
              <Link href={'/#about'}>
                <Button className='mt-6 sm:mt-10 bg-transparent text-white font-bold w-36 sm:w-48 h-12 sm:h-16 text-md sm:text-lg' variant={'outline'}>Get Started</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="snap-always snap-center hover:gap-4 bg-white bg-opacity-90 justify-between">
          <div className="flex flex-col text-center align-middle h-screen justify-center p-4" id="about-paragraph">
            <h2>About <br /> Strydo Labs</h2>
            <div className="flex flex-col gap-3 text-[18px] w-5/6 mx-auto text-justify overflow-x-auto scrollbar-hide mt-4">
              <p>
                At Strydo Labs, we are passionate innovators specializing in the development of cutting-edge robotics, advanced hardware, and integrated software solutions. Our mission is to push the boundaries by blending the physical and digital worlds.
              </p>
              <p>
                In addition to hardware and robotics, we offer expert services in software development and game design, creating engaging digital experiences for businesses and consumers alike.
              </p>
              <p className="font-bold">
                At Strydo Labs, we are not just developing products—we are building the future.
              </p>
            </div>
            <Link className="mt-5" href={'/about'}>
              <Button className="text-white font-bold w-36 sm:w-48 h-12 sm:h-16 text-md sm:text-lg">Learn More</Button>
            </Link>
          </div>
        </section>

        {/* <!-- Services Section --> */}
        <section id="services" className="snap-always snap-center">
          <div className="flex flex-col text-center align-middle h-screen justify-center bg-black bg-opacity-80 p-4 overflow-scroll scroll-smooth scroll-hidden snap-x">
            <h2 className="text-white mb-8">Our Services</h2>
            <div className="w-full overflow-x-auto flex justify-start snap-x p-4 md:justify-center">
              <Services />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="snap-always snap-center bg-slate-200 bg-opacity-90 p-4">
          <div className="flex flex-col gap-2 text-center align-middle h-screen justify-center">
            <h2 className="">What Our Clients Say</h2>
            <TestimonialSlider />
          </div>
        </section>

        {/* <!-- Team Section --> */}
        <section id="team" className="snap-always snap-center">
          <div className="flex flex-col text-center items-center h-screen justify-center bg-black bg-opacity-90 text-white">
            <h2 className="mb-8">
              Meet<br /> Our Team
            </h2>
            <div className="w-full overflow-x-auto flex justify-start snap-x scroll-smooth scrollbar-hide p-4 md:justify-center">
              <Founder />
            </div>
            <Link href="/teams" className="flex flex-row gap-3 hover:font-bold mt-8">
              <ArrowRightCircle />
              View More
            </Link>
          </div>
        </section>

        {/* Achievemetns Section */}
        <section id="achievements" className="snap-always snap-center bg-slate-200 bg-opacity-90 p-4">
          <div className="flex flex-col gap-2 text-center align-middle h-screen justify-center">
            <h2 className="">Our Achievements</h2>
            <AchievementSlider />
          </div>
        </section>

        <section id="contact" className="snap-always snap-center bg-black bg-opacity-90">
          <div className="flex flex-col md:w-1/3 w-full items-center text-left align-middle h-screen justify-center md:mx-8 my-auto">
            <ContactUs />
          </div>
          <div className="p-4 text-center text-white">
            &copy; 2024 Strydo Labs | All rights reserved.
          </div>
        </section>
      </section>
    </div>
  );
}
