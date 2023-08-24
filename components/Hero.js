"use client";

import ReactIcon from "@/components/icon/ReactIcon";
import { motion, useScroll } from "framer-motion";
import { JetBrains_Mono } from "next/font/google";
import IconNextjs from "./icon/IconNextjs";
import IconJavascript from "./icon/IconJavascript";
import IconMysql from "./icon/IconMysql";
import IconBxlRedux from "./icon/IconBxlRedux";
import IconFigma from "./icon/IconFigma";
import IconGithub from "./icon/IconGithub";

const jetbrains = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Hero() {
  const { scrollYProgress } = useScroll();
  // <motion.h1
  //           className="text-6xl"
  //           initial={{ opacity: 0, marginLeft: "-30" }}
  //           animate={{ opacity: 1, marginLeft: 0 }}
  //           transition={{ duration: 0.4 }}

  //         >Hii, I'm Ilham Maulana Pratama</motion.h1>

  return (
    <section className="px-10 pt-20 flex justify-between 2xl:justify-center 2xl:gap-60 items-end">
      <div className="flex flex-col gap-7">
        <div className="flex gap-4 items-center">
          <motion.span
            className="w-10 h-1 bg-black"
            initial={{ opacity: 0, marginLeft: "-30" }}
            animate={{ opacity: 1, marginLeft: 0 }}
            transition={{ duration: 0.4 }}
          ></motion.span>
          <motion.span
            className="text-xl"
            initial={{ opacity: 0, marginLeft: "-30" }}
            animate={{ opacity: 1, marginLeft: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I am Ilham Maulana Pratama
          </motion.span>
        </div>
        <motion.div
          className="max-w-xl text-9xl"
          initial={{ opacity: 0, marginLeft: "-30" }}
          animate={{ opacity: 1, marginLeft: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={jetbrains.className}>Frontend Developer</span>
        </motion.div>
      </div>
      <motion.div
        className="flex flex-col gap-4"
        initial={{ opacity: 0, marginRight: "-30" }}
        animate={{ opacity: 1, marginRight: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="w-10 h-1 bg-black"></span>
        <div className="max-w-sm text-xl tracking-wide">
          I have expertise in <b>Javascript (ES6)</b>, <b>ReactJS</b>, and{" "}
          <b>NextJS</b>. Also have backend knowledge including{" "}
          <b>SQL databases</b> and <b>Redux</b>, UI design tool like{" "}
          <b>Figma</b>, and control versions such as <b>Github</b>.
        </div>
        <div className="flex gap-4 items-center">
          <motion.div
            initial={{ opacity: 0, marginLeft: "-60" }}
            animate={{ opacity: 1, marginLeft: 0 }}
            transition={{ duration: 1.3 }}
          >
            <ReactIcon width={40} height={40} className="animate-spin" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, marginLeft: "-60" }}
            animate={{ opacity: 1, marginLeft: 0 }}
            transition={{ duration: 1.4 }}
          >
            <IconNextjs width={40} height={40} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, marginLeft: "-60" }}
            animate={{ opacity: 1, marginLeft: 0 }}
            transition={{ duration: 1.5 }}
          >
            <IconJavascript width={40} height={40} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, marginLeft: "-60" }}
            animate={{ opacity: 1, marginLeft: 0 }}
            transition={{ duration: 1.6 }}
          >
            <IconMysql width={40} height={40} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, marginLeft: "-60" }}
            animate={{ opacity: 1, marginLeft: 0 }}
            transition={{ duration: 1.7 }}
          >
            <IconBxlRedux width={40} height={40} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, marginLeft: "-60" }}
            animate={{ opacity: 1, marginLeft: 0 }}
            transition={{ duration: 1.8 }}
          >
            <IconFigma width={40} height={40} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, marginLeft: "-60" }}
            animate={{ opacity: 1, marginLeft: 0 }}
            transition={{ duration: 1.9 }}
          >
            <IconGithub width={40} height={40} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
