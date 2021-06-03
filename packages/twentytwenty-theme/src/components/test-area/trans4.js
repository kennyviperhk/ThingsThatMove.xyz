import { connect } from "frontity";
import React, { useState,Component, Fragment, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

import { LinearCopy } from "gl-react";
import { Surface } from "gl-react-dom";
import GLTransition from "react-gl-transition";
import GLTransitions from "gl-transitions";
//import timeLoop from "./timeLoop";
import images from "./images";

const TransState = (time) => {
  const [on, toggle] = useState(false);

  const animation = useSpring({
    width: on ? 0 : 100
  });

  return (
    <div>
      <animated.h1 style={animation}>{animation.width }</animated.h1>
      <button onClick={() => toggle(!on)}>Change</button>
    </div>
  )
};



const Ss = (({ slides, delay, duration, time }) => {
//  console.log(time)
  console.log(time)
  const index = Math.floor(time / (delay + duration));
  const from = slides[index % slides.length];
 const to = slides[(index + 1) % slides.length];
  const transition = GLTransitions[index % GLTransitions.length];
  const total = delay + duration;
  const progress = (time - index * total - delay) / duration;
  //console.log(progress)
  return<GLTransition
        from={slides[0]}
        to={slides[2]}
        progress={time}
        transition={GLTransitions[5]}/>
});

class FinalSildeShow extends Component {
  constructor(props) {
    super(props);

  }
render(){


  return(
    <div>  <TransState/>
    <Surface width={600} height={400}>
      <Ss slides={images} delay={2000} duration={1500} time={this.props.time}/>
    </Surface>
    </div>

  )
}
}

export default connect(FinalSildeShow);
