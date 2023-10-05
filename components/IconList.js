"use client";

import { motion } from "framer-motion";
import IconNextjs from "./icon/IconNextjs";
import IconJavascript from "./icon/IconJavascript";
import ReactIcon from "@/components/icon/ReactIcon";

export default function IconList() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
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
    </div>
  );
}
