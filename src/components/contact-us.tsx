"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandX,
} from "@tabler/icons-react";
import Vertical from "./verticalline"

export function FloatingDockDemo() {
  const links = [

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/Vastavikadi",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Vastavikadi",
    },
    {
      title: "Telegram",
      icon: (
        <IconBrandTelegram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://t.me/Vastavik_Adi"
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/Vastavik.adi",
    },
    {
      title: "Gmail",
      icon: (
        <IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:aditya82004shukla@gmail.com?subject=GritIndia&body=Can%20we%20talk%20about%20GritIndia%3F",
    },
  ];
  return (
    <div>
    <h3 className="text-2xl font-bold text-center mx-auto p-4">Contact Us
    </h3>
    <p className="text-center mb-8">Follow us on listed platforms for regular updates.</p>
    <div className="top-30 flex items-center justify-center container mx-auto px-4 mb-6">
      <FloatingDock
       // only for demo, remove for production
        items={links}
      />
    </div>
    <p className="text-center mb-8 font-semibold">Copyright &#169; 2024 | All rights reserved.</p>
    </div>
  );
}
export default FloatingDockDemo