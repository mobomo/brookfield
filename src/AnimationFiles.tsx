import React from 'react';
import './App.css';
import Lottie from 'react-lottie';
import animations from './jfiles'


export const FrameTitle = () => {
  return (
      <div className='flex text-white  text-6xl  justify-center mb-20 font-opensans font-black'>Brookfield</div>
  )
}

export const Frame0 = () => {
  return (
      <div className='flex text-white text-4xl w-70 text-center font-playfair font-mediumplus justify-center'>Evolving to offer the best of both worlds</div>
  )
}
export const Frame00 = () => {
  return (
      <div className='flex text-white text-sm  w-100 text-center font-semibold'>We are leveraging a century of private investment experience owning and operating assets and twenty years of offering private investment opportunities to LP, creating a new opportunity for investors to benefit from our investment expertise</div>
  )
}
export const Frame1 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.loader ,
    }
  return (
    <div className='w-6/7'>
      <Lottie options={defaultOptions} />
      </div>
    )
};
export const Frame000 = () => {
  return (
    <div className='flex flex-col text-center justify-center items-center mt-36'>
      <div className='flex text-white text-ms  w-100 text-center font-semibold mb-5'>We have delivered superior long-term returns by following a patient, value-oriented approach to investing, growing the breadth and depth of our portfolio over the years...
      </div>
      <div>
        <div className='flex text-white text-ms  w-99 text-center font-semibold'>All the while leveraging our operational expertise to improve outcomes for our business, investors and communities</div>
      </div>
    </div>
  )
}
export const Frame2 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.anim1 ,
    }
    return  <Lottie options={defaultOptions} />
};

export const Frame3 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.anim2 ,
    }
    return  <Lottie options={defaultOptions} />
};

export const Frame4 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.anim3 ,
    }
    return  <Lottie options={defaultOptions} />
};
export const Frame5 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.anim5 ,
    }
    return  <Lottie options={defaultOptions} />
}

export const Frame6 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.icon1 ,
    }
    return  <Lottie options={defaultOptions} />
};
export const Frame7 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.icon1v2 ,
    }
    return  <Lottie options={defaultOptions} />
};

export const Frame8 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.icon2 ,
    }
    return  <Lottie options={defaultOptions} />
};



