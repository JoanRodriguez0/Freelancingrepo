import { motion } from "framer-motion";

import {
  NextJsIcon,
  VSCodeIcon,
} from "../icon/Icons";

import { SiPython, SiFastapi, SiDjango, SiVisualstudio, SiLaravel, SiDotnet, SiAndroidstudio, SiRubyonrails, SiNodedotjs, SiReact, SiTailwindcss, SiFlutter } from "react-icons/si";
import { CONSTANTS } from "../utils/Constants";

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

const StackIcon = ({icon: IconComponent, color}) => (
  <motion.li variants={animation}>
    <div className={`transition duration-200 hover:text-[${color}]`}>
      <IconComponent className="h-6 w-6 md:h-8 md:w-8" />
    </div>
  </motion.li>
);

function HeaderTechStack() {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.p
        className="mb-2.5 text-sm md:text-xl font-semibold text-[#7000ff] dark:text-[#7000ff]"
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        {CONSTANTS.LABEL.myStack}:
      </motion.p>
      <motion.ul
        className="flex items-center gap-3.5 text-slate-600 dark:text-slate-300"
        initial="hide"
        
        animate="show"
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >
        <StackIcon icon={SiPython} color='#3e9c3e' />
        <StackIcon icon={SiDjango} color='#3e9c3e' />
        <StackIcon icon={SiFastapi} color='#3e9c3e' />
        <StackIcon icon={SiRubyonrails} color='61DAFB' />
        <StackIcon icon={SiNodedotjs} color='61DAFB' />
        <StackIcon icon={SiReact} color='#61DAFB' />
        <StackIcon icon={NextJsIcon} color='#61DAFB' />
        <StackIcon icon={SiTailwindcss} color='#06B6D4' />
        <StackIcon icon={SiFlutter} color='#61DAFB' />
        <StackIcon icon={SiLaravel} color='#6e50c2' />
        <StackIcon icon={SiDotnet} color='#6e50c2' />

        <motion.li variants={animation}>
          <div className="h-3 md:h-5 w-[1px] bg-slate-400 dark:bg-neutral-700" />
        </motion.li>

        <StackIcon icon={VSCodeIcon} color='#007ACC' />
        <StackIcon icon={SiVisualstudio} color='#6e50c2' />
        <StackIcon icon={SiAndroidstudio} color='#6e50c2' />
      </motion.ul>
    </div>
  );
}

export default HeaderTechStack;
