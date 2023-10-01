"use client"

import Hero from "@/components/Hero";
import PlaceList from "@/components/PlaceList";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [placeList, setPlaceList] = useState([])

  useEffect(()=>{
    getPlaceList("Hotels In New York");
  },[])

  const getPlaceList=async(value:string)=>{
    setPlaceList([])
    
    const result = await fetch("/api/google-place-api?q="+value)
    const data=await result.json();
    setPlaceList(data.results);
  }
  return <div className="overflow-x-hidden">
    <Hero userInput={getPlaceList}/>
    {placeList? <PlaceList placeList={placeList}/>: "loading"}
  </div>;
}
