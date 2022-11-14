import { Animation5, Animation6 } from '../Animations'
import Opacity from '../springs/Opacity'
import Shape from '../springs/Shape'
import Move from '../springs/Move'
import { useSpring, animated } from 'react-spring'
import React, { ReactNode } from 'react'
import Lottie from 'react-lottie';
import animations from '../jfiles'




const Mov = ({ children }:{children:ReactNode}) => {
   const [on, toggle] = React.useState(false);

    const props = useSpring({
    to: {
      transform: on ? 'translate3d(0,0,0)' : 'translate3d(0,200px,0)',
      opacity: on ? 1 : 0.5,
      scale: on ? 2 : 1,
    },
    config: { duration: 500 },
    })
  
  
  return (

    <animated.div
        style={props}
        className= {`flex w-full h-full bg-purple-400 justify-center items-center`}
        onClick={() => toggle(!on)}
    >
      {children}
    </animated.div>

  )
}

export const FifthFrame = () => {

  return (
     <Move topOffset={'0px'} bottomOffset={'200px'} delay={0} duration={300}   twstyles={'flex justify-center w-full bg-white flex-col text-brandblue px-60 pb-20 -mt-48'} Enter={true} Leave={false}>
    {/* <div className='flex justify-center w-full bg-white flex-col text-brandblue px-60 pb-20 -mt-48'> */}
          <div className='flex bg-white justify-center'>
                <div className='flex flex-col  justify-center text-left gap-1'>
                      <div className='flex  text-4.5xl  font-semibold font-playfair'>
                        Brookfield Asset Management
                      </div>
                      <div className='flex  text-base   w-9775'>
                        An asset-lite manager investing third party capital through its private funds
                      </div>
                      <div  className='flex  text-base   ml-5'>
                        <li >Manages money for Limited Partners</li>
                      </div>
                      <div  className='flex  text-base   ml-5'>
                        <li >Requires little or no [balance sheet] capital</li>
                      </div>
                      <div  className='flex  text-base   ml-5'>
                        <li >[Higher] dividend payout ratio</li>
                      </div>
                </div>
          

        <div className='-mt-0 flex justify-center items-center self-center'>
          <Animation5/>
        </div>

         
          </div>

              <Animation6   />

    </Move>

          


  )
}

export default FifthFrame