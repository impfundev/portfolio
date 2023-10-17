"use client";

import { Image } from "@nextui-org/react";

export default function Card({ title }) {
  return (
    <>
      <div className="flex flex-col gap-8 max-w-sm">
        <Image
          isZoomed
          className="w-full h-auto"
          src="/thumbnail-ex.png"
          width={1500}
          height={1000}
        />
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold tracking-wider">{title}</h2>
        </div>
      </div>
    </>
  );
}
