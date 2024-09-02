"use client";
import Image from "next/image";
import React, {useState} from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="top-0 w-full h-full">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl text-center md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know each of the details!
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://images.unsplash.com/premium_photo-1682090840373-b06b5237ae74?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Jammu & Kashmir",
    title: "Paradise of India",
    src:"https://i.pinimg.com/originals/53/ef/1e/53ef1e033b1cbee120c3279fca6b1fab.jpg",
    content: <DummyContent />,
  },
  {
    category: "Punjab",
    title: "The Land of the Five Rivers",
    src: "https://th.bing.com/th/id/OIP.zIlBkL7iNHie7RnlN4SdiQAAAA?rs=1&pid=ImgDetMain",
    content: <DummyContent />,
  },
  {
    category: "Uttar Pradesh",
    title: "Heart of India",
    src: "https://i.pinimg.com/originals/8e/ef/47/8eef47716320064666bf79033a9a940b.jpg",
    content: <DummyContent />,
  },
  {
    category: "Bihar",
    title: "The land of Monastaries",
    src: "https://qph.cf2.quoracdn.net/main-qimg-104275c249bf64acf71a0f91f62c37e7-lq",
    content: <DummyContent />,
  },
  {
    category: "Rajasthan",
    title: "Land of Kingdoms",
    src: "https://i.pinimg.com/736x/08/eb/0c/08eb0c7af83d419499306519c71e865a.jpg",
    content: <DummyContent />,
  },
  {
    category: "Kerala",
    title: "Spice Garden of India",
    src: "https://mews.in/wp-content/uploads/2021/12/Traditional-Kerala-Wedding-Dress.jpg",
    content: <DummyContent />,
  },
];
export default AppleCardsCarouselDemo