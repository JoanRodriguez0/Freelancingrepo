import { motion } from "framer-motion";
import { Reveal } from "../utils/Reveal";
import { CONSTANTS } from "../utils/Constants";

const AboutDetailsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="flex flex-col min-h-fit items-center justify-start text-center xl:text-left xl:flex-row max-w-7xl px-4 mx-auto md:pt-0 md:pb-12 md:mx-20 z-10"
    >
      {/* <img
        src={CONSTANTS.USER.avatar}
        alt="Avatar"
        className="mb-10 md:mb-0 flex-shrink-0 rounded-3xl w-64 h-64 object-cover md:rounded-3xl md:w-64 md:h-95 xl:w-[300px] xl:h-[350px] shadow-lg shadow-gray-400/30 dark:shadow-black/30"
      /> */}
      <div className="space-y-5 ml-0  xl:pt-0 xl:ml-20 md:pt-10">
        <h4 className="text-2xl font-medium text-amber-600 dark:text-amber-300">
          <Reveal width="100%"> About Me </Reveal>
        </h4>
        <div
          className="bg-white/70 dark:bg-[#101111]/70 p-5 rounded-3xl shadow-lg shadow-gray-400/50 dark:shadow-black/30 text-gray-800 dark:text-gray-300 backdrop-filter backdrop-blur-lg bg-opacity-30 ease-in-out"
          dangerouslySetInnerHTML={{__html: CONSTANTS.OVERVIEW.aboutMe}}
        />
      </div>
    </motion.div>
  );
};
export default AboutDetailsSection;
