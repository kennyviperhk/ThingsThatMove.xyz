import { styled, connect, decode, Global, css } from "frontity";
import React, { Component, Fragment, useEffect } from "react";
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import externalCss from './photo-text.css'
import dragBtn from '../../img/drag-button.svg'

import SlideShow from '../slide-show/slide-show'
import SlideShowSimple from '../slide-show/slide-show-simple'


//import { ScrollPercentage } from 'react-scroll-percentage'

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
      animateNumber: 0
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
    let c = element.scrollTop / (element.scrollHeight - element.clientHeight);
    if (c > 1) { c = 1.0 }
    this.setState({ currentScrollPos: c })

    /*
    if (c >= 0.3 && c < 0.6) {
      this.setState({ animateNumber: 1 })
    } else if (c >= 0.9 && c < 1.0) {
      this.setState({ animateNumber: 2 })
    } else {
      this.setState({ animateNumber: 3 })
    }
    */
    this.setState({ animateNumber: c * 3 })


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
    const { x, y } = this.state;

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

              <h1>Things that move >>></h1>

              <p>Kinetic Sculpture</p>
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
            <SlideShowSimple scroll={this.state.animateNumber} />
            {/*

              <img src="https://i1.wp.com/kennywong.co/wp-content/uploads/2016/12/Kenny-Wong-Undermine_7.jpg?resize=1024%2C683" alt="Duotone" />
          <img src="https://i2.wp.com/kennywong.co/wp-content/uploads/2016/12/Kenny-Wong-Undermine_1.jpg?resize=1024%2C683" alt="Duotone" />
          <img src="https://i1.wp.com/kennywong.co/wp-content/uploads/2016/12/Kenny-Wong-Undermine_5.jpg?resize=1024%2C683" alt="Duotone" />
          <img src="https://i1.wp.com/kennywong.co/wp-content/uploads/2016/12/Kenny-Wong-Undermine_3.jpg?resize=1024%2C683" alt="Duotone" />*/}

          </div>
        </div>

        <div className="handle" css={{ left: this.state.deltaPosition.x + this.state.width / 2 - 10 }}>

        </div>
        <Draggable bounds={{ top: -100, left: -this.state.width / 2, right: this.state.width / 2, bottom: 100 }} axis="x" onDrag={this.handleDrag} {...dragHandlers}>
          <div className="img-comp-slider cursor-x" css={css`{  top:calc(50% - 25px);
      left: calc(50% - 25px);}`}><img className="drag-btn" alt="btn" src={dragBtn} /></div>
        </Draggable>
      </div>

        <SlideShow scroll={this.state.animateNumber} />
      {/*


    */
      }

      <Global styles={css(externalCss)} />
    </section>;

  }
}

export default connect(PhotoText);
