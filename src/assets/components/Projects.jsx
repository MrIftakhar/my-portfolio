import React from "react";
import Project1 from '../../assets/project1.png';
import Project2 from '../../assets/project2.png';
import Project3 from '../../assets/project3.png';
import Project4 from '../../assets/project4.png';


const ProjectCard = ({ image, title, description, link }) => {
  return (
    <article className="relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group">
      <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>

      <div className="relative z-10">
        <figure className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute h-[202px] inset-0 flex items-center justify-center bg-purple-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5]">
              Live Preview
            </button>
          </a>
        </figure>
        <div className="px-6 py-4">
          <header>
            <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
          </header>
          <p className="text-gray-200 text-base">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  const listProjects = [
    {
      image: Project1,
      title: "E-Comerse Shoe Shop Website",
      description:
        'Developed a fully responsive and visually appealing e-commerce landing page for a shoe store using HTML, CSS and JavaScript. The site features distinct product sections for casual and formal shoes, each with product cards showcasing images, pricing, and interactive "Buy Now" buttons. A mobile-friendly navigation bar ensures seamless browsing across devices. A working contact form is included with input validation for name, email, and message. Emphasized clean UX/UI, cross-browser compatibility, and accessibility. The project demonstrates strong layout structuring, and modern front-end development practices.',
      link: "https://github.com/MrIftakhar/E-Comerse",
    },
    {
      image: Project2,
      title: "Drag & Drop Image Upload",
      description:
        "Drag & Drop Image Upload is a user-friendly front-end feature that allows users to upload images by simply dragging files into a designated area. Built using HTML, CSS, and JavaScript, this functionality uses the FileReader to handle file previews. It improves user experience by showing image preview.",
      link: "https://github.com/MrIftakhar/JS-Project/tree/main/Drag%20%26%20Drop%20Image%20Upload",
    },
    {
      image: Project3,
      title: "Input Company Information",
      description:
        "This web application is a React.js-based form designed to collect and display company and employee information. Built using HTML5, CSS, and JavaScript, the form includes fields for company name, employee name, position, joining date and time, gender, and a personal description. It features radio buttons, checkboxes, and input validations for an interactive experience. Submitted data is dynamically captured and logged in the console as a structured JavaScript object, showcasing React’s controlled component pattern. The interface is clean and responsive, suitable for modern front-end developer portfolios to demonstrate form handling, data binding, and real-time input visualization using React.",
      link: "https://github.com/MrIftakhar/React-Project/tree/main/my-company-app",
    },
    {
      image: Project4,
      title: "Blog-Webside",
      description:
        "This is a modern blog website built using React.js, Tailwind CSS, HTML, CSS, and JavaScript. It features a dynamic user interface with a blog carousel, recent posts, category sections, pagination, and a newsletter subscription form. Posts are presented in card format, each linking to detailed content. The design is clean, responsive, and optimized for readability and user engagement. A navigation bar provides quick access to pages like Home, About, Blog, and Contact. The project showcases essential front-end development skills such as component reuse, routing, responsive design, and UI interactivity—ideal for demonstrating practical web development knowledge in a portfolio.",
      link: "https://github.com/MrIftakhar/React-Project/tree/main/blog-website",
    },
  ];
  return (
    <main className="p-4" id="projects">
      <section data-aos="fade-up" data-aos-delay="300">
        <header className="text-center">
          <h1 className="text-3xl text-white sm:text-4xl font-bold mb-6">
            My <span className="text-red-600">Projects</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            Here are My some Projects. I hope you will like them.
          </p>
        </header>
      </section>
      <section
        data-aos="fade-up"
        data-aos-delay="500"
        className="flex flex-wrap gap-4 justify-center mt-6"
      >
        {listProjects.map((project,index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </section>
    </main>
  );
}
