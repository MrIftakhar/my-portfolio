import React from "react";
import Navbar from "./Navbar";
import Robort from "/robort.png";
import Github from "/github.png";
import Linkedin from "/linkedin.png";
import Facebook from "/facebook.png";
import Instagram from "/instagram.png";
import Iftakhar from "/Iftakhar.pdf";

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center">
      <div className="md:h-[550px] h-[500px] w-[450px] bg-gradient-to-r absolute from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] transform z-0 right-2 top-28 rounded-3xl mx-20">
        <img
          src={`${import.meta.env.BASE_URL}Img/myimage.jpg`} alt="My Image"
          className="w-[300px] mx-auto my-18 rounded-3xl "
          data-aos="fade-up"
          data-aos-delay="300"
        />
      </div>
      <Navbar />
      <main
        id="home"
        className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10"
      >
        <section
          className="flex-1 mr-28 md:text-left mt-10 md:mt-0 relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-20"></div>
          <header>
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Md. Iftakhar Islam
            </h1>
            <h2 className="text-xl sm:text-4xl md:text-2xl font-bold text-[#19071e] md:text-[#cc5f5f] mb-2">
              Frontend Developer
            </h2>
          </header>
          <p className="text-base sm:text-lg md:text-lg text-gray-200 mb-6">
            Hey there,I’m a self-taught web Developer
              with a passion for clean problem-solving and website building.
              I bring a generalist mindset backed by a foundation in competitive programming and a strong desire to learn in collaborative environments.</p>
          <div className="flex items-center space-x-4 mb-6">
            <a href="https://www.facebook.com/share/1AmaYzUc91/">
              <img src={Facebook} alt="Facebook" className="w-11 h-11" />
            </a>
            <a href="https://www.linkedin.com/in/ifthakhar-islam-a30755213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <img src={Linkedin} alt="Linkedin" className="w-11 h-11" />
            </a>
            <a href="https://github.com/MrIftakhar">
              <img src={Github} alt="Github" className="w-11 h-11" />
            </a>
            <a href="https://www.instagram.com/ifthakhar_islam?igsh=MWFnd3p4amc1b2N2dA==">
              <img src={Instagram} alt="Instagram" className="w-11 h-11" />
            </a>
          </div>
          <a href={Iftakhar} download>
            <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg">
              Download CV
            </button>
          </a>
        </section>
        <figure
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex-1 flex justify-center md:justify-start mt-0"
        >
          <img
            src={Robort}
            alt="robort"
            className="h-[300px] sm:h-[400px] md:h-[485px] w-[250px] sm:w-[480px] object-cover rounded-lg"
          />
        </figure>
      </main>
    </div>
  );
}
