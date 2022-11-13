
import { useSpring, animated } from 'react-spring'
import { Waypoint } from "react-waypoint";
import React, { ReactNode } from 'react'


const Shape = ({ children, twstyles, duration, delay }: { children: ReactNode, twstyles:string, duration:number, delay:number }) => {
  const [inView, setInview] = React.useState(false);
  const { x } = useSpring({
    from: { x: 0 },
    x: inView ? 1 : 0,
    config: { duration: duration },
    delay: delay,
  })

  return (
    <Waypoint
      onEnter={() => setInview(true)}
      // onLeave={() => setInview(false)}
    >
      <animated.div 
        style={{
          opacity: x.to({ range: [0, 1], output: [0, 1] }),
          scale: x.to({
            range: [0, 1],
              output: [0, 1]
          }),
        }}
        className={twstyles}
      >
        {children}
      </animated.div>
    </Waypoint>
  )
};


export default Shape;