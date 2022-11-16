import { Animation5, Animation5a, Animation6, Animation6a, Animation7, Animation7a } from '../Animations'
import Opacity from '../springs/Opacity'
import Shape from '../springs/Shape'
import Move from '../springs/Move'
import { useSpring, animated } from 'react-spring'
import React, { ReactNode } from 'react'
import Lottie from 'react-lottie';
import animations from '../jfiles'
import { Waypoint } from 'react-waypoint'



export const FifthFrame = () => {

  const [on, toggle] = React.useState(false);

  return (
    //  <div topOffset={'0px'} bottomOffset={'200px'} delay={0} duration={300}   twstyles={'flex justify-center w-full bg-white flex-col text-brandblue px-60 pb-20 -mt-48'} Enter={true} Leave={false}>
    <div className='flex justify-center w-full bg-white flex-col text-brandblue md:px-60 pb-20  animate-coverLayer lg:h-200 px-2'> 
          <div className='flex bg-white justify-center flex-col-reverse md:flex-row'>
                <div className='flex flex-col  justify-center text-left gap-1 -mt-20 md:mt-0 mb-5'>
                      <div className='flex  text-4.5xl  font-semibold font-playfair'>
                        Brookfield Asset Management
                      </div>
                      <div className='flex  text-base   w-full md:w-9775'>
                        An asset-lite manager investing third party capital through its private funds
                      </div>
                      <div  className='flex  text-base   ml-5 md:text-sm'>
                        <li >Manages money for Limited Partners</li>
                      </div>
                      <div  className='flex  text-base   ml-5 md:text-sm'>
                        <li >Requires little or no [balance sheet] capital</li>
                      </div>
                      <div  className='flex  text-base   ml-5 md:text-sm'>
                        <li >[Higher] dividend payout ratio</li>
                      </div>
                </div>
          

        <div className='md:-mt-0 flex justify-center items-center self-center -mt-20'>
           {on? <Animation5a/> :<Animation5 />}
        </div>

         
          </div>
          <Waypoint
                onEnter={() => toggle(true)}
                bottomOffset={'200px'}
                onLeave={() => toggle(false)}
              />
          {on ?
          <Animation6a /> : <Animation6 />}
    </div>
  )
}

export default FifthFrame