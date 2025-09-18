import React from "react";
import Html from "/html.png";
import Javascript from "/javascript.png";
import Tailwindcss from "/tailwindcss.png";
import React_js from "/react_js.png";
import PHP from"/PHP.png";
import Laravel from "/Laravel.png";
import Srobot from "/srobot.png";
import Arobot from "/arobot.png";

const skillsData = [
  {
    id: 1,
    image: Html,
    title: "Html",
    description:
      "HTML, or HyperText Markup Language, is the standard language used to create and design webpages. It structures content using tags such as headings, paragraphs, links, and images. HTML forms the foundation of web development, allowing browsers to display text, media, and interactive elements in a readable and user-friendly format.",
  },

  {
    id: 2,
    image: Javascript,
    title: "Javascript",
    description:
      "JavaScript is a versatile programming language primarily used to create interactive and dynamic content on websites. It enables developers to implement features like animations, form validation, and real-time updates. JavaScript runs in web browsers, enhancing user experience, and is also used on servers with environments like Node.js for backend development.",
  },

  {
    id: 3,
    image: Tailwindcss,
    title: "Tailwindcss",
    description:
      "Tailwind CSS is a utility-first CSS framework that lets developers style web interfaces directly in HTML using predefined classes. It promotes rapid UI development by avoiding custom CSS and offering responsive, consistent design tools. Tailwind is highly customizable, making it ideal for building modern, scalable, and maintainable web applications efficiently.",
  },

  {
    id: 4,
    image: React_js,
    title: "Reactjs",
    description:
      "React.js is a popular JavaScript library developed by Facebook for building dynamic user interfaces. It uses a component-based architecture, enabling reusable UI elements and efficient rendering with a virtual DOM. React simplifies frontend development, supports reactive data changes, and integrates well with modern tools, making it ideal for single-page applications.",
  },
  {
    id: 5,
    image: PHP,
    title: "PHP",
    description:
      "PHP is a general-purpose scripting language geared towards web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995. The PHP reference implementation is now produced by the PHP Group.",
  },
  {
    id: 6,
    image: Laravel,
    title: "Laravel",
    description:
      "Laravel provides a complete ecosystem for web artisans. Our open source PHP framework, products, packages, and starter kits offer everything you need to build, deploy, and monitor web applications.",
  },
];

const SkillBox = ({ image, title, description }) => (
  <article className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-purple-800 transition-all duration-300">
    <figure className="flex justify-center mb-4">
      <img src={image} alt={title} className="w-16 h-16 sm:w-20 sm:h-20" />
    </figure>
    <header>
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
    </header>
    <p className=" text-gray-400 text-sm sm:text-base">{description}</p>
  </article>
);
export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10">
      <div className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2"></div>
      <img
        src={Srobot}
        alt="Left picture"
        className="absolute z-10 left-2 top-2 sm:left-16 sm:top-32 transform w-24 h-auto sm:w-32 opacity-70"
      />
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative z-20 text-center space-y-6 sm:space-y-10"
      >
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold">My Skills</h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            I'm a self-taught Web Developer skilled in HTML, CSS, TailwindCSS, <br /> 
            JavaScript, React.js, Php, Laravel. I have built responsive, <br />
            user-friendly interfaces and enjoy working with modern tools. I'm <br />
            eager to grow and take on real-world projects to strengthen my <br />
            skills.
          </p>
        </header>
        <section
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4"
        >
          {skillsData.map((skill) => (
            <SkillBox
              key={skill.id}
              image={skill.image}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </section>
      </div>
      <img
        src={Arobot}
        alt="Right picture"
        className="absolute z-10 right-2 top-2 sm:right-16 sm:top-32 transform w-24 h-auto sm:w-32 opacity-70"
      />
    </section>
  );
}
