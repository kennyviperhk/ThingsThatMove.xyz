import {connect, decode, Global, css} from "frontity";
import React, {Component, Fragment, useEffect} from "react";

import {styled} from "frontity";
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

import externalCss from './split-pane.css'
import dragBtn from '../../img/drag-button.svg'


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



class SplitPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
    this.state = {
      topPanel:0
    };
    this.state = {
      width: 0,
      height: 0
    };
    this.state = {
      isInsideHandle: false
    };
    this.state={
      activeDrags: 0,
      deltaPosition: {
      x: 0, y: 0
    },

    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.parent = React.createRef();

//    this._onMouseMove = this._onMouseMove.bind(this);
//    this._onMouseDown = this._onMouseDown.bind(this);
//    this._onMouseUp = this._onMouseUp.bind(this);

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
    this.setState({width: window.innerWidth, height: window.innerHeight});
  }

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
      this.setState({x: touch.clientX, y: touch.clientY});
    }
  _onTouchEnd = (e) => {
      const touch = e.touches[0];
      //this.setState({ x: touch.clientX, y: touch.clientY });
    }
/*
  _onMouseMove(e) {

  }
  _onMouseDown(e) {
  //  this.setState({mouseIsDown: true, prevX:e.clientX})
  }
  _onMouseUp(e) {
  //      this.setState({mouseIsDown: false})

  }
*/
  onStart = () => {
    this.setState({activeDrags: ++this.state.activeDrags});
  };

  onStop = () => {
    this.setState({activeDrags: --this.state.activeDrags});
  };

  handleDrag = (e, ui) => {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
    this.setState({topPanel:this.state.deltaPosition.x +( this.state.width / 2 )+ 1000})

  };

  render() {
const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const {x, y} = this.state;

  //  let {xx} = ;
  let w = 0;
  if( this.state.deltaPosition.x + (this.state.width / 2) +1000 - 5 >= 0 ){
    w = this.state.deltaPosition.x + (this.state.width / 2) +1000 - 5
  }

    return <section className="container section-split-pane" >

      <div className="splitview skewed" ref={this.parent} /*onMouseMove={e => this._onMouseMove(e)}*/ >
        <div className="panel bottom">
          <div className="content">
            <div className="description">
            <h1>Things that move >>></h1>
            <p>Solutions.</p>
            </div>
            <img src="https://media.giphy.com/media/U77wG2Aa4npYDjsGqx/giphy.gif" alt="Original"/>
          </div>
        </div>

        <div className="panel top" style={{width: w}}>
          <div className="content">
            <div className="description">
            <h1>Artwork</h1>
            <p></p>
            </div>

            <img src="https://media3.giphy.com/media/eIMDi79dLpVV6/giphy.gif" alt="Duotone"/>
          </div>
        </div>

      <div className="handle" css={{left: this.state.deltaPosition.x + this.state.width / 2 - 10}}>

   </div>
   <Draggable bounds={{top: -100, left: -this.state.width / 2, right: this.state.width / 2, bottom: 100}} axis="x" onDrag={this.handleDrag} {...dragHandlers}>
    <div className="img-comp-slider cursor-x" css={css`{  top:calc(50% - 25px);
      left: calc(50% - 25px);}`}><img className="drag-btn" alt="btn" src={dragBtn} /></div>
  </Draggable>
  </div>

      <Global styles={css(externalCss)}/>
    </section>;

  }
}

export default connect(SplitPane);
