
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
            // range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            // output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
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