import React, { useRef, useState } from 'react'
import intro from '../../asset/meal.mp4'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';   

const Intro = () => {
  const [playVideo, setPlayVideo] =useState(false);
  const vidRef = useRef();
  return (
    <div className='bg-[#0C0C0C] flex justify-center p-5 relative'>
      <video src={intro} ref={vidRef} type="video/mp4" loop controls={false} muted className='w-full h-[70vh] object-cover'/>
      <div className='flex justify-center absolute items-center h-full inset-0 bg-[rgba(0,0,0,0.65)]'>
      <div className="flex justify-center items-center w-20 h-20 rounded-full border-2 border-[var(--color-golden)] cursor-pointer" onClick={() => { setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Intro