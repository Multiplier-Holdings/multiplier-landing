"use client";

import FadeIn from "@/components/animations/FadeIn";
import Image from "next/image";

const INVESTORS = [
  { name: "Lightspeed", logo: "/investors/lightspeed.svg" },
  { name: "Ribbit Capital", logo: "/investors/ribbit.svg" },
  { name: "SV Angel", logo: "/investors/svangel.svg" },
];

export default function Investors() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <span className="kicker text-forest/60 text-center">
            Our Investors
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-forest text-center leading-tight tracking-tight">
            Backed by those who
            <br />
            share our vision.
          </h2>
        </FadeIn>

        <div className="flex items-center justify-center gap-16 md:gap-24 mt-20">
          {INVESTORS.map((investor, index) => (
            <FadeIn key={investor.name} delay={index * 80}>
              <div className="flex items-center justify-center h-12 opacity-70 hover:opacity-100 transition-opacity">
                <Image
                  src={investor.logo}
                  alt={investor.name}
                  width={140}
                  height={48}
                  className="h-8 md:h-10 w-auto object-contain"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
