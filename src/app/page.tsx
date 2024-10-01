import ContactUs from "@/components/ui/ContactUs";
import Services from "@/components/ui/Services";
import TestimonialSlider from "@/components/ui/Testimonial";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
      <section className="flex flex-col">
        <video
          muted
          loop
          autoPlay
          className="fixed -top-2 left-0 w-full h-full -z-50 object-cover bg-black"
        >
          <source src='/img/bg-robo.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <section id="hero" className="snap-always snap-center">
          <div className="flex flex-col h-screen w-screen gap-3 text-center align-middle justify-center p-4 bg-black bg-opacity-80">
            <div className="my-[60px]">
              <h2 className="text-white">Innovating Future Technology</h2>
              <p className="text-[18px] mt-2 text-white">Empowering your ideas with cutting-edge IoT, robotics, and tech solutions.</p>
              <Link href={'/contact'}>
                <Button className='mt-10 bg-transparent text-white font-bold w-48 h-16 text-lg' variant={'outline'}>Get Started</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="snap-always snap-center hover:gap-4 bg-white bg-opacity-90 justify-between">
          <div className="flex flex-col text-center align-middle h-screen justify-center p-4" id="about-paragraph">
            <h2>About Strydo Labs</h2>
            <div className="flex flex-col gap-3 text-[18px] w-2/3 mx-auto text-justify">
              <p>
                At Strydo Labs, we are passionate innovators specializing in the development of cutting-edge robotics, advanced hardware, and integrated software solutions. As a technology-driven startup, our mission is to push the boundaries of what iss possible by blending the physical and digital worlds. From designing intelligent robotic systems to building sophisticated IoT devices, we deliver high-performance products that meet the evolving needs of modern industries.
              </p>
              <p>
                In addition to our core focus on hardware and robotics, we offer expert services in software development and game design, creating engaging digital experiences and streamlined solutions for businesses and consumers alike. With a commitment to innovation, quality, and precision, we strive to create technology that not only solves problems but also drives the future of automation and connectivity.
              </p>
              <p className="font-bold">
                At Strydo Labs, we are not just developing products—we are building the future.
              </p>
            </div>
            <Link className="mt-5" href={'/about'}>
              <Button type='submit' className=" text-white font-bold w-48 h-16 text-lg">Learn More</Button>
            </Link>
          </div>
        </section>

        {/* <!-- Services Section --> */}
        <section id="services" className="snap-always snap-center">
          <div className="flex flex-col text-center align-middle h-screen justify-center bg-black bg-opacity-80 p-4">
            <h2 className="text-white">Our Services</h2>
            <Services />
          </div>
        </section>

        {/* Testimoni Section */}
        <section id="testimonials" className="snap-always snap-center">
          <div className="flex flex-col gap-2 text-center align-middle h-screen justify-center bg-slate-200 bg-opacity-90">
            <h2>What Our Clients Say</h2>
            <TestimonialSlider />
          </div>
        </section>

        {/* <!-- Team Section --> */}
        <section id="team" className="snap-always snap-center">
          <div className="flex flex-col text-center align-middle h-screen justify-center bg-black bg-opacity-90 text-white">
            <h2 className="mb-4">Meet Our Team</h2>
            <div className="flex flex-row gap-10 text-center align-middle justify-center p-4">
              <Card className="p-4">
                <CardContent>
                  <Image className="hover:scale-105 rounded-lg" src="/img/Damithra.jpeg" width={200} height={200} alt="Damithra" />
                </CardContent>
                <CardDescription className="flex flex-col">
                  <a className="text-black text-xl">Damithra Fernando</a>
                  <a>Founder & CEO</a>
                </CardDescription>
              </Card>
              <Card className="p-4">
                <CardContent>
                  <Image className="hover:scale-105 rounded-lg" src="/img/Anjar.jpeg" width={200} height={200} alt="Satoshi" />
                </CardContent>
                <CardDescription className="flex flex-col">
                  <a className="text-black text-xl">Anjar Tiyo</a>
                  <a>CTO</a>
                </CardDescription>
              </Card>
              <Card className="p-4">
                <CardContent>
                  <Image className="hover:scale-105 rounded-lg" src="/img/Jovahir.jpeg" width={200} height={200} alt="Jovahir" />
                </CardContent>
                <CardDescription className="flex flex-col">
                  <a className="text-black text-xl">Javohir</a>
                  <a>App Developer</a>
                </CardDescription>
              </Card>
            </div>
          </div>
        </section>

        

        <section id="contact" className="snap-always snap-center">
          <div className="flex flex-col w-1/3 text-left align-middle h-screen justify-center mx-8 my-auto">
            <ContactUs />
          </div>
          <div className="p-4">
            &copy; 2024 Strydo Labs | All rights reserved.
          </div>
        </section>
      </section>
    </div>
  );
}
