"use client";

import { motion } from "framer-motion";
import { JetBrains_Mono } from "next/font/google";
import IconList from "./IconList";

const jetbrains = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Hero() {
  return (
    <section className="px-10 pt-20 flex flex-col md:flex-row gap-10 md:justify-between 2xl:justify-center 2xl:gap-60">
      <div className="flex flex-col gap-7">
        <div className="flex gap-4 items-center">
          <motion.span
            className="w-8 md:w-10 h-1 bg-black"
            initial={{ opacity: 0, marginLeft: "-30" }}
            animate={{ opacity: 1, marginLeft: 0 }}
            transition={{ duration: 0.4 }}
          ></motion.span>
          <motion.span
            className="text-lg md:text-xl"
            initial={{ opacity: 0, marginLeft: "-30" }}
            animate={{ opacity: 1, marginLeft: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm Ilham Maulana Pratama
          </motion.span>
        </div>
        <motion.div
          className="max-w-xl text-4xl md:text-6xl lg:text-8xl xl:text-9xl"
          initial={{ opacity: 0, marginLeft: "-30" }}
          animate={{ opacity: 1, marginLeft: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={jetbrains.className}>Frontend Developer</span>
        </motion.div>
      </div>
      <motion.div
        className="flex flex-col gap-8 md:gap-4"
        initial={{ opacity: 0, marginRight: "-30" }}
        animate={{ opacity: 1, marginRight: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="w-8 md:w-10 h-1 bg-black"></span>
        <div className="max-w-sm text-lg md:text-xl tracking-wide">
          I have expertise in <b>Javascript (ES6)</b>, <b>ReactJS</b>, and{" "}
          <b>NextJS</b>.
        </div>
        <IconList />
      </motion.div>
    </section>
  );
}
