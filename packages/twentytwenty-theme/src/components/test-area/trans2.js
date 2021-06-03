import { styled, connect, decode, Global, css } from "frontity";
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';


const TransState = () => {
  const [on, toggle] = useState(false);

  const animation = useSpring({
    color: on ? 'blue' : 'red'
  });
  return (
    <div>
      <animated.h1 style={animation}>{!on ? "I'm red" : "Now I'm blue" }</animated.h1>
      <button onClick={() => toggle(!on)}>Change</button>
    </div>
  )
};



export default connect(TransState);
