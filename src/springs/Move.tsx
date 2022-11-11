
import { useSpring, animated } from 'react-spring'
import { Waypoint } from "react-waypoint";
import React, { ReactNode } from 'react'


const Move = ({ children }: { children: ReactNode; }) => {
  const [inView, setInview] = React.useState(false);
  const props = useSpring({
  //  to: { y: !inView ? 24 : 0,opacity: !inView ? 0 : 1},
   to:{ transform: !inView ? "translateX(500px)" : "translateX(0px)" },
   delay: 1000,
    config: { duration: 1000 },
  });
  return (
    <Waypoint onEnter={() => setInview(true)}>
      <animated.div className="bg-white w-full h-72 flex justify-center items-center "
      //  style={spring}
        style={props}
      >
        {children}
      </animated.div>
    </Waypoint>
  )
};
export default Move;