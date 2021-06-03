import { connect, styled } from "frontity";
import React, { Fragment } from "react";

const ExhibitionRecord = ({ state, actions, libraries, data }) => {

  const ac = data && data.map((item, j) => {
    return (
      <Tr key={j + 10}>
        <TdYear key={j + 20}><ItemName key={j + 40}><span key={j}>{item.exhibition_entry}</span></ItemName></TdYear>
        <TdName key={j + 30}>
          {item.credit && item.credit.map((ite, i) => {
            return (
              <Fragment key={i + 10}>
                <ItemName key={i}>{ite.url ? <ALink href={ite.url}>{ite.name}</ALink> : ite.name} - {ite.post}</ItemName>
              </Fragment>
            )
          })
          }
        </TdName>
      </Tr>
    )
  })

  return (<ExhibitionRecordSection>
      <TableDiv >
        <TitleDiv>
          <H5Title>Exhibition Record</H5Title>
        </TitleDiv>
        <ExhibitionRecordTable>
          <ExhibitionRecordTableBody>
            {ac}
          </ExhibitionRecordTableBody>
        </ExhibitionRecordTable>
      </TableDiv>
  </ExhibitionRecordSection>
  );
};

export default connect(ExhibitionRecord);

const ExhibitionRecordSection = styled.section`

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

      `
const ExhibitionRecordTable = styled.table`

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

const ExhibitionRecordTableBody = styled.tbody`
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
  padding-top:100px;
  width:80%;
  max-width:1200px;
  @media(orientation: portrait){
    padding: 0 0;
    width:100%;
  }
`


const ALink = styled.a`
  color:black;
`
