import React from "react";
import { motion } from "framer-motion";
import { fadeTop, motionStep } from "./motion";
import Featured from "./Featured";
import Section from "../common/Section";
import ProjectCard from "./ProjectCard";
import RightSvg from "../../assets/svg/right-pattern.svg";
import { CONSTANTS } from "../utils/Constants";

const Projects = () => {
  return (
    <Section
      id="projects"
      title={CONSTANTS.PROJECTS.title}
      subtitle={CONSTANTS.PROJECTS.subtitle}
      className="relative"
    >
      <div className="space-y-5 lg:space-y-10 px-5 md:px-10 lg:px-20 2xl:px-40">
        <img
          src={RightSvg}
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        { CONSTANTS.PROJECTS.data
          .filter((e) => e.featured === true)
          .map((e, i) => (
            <motion.div key={i} variants={fadeTop} {...motionStep}>
              <Featured
                live={e.live}
                thumbnail={e.thumbnail}
                code={e.code}
                title={e.title}
                description={e.description}
                tech={e.tech}
                secondary={i % 2 === 0 ? false : true}
              />
            </motion.div>
          ))}
      </div>

      <div className="grid grid-cols-8 2xl:grid-cols-12 gap-6 gap-y-8 my-10 px-5 md:px-10 lg:px-20 2xl:px-40">
      { CONSTANTS.PROJECTS.data
        .filter((e) => e.featured !== true)
        .map((e, i) => (
          <ProjectCard
            live={e.live}
            thumbnail={e.thumbnail}
            code={e.code}
            title={e.title}
            description={e.description}
            tech={e.tech}
            key={i}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;