"use client";
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          image={item.image}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "Kerala: The Legend of Onam",
    description: "Onam is a major festival in Kerala celebrated to honor the return of King Mahabali. According to legend, Mahabali was a benevolent demon king who ruled over Kerala, bringing prosperity and happiness. The gods, fearing his growing power, sent Lord Vishnu in the form of Vamana, a dwarf Brahmin, to subdue him. Despite his defeat, Mahabali was granted the boon to visit his kingdom once every year. Onam celebrates his visit with elaborate feasts, boat races, and floral decorations called Pookalam.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    image: "https://i.pinimg.com/originals/91/be/fb/91befb8cb96fb7eb3043fb4b493e692e.png" // Ensure this path is correct
  },
  {
    title: "West Bengal: The Story of the Durga Puja",
    description: "Durga Puja, celebrated with grandeur in West Bengal, commemorates the victory of Goddess Durga over the buffalo demon Mahishasura. According to mythology, Mahishasura was a demon who had terrorized the gods. In response, they combined their powers to create Durga, a warrior goddess with ten arms, each holding a weapon. The festival involves intricate rituals, vibrant processions, and elaborate idol immersions, showcasing the rich artistic and cultural heritage of Bengal.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    image: "https://th.bing.com/th/id/R.b7584d2090aff6260abb092b2d84ce8d?rik=3KG5BE9M0%2b7wsA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-bscIBg_w-c8%2fVCpgi8yOWxI%2fAAAAAAAAAvI%2f58NI0rmhxAQ%2fs1600%2fdurga-puja-wallpaper-4.jpg&ehk=nJ%2boW7QVqhJovxGMu1F2d3qq3u%2f7DklU5Sv5LiWfN2Y%3d&risl=&pid=ImgRaw&r=0" // Ensure this path is correct
  },
  {
    title: "Punjab: The Saga of the Guru Nanak",
    description: "Guru Nanak, the founder of Sikhism, was born in the Punjab region. His teachings emphasized equality, humility, and devotion to God. One famous story from his life is the encounter with the Muslim holy man, Mardana, during which Guru Nanak performed miracles, including turning water into a river of milk. Guru Nanak’s teachings are celebrated in Punjab through the Guru Nanak Gurpurab, marking his birth with prayers, hymns, and community feasts.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    image: "https://i.pinimg.com/originals/44/a8/ae/44a8ae8414a3e2def61a9d64d6bd6aa2.jpg" // Ensure this path is correct
  },
  {
    title: "Rajasthan: The Legend of the Meera Bai",
    description: "Meera Bai, a 16th-century saint-poetess from Rajasthan, is celebrated for her devotion to Lord Krishna. She was a Rajput princess who renounced her royal life to pursue a spiritual path. Her devotional songs and poems, expressing deep love for Krishna, became legendary. Meera Bai's story is one of devotion transcending societal norms, and her life is commemorated in the folk traditions and bhajans of Rajasthan.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    image: "https://lookmyindia.com/wp-content/uploads/2021/11/Mira-Bai-.png" // Ensure this path is correct
  },
  {
    title: "Gujarat: The Tale of the Rani of Jhansi",
    description: "Though primarily associated with the 1857 Rebellion, the legacy of the Rani of Jhansi (Lakshmibai) has strong connections to Gujarat. During the rebellion, she became a symbol of resistance against British colonial rule. Her bravery and leadership inspired many, including in Gujarat, where she is remembered and honored in various cultural events and historical narratives.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    image: "https://th.bing.com/th/id/R.8d2956b210445be4b69a05e39217c56c?rik=ZBiUGEUHmdCdwg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-I6BptSlPV0U%2fVpZcf5q-UPI%2fAAAAAAAAFqM%2fVnVUkzdwF48%2fw1200-h630-p-nu%2frani.jpg&ehk=5h3T09cCZAvpX8dPes%2fyD8yBfaSKdeX6OtpT6cIvpbk%3d&risl=&pid=ImgRaw&r=0" // Ensure this path is correct
  },
  {
    title: "Maharashtra: The Legend of Chhatrapati Shivaji Maharaj",
    description: "Chhatrapati Shivaji Maharaj, the founder of the Maratha Empire, is a revered figure in Maharashtra. His legend includes his innovative military strategies and his commitment to protecting his kingdom and its people. Shivaji is also celebrated for his promotion of religious tolerance and administration reforms. His fortresses, such as Shivneri Fort (his birthplace) and Raigad Fort, are important cultural landmarks in Maharashtra.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    image: "https://i.pinimg.com/736x/1f/92/97/1f9297a482be16d32e6417f00c39a180.jpg" // Ensure this path is correct
  },
  {
    title: "Uttar Pradesh: The Story of Ayodhya and Lord Ram",
    description: "Ayodhya, in Uttar Pradesh, is believed to be the birthplace of Lord Rama, the hero of the Ramayana. The Ramayana narrates the life of Rama, his exile, and his return to reclaim his kingdom. The city is a major pilgrimage site with numerous temples dedicated to Rama. The Ram Lalla Temple and the Karsevak Puram are central to the cultural and religious identity of Ayodhya.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    image: "https://wallpapercave.com/wp/wp4024166.jpg" // Ensure this path is correct
  },
  {
    title: "Tamil Nadu: The Epic of the Chola Dynasty",
    description: "The Chola Dynasty, which ruled Tamil Nadu from the 9th to the 13th centuries, is renowned for its contributions to art, architecture, and administration. The Brihadeeswarar Temple in Thanjavur, built by Rajaraja Chola I, is a UNESCO World Heritage site and exemplifies the grandeur of Chola architecture. The Cholas are also credited with significant advancements in Tamil literature and governance.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    image: "https://th.bing.com/th/id/R.b7584d2090aff6260abb092b2d84ce8d?rik=3KG5BE9M0%2b7wsA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-bscIBg_w-c8%2fVCpgi8yOWxI%2fAAAAAAAAAvI%2f58NI0rmhxAQ%2fs1600%2fdurga-puja-wallpaper-4.jpg&ehk=nJ%2boW7QVqhJovxGMu1F2d3qq3u%2f7DklU5Sv5LiWfN2Y%3d&risl=&pid=ImgRaw&r=0" // Ensure this path is correct
  },
  {
    title: "Maharashtra: The Legend of Chhatrapati Shivaji Maharaj",
    description: "Chhatrapati Shivaji Maharaj, the founder of the Maratha Empire, is a revered figure in Maharashtra. His legend includes his innovative military strategies and his commitment to protecting his kingdom and its people. Shivaji is also celebrated for his promotion of religious tolerance and administration reforms. His fortresses, such as Shivneri Fort (his birthplace) and Raigad Fort, are important cultural landmarks in Maharashtra.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    image: "https://th.bing.com/th/id/R.b7584d2090aff6260abb092b2d84ce8d?rik=3KG5BE9M0%2b7wsA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-bscIBg_w-c8%2fVCpgi8yOWxI%2fAAAAAAAAAvI%2f58NI0rmhxAQ%2fs1600%2fdurga-puja-wallpaper-4.jpg&ehk=nJ%2boW7QVqhJovxGMu1F2d3qq3u%2f7DklU5Sv5LiWfN2Y%3d&risl=&pid=ImgRaw&r=0" // Ensure this path is correct
  },
  {
    title: "West Bengal: The Story of the Durga Puja",
    description: "Durga Puja, celebrated with grandeur in West Bengal, commemorates the victory of Goddess Durga over the buffalo demon Mahishasura. According to mythology, Mahishasura was a demon who had terrorized the gods. In response, they combined their powers to create Durga, a warrior goddess with ten arms, each holding a weapon. The festival involves intricate rituals, vibrant processions, and elaborate idol immersions, showcasing the rich artistic and cultural heritage of Bengal.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    image: "https://th.bing.com/th/id/R.b7584d2090aff6260abb092b2d84ce8d?rik=3KG5BE9M0%2b7wsA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-bscIBg_w-c8%2fVCpgi8yOWxI%2fAAAAAAAAAvI%2f58NI0rmhxAQ%2fs1600%2fdurga-puja-wallpaper-4.jpg&ehk=nJ%2boW7QVqhJovxGMu1F2d3qq3u%2f7DklU5Sv5LiWfN2Y%3d&risl=&pid=ImgRaw&r=0" // Ensure this path is correct
  },
  // Add other items similarly, with images as needed
];

export default BentoGridDemo;
