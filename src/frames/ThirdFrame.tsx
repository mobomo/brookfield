import { Animation4 } from '../Animations'
import Opacity from '../springs/Opacity'
import { useState, useEffect } from 'react';
import { log } from 'console';

function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
return { width, height};
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}



export const ThirdFrame = () => {
  const { width, height } = useWindowDimensions();

  console.log(width, height);
  
  
  return (
    <div className='flex  '>
      <Opacity  twstyles='-mt-28 mr-10  md:mt-0'  bottomOffset='400px' topOffset='-400px'>
      <Animation4 />
      </Opacity>
      <div className='flex flex-col  md:w-96'>
        <div className={'flex flex-col w-97  justify-center text-left gap-3 mb-20  md:text-xl '}>
                  <div className='flex text-white text-4.75xl  font-mediumplus font-playfair md:text-2xl'>
                    Another way to invest with Brookfield
                  </div>
                  <div className='flex text-white text-base  font-semibold md:text-base  md:w-96'>
                    Investors looking for a pure-play asset manager to invest in-one with the backing of a company with over [50] years of investing experience and a strong track record of delivering returns to shareholders</div>
              </div>
      <div className='mb-0 -mt-5 ml-12 md:ml-0 '>
         {width<739? <svg width="333" height="168" viewBox="0 0 333 168" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="3.5" cy="164.5" r="3.5" transform="rotate(-180 3.5 164.5)" fill="#F5F5F5"/>
              <line x1="3.5" y1="164" x2="3.5" y2="84" stroke="#F5F5F5"/>
              <line x1="332.5" y1="85" x2="332.5" stroke="#F5F5F5"/>
              <line x1="3" y1="84.5" x2="333" y2="84.5" stroke="#F5F5F5"/>
            </svg> :
            <svg width="226" height="168" viewBox="0 0 226 168" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="2.37537" cy="164.5" rx="2.37538" ry="3.5" transform="rotate(-180 2.37537 164.5)" fill="#F5F5F5"/>
                <line x1="2.21471" y1="164" x2="2.21471" y2="84" stroke="#F5F5F5"/>
                <line x1="225.5" y1="85" x2="225.5" stroke="#F5F5F5"/>
                <line x1="2.03603" y1="84.5" x2="226" y2="84.5" stroke="#F5F5F5"/>
            </svg>}
        </div>
      </div>
      
    </div>
  )
}

export default ThirdFrame