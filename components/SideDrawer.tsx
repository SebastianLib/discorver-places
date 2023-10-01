import Image from "next/image";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const BASE_URL_PHOTO =
  "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400";

const SideDrawer = ({ setSelectedPlace, place }: any) => {

    const onDirectionClick = () => {
        window.open("https://www.google.com/maps/search/?api=1&query="+place.name+place.formatted_address)
    }

  return (
    <div className="h-screen w-screen md:w-[400px] bg-white shadow-md p-5 z-20">
      <AiOutlineClose onClick={() => setSelectedPlace(null)} />

      <div>
        <h2 className="line-clamp-2 text-[23px] font-semibold mb-3">
          {place.name}
        </h2>
        <Image
          src={
            BASE_URL_PHOTO +
            "&photo_reference=" +
            place?.photos[0].photo_reference +
            "&key=" +
            process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY
          }
          alt="placeholder"
          width={200}
          height={80}
          className="w-full h-[170px] object-cover"
        />
        <div className="flex gap-2 mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <h2
            className="text-[12px]
             text-gray-400 line-clamp-2"
          >
            {place.formatted_address}
          </h2>
        </div>
        <div className="flex gap-2 mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>

          <h2
            className="text-[12px]
             text-gray-400 line-clamp-2 tracking-wider"
          >
            {place.rating} ({place.user_ratings_total})
          </h2>
        </div>
        <div className="flex gap-6 mt-4">
          <button onClick={()=>onDirectionClick()} className="border-none bg-red-500 px-4 py-2 text-white rounded-xl">
            Direction
          </button>
          <button className="border-none bg-red-500 px-4 py-2 text-white rounded-xl">
            Share
          </button>
        </div>
        <div>
          <iframe
            width={600}
            height={450}
            loading="lazy"
            className="w-full h-[200px] rounded-lg mt-6"
            src={"https://www.google.com/maps/embed/v1/place?key="+process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY+"&q="+place.formatted_address}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
