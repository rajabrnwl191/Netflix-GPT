import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-36 absolute w-screen h-[95vh] text-white bg-gradient-to-r from-black ">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className='py-6 text-md w-[30%] text-gray-200'>{overview}</p>
      <div className=''>
        <button className="w-[12%] bg-white text-black   py-3 text-xl hover:bg-opacity-50 rounded-lg">Play</button>
        <button className="w-[12%] mx-2 bg-gray-500  text-white py-3 text-xl bg-opacity-50 rounded-lg">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;