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
        The "Pochampally" saree, also known as Ikat, is famous for its tie-dye technique that creates intricate patterns. Historically, Pochampally sarees are associated with the weaving tradition that dates back several centuries, highlighting the region's rich textile heritage.
        </p>
      </>
    ),
    // badge: "React",
    image:
      "https://th.bing.com/th/id/R.94bb7b6024865fb9f0afbbef9313d024?rik=M5xpXAI7OA1%2fSA&riu=http%3a%2f%2fhouseofelegance.in%2fcdn%2fshop%2fproducts%2fikat-silk-saree1.webp%3fv%3d1674304052&ehk=0ZBkkhIFQkqcIsBJhNXwv8tgucrflc12IFrj6h%2f4r3g%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    title: "Arunachal Pradesh",
    description: (
      <>
        <p>
        Apatani women wear a unique headdress adorned with beads and feathers, representing tribal identity and status. The use of elaborate jewelry and textiles is rooted in the tribal traditions that emphasize cultural preservation.
        </p>
      </>
    ),
    // badge: "Changelog",
    image:
      "https://i.pinimg.com/originals/6c/30/a0/6c30a01983d7b373815623f2b9ca1fe5.jpg",
  },
  {
    title: "Assam",
    description: (
      <>
        <p>
        The "Mekhela Chador" is a two-piece garment made from silk or cotton, with the "Mekhela" being a wrap-around skirt and the "Chador" a piece draped over the shoulder. It represents the Assamese way of life and has been worn for centuries, especially during festivals and ceremonial occasions.
        </p>
      </>
    ),
    // badge: "Launch Week",
    image:
      "https://www.mugasilk.in/wp-content/uploads/2016/11/275229458_3257110914519856_4447447953005900123_n-1-1253x1600.jpg",
  },
  {
    title: "Bihar",
    description: (
      <>
        <p>
        Traditional sarees in Bihar are often simple, reflecting the region’s historical emphasis on modesty and simplicity. The dress has evolved but retains its classic style.
        </p>
      </>
    ),
    // badge: "Launch Week",
    image:
      "https://i.pinimg.com/originals/2a/5b/d4/2a5bd4e80f883cb9390271e17231a11d.jpg",
  },
  {
    title: "Chhattisgarh",
    description: (
      <>
        <p>
        The "Lugda," a wrap-around skirt with a blouse, is a traditional dress that often features vibrant colors and patterns. This attire reflects the agrarian and forest-based lifestyle of Chhattisgarh's tribal communities.
        </p>
      </>
    ),
    // badge: "Launch Week",
    image:
      "https://i.pinimg.com/736x/5e/89/0a/5e890a75f06658196ff86f096c131528.jpg",
  },
  {
    title: "Gujarat",
    description: (
      <>
        <p>
        The "Chaniya Choli" is a colorful, embroidered outfit consisting of a skirt and blouse. This attire is known for its vibrant colors and intricate mirror work, which reflects Gujarat’s rich tradition of textiles and embroidery.
        </p>
      </>
    ),
    // badge: "Launch Week",
    image:
      "https://th.bing.com/th/id/OIP.4aF76oR_6hVEI7JFhQPQMgHaKX?rs=1&pid=ImgDetMain",
  },
  {
    title: "Goa",
    description: (
      <>
        <p>
        The "Saree" or "Lugda" with a "Choli" is worn in Goa, reflecting Portuguese influence in its styling, as well as local traditions.
        </p>
      </>
    ),
    // badge: "Launch Week",
    image:
      "https://www.ethnicplus.in/media/catalog/product/cache/784df61d3b5737a7531cd598aa4c9972/2/1/2115_1_flr.jpg",
  },
  {
    title: "Haryana",
    description: (
      <>
        <p>
        The "Ghagra-Choli" is a traditional outfit consisting of a long skirt and blouse, often worn with a dupatta. This attire represents the cultural and traditional values of Haryana’s rural communities.
        </p>
      </>
    ),
    // badge: "Launch Week",
    image:
      "https://th.bing.com/th/id/OIP.2sKY_8mVy3hpFz9bikJpLgAAAA?rs=1&pid=ImgDetMain",
  },
];
export default TracingBeamDemoFemale