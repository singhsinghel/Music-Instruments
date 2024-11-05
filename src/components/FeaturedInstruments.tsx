"use client";

import React from "react";
import instrumentsData from "../data/music_instruments.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import Link from "next/link";

const FeaturedInstruments = () => {
  interface Instrument {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    brand: string;
    isFeatured: boolean;
    image: string;
  }
  const featuredInstruments = instrumentsData.instruments.filter(
    (instrument: Instrument) => instrument.isFeatured
  );
  return (
    <div className=" py-12 px-2 bg-gray-900 flex flex-col justify-center items-center">
      <div>
        <div className="text-center">
          <h2 className=" text-base text-teal-600 font-semibold tracking-wide">
            FEATURED INSTRUMENTS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl ">
            LEARN WITH THE BEST
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredInstruments.map((instrument: Instrument) => {
            return (
              <div key={instrument.id} className="flex justify-center">
                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                  <Image
                       src={instrument.image}
                       alt="jordans"
                       height="400"
                       width="400"
                       className="object-contain rounded-[22px]"
                     />
                  <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {instrument.title}
                  </p>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {instrument.description}
                  </p>

                </BackgroundGradient>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          href={"Instruments"}
        >
          VIEW ALL INSTRUMENTS
        </Link>
      </div>
    </div>
  );
};

export default FeaturedInstruments;
