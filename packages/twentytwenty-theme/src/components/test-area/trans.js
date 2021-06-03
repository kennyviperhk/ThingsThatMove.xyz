import { styled, connect, decode, Global, css } from "frontity";
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';


const Trans = () => {
  const animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 }
  });

  const colorAnimation = useSpring({
    from: { color: 'blue' },
    to: { color: `rgb(255,0,0)` }
  });

  const multiAnimation = useSpring({
    from: { opacity: 0, color: 'red' },
    to: [
        { opacity: 1, color: '#ffaaee' },
        { opacity: 1, color: 'red' },
        { opacity: .5, color: '#008000' },
        { opacity: .8, color: 'black' }
    ]
  });
  return (
    <div>
      <animated.h1 style={animation}>Hello World</animated.h1>
      <animated.h1 style={colorAnimation}>Hello World</animated.h1>
      <animated.h1 style={multiAnimation}>Hello World</animated.h1>
    </div>
  )
};



export default connect(Trans);
