import { connect, decode, Global, css } from "frontity";
import React, { Component, Fragment, useEffect, useState } from "react";
import { styled, keyframes } from "frontity";
import { getMediaAttributes } from '../../helpers'
import Link from "../link";
//import TextLoop from "react-text-loop";
import Marquee from "react-fast-marquee"; // <-- Replace TextLoop
import AchievementSublist from './achievement-sublist';

const AchievementList = ({ data }) => {

  const [showMoreBtn, setShowMoreBtn] = useState(false);
  let achievementLength = 10000;

  const achievementLists = [data.list_of_awards, data.list_of_grants, 	data.list_of_residencies, data.list_of_solo_exhibitions, data.list_of_commissions,  data.list_of_exhibitions, data.list_of_performances, data.list_of_bibliography , data.list_of_presentations, data.list_of_workshops];
  const achievementListsTitle = ["Awards", "Grants", "Residencies", "Solo Exhibitions", "Commissions", "Exhibitions and Festivals", "Performances", "Bibliography", "Presentations", "Workshops"];


  const achievementListsLoop= achievementListsTitle && achievementListsTitle.map((aItem, i) => {
    return (
      <BgH1Span key={i}>{aItem}</BgH1Span>
    )
    /*
    achievementLength = aItem.length * 60 * 3 ;
    const achievementSublist = aItem && aItem.map((item,id) => {

    })*/
  //  return achievementSublist;
  });

/*
    const handleSublists = ({ sublistItem }) => {
      sublistItem && sublistItem.map((item,id) => {
    //  console.log(item)
      return (
        <Tr key={id}>
          <ThYear><ItemName><span>{item.year}</span></ItemName></ThYear>
          <ThName><ItemName>{item.name}</ItemName></ThName>
        </Tr>
      )
      })

    }
      */
      let totalListNumber = 0;

    const handleLists = achievementLists && achievementLists.map((aItem, i) => {
      totalListNumber += achievementLists.length
      return (
        <TableDiv key={i} css={showMoreBtn || i === 0 ? css`opacity: 1;` : css`opacity: 0;`}>
          <TitleDiv>
            <H5Title>{achievementListsTitle[i]}</H5Title>
          </TitleDiv>
          <AchievementTable>
            <AchievementTableBody>
              <AchievementSublist thisData={aItem} />
            </AchievementTableBody>
          </AchievementTable>
        </TableDiv>
      )
      /*
      achievementLength = aItem.length * 60 * 3 ;
*/
    });



  return (<AchievementSection>
    <MainDiv >
      <BgH1Div>
      <BgH1>

      <Marquee speed={50} gradient={false} pauseOnHover>
            {messages.map((msg, index) => (
              <span key={index}>
                {achievementListsLoop}
              </span>
            ))}
      </Marquee>
      </BgH1>
      </BgH1Div>
        <OverallTableDiv css={showMoreBtn ? css`max-height: ${achievementLength}px;`:css`max-height: 400px;`}>
        {handleLists}
        </OverallTableDiv>
      <MoreLinkDiv><MoreLink onClick={() => setShowMoreBtn(!showMoreBtn) }>{showMoreBtn ? "Show Less":"Show More... +" + totalListNumber}</MoreLink></MoreLinkDiv>
    </MainDiv>
  </AchievementSection>
  )
};

export default connect(AchievementList);


const AchievementSection = styled.section`
    display:flex;
    flex-direction: column;
    background: white;
    color: black;
    margin: 0 auto;
    width:100%;

    overflow-x: hidden;
    padding: 0 15px;
`

const BgH1Div = styled.div`
  overflow:hidden;
`

const BgH1 = styled.h1`
  text-align:right;
  margin-right: -3vw;
  overflow:hidden;
`

const BgH1Span = styled.div`
width:100vw;
overflow:hidden;
`
const MainDiv = styled.div`

`
const TableDiv = styled.div`

text-align: center;
width:100%;
display: flex;
flex-direction: column;
align-items:center;

transition: all 0.8s;
height:auto;
display:flex;
overflow:initial;

`
const AchievementTable = styled.table`

  max-width:1200px;
  border-collapse: collapse;
  text-align: left;
  border: none;
`

const AchievementTableBody = styled.tbody`

  max-width:1200px;
  border-collapse: collapse;
  text-align: left;
  border: none;
`

const MoreLink = styled.a`
  text-align:center;
  color:black;
  cursor: pointer;
  padding: 15px 0;
  text-decoration:none;

  &:hover{
    text-decoration:underline;
  }
`
const MoreLinkDiv = styled.div`
  display:flex;
  justify-content:center;
  border-top:1px solid #707070;
  border-bottom:1px solid #707070;
`

const H5Title = styled.h5`
  text-align: left;
  padding-left: 8px;
  padding-top: 5px;
  padding-bottom: 5px;
  word-break: normal;
  margin: 0 0;

  `

const TitleDiv = styled.div`
  width:100%;
  max-width:1200px;
  @media(orientation: portrait){
    padding: 0 0;
    width:100%;
  }
`
const OverallTableDiv = styled.div`
  text-align: center;
  width:100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  overflow: hidden;
  transition: all 0.8s;
  height:auto;

`
