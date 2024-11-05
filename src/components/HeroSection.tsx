import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div
      className="h-dvh w-full rounded-md 
    flex flex-col justify-center items-center 
    relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <div className="p-4 relative z-10 w-full text-center">
        <Spotlight
          className="-top-20 left-0 md:left-60 lg:left-[30%] md:-top-20"
          fill="white"
        />
        <h1
          className=" mt-20 md:mt-0 text-4xl md:text-7xl
          font-bold bg-clip-text text-transparent
          bg-gradient-to-b from-neutral-50 to-neutral-400 "
        >
          Play Your Heart Out
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Unleash your potential with instruments that blend quality and
          passion. Whether you’re a beginner or a seasoned artist, explore a
          wide range of instruments that are designed to bring your sound to
          life. Start your musical journey with us today!
        </p>
        <div className="mt-10">
          <Link href={"/Instruments"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Instruments
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
