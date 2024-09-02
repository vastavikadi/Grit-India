"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  image,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  image?: string;
}) => {
  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4",
        className
      )}
    >
      {header}
      {image && (
        <div className="relative w-full h-40 mb-2 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title?.toString() || 'Image'}
            layout="fill" // Fill the container
            objectFit="cover" // Cover the container
            className="rounded-lg"
          />
        </div>
      )}
      <div className="flex items-center mb-2">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 ml-2">
          {title}
        </div>
      </div>
      <div className="relative">
        <p className="line-clamp-3 group-hover:line-clamp-none text-xs font-sans font-normal text-neutral-600 dark:text-neutral-300 transition-all duration-300 ease-in-out">
          {description}
        </p>
      </div>
    </div>
  );
};
