import { styled, connect, decode, Global, css } from "frontity";
import React, { Component, Fragment, useEffect } from "react";
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import externalCss from './photo-text.css'
import dragBtn from '../../img/drag-button.svg'

import SlideShow from './slide-show'
import SlideShowSimple from './slide-show-simple'

import { useSpring, animated } from 'react-spring'
import { Spring } from 'react-spring/renderprops'


import { Easing } from 'tweenkle';
import { useAnimateProps } from 'react-animate-props';

import Trans from './trans';
import TransState from './trans2'
import TransState2 from './trans3'
import FinalSlideShow from './trans4'
//import { ScrollPercentage } from 'react-scroll-percentage'


//import Counter from './counter';

/*
const PositionLabel = (props, greeting) => {
  const {
    detectedEnvironment: {
      isMouseDetected = false,
      isTouchDetected = false
    } = {},
    elementDimensions: {
      width = 0,
      height = 0
    } = {},
    isActive = false,
    isPositionOutside = false,
    position: {
      x = 0,
      y = 0
    } = {}
  } = props;
  console.log(props.handle.status)
  return (<div className="handle" style={props.handle.status
    ? {
        left: props.handle.posTwo.x
    }
    : {
        left: props.handle.posTwo.x
      }}>
    {`x: ${x}`}<br/> {`y: ${y}`}<br/> {`width:: ${width}`}<br/> {`height: ${height}`}<br/> {`isActive: ${isActive}`}<br/> {
      `isPositionOutside: ${isPositionOutside
        ? 'true'
        : 'false'}`
    }<br/> {
      `isMouseDetected: ${isMouseDetected
        ? 'true'
        : 'false'}`
    }<br/> {
      `isTouchDetected: ${isTouchDetected
        ? 'true'
        : 'false'}`
    }

  </div>);
};
*/


const AnimatedNumberLabel = ({ number }) => {
  const animatedNumber = useAnimateProps(number, {
    ease: Easing.Quad.In,
    delay: 500,
    duration: 1500,
    onAnimateProgress: value => {
      return Math.round(value);
    },
    onAnimateComplete: value => {
      return Math.round(value);
    },
  });

  return <span>{animatedNumber}</span>;
};


