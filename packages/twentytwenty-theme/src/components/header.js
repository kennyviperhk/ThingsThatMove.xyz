import React, { Component } from "react";
import { connect, styled, css } from "frontity";
import Link from "./link";
import Navigation from "./navigation/navigation";
//import SearchButton from "./search/search-button";
//import SearchModal from "./search/search-modal";
//import MobileSearchButton from "./mobile/search-button";
import MobileMenuButton from "./mobile/menu-button";
import MobileMenuModal from "./mobile/menu-modal";
import ArrowSVG from "./styles/arrowDown.svg"
const Header = ({ state, actions }) => {
  //class Header extends Component {
  /*
    constructor(props) {
      super(props);
      this.state = {
        prevScrollpos: "",
        visible: true
      };
    }
    componentDidMount() {
      if (!window.requestAnimationFrame) {
        let targetTime = 0
        window.requestAnimationFrame = function(callbackFun) {
          const currentTime = +new Date()
          const timeoutCb = function() { callbackFun(+new Date()) }
          return setTimeout(timeoutCb, Math.max(targetTime + 16, currentTime) - currentTime)
        }
      }
      window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll = () => {
      const { prevScrollpos } = this.state;
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollpos > currentScrollPos;
      this.setState({
        prevScrollpos: currentScrollPos, visible
      });
    };
    render() {
    {  <PageHeader bg={headerBg} id="site-header" style={this.state.visible ? { top: '0px' } : { top: '0px' }}>}
    */
  const { title, description } = state.frontity;
  const { headerBg } = state.theme.colors;

  const currentLink = state.router.link;

  const bioLink = "/bio/"
  const homeLink = "/"
  const worksLink = "/category/works/"

  return (
    <PageHeader bg={headerBg} id="site-header">
      <SiteTitle>
        <SiteTitleDiv><TitleLink link={bioLink}>About</TitleLink>{currentLink === bioLink ? <Arrow src={ArrowSVG} css={css`width:80px;`} alt="About Kenny Wong" />: ""}</SiteTitleDiv>
        <SiteTitleDiv><TitleLink link={homeLink}>TTM</TitleLink></SiteTitleDiv>
        <SiteTitleDiv><TitleLink link={worksLink}>Projects</TitleLink>{currentLink === worksLink ? <Arrow css={css`width:70px;`} src={ArrowSVG} alt="Works" />: ""}</SiteTitleDiv>
      </SiteTitle>
    </PageHeader>
  );
}


// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

/*
const TitleWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 4rem;
  text-align: center;
  width: 100%;
  @media (min-width: 1000px) {
    width: auto;
    margin-right: 4rem;
    max-width: 50%;
    padding: 0;
    text-align: left;
  }
`;
*/
/*background: ${props => props.bg};*/
const PageHeader = styled.header`
  background: none;
  position: fixed;
  top:0px;
  z-index:5;
  width: 100vw;
  transition: 0.3s;
  mix-blend-mode: normal;
`;



const SiteTitle = styled.div`
  display:flex;
  justify-content:space-between;
  width:100%;
  text-align:center;
  mix-blend-mode: normal;
  position:absolute;
`;

const SiteTitleDiv = styled.div`
  display: inline-block;
  vertical-align: top;
  text-align:center;
  vertical-align:baseline;
  background: none;
  mix-blend-mode: difference;
  white-space: nowrap;
  &:nth-of-type(1){
    text-align:left;
    font-size: 30px;
    padding: 20px 45px 0 45px;
    @media(orientation: portrait) {
      padding: 20px 15px 0 15px;
    }
  }
  &:nth-of-type(2){
    font-size:40px;
    padding: 10px 45px 0 20px;
    @media(orientation: portrait) {
      padding: 10px 35px 0 15px;
    }
  }
  &:nth-of-type(3){
    text-align:right;
    font-size: 30px;
    padding: 20px 45px 0 45px;
    @media(orientation: portrait) {
      padding: 20px 15px 0 15px;
    }
  }
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  color: #000;
  mix-blend-mode: normal;
  display: block;
  font-weight:500;
  &:hover {
    text-decoration: underline;
  }
text-shadow: -1px -1px 2px rgba(255,255,255,0.2),1px -1px 2px rgba(255,255,255,0.2),-1px 1px 2px rgba(255,255,255,0.2),1px 1px 2px rgba(255,255,255,0.2);
`;

const HeaderNavigationWrapper = styled.div`
  display: none;
  @media (min-width: 1000px) {
    align-items: center;
    display: flex;
  }
`;

const Arrow = styled.img`
  top:-5px;
`;
