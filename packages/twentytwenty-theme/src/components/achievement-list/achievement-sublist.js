import { connect, css, styled } from "frontity";
import React, { Component, Fragment } from "react";
import Link from "../link";

const AchievementSublist = ({ thisData }) => {
  let achievementLength = thisData.length * 60 * 3 ;
  const returnThis = thisData && thisData.map((item,id) => {
  return (
    <Tr key={id}>
      <ThYear><ItemName><span>{item.year}</span></ItemName></ThYear>
      <ThName><ItemName>{item.url ? <ALink href={item.url}>{item.name} - {item.organizer_location}</ALink> : <SpanNoDeco>{item.name} - {item.organizer_location}</SpanNoDeco>}</ItemName></ThName>
    </Tr>
  )
  })
  return returnThis;

}

export default connect(AchievementSublist);



const Tr = styled.tr`
  border: none;
  border-bottom: 1px solid #707070;

  &:last-child{
    border-bottom: 0px solid #707070;
}
`

const ThYear = styled.th`
  width:10%;
  border: none;
  min-width: 80px;
`

const ThName = styled.th`
  border: none;
`

const ItemName = styled.p`
  margin: 0.5em 0 0.5em 0;
`

const ALink = styled.a`
  color: black;
  text-decoration: none;
  &:hover{
    text-decoration: underline;
  }
`

const SpanNoDeco = styled.span`
  color: black;
  font-weight: 300;
`
