import styled from 'styled-components';

export const StyledMain = styled.main`
  /* background: rgb(36, 40, 91); */

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

export const HourCard = styled(Card)`
  width: 800px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const HeroArticle = styled.article`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
`;

export const HeroDay = styled(HeroArticle)`
  padding-top: 2rem;
  flex-direction: row;
  padding-left: 1rem;
`;

export const TitlePart = styled.div`
  max-width: calc(500px - 10%);
  margin-top: 5rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const ImagePart = styled.div`
  max-width: calc(700px - 10%);
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2rem;

  @media (max-width: 480px) {
    margin: 0 auto;
    height: 400px;
    max-width: calc(500px - 10%);
  }
`;
