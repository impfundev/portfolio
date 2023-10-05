"use client";

import { useState } from "react";
import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";
import { motion } from "framer-motion";

const jetbrains = JetBrains_Mono({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function Navigation() {
  const [openMenu, setOpenMenu] = useState(false);
  const openMenuHandler = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <nav className="sticky top-0 bg-white/75 backdrop-blur-md px-8 py-4 border-b border-black z-30 items-center">
        <div className="flex justify-between">
          <div
            className={`${jetbrains.className} md:text-2xl font-bold tracking-wider`}
          >
            &#123; IMP &#125;
          </div>
          <div className="hidden md:block">
            <ul className="flex md:gap-10 lg:gap-[110px] text-lg">
              <li>
                <Link className="hover:text-purple-800" href="#project">
                  Project
                </Link>
              </li>
              <li>
                <Link className="hover:text-purple-800" href="#">
                  Resume
                </Link>
              </li>
              <li>
                <Link className="hover:text-purple-800" href="#">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={openMenuHandler}
              className="flex gap-4 items-center"
            >
              <span className="text-lg">Menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M4 6H20M4 12H12M4 18H20"
                  stroke="#111827"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {openMenu && (
        <>
          <motion.div
            className={`fixed top-0 right-0 h-full w-[75vw] bg-white text-black z-50`}
            initial={{ marginRight: "-100%" }}
            animate={{ marginRight: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="m-10 transition-all">
              <ul className="flex flex-col justify-between text-lg">
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.3 }}
                >
                  <Link className="hover:text-purple-800" href="#project">
                    Project
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.6 }}
                >
                  <Link className="hover:text-purple-800" href="#">
                    Download CV
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.9 }}
                >
                  <Link className="hover:text-purple-800" href="#">
                    Contact
                  </Link>
                </motion.li>
              </ul>
            </div>
          </motion.div>
          <div
            onClick={openMenuHandler}
            className="fixed top-0 left-0 right-0 w-full h-full z-30 bg-black/50 backdrop-blur-sm"
          ></div>
        </>
      )}
    </>
  );
}
