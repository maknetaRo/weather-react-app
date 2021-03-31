import styled from 'styled-components'

export const StyledMain = styled.main`
/* background: rgb(36, 40, 91); */
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='2000' preserveAspectRatio='none' viewBox='0 0 1440 2000'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1092%26quot%3b)' fill='none'%3e%3crect width='1440' height='2000' x='0' y='0' fill='url(%23SvgjsLinearGradient1093)'%3e%3c/rect%3e%3cpath d='M1440 0L1221.6100000000001 0L1440 797.1z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M1221.6100000000001 0L1440 797.1L1440 846.8100000000001L1128.5600000000002 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M1128.56 0L1440 846.8100000000001L1440 1408.15L618.51 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M618.51 0L1440 1408.15L1440 1776.04L210.49 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 2000L8.86 2000L0 1135.21z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 1135.21L8.86 2000L29.09 2000L0 533.38z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 533.3800000000001L29.09 2000L632.51 2000L0 287.6600000000001z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 287.6600000000001L632.51 2000L1103.62 2000L0 287.0800000000001z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1092'%3e%3crect width='1440' height='2000' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='109.72%25' y1='7%25' x2='-9.72%25' y2='93%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1093'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(25%2c 25%2c 63%2c 1)' offset='0.15'%3e%3c/stop%3e%3cstop stop-color='rgba(25%2c 25%2c 63%2c 1)' offset='0.23'%3e%3c/stop%3e%3cstop stop-color='rgba(25%2c 25%2c 63%2c 1)' offset='0.28'%3e%3c/stop%3e%3cstop stop-color='rgba(25%2c 25%2c 63%2c 1)' offset='0.29'%3e%3c/stop%3e%3cstop stop-color='rgba(25%2c 25%2c 63%2c 1)' offset='0.29'%3e%3c/stop%3e%3cstop stop-color='rgba(25%2c 25%2c 63%2c 1)' offset='0.46'%3e%3c/stop%3e%3cstop stop-color='rgba(25%2c 25%2c 63%2c 1)' offset='0.77'%3e%3c/stop%3e%3cstop stop-color='rgba(25%2c 25%2c 63%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
 background-repeat: repeat;
 background-position: center;
 background-size: cover;
max-width: 1440px; 
 padding: 0;
 margin: 0 auto;
 padding-bottom: 7rem;
 min-height: 100vh;
`;


export const Section = styled.section`
 
  /* background: #dddbdb; */
  margin: 0 auto;
  text-align: center;
  padding: 0;
`;

export const Cards = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 3%;
  justify-content: space-evenly;
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  margin: 1rem 0.5rem;
  padding: 1rem;
  border-radius: 5px;
  border: 0;
  /* box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5); */
  width: 180px;
  align-items: center;
  justify-content: space-around;
  background: #e7e5e5;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }

  a {
      text-decoration: none;
  }
`;

export const HeroArticle = styled.article`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export const TitlePart = styled.div`
    max-width: calc(500px - 10%);
    margin-top: 5rem;
    padding-left: 2rem;
    padding-right: 2rem;

`;



