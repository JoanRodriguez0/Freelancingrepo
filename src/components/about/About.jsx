import React from "react";
import Section from "../common/Section";
import RightSvg from "../../assets/svg/right-pattern.svg";
import AboutDetailsSection from "./AboutDetailsSection";
import QuoteSection from "./QuoteSection";
import FeaturedCardSection from "./FeaturedCardSection";
import { CONSTANTS } from "../utils/Constants";
// import EducationSection from "../education/EducationSection";

const About = () => {
  return (
    <Section
      id="about"
      title={CONSTANTS.OVERVIEW.title}
      subtitle={CONSTANTS.OVERVIEW.subtitle}
      className="relative"
    >
      <img
        src={RightSvg}
        alt=""
        className="absolute hidden right-0 bottom-[40%] w-2/12 max-w-xs md:block"
        loading="lazy"
        height={700}
        width={320}
      />
      <AboutDetailsSection />
      {/* <EducationSection /> */}
      <QuoteSection />
      <FeaturedCardSection />
    </Section>
  );
};

export default About;
