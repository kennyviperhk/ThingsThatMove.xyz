import { connect, styled } from "frontity";
import React, { Fragment } from "react";

const TechInfo = ({ state, actions, libraries, data }) => {

  const ac = data && data.map((item, j) => {
    return (
      <Tr key={j + 10}>
        <TdYear key={j + 20}><ItemName key={j + 40}><span key={j}>{item.type_of_tech}</span></ItemName></TdYear>
        <TdName key={j + 30}>
          <ItemName key={j}>{item.description}</ItemName>
        </TdName>
      </Tr>
    )
  })

  return (<TechInfoSection>
      <TableDiv >
        <TitleDiv>
          <H5Title>Technical Infomation</H5Title>
        </TitleDiv>
        <TechInfoSectionTable>
          <TechInfoSectionBody>
            {ac}
          </TechInfoSectionBody>
        </TechInfoSectionTable>
      </TableDiv>
      <Hr/>
  </TechInfoSection>
  );
};

export default connect(TechInfo);

const TechInfoSection = styled.section`

  display:flex;
  flex-direction: column;
  background: white;
  color: black;
  margin: 0 auto;
  width:100%;
  height:auto;
  overflow-x: hidden;
  @media(orientation:portrait){
    padding: 0 15px;
  }

`

const TableDiv = styled.div`
  text-align: center;
  width:100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  padding-bottom: 80px;
      `
const TechInfoSectionTable = styled.table`

  max-width:1200px;
  width:80%;
  border-collapse: collapse;
  text-align: left;
  border: none;
  margin: 0 auto;
  @media(orientation:portrait){
    width:100%;
  }
`

const TechInfoSectionBody = styled.tbody`
  max-width: 1200px;
  border-collapse: collapse;
  text-align: left;
  border: none;
`

const Tr = styled.tr`
  border: none;
  border-bottom: 0px solid #707070;

  &:last-child{
    border-bottom: 0px solid #707070;
  }
      `

const TdYear = styled.td`
  width:25%;
  border: none;
  vertical-align:top;
      `

const TdName = styled.td`
  border: none;
  border-bottom: 0px solid #707070;
  &:last-child{
    border-bottom: 1px solid #707070;
  }
`

const ItemName = styled.p`
  margin: 1em 0 1em 0;
`

const H5Title = styled.h5`
  text-align:left;
  padding-left: 8px;
  padding-bottom: 20px;
  word-break:normal;
  `

const TitleDiv = styled.div`
  padding-top:20px;
  width:80%;
  max-width:1200px;
  @media(orientation: portrait){
    padding: 0 0;
    width:100%;
  }
`

const Hr = styled.hr`
width:100%;
margin:0;
padding:0;
height:1px;
`
