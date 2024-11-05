"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import data from "../data/music_instruments.json";
const Testimonials = () => {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z"></div>
      <div className="h-[40rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10 ">
          Voices of satisfaction
        </h2>
        <InfiniteMovingCards
          items={data.testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Testimonials;
