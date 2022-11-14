
import { useSpring, animated } from 'react-spring'
import { Waypoint } from "react-waypoint";
import React, { ReactNode } from 'react'


interface MoveType {
  children?: ReactNode,
  twstyles?: string,
  duration?: number,
  delay?: number,
  bottomOffset?: string,
  topOffset?: string,
  moveY?: string,
  Enter?: boolean,
  Leave?: boolean,
}


const Move = ({ children, twstyles='flex', duration=800, delay=0, bottomOffset='300px', topOffset='0px', moveY='250px', Enter=true, Leave=true }:MoveType) => {
  const [inView, setInview] = React.useState(false);
  const props = useSpring({
  //  to: { y: !inView ? 24 : 0,opacity: !inView ? 0 : 1},
    to: {
      transform: !inView ? `translateY(${moveY})` : "translateY(0px)",
      opacity: !inView ? 0 : 1,
      scale: inView ? 1 : 0.2,
    },
   delay: delay,
    config: { duration: duration },
  });
  return (
    <Waypoint
      onEnter={() => setInview(true)}
      // onLeave={() => {
      //   setInview(false)
      //   console.log('leaving')
      // }}
      bottomOffset={!inView?bottomOffset:'0px'}
      // bottomOffset={'0px'}
      topOffset={!inView?topOffset:'0px'}
      // topOffset={topOffset}
      debug={true}
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