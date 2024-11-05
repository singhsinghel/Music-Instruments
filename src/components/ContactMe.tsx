"use client";
import data from "../data/music_instruments.json";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

export function ContactMe() {
  return (
    <div className="flex relative justify-center items-center">
      <WavyBackground className="max-w-4xl mx-auto">
        <h2 className="font-bold text-5xl leading-loose">Contact Me</h2>
        <div className="flex mt-10 flex-row items-center justify-center mb-10 ">
          <AnimatedTooltip items={data.socials} />
        </div>
      </WavyBackground>
    </div>
  );
}
