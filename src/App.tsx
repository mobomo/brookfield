
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
import Opacity from './springs/Opacity'


const App = () => {

  return (
    <Parallax
      // config={{ duration: 10 }}
      pages={5.85}
      style={{ top: '0', left: '0', backgroundColor: '#002A4E' , bottom:'0'}}>
      {/* Page 1 */}
           {/* Intro text only */}
      <ParallaxLayer
        offset={0}
        speed={1}
        className='flex flex-col text-center justify-center items-center'
        style={{  height: '80vh' }}
      >

        <TitleFrame />

      </ParallaxLayer>
      {/* Page 2 */}
     {/* Evolving to offer the best of both worlds */}
      <ParallaxLayer
        offset={0.5}
        speed={0}
        className='flex flex-col text-center justify-start items-center '
            // sticky={{ start: 0.5, end: 1 }}
        style={{ height: '100vh' }}  
      >
        <IntroFrame />

        <Opacity  bottomOffset={'600px'} delay={0} duration={800} twstyles={'flex justify-center'}>
          
        <FirsthFrame />

       </Opacity>

      </ParallaxLayer>
      {/* Page 4 */}
       {/* Two distinct offerings - text and animation */}
      <ParallaxLayer
        offset={1}
        speed={0}
        className='flex justify-center items-center 2xl:mt-60  3xl:mt-80   4xl:mt-0  '
          //  sticky={{ start: 2, end: 2.25 }}
        style={{ height: '60vh' }} 
      >
        {/* <Move topOffset={'-150px'} bottomOffset={'0px'} delay={0} duration={400} twstyles={'flex justify-center mt-40'} Enter={true} Leave={true} moveY={'0px'}> */}
        <Opacity bottomOffset={'600px'} delay={0} duration={800} twstyles={'flex justify-center'}>
          
        <SecondFrame />

        </Opacity>
         {/* </Move> */}
        
      </ParallaxLayer> 
      {/* Page 5
        {/* Another way to invest with Brookfield - text and animation */}
      <ParallaxLayer
            offset={2}
            speed={0}
        className='flex flex-col justify-center items-center 2xl:mt-60  3xl:mt-0   4xl:mt-0  '
        // sticky={{ start: 3, end: 4 }}
         style={{ height: '80vh' }} 
      >
       
        <ThirdFrame />

          
       
      </ParallaxLayer>
      {/* Page 6 */}
        {/* Brookfield corporation - animation and text */}
      <ParallaxLayer
            offset={2.8}
        //  offset={0.1}
            speed={0}
        className='flex  text-center justify-center items-center -mt-20 bg-blue-300 '
        style={{ height: '60vh' }}
        // sticky={{ start: 2.5, end: 3 }}
      >

          
        <FourthFrame />

        
      </ParallaxLayer>  
      {/* Page 7 */}
        {/* Brookfield Asset management - animation and text - iconrow animation */}
      <ParallaxLayer
          offset={3}
        //  offset={0.9}
        speed={0}
        style={{ height: '40vh' }}
      //  sticky={{ start: 3, end: 3.5 }}
      >
 {/* <Move topOffset={'0px'} bottomOffset={'100px'} delay={0} duration={400} twstyles={'flex justify-center'} Enter={true} Leave={true}> */}
 
         <FifthFrame />
   
          {/* </Move> */}
            

      
      </ParallaxLayer>
      {/* Page 8 */}
      {/* Proven strategy - animation and text - hand animation */}
        <ParallaxLayer
          offset={4}
          speed={0}
        className='flex flex-col text-center justify-center items-center mb-40 mt-40'
        // sticky={{ start: 4.1, end: 4.5 }}
         style={{ height: '60vh' }}
      >

        <SixthFrame />
   
      </ParallaxLayer>
      {/* Page 9 */}
        {/* Proven strategy - animation and text - hand animation - lower slide pulls up 30% with text */}
      <ParallaxLayer
          offset={5.6}
          speed={0}
        // className='-mb-80'
        // style={{ height: '40vh' }}
        // sticky={{ start: 4, end: 4.5}}
      >
        <SeventhFrame />

      </ParallaxLayer>
</Parallax>
  
  )
}

export default App;



