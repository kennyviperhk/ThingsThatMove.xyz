import { styled, connect, decode, Global, css } from "frontity";
import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'




const TransState = () => {
  const [open, toggle] = useState(false)
  const width = 100;
 // const [bind, width ] = useState(100)
  const props = useSpring({ width: open ? width : 0 })

  return (
    <div class="main" style={{display:'block'}} onClick={() => toggle(!open)}>
      <animated.div class="description" style={{display:'block'}}><animated.h1 style={{fontSize:'20px'}}>{props.width.interpolate(x => x)}</animated.h1></animated.div>
    </div>
  )
}



export default connect(TransState);
