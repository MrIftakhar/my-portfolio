import React from "react";
import Robort3 from "/robort3.png";
import Robort2 from "/robort2.png";
import Robort4 from "/robort4.png";
export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <figure
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex flex-wrap justify-center gap-4 relative"
        >
          <div className="h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] bg-gradient-to-l from-[#6d2897] via-[#6c95f5] to-[#bb61c5] absolute transform rotate-12 z-0 right-5 -top-2 md:top-10 rounded-full"></div>
          <img
            src={Robort3}
            alt="robort3"
            className="absolute -top-2 left-5 sm:left-10 transform -translate-y-12 z-20 w-24 h-24 sm:w-32 sm:h-32 rounded-3xl shadow-lg"
          />
          <img
            src={Robort2}
            alt="robort2"
            className="relative z-10 w-36 h-44 sm:w-40 sm:h-40 md:w-72 md:h-72 rounded-lg"
          />
          <img
            src={Robort4}
            alt="robort4"
            className="absolute -bottom-30 right-5 sm:-right-10 transform translate-y-12 z-10 w-20 h-20 sm:w-50 sm:h-50 rounded-3xl shadow-lg"
          />
        </figure>

        <article
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-center lg:text-left relative"
        >
          <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>
          <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              About Me
            </h1>
          </header>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            Hi, I’m Md. Iftakhar Islam a Computer Science graduate, a passionate
            and enthusiastic Web Developer with a strong interest in creating
            modern, responsive, and user-friendly websites. As a fresher, I
            bring a fresh perspective and a strong foundation in HTML, CSS,
            JavaScript, React, Tailwind CSS PHP, and Laravel. I enjoy turning
            ideas into functional digital experiences and continuously learning
            new tools and frameworks to improve my skills. I’m eager to
            contribute my creativity, problem-solving abilities, and technical
            knowledge to real-world projects, while growing as a professional in
            the web development industry.
          </p>
          <footer>
            {/* <button
              className="inline-flex text-white border-2 py-2 px-4 sm:px-6 focus:outline-none 
            hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-sm sm:text-lg"
            >
              Learn More
            </button> */}
            <a
              href="https://www.linkedin.com/in/ifthakhar-islam-a30755213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="inline-flex text-white border-2 py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-sm sm:text-lg"
            >
              Learn More
            </a>
          </footer>
        </article>
      </div>
    </section>
  );
}
