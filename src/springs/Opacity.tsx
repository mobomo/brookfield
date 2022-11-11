
import { useSpring, animated } from 'react-spring'
import { Waypoint } from "react-waypoint";
import React, { ReactNode } from 'react'

const Opacity = ({ children }: { children: ReactNode }) => {
  const [inView, setInview] = React.useState(false);
    const props = useSpring({
    // from: { y: 70, opacity: 0 },
    to: { y: !inView ? 24 : 0,opacity: !inView ? 0 : 1},
      delay: 1000,
     config: { duration: 5000 },
    })
  return (
    <Waypoint onEnter={() => setInview(true)}>
      <animated.div style={props}>
        {children}
      </animated.div>
    </Waypoint>
  )
};

export default Opacity;

//     const props = useSpring({ x: inView ? 1 : 0 })