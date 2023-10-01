import category from "@/data/category";
import Image from "next/image";
import React, { useState } from "react";
import {FiSearch} from 'react-icons/fi'

const Hero = ({userInput}:any) => {

  const [searchInput, setSearchInput] = useState("")

  return (
    <div className="text-center">
      <div>
        <Image
          src="/bg.png"
          alt="bg"
          width={800}
          height={200}
          className="w-full absolute z-[-10] mt-[-50px]"
        />
        <div className="mt-[70px] relative z-10">
          <h2 className="text-[55px] text-red-600 tracking-widest font-semibold">
            DISCORVER
          </h2>
          <h2 className="text-[20px] capitalize">your amazing city</h2>
          <div className="mt-5 flex justify-center gap-2">
            <input type="text" 
            onChange={(e)=>setSearchInput(e.target.value)}
            value={searchInput} 
            placeholder="Search Anything" 
            className="bg-white p-3 outline-red-600 border-[1px] rounded-full px-5 w-[36%] shadow-sm" />
            <button 
            onClick={()=>userInput(searchInput)}
            className="cursor-pointer bg-red-600 p-4 hover:scale-105 text-[20px] rounded-full text-white transition duration-300">
                <FiSearch/>
            </button>
          </div>
          <div className="mt-5">
            <h2>Or Browse the category</h2>
            <div className="grid grid-cols-3 md:grid-cols-7 md:w-[50%] place-items-center place-content-center gap-5 mt-3 mx-auto">
                {category.map((item,index)=>(
                    <div key={index} className="border-[1px] w-[60px] p-4 bg-white rounded-full hover:border-red-600 hover:scale-110 cursor-pointer transition">
                        <Image src={item.icon} alt={item.name} width={30} height={30}/>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
