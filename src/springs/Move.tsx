
import { useSpring, animated } from 'react-spring'
import { Waypoint } from "react-waypoint";
import React, { ReactNode } from 'react'


const Move = ({ children, twstyles, duration, delay }: { children: ReactNode, twstyles:string, duration:number, delay:number }) => {
  const [inView, setInview] = React.useState(false);
  const props = useSpring({
  //  to: { y: !inView ? 24 : 0,opacity: !inView ? 0 : 1},
   to:{ transform: !inView ? "translateY(200px)" : "translateY(0px)" },
   delay: 0,
    config: { duration: 1000 },
  });
  return (
    <Waypoint
      onEnter={() => setInview(true)}
      onLeave={() => setInview(false)}

    >
      <animated.div className={twstyles}
      //  style={spring}
        style={props}
      >
        {children}
      </animated.div>
    </Waypoint>
  )
};
export default Move;