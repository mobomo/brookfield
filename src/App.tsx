
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TitleFrame from './frames/TitleFrame'
import  IntroFrame  from './frames/IntroFrame'
import  SecondFrame  from './frames/SecondFrame'
import FirsthFrame from './frames/FirsthFrame'
import  ThirdFrame  from './frames/ThirdFrame'
import  FourthFrame  from './frames/FourthFrame'
import  FifthFrame  from './frames/FifthFrame'
import  SixthFrame  from './frames/SixthFrame'
import  SeventhFrame  from './frames/SeventhFrame'


const App = () => {
  return (
    <Parallax
      // config={{ duration: 10 }}
      pages={6}
      style={{ top: '0', left: '0', backgroundColor: '#002A4E' }}>
      {/* Page 1 */}
           {/* Intro text only */}
      <ParallaxLayer
        offset={0}
        speed={2}
        className='flex flex-col text-center justify-center items-center'
      >

        <TitleFrame />

      </ParallaxLayer>
      {/* Page 2 */}
     {/* Evolving to offer the best of both worlds */}
      <ParallaxLayer
        offset={0.1}
        speed={0.2}
        className='flex flex-col text-center justify-center items-center '
      >

        <IntroFrame />
        
      </ParallaxLayer>
      {/* Page 3 */}
        {/* Enters animation city */}
      <ParallaxLayer
            offset={0.8}
        speed={0.7}
        className='flex justify-center items-center '
      >
        
        <FirsthFrame />

      </ParallaxLayer>
      {/* Page 4 */}
       {/* Two distinct offerings - text and animation */}
      <ParallaxLayer
            offset={1}
        speed={0.7}
        className='flex justify-center items-center '
      >
        
        <SecondFrame />
        
      </ParallaxLayer> 
      {/* Page 5
        {/* Another way to invest with Brookfield - text and animation */}
      <ParallaxLayer
            offset={1.8}
            speed={0.6}
            className='flex flex-col justify-center items-center '
      >
     
        <ThirdFrame />
       
      </ParallaxLayer>
      {/* Page 6 */}
        {/* Brookfield corporation - animation and text */}
      <ParallaxLayer
            offset={2}
        //  offset={0.1}
            speed={0.2}
            className='flex flex-col text-center justify-center items-center bg-blue-300'
      >

        <FourthFrame />
        
      </ParallaxLayer>  
      {/* Page 7 */}
        {/* Brookfield Asset management - animation and text - iconrow animation */}
      <ParallaxLayer
          offset={3}
        //  offset={0.9}
          speed={0.5}
          //  className='flex justify-center bg-white'
      >

         <FifthFrame />
      
      </ParallaxLayer>
      {/* Page 8 */}
      {/* Proven strategy - animation and text - hand animation */}
        <ParallaxLayer
          offset={4}
          speed={0.5}
          className='flex flex-col text-center justify-center items-center '
      >

        <SixthFrame />
        
      </ParallaxLayer>
      {/* Page 9 */}
        {/* Proven strategy - animation and text - hand animation - lower slide pulls up 30% with text */}
      <ParallaxLayer
          offset={5}
          speed={0.5}
          className=' '
      >

        <SeventhFrame />

      </ParallaxLayer>
</Parallax>
  
  )
}

export default App;



