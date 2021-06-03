import React, { Component, Fragment, useEffect, useState } from "react";
import { connect } from "frontity";
import { LinearCopy } from "gl-react";
import { Surface } from "gl-react-dom";
import GLTransition from "react-gl-transition";
import GLTransitions from "gl-transitions";
//import timeLoop from "./timeLoop";
import images from "./images";
import { useSpring, animated } from 'react-spring'


const Ss = (({ slides, delay, duration, time }) => {

//  const index = Math.floor(time / (delay + duration));
  const from = slides[Math.floor(time) % slides.length];
  const to = slides[(Math.floor(time) + 1) % slides.length];
//  const transition = GLTransitions[index % GLTransitions.length];
//  const total = delay + duration;
//  const progress = (time - index * total - delay) / duration;
  //console.log("from " + from + " to " + to + " time " + time)
  return <GLTransition
    from={from}
    to={to}
    progress={time % 1}
    transition={GLTransitions[5]} />
});

const SildeShow = ({ scroll }) => {
  const [index, set] = useState(0)
  const width = useState(1)
  const props = useSpring({ time: scroll > 1 ? width : 0 })
  const AnimatedDonut = animated(Ss)
  useEffect(() => {
    set(scroll !== null ? scroll : 0)
  });
  return (<Surface width={600} height={400}>
    <AnimatedDonut slides={images} delay={2000} duration={1500} time={index} />
  </Surface>

  )
}

export default connect(SildeShow);
