import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import ServiceCard from "./ServiceCard";
import { FaDownload, FaLinkedin } from "react-icons/fa";
import { github } from "../assets";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-8 px-6 flex items-center justify-start gap-6">
        <a
          href="/NarinderResume.pdf"
          download
          className="flex items-center gap-4 text-secondary cursor-pointe border-secondary border px-4 py-2 rounded-lg"
        >
          <span className="">Download Resume</span>

          <FaDownload className="" />
        </a>

        <a
          className="cursor-pointer text-white bg-tertiary px-2 py-2 rounded-full"
          target="_blank"
          href="https://www.linkedin.com/in/narinder-kumar-3216a9153"
        >
          <FaLinkedin className="text-2xl" />
        </a>

        <a
          className="cursor-pointer text-white bg-tertiary px-1 py-1 rounded-full"
          target="_blank"
          href="https://github.com/3narinder"
        >
          <img src={github} alt="github" className="h-8 w-8" />
        </a>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
