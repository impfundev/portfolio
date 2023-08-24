"use client";

import { useState } from "react";
import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";

const jetbrains = JetBrains_Mono({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function Navigation() {
  const [click, setClick] = useState(false);
  const clickHandler = () => {
    setClick(true);
  };

  return (
    <nav className="h-[107px] px-[100px] border-b border-black z-50">
      <div className="flex justify-between py-[41px]">
        <div
          className={`${jetbrains.className} text-2xl font-bold tracking-wider`}
        >
          &#123; IMP &#125;
        </div>
        <ul className="flex gap-[110px] text-lg">
          <li>
            <Link className="hover:text-purple-800" href="/">
              Blog
            </Link>
          </li>
          <li>
            <Link className="hover:text-purple-800" href="#">
              Download CV
            </Link>
          </li>
          <li>
            <Link className="hover:text-purple-800" href="#">
              Contact
            </Link>
          </li>
        </ul>
        <button className="flex gap-4 items-center">
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
    </nav>
  );
}
