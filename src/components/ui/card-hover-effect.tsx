import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";

import Image from "next/image";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id: string;
    name: string;
    code: string;
    price: string;
    image: string;
    alt: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10", // <-- added gap-8 for spacing
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative group p-4 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Background Hover Effect */}
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl z-10"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          {/* Card Content */}
          <div className="rounded-2xl overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
            <div className="relative w-full h-60">
              <Image
                src={item.image}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-t-2xl"
              />
            </div>
            <div className="p-4">
              <h4 className="text-zinc-100 font-bold tracking-wide">
                {item.name}
              </h4>
              <p className="text-zinc-400 tracking-wide leading-relaxed text-sm mt-2">
                Code: {item.code}
              </p>
              <p className="text-zinc-100 font-semibold mt-2">{item.price}</p>
              <button className="mt-4 w-full rounded-full bg-[var(--color-primary)] py-2.5 px-5 text-sm font-semibold text-white hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)]">
                Add to Quote
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
