"use client";

import Image from "next/image";

export default function Card({ title }) {
  return (
    <>
      <div className="flex flex-col gap-8 max-w-sm">
        <Image
          className="w-full h-auto"
          src="/thumbnail-ex.png"
          width={1500}
          height={1000}
        />
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold tracking-wider">{title}</h2>
          <button
            onClick={() => props.setOpenModal("default")}
            className="px-4 py-2 border border-black tracking-wider hover:bg-black hover:text-white transition-all"
          >
            See Fast
          </button>
        </div>
      </div>
    </>
  );
}
