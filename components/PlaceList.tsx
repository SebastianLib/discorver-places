import React, { useState } from 'react'
import PlaceItemCard from './PlaceItemCard';
import SideDrawer from './SideDrawer';
import Skelton from './Skelton';

const PlaceList = ({placeList}:any) => {
    const [selectedPlace, setSelectedPlace] = useState<any>(null)

  return (
    <div className='relative z-30 px-[10px] xl:px-[120px]'>
        <h2 className='text-[20px] font-bold'>Search Results</h2>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
            {placeList.map((place:any,index:number)=>(
                <div key={index} onClick={()=>setSelectedPlace(place)}>
                    <PlaceItemCard place={place}/>
                </div>
            ))}
        </div>
        {selectedPlace &&<div className='fixed top-0 right-0'>
            <SideDrawer place={selectedPlace} setSelectedPlace={setSelectedPlace}/>
        </div>}
        {placeList.length==0 &&<div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
            {[1,2,3,4,5,6,7].map((item,index)=>(
                <Skelton/>
            ))}
        
        </div>}
    </div>
  )
}

export default PlaceList