
import { useSpring, animated, useTransition } from 'react-spring'
import { Waypoint } from "react-waypoint";
import React, { ReactNode } from 'react'
import { useDrag } from 'react-use-gesture'

const left = {
  bg: `linear-gradient(120deg, #f093fb 0%, #f5576c 100%)`,
  justifySelf: 'end',
}
const right = {
  bg: `linear-gradient(120deg, #96fbc4 0%, #f9f586 100%)`,
  justifySelf: 'start',
}

const Wrapper = ({ children }: { children: ReactNode }) => {
  const [{ x, bg, scale, justifySelf }, api] = useSpring(() => ({
    x: 0,
    scale: 1,
    ...left,
  }))
  const bind = useDrag(({ active, movement: [x] }) =>
    api.start({
      x: active ? x : 0,
      scale: active ? 1.1 : 1,
      ...(x < 0 ? left : right),
      immediate: name => active && name === 'x',
    })
  )

  const avSize = x.to({
    map: Math.abs,
    range: [50, 300],
    output: [0.5, 1],
    extrapolate: 'clamp',
  })

  return (
    <animated.div {...bind()}  style={{ background: bg }}>
      <animated.div  style={{ scale: avSize, justifySelf }} />
      <animated.div  style={{ x, scale }}>
        {children}
      </animated.div>
    </animated.div>
  )
}

export const SeventhFrame = () => {
  const [inView, setInview] = React.useState(false);

  // const stylesFrame7 = useSpring({
  //   // from: { y: 70, opacity: 0 },
  //   to: { y: !inView ? 24 : 0,opacity: !inView ? 0 : 1},
  //   delay: 1000,
  // })
  // const props = useSpring({ x: inView ? 1 : 0 })

//  const spring = useSpring({
//   //  to: { y: !inView ? 24 : 0,opacity: !inView ? 0 : 1},

//    to:{ transform: !inView ? "translateX(500px)" : "translateX(0px)" },

//    delay: 1000,
//     config: { duration: 1000 },
// });
  
  const { x } = useSpring({
    from: { x: 0 },
    x: inView ? 1 : 0,
    config: { duration: 1000 },
  })
  return (
    <Waypoint onEnter={() => setInview(true)}>
      <animated.div className="bg-white w-full h-72 flex justify-center items-center "
      //  style={spring}
        style={{
          opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
          scale: x.to({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
          }),
        }}
      >
      {/* <Wrapper > */}
      <div className="text-3xl font-playfair font-semibold w-3/5 text-center text-brandblue">
        Looking ahead to this chapter of growth, evolving to offer the best of both worlds.
        </div>
      {/* </Wrapper> */}
    </animated.div>

    </Waypoint>
  )
}

export default SeventhFrame