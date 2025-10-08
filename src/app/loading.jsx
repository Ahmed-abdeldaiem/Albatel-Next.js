
import React from 'react'

import FadeLoader from 'react-spinners/FadeLoader'
import { PulseLoader } from 'react-spinners'




export default function Loader() {



  return <>
  
  <div className="fixed inset-0  flex justify-center items-center bg-gray-100 bg-opacity-80 z-50">
  {/* Image Container */}
  <div className='flex flex-col justify-center items-center'>
  <div className=" flex justify-center items-center z-50">
    <img
      src="/BatelLogo1.png"
      alt="Centered Logo"
      className="w-24 h-24 rounded-full object-contain opacity-80"
    />
  </div>

  {/* Pulse Loader */}
  <PulseLoader color={"#0099"} loading={true} />
  </div>


</div>

  </>
}
