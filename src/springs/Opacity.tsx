
import { useSpring, animated } from 'react-spring'
import { Waypoint } from "react-waypoint";
import React, { ReactNode } from 'react'

const Opacity = ({ children, delay, duration, twstyles }: { children: ReactNode,delay:number, duration:number, twstyles:string }) => {
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
        console.log("leave");
        
        setInview(false);
      }}
      
    >
      <animated.div style={props} className={twstyles}>
        {children}
      </animated.div>
    </Waypoint>
  )
};

export default Opacity;

//     const props = useSpring({ x: inView ? 1 : 0 })