class PhotoText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
    this.state = {
      topPanel: 0
    };
    this.state = {
      width: 0,
      height: 0
    };
    this.state = {
      currentScrollPos: 0
    };
    this.state = {
      activeDrags: 0,
      deltaPosition: {
        x: 0, y: 0
      },
      value: 0,
      toggle: false,
      content: false,
      number: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.parent = React.createRef();



  }




  //{/* onTouchStart={this._onTouchStart} onTouchMove={this._onTouchMove} onTouchEnd={this._onTouchEnd} }*/}
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);

  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }



  handleScroll = (e) => {
    let element = e.target;
    let c = element.scrollTop / element.clientHeight;
    if (c > 1) { c = 1.0 }
    this.setState({ currentScrollPos: c })
    //console.log(c)

    //  console.log(this.state.currentScrollPos)
  };


  _onTouchStart = (e) => {
    const touch = e.touches[0];
    //   this._swipe = { x: touch.clientX };
    //   this.setState({ x: touch.clientX, y: touch.clientY });
    //   this.setState({ swiped: false });
  }
  _onTouchMove = (e) => {
    //   if (e.changedTouches && e.changedTouches.length) {
    //     const touch = e.changedTouches[0];
    //     this._swipe.swiping = true;
    //   }
    const touch = e.touches[0];
    this.setState({ x: touch.clientX, y: touch.clientY });
  }
  _onTouchEnd = (e) => {
    const touch = e.touches[0];
    //this.setState({ x: touch.clientX, y: touch.clientY });
  }


  onStart = () => {
    this.setState({ activeDrags: ++this.state.activeDrags });
  };

  onStop = () => {
    this.setState({ activeDrags: --this.state.activeDrags });
  };

  handleDrag = (e, ui) => {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
    this.setState({ topPanel: this.state.deltaPosition.x + (this.state.width / 2) + 1000 })

  };

  handlePropsNum = (e) => {

    this.setState({ value: e })

  };
  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    const { x, y } = this.state

    //  let {xx} = ;
    let w = 0;
    if (this.state.deltaPosition.x + (this.state.width / 2) + 1000 - 5 >= 0) {
      w = this.state.deltaPosition.x + (this.state.width / 2) + 1000 - 5
    }

    return <section className="container section-photo-text" >

      <div className="splitview skewed" ref={this.parent} /*onMouseMove={e => this._onMouseMove(e)}*/ >
        <div className="panel bottom">
          <div className="content">
            <div className="description" onScroll={this.handleScroll} >

              <h1>Things that move >>><AnimatedNumberLabel number={this.state.currentScrollPos * 10} /></h1>
              <Trans />
              <TransState />

              <p>Kinetic Sculpture<TransState2 /></p>
              <p>Stainless Steel, Aluminium Alloy, Brass, Micro-Computer, Custom Software, LCD Panel, Microcontrollers, Custom Electronics, Stepper-Motor, DC Brushless Motor</p>
              <p>The work is inspired by the moment of intimacy in eye contact and the indefinite variables in relationships.</p>

              <p>“dist.” – the short form of distance or district. It is also a term widely used for mathematical and programming terminology for distance calculation. In this work, it represents as both relational and mathematical distance.</p>

              <p>We encounter momentary connections with people in our everyday lives. We synchronize and repel with one another from time to time. Attachment and detachment; the rhythmic dance as well as chaotic crash between the two create a metaphor for the momentary, temporary relationship that exists between them.</p>

              <p>The work involves kinetic intervention of the pendulum movement as well as the combination of digital sensors. The spinning discs are the only driving force of the pendulums. When the discs change their velocities, they create directional forces, altering the balances and trigger the pendulums to swing. The custom software of each pendulum generates random velocities individually, hence the rhythms of swings are always indefinite. When the screens swinging close to each other, they would rotate and avoid the crash, which is totally relied on the sensor value of the gyroscopes. The kinetic movement and the digital screens intentionally combine rational and irrational rules, presenting a relationship between the two identical machines.</p>
            </div>

          </div>
        </div>

        <div className="panel top" style={{ width: w }}>
          <div className="content">
            <img src="https://i1.wp.com/kennywong.co/wp-content/uploads/2016/12/Kenny-Wong-Undermine_7.jpg?resize=1024%2C683" alt="Duotone" />
            <img src="https://i2.wp.com/kennywong.co/wp-content/uploads/2016/12/Kenny-Wong-Undermine_1.jpg?resize=1024%2C683" alt="Duotone" />
            <img src="https://i1.wp.com/kennywong.co/wp-content/uploads/2016/12/Kenny-Wong-Undermine_5.jpg?resize=1024%2C683" alt="Duotone" />
            <img src="https://i1.wp.com/kennywong.co/wp-content/uploads/2016/12/Kenny-Wong-Undermine_3.jpg?resize=1024%2C683" alt="Duotone" />
          </div>
        </div>

        <div className="handle" css={{ left: this.state.deltaPosition.x + this.state.width / 2 - 10 }}>

        </div>
        <Draggable bounds={{ top: -100, left: -this.state.width / 2, right: this.state.width / 2, bottom: 100 }} axis="x" onDrag={this.handleDrag} {...dragHandlers}>
          <div className="img-comp-slider cursor-x" css={css`{  top:calc(50% - 25px);
      left: calc(50% - 25px);}`}><img className="drag-btn" alt="btn" src={dragBtn} /></div>
        </Draggable>
      </div>
      <Spring
        from={{ number: 0 }}
        to={{ number: 1 }}>
        {props => <div>{props.number}</div>}

      </Spring>
    <SlideShow time={this.state.currentScrollPos} />
      <FinalSlideShow time={this.state.currentScrollPos} />
      <SlideShowSimple />

      <Global styles={css(externalCss)} />
    </section>;

  }
}

export default connect(PhotoText);
