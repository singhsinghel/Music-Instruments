"use client";

import { Suspense } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import data from "@/data/music_instruments.json";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const InstrumentList = () => {
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

  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const filteredInstruments = category
    ? data.instruments.filter(
        (instrument: Instrument) => instrument.category === category
      )
    : data.instruments;

  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-center text-4xl font-bold leading-loose">
        All Instruments ({filteredInstruments.length})
      </h1>

      <div className="flex flex-wrap justify-evenly">
        {filteredInstruments.map((instrument: Instrument, index) => (
          <CardContainer key={index} className="inter-var mx-4 ">
            <CardBody className="bg-gray-50 relative group/card dark:bg-black border w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem className="text-xl font-bold text-neutral-600 dark:text-white">
                {instrument.title}
              </CardItem>
              <CardItem
                as="p"
                className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
              >
                {instrument.description}
              </CardItem>
              <CardItem className="w-full mt-4">
                <Image
                  src={instrument.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  as={Link}
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  &#8377;{instrument.price} <br />
                  {instrument.category}
                </CardItem>
                <CardItem
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Buy
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<div>Loading instruments...</div>}>
      <InstrumentList />
    </Suspense>
  );
};

export default Page;
