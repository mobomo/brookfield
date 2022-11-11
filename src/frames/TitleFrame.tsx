import React from 'react'
import { useSpring, animated } from 'react-spring'
import { FrameTitle } from '../frames'

const TitleFrame = () => {
    const stylesFrameTitle = useSpring({
    from: { y: 20, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 50,
  })
  return (
   <animated.div style={stylesFrameTitle}>
          <FrameTitle />
        </animated.div>
  )
}

export default TitleFrame