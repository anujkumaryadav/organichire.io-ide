//import React from "react"
import NotFoundGIF from './../assets/hum-pe-to-hai-hi-no-arpit-bala.gif'

export default function NotFound() {
  return (
    <>
      <div className='w-full h-[calc(100dvh-60px)] bg-gray-800 text-white grid justify-center items-center text-2xl font-bold'>
        
        <img src={NotFoundGIF}/>
        <h1 className='flex justify-center items-center'>404 - Not Found</h1>
    
      </div>
    </>
  )
}
