import { Animation5, Animation5a, Animation6, Animation6a, Animation7, Animation7a } from '../Animations'
import Opacity from '../springs/Opacity'
import Shape from '../springs/Shape'
import Move from '../springs/Move'
import { useSpring, animated } from 'react-spring'
import React, { ReactNode } from 'react'
import Lottie from 'react-lottie';
import animations from '../jfiles'
import { Waypoint } from 'react-waypoint'



export const FifthFrame = ({mobileVersion}:{mobileVersion:boolean}) => {

  const [on, toggle] = React.useState(false);

  return (
    <div className={`flex justify-center w-full bg-white flex-col text-brandblue lg:px-8 py-26 ${!mobileVersion?'animate-coverLayer':''} lg:h-200 px-2`}> 
         {/* <div className={`flex justify-center w-full bg-white flex-col text-brandblue md:px-60 py-26 animate-coverLayer lg:h-200 px-2`}>  */}
          <div className='flex bg-white justify-center items-center flex-col-reverse md:flex-row px-2 lg:px-3 xl:px-4 2xl:px-0 4xl:px-8 '>
                <div className='flex flex-col  justify-center text-left  gap-1 lg:gap-2 -mt-10 md:mt-0 mb-10 px-4  lg:w-97  md:w-97'>
                      <div className='flex  text-2xl lg:text-4xl  font-semibold font-playfair'>
                        Brookfield Asset Management
                      </div>
                      <div className='flex text-xs lg:text-base   w-full md:w-9775'>
                        An asset-lite manager investing third party capital through its private funds
                      </div>
                      <div  className='flex text-xs lg:text-base   ml-5 md:text-sm'>
                        <li >Manages money for Limited Partners</li>
                      </div>
                      <div  className='flex text-xs lg:text-base   ml-5 md:text-sm'>
                        <li >Requires little or no [balance sheet] capital</li>
                      </div>
                      <div  className='flex text-xs lg:text-base   ml-5 md:text-sm'>
                        <li >[Higher] dividend payout ratio</li>
                      </div>
                </div>
          

                <div className='md:-mt-0 flex justify-center items-center self-center -mt-20 px-2 lg:px-4 max-w-40 md:w-full'>
                  {on? <Animation5a/> :<Animation5 />}
                </div>

         
          </div>
          <Waypoint
                onEnter={() => toggle(true)}
                bottomOffset={'0px'}
        onLeave={() => toggle(false)}
      
              />
         
         <div className=''>  {on ? <Animation6a /> : <Animation6 />}</div>
    </div>
  )
}

export default FifthFrame