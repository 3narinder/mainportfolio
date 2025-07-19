import React from "react";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  arktastic,
  threejs,
  nextjs,
  threejsLight,
  custom,
  omnifood,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ReactJs Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next Js",
    icon: nextjs,
  },
  {
    name: "React Native",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Creative I Technologies",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Sept 2024 - Mar 2025",
    points: [
      "Designed and developed interactive and responsive web applications using React, Next.js, and modern frontend tools.",
      "Collaborated with clients and teams to deliver custom solutions for diverse freelance and contract-based projects.",
      "Optimised application performance, ensuring fast load times and seamless user experience across devices.",
      "Implemented reusable components and clean UI designs, maintaining code quality and project scalability.",
    ],
  },
  {
    title: "ReactJs Developer",
    company_name: "Digimantra Labs",
    icon: reactjs,
    iconBg: "#383E56",
    date: "April 2024 - Dec 2024",
    points: [
      "Develop and Maintain React JS Applications: Design and build scalable, efficient, and reusable front-end components and applications using React JS, ensuring high performance and responsiveness",
      "Identify, troubleshoot, and resolve complex technical issues and bugs in React JS applications to ensure seamless user experiences",
      "Implement and manage global application state using React Redux, ensuring efficient state transitions and data flow across the application.",
      " Continuously monitor and optimize application performance, ensuring fast load times and smooth user interactions.",
    ],
  },
  {
    title: "FrontEnd Developer",
    company_name: "Arktastic",
    icon: mongodb,
    iconBg: "#E6DEDD",
    date: "May 2022 - Apr 2024",
    points: [
      "Contributed to the development of various interactive and responsive web applications using ReactJS, Redux and NextJS.",
      "Implemented performance optimizations in Next.js-based applications leading to improved load times and overall user experience.",
      "Integrated and managed various email services for efficient communication with users.",
      "Worked closely with the design and backend team to ensure seamless integration and maintain a cohesive design language across the application",
    ],
  },
  {
    title: "Jr.FrontEnd Developer",
    company_name: "RoomBuddy",
    icon: tailwind,
    iconBg: "#383E56",
    date: "February 2022 - May 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      " Streamlined and enhanced development processes by integrating a variety of front-end libraries",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Arktastic",
    description:
      "An Australian Marketplace, We are a Digital Shopping Centre. We are working on providing People, digital access to any local markets across the continents. We welcome you to the Arktastic Network.",
    tags: [
      {
        name: reactjs,
      },
      {
        name: mongodb,
      },
      {
        name: tailwind,
      },
      {
        name: nextjs,
      },
      {
        name: typescript,
      },
      {
        name: redux,
      },
    ],
    image: arktastic,
    source_code_link: "https://github.com/",
    url: "https://www.arktastic.com/",
  },
  {
    name: "3DClothing Customizer",
    description:
      "The Three.js 3D Clothing Customizer is an interactive tool that allows users to upload a logo and change the color of 3D clothing models in real-time.",
    tags: [
      {
        name: threejsLight,
      },
      {
        name: reactjs,
      },
      {
        name: tailwind,
      },
    ],
    image: custom,
    source_code_link: "https://github.com/",
    url: "https://cutom-cloths.netlify.app/",
  },
  {
    name: "Omnifood",
    description:
      "The Healthy Food Delivery Restaurant static page showcases a clean and vibrant design focused on offering nutritious meal options. It features a menu of healthy meals, detailed descriptions, and nutritional information for each dish.",
    tags: [
      {
        name: html,
        color: "blue-text-gradient",
      },
      {
        name: css,
        color: "green-text-gradient",
      },
      {
        name: javascript,
        color: "pink-text-gradient",
      },
    ],
    image: omnifood,
    source_code_link: "https://github.com/",
    url: "https://omnifood-sr.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
