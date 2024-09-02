"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/image-slider";
import Link from "next/link";

export function ImagesSliderDemo() {
  const images = [
    "https://wallpaperaccess.com/full/2346185.jpg",
    "https://wallpaperbat.com/img/336048-india-culture-wallpaper-top-free-india-culture-background.jpg",
    "https://wallpaperbat.com/img/356988-indian-culture-blog.jpg",
  ];
  return (
    <ImagesSlider className="h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
        Let&apos;s explore our wonderful India with its rich history and various cultures. <br/>
        </motion.p>
        <Link href="./tales">
        <button type="button" className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Dive in with us →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
        </Link>
      </motion.div>
    </ImagesSlider>
  );
}
export default ImagesSliderDemo