
import { useSpring, animated } from 'react-spring'
import { Waypoint } from "react-waypoint";
import React, { ReactNode } from 'react'

const Opacity = (
  { children, delay=0, duration=600, twstyles, topOffset = '0px', bottomOffset = '0px' }:
    { children: ReactNode, delay?: number, duration?: number, twstyles?: string, topOffset?: string, bottomOffset?: string; }) =>
{
  const [inView, setInview] = React.useState(false);
    const props = useSpring({
    // from: { y: 70, opacity: 0 },
      loop: false,

    to: { y: !inView ? 0 : 0,opacity: !inView ? 0 : 1},
      delay: delay,
      config: { duration: duration },
    })
  return (
    <Waypoint
      onEnter={() => setInview(true)}
      onLeave={() => {
        setInview(false);
      }}
      topOffset={topOffset}
      bottomOffset={bottomOffset}
      
    >
      <animated.div style={props} className={twstyles}>
        {children}
      </animated.div>
    </Waypoint>
  )
};

export default Opacity;