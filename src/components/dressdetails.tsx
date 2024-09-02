"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";

export function TracingBeamDemoFemale() {
  return (
    <TracingBeam className="px-6">
      <div className="grid grid-cols-3 gap-10 max-w-2xl mx-auto antialiased pt-2 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">

            <p className={twMerge("text-xl mb-4")}>
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Andhra Pradesh",
    description: (
      <>
        <p>
        The "Pancha" (or "Panche") is a simple, unstitched cloth wrapped around the waist. Historically, it reflects the traditional attire of South Indian men, suited for the region's warm climate.
        </p>
      </>
    ),
    // badge: "React",
    image:
      "https://th.bing.com/th/id/OIP.IuRUdvhvHY3EFDHgz8n0CAHaMa?rs=1&pid=ImgDetMain",
  },
  {
    title: "Arunachal Pradesh",
    description: (
      <>
        <p>
        Typically, men wear a simple cloth wrapped around the waist with a shirt, reflecting the utilitarian and practical aspects of traditional tribal life in Arunachal Pradesh.
        </p>
      </>
    ),
    // badge: "Changelog",
    image:
      "https://i.pinimg.com/originals/d8/86/43/d886439d5601d3acf8be3b1765dcdae3.jpg",
  },
  {
    title: "Assam",
    description: (
      <>
        <p>
        The "Gamosa" is a traditional Assamese cloth used as a symbol of respect and cultural pride, often paired with a "Mekhela" for formal occasions.
        </p>
      </>
    ),
    // badge: "Launch Week",
    image:
      "https://mews.in/wp-content/uploads/2022/02/Tongali-is-a-traditional-dress-of-Assam.jpg",
  },
  {
    title: "Bihar",
    description: (
      <>
        <p>
        The "Dhoti" paired with a "Kurta" represents a traditional style of dress that has been prevalent in Bihar for centuries, reflecting the historical lifestyle of the region.
        </p>
      </>
    ),
    // badge: "Launch Week",
    image:
      "https://i.pinimg.com/originals/8e/ef/47/8eef47716320064666bf79033a9a940b.jpg",
  },
  {
    title: "Chhattisgarh",
    description: (
      <>
        <p>
        The "Dhoti" and "Kacha" (a type of tunic) are simple yet functional garments suited to the region's climate and rural lifestyle.
        </p>
      </>
    ),
    // badge: "Launch Week",
    image:
      "https://i.pinimg.com/736x/6f/b2/6b/6fb26b705a673a96c84a668d98d304cd.jpg",
  },
  {
    title: "Gujarat",
    description: (
      <>
        <p>
        The "Kediya" (a short jacket) and "Dhoti" are traditional garments that showcase the region's cultural heritage and its emphasis on craftsmanship.
        </p>
      </>
    ),
    // badge: "Launch Week",
    image:
      "https://mews.in/wp-content/uploads/2021/12/kurta-is-the-traiditional-dress-for-men-in-gujarat.jpg",
  },
  {
    title: "Goa",
    description: (
      <>
        <p>
        The "Lungi" paired with a shirt is a traditional outfit that merges local styles with colonial influences, highlighting Goa's diverse historical influences.
        </p>
      </>
    ),
    // badge: "Launch Week",
    image:
      "https://i.pinimg.com/originals/43/a6/af/43a6affc533a009b30dc8f17c2af3016.jpg",
  },
  {
    title: "Haryana",
    description: (
      <>
        <p>
        The "Dhoti-Kurta" is a traditional ensemble reflecting the agrarian lifestyle and cultural practices of Haryana.

        </p>
      </>
    ),
    // badge: "Launch Week",
    image:
      "https://st4.depositphotos.com/33041278/37755/i/600/depositphotos_377559484-stock-photo-indian-male-dancing-folk-dance.jpg",
  },
];
export default TracingBeamDemoFemale