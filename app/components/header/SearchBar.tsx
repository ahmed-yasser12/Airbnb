"use client"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker, RangeKeyDict } from 'react-date-range';
import { SearchIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Link from 'next/link';
function SearchBar() {
  const [input, setInput] = useState('')
  const [numberOfGuest, setnumberOfGuest] = useState(1)
  const [startData, setstartData] = useState(new Date())
  const [endData, setendData] = useState(new Date())
 const handleSelect=(ranges:RangeKeyDict)=>{
   setstartData(ranges.selection.startDate  as Date)
   setendData(ranges.selection.endDate as Date)
   console.log(startData)
  }
  const selectionRange = {
      startData,
      endData ,
      key: 'selection',
    }
  return (
   <>
   <div className="search-bar flex items-center border-2 rounded-full py-2 px-4 shadow-md">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Start your Search"
        className="text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none"
      />

      <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
    </div>
    {input &&  <div className="mt-4  top-[100%] left-[50%] -translate-x-[50%]  absolute text-sm text-gray-600"> 
      <DateRangePicker
        ranges={[selectionRange]}
        rangeColors={['#FD5B61']}
        minDate={ new Date()}
        onChange={(e) => handleSelect(e)}
      />
      <div className="flex items-center border-b bg-white p-2">
        <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
        <input type="number" onChange={(e)=>setnumberOfGuest(Number(e.target.value))} defaultValue={1} min={1} className="w-12 pl-2 text-lg outline-none text-red-400"/>
      </div>
      <div className="flex justify-evenly bg-white p-2">
        <button className=" text-gray-500" onClick={()=>setInput('')}>Cancel</button>
        <Link href={"/"} className=" text-red-400">Search</Link>
      </div> </div> }

   </>
   
  );
}

export default SearchBar;
