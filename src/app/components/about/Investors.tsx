"use client";

import FadeIn from "@/components/animations/FadeIn";

const INVESTORS = [
  { name: "Lightspeed", role: "Series A Lead" },
  { name: "Ribbit Capital", role: "Seed Lead" },
  { name: "SV Angel", role: "Seed" },
];

export default function Investors() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <p className="text-forest/40 text-sm uppercase tracking-[0.15em] mb-20 text-center">
            Backed by
          </p>
        </FadeIn>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
          {INVESTORS.map((investor, index) => (
            <FadeIn key={investor.name} delay={index * 80}>
              <div className="text-center">
                <span className="font-serif text-2xl md:text-3xl text-forest tracking-tight">
                  {investor.name}
                </span>
                <p className="text-forest/40 text-xs uppercase tracking-[0.1em] mt-2">
                  {investor.role}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
