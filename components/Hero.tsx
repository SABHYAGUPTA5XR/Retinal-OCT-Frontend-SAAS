"use client";

import { descriptionText, titleText } from "@/constants/text";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <div className="flex flex-row justify-between gap-10 p-20">
        <div className="p-10">
          
          <h1 className="text-7xl font-bold font-mono leading-normal tracking-tight  text-gradient">
            {titleText}
          </h1>
          <p className="mt-10 text-2xl font-sans leading-10 text-gray-700">
            {descriptionText}
          </p>
        </div>

        <Image
          src="/assets/images/doc.png"
          alt="Hero"
          width={800}
          height={800}
        />
      </div>
      <div className="flex-center mt-20">
        <Link href="/product">
          <Button className="primary-gradient w-[150px] font-semibold font-sans text-white rounded-md hover:shadow-md hover:shadow-indigo-500/50">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}
