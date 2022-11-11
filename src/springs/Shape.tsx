
import { useSpring, animated } from 'react-spring'
import { Waypoint } from "react-waypoint";
import React, { ReactNode } from 'react'


const Shape = ({ children }: { children: ReactNode; }) => {
  const [inView, setInview] = React.useState(false);
  const { x } = useSpring({
    from: { x: 0 },
    x: inView ? 1 : 0,
    config: { duration: 1000 },
  })

  return (
    <Waypoint onEnter={() => setInview(true)}>
      <animated.div 
        style={{
          opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
          scale: x.to({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
          }),
        }}
      >
        {children}
      </animated.div>
    </Waypoint>
  )
};


export default Shape;