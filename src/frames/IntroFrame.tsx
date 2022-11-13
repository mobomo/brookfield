import React from 'react'
import { Frame0, Frame00 } from '../frames'
import { useSpring, animated } from 'react-spring'


const IntroFrame = () => {

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
    <>
      <animated.div className='flex flex-col text-center justify-center items-center fixed top-0' style={stylesFrame0}>
            <Frame0 />
        </animated.div>
        <animated.div className='flex flex-col text-center justify-center items-center mt-14' style={stylesFrame00}>
            <Frame00 />
      </animated.div>
    </>
  )
}

export default IntroFrame