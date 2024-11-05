import data from '@/data/music_instruments.json'
import { HoverEffect } from './card-hover-effect';


const MusicWebinars = () => {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className=" text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Webinars
          </h2>
          <p className=" mt-2 leading-8 font-extrabold tracking-tight text-3xl text-white">
            Enhanced musical journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect items={data.webinars} />
        </div>
      </div>
    </div>
  );
}

export default MusicWebinars
