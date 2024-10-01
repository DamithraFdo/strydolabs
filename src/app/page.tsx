import ContactUs from "@/components/ui/ContactUs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="flex flex-col">
        <video
          muted
          loop
          autoPlay
          className="fixed -top-2 left-0 min-w-full min-h-full -z-50 object-cover bg-black"
        >
          <source src='/img/bg-robo.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div id="hero">
          <div className="flex flex-col h-screen w-screen gap-3 text-center align-middle justify-center p-4 bg-black bg-opacity-50">
            <div className="my-[60px]">
              <h2 className="text-white">Innovating Future Technology</h2>
              <p className="text-[18px] mt-2 text-white">Empowering your ideas with cutting-edge IoT, robotics, and tech solutions.</p>
              <Link href={'/contact'}>
                <Button className='mt-3' type='submit'>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <section id="about">
          <div className="flex flex-col text-center align-middle h-screen justify-center p-4 bg-white">
            <h2>About Strydo Labs</h2>
            <p>Strydo Labs is a tech startup specializing in IoT, software, and hardware development. We innovate in robotics, embedded systems, and game development.</p>
            <Link href={'/about'}>
              <Button className='mt-3' type='submit'>Learn More</Button>
            </Link>
          </div>
        </section>

        {/* <!-- Services Section --> */}
        <section id="services" className="services-section">
          <div className="flex flex-col text-center align-middle h-screen justify-center bg-slate-200 p-4">
            <h2>Our Services</h2>
            <div className="services-container flex flex-row text-center align-center gap-3 justify-center my-3">
              <div className="service-box">
                <h3>IoT Solutions</h3>
                <p>Custom IoT applications to enhance efficiency.</p>
              </div>
              <div className="service-box">
                <h3>Robotics & AI</h3>
                <p>Advanced robotic systems for diverse industries.</p>
              </div>
              <div className="service-box">
                <h3>Game Development</h3>
                <p>Creative game development for all platforms.</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Team Section --> */}
        <section id="team">
          <div className="flex flex-col text-center align-middle h-screen justify-center">
            <h2>Meet Our Team</h2>
            <div className="flex flex-row gap-5 text-center align-middle justify-between p-4">
              <div className="team-member">
                <Image src="/Images/damithra.png" width={200} height={200} alt="Damithra" className="team-photo" />
                <h3>Damithra Fernando</h3>
                <p>Founder & CEO, Robotics and Automation</p>
              </div>
              <div className="team-member">
                <Image src="/satoshi.jpg" width={200} height={200} alt="Satoshi" className="team-photo" />
                <h3>Satoshi</h3>
                <p>Robotics Engineer</p>
              </div>
              <div className="team-member">
                <Image src="/Images/Jovahir.jpeg" width={200} height={200} alt="Jovahir" className="team-photo" />
                <h3>Jovahir</h3>
                <p>App Developer</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Statistics Section --> */}
        <section id="stats">
          <div className="flex flex-col text-center align-middle h-screen justify-center bg-slate-200">
            <h2 className="text-4xl font-[700] my-3">Our Achievements</h2>
            <div className="flex flex-row gap-5 text-center align-middle justify-between p-4 mx-4">
              <div className="stat-box">
                <h3><span id="projects-done">15+</span></h3>
                <p>Projects Done</p>
              </div>
              <div className="stat-box">
                <h3><span id="clients">20+</span></h3>
                <p>Clients</p>
              </div>
              <div className="stat-box">
                <h3><span id="awards">6+</span></h3>
                <p>Awards Won</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="flex flex-col w-2/3 text-center align-middle h-screen justify-center mx-auto my-auto">
            <ContactUs />
          </div>
        </section>
      </section>


    </>
  );
}
