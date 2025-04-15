import { connect, styled } from "frontity";
import React,{useEffect} from "react";

import ServiceIntro from '../service-intro/'
import HomePosts from '../archive'
import ShowAllPosts from '../show-all-posts'
import { useWindowSize } from '../../helpers'
import Archive from '../archive'
import Post from '../post'
//import PhotoText from '../photo-text/'
//import ThreeScene from './ThreeScene.js';
//import SplitPane from '../split-pane/'
//import GetPosts from '../loadPosts'
const Home = ({ state, actions }) => {

  const size = useWindowSize();
  /*
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.parent = React.createRef();
  }

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


  render() {
*/

useEffect(() => {
  Post.preload();
  Archive.preload();
}, []);

  return (
    <HomeSession className="container" >
      {/*<h1>  {size.width}px / {size.height}px</h1>*/}
      <ServiceIntro />
      <HomePosts />
      {
        /*
        <Archive />
        <SplitPane />
        <PhotoText />
        <ThreeScene />
        */
      }
      <ShowAllPosts />
    </HomeSession>
  )
}

export default connect(Home);

/* 1 px offset fix */
const HomeSession = styled.section`
  position: relative;
  top: 0px;
`;
