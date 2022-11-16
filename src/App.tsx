
import { useEffect, useState, useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import TitleFrame from './frames/TitleFrame'
import  IntroFrame  from './frames/IntroFrame'
import  SecondFrame  from './frames/SecondFrame'
import FirsthFrame from './frames/FirsthFrame'
import  ThirdFrame  from './frames/ThirdFrame'
import  FourthFrame  from './frames/FourthFrame'
import  FifthFrame  from './frames/FifthFrame'
import  SixthFrame  from './frames/SixthFrame'
import SeventhFrame from './frames/SeventhFrame'
import EighthFrame  from './frames/EightFrame'
import Opacity from './springs/Opacity'
import { Waypoint } from 'react-waypoint'
import useTWMediaQueriesTemplate from './utils/getTWMediaQueriesTemplate';


const App = () => {
  const [inView, setInview] = useState(false);
  const  twStyles   = useTWMediaQueriesTemplate
  console.log('twStyles: ', twStyles);
  
  return (
    <Parallax
      pages={5}
      style={{ top: '0', left: '0', backgroundColor: '#002A4E' }}
    >
      {/* Page 1 */}
           {/* Intro text only */}
      <ParallaxLayer
        offset={0}
        speed={1}
        className='flex flex-col text-center justify-center items-center '
        style={{  height: '80vh' }}
      >
        <TitleFrame />

      </ParallaxLayer>
      
      {/* Page 2 */}
     {/* Evolving to offer the best of both worlds */}
      <ParallaxLayer
        offset={0.5}
        speed={0}
        className='flex flex-col text-center justify-start items-center'
        style={{ height: '100vh' }}  
      >
        <IntroFrame />

       <FirsthFrame  />

      </ParallaxLayer>
      {/* Page 3 */}
       {/* Two distinct offerings - text and animation */}
      <ParallaxLayer
        offset={1}
        speed={0}
        className={twStyles('App','page3')}
        style={{ height: '60vh' }} 
      >

 <SecondFrame />

      </ParallaxLayer> 
      {/* Page 4
        {/* Another way to invest with Brookfield - text and animation */}
      <ParallaxLayer
            offset={1.5}
            speed={0}
        className={twStyles('App','page4')}
        // sticky={{ start: 3, end: 4 }}
         style={{ height: '55vh' }} 
      >

<ThirdFrame />

          
       
      </ParallaxLayer>
      {/* Page 5 */}
        {/* Brookfield corporation - animation and text */}
      <ParallaxLayer
            offset={2}
        //  offset={0.1}
            speed={0}
        className={twStyles('App','page5')}
        style={{ height: '50vh' }}
        // sticky={{ start: 2.5, end: 3 }}
      >

<FourthFrame />
        
      </ParallaxLayer>  
      {/* Page 6 */}
      {/* Brookfield Asset management - animation and text - iconrow animation */}

      <ParallaxLayer
        offset={2.2}
        speed={0}
        style={{ height: '50vh' }}
         className={twStyles('App','page6')}
      >
        <Waypoint
          onEnter={() => setInview(true)}
          bottomOffset={'550px'}
          topOffset={'-400px'}
          onLeave={() => setInview(false)}
        />
       {inView? <FifthFrame />:null}
        
      </ParallaxLayer>
      {/* Page 7 */}
      {/* Proven strategy - animation and text - hand animation */}
        <ParallaxLayer
          offset={2.8}
          speed={0}
        className={twStyles('App','page7')}
         style={{ height: '30vh' }}
      >
        {/* <Waypoint
          onEnter={() => setInview6(true)}
          bottomOffset={'400px'}
          topOffset={'-400px'}
          onLeave={() => setInview6(false)}
        /> */}
       <SixthFrame />
   
      </ParallaxLayer>
      {/* Page 8 */}
        {/* Proven strategy - animation and text - hand animation - lower slide pulls up 30% with text */}
      <ParallaxLayer
          offset={3.4}
        speed={0}
         className={twStyles('App','page8')}
      >
        {/* <Waypoint
          onEnter={() => setInview7(true)}
          bottomOffset={'400px'}
          topOffset={'-400px'}
          onLeave={() => setInview7(false)}
        /> */}
  <SeventhFrame />

      </ParallaxLayer>
</Parallax>
  
  )
}

export default App;





