import { Animation2, Animation2a } from '../Animations'
import Opacity from '../springs/Opacity'
import { Waypoint } from 'react-waypoint'
import React from 'react'

export const FourthFrame = () => {
  const [on, toggle] = React.useState(false);
  
  return (
    <div className='flex items-center text-brandblue  flex-col-reverse md:flex-row -mt-40 md:mt-0 '>
       <div className='flex flex-col w-full md:w-97 justify-center text-left gap-3 -mt-5 md:mt-0 px-8 '>
                  <div className=' md:text-4.75xl text-2xl  font-bold font-playfair'>
                    Brookfield Corporation
                  </div>
                  <div className='md:text-base text-ms font-mediumplus '>
                    Reinvest the bulk of its earnings for a steady return with a long-term horizon in mind
                  </div>
                  <div className='md:text-base text-ms'>
                    <li>Retains / Reinvests the bulk of its earnings</li>
                  </div>
        </div>


  <Waypoint
        onEnter={() => toggle(true)}
        bottomOffset={'200px'}
        onLeave={() => toggle(false)}
      />

   <div className='animate-layerOpacity max-w-40  md:max-w-9777'> { on?<Animation2 />:<Animation2a /> }</div>
 
    </div>
  )
}

export default FourthFrame