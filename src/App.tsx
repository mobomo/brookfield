
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {useSpring, animated} from 'react-spring'
// import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import {
  FrameTitle, Frame0,Frame00, Frame1, Frame000
  // Frame1, Frame2, Frame3, Frame4, Frame5, Frame6, Frame7, Frame8
} from './AnimationFiles'

const App = () => {

  const stylesFrameTitle = useSpring({
    from: { y: 20, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 50,
  })
  const stylesFrame0 = useSpring({
    from: { y: 50, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 100,
  })
  const stylesFrame00 = useSpring({
    from: { y: 70, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 150,
  })
  return (

       
    <Parallax
      config={{ duration: 10 }}
      pages={3}
      style={{ top: '0', left: '0', backgroundColor: '#082c5c', scrollbarColor:'red' }}>
           {/* Intro text only */}
      <ParallaxLayer
        offset={0}
        speed={5}
        className='flex flex-col text-center justify-center items-center'
      >
        <animated.div style={stylesFrameTitle}>
          <FrameTitle />
        </animated.div>
      </ParallaxLayer>
           {/* Enters animation city */}
      <ParallaxLayer
        offset={0.1}
        speed={1}
        className='flex flex-col text-center justify-center items-center'
      >
        <animated.div className='flex flex-col text-center justify-center items-center' style={stylesFrame0}>
            <Frame0 />
        </animated.div>
        <animated.div className='flex flex-col text-center justify-center items-center' style={stylesFrame00}>
            <Frame00 />
        </animated.div>
      </ParallaxLayer>
        {/* Two distinct offerings - text and animation */}
      <ParallaxLayer
            offset={0.77}
            speed={2.5}
            className='flex flex-col text-center justify-center items-center'
          >
        <Frame1 />
      </ParallaxLayer>
      <ParallaxLayer
            offset={0.9}
            speed={1.2}
            className='flex flex-col text-center justify-center items-center'
          >
        <Frame000 />
      </ParallaxLayer>
        {/* Another way to invest with Brookfield - text and animation */}
          {/* <ParallaxLayer
            offset={3}
            speed={2.5}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        ><Frame4 /></ParallaxLayer> */}
        {/* Brookfield corporation - animation and text */}
          {/* <ParallaxLayer
            offset={4}
            speed={2.5}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        ><Frame5 /></ParallaxLayer>   */}
        {/* Brookfield Asset management - animation and text - iconrow animation */}
        {/* <ParallaxLayer
          offset={5}
          speed={2.5}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        ><Frame6 /></ParallaxLayer> */}
        {/* Proven strategy - animation and text - hand animation */}
        {/* <ParallaxLayer
          offset={6}
          speed={2.5}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        ><Frame7 /></ParallaxLayer> */}
        {/* Proven strategy - animation and text - hand animation - lower slide pulls up 30% with text */}
        {/* <ParallaxLayer
          offset={7}
          speed={2.5}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        ><Frame8 /></ParallaxLayer> */}
</Parallax>
  
  )
}

export default App;



