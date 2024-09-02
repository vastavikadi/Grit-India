"use client";

import Image from "next/image";
import imag from "../data/imag.jpg"
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="fixed top-0 bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-semibold text-neutral-600 dark:text-white"
        >
          We take you a step closer to your Culture and Heritage &#128205;
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Experience the feel of Familiarity with us &hearts;
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imag}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="GritIndia"
          />
        </CardItem>
        <div className="flex justify-center items-center mt-20">
        </div>
      </CardBody>
    </CardContainer>
  );
}
export default ThreeDCardDemo