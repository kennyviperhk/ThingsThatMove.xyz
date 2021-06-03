
/*

import React, { Component, Fragment, useEffect } from "react";

import { LinearCopy } from "gl-react";
import { Surface } from "gl-react-dom";
import GLTransition from "react-gl-transition";
import GLTransitions from "gl-transitions";
//import timeLoop from "./timeLoop";
import images from "./images";

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

class SildeShow extends Component {
  constructor(props) {
    super(props);

  }
render(){


  return(  <Surface width={600} height={400}>
      <Ss slides={images} delay={2000} duration={1500} time={this.props.time}/>
    </Surface>

  )
}
}


*/
import { connect } from "frontity";
import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import './slide-show-simple.css'

const slides = [
  { id: 0, url: 'photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i' },
  { id: 1, url: 'photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80' },
  { id: 2, url: 'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG?ixlib=rb-1.2.1&w=1534&q=80' },
  { id: 3, url: 'photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80' },
]

const SildeShowSimple = ({ scroll }) => {
  const [index, set] = useState(0)
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0,   top:-100 },
    enter: { opacity: 1 , top: 0 },
    leave: { opacity: 0 , top:100 },
    config: config.molasses,
  })
  //  useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 2000), [])

  useEffect(() => {
    set(scroll !== null ? Math.floor(scroll) : 0)
  });
  return <div className="slide-show-simple-div">{transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      className="slide-show-simple"
      style={{ ...props, backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)` }}
    />

  ))}</div>
}


export default connect(SildeShowSimple);
