import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CityForm from "./CityForm";
import { Title } from "./modules/Title";

const Weather = () => {
  const apiUrl = "https://api.openweathermap.org/data/2.5/";
  const apiKey = process.env.REACT_APP_KEY;

  const [weather, setWeather] = useState([{}]);
  const [query, setQuery] = useState("Suwałki");

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    try {
      const response = await fetch(
        `${apiUrl}forecast?q=${query}&units=metric&APPID=${apiKey}`
      );
      const data = await response.json();
      console.log(data);
      const weather = await data.list;
      console.log(weather);
      setWeather(weather);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    setQuery("");
  };

  return (
    <StyledMain>
      <Section>
        <CityForm
          onSubmit={handleSubmit}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Title>City: {query} </Title>
        <Cards>
          {weather
            .filter((item) => item.dt_txt.includes("15:00:00"))
            .map((filteredItem) => {
              console.log(filteredItem);
              const { temp_max } = filteredItem.main;
              const { icon, description } = filteredItem.weather[0];
              const { dt_txt } = filteredItem;

              return (
                <Card>
                  {dt_txt.slice(0, 10)}
                  <p>{Math.floor(temp_max)}&deg; C</p>
                  <img
                    src={`http://openweathermap.org/img/w/${icon}.png`}
                    alt={`icon-${icon}`}
                  />
                  <p>{description}</p>
                </Card>
              );
            })}
        </Cards>
      </Section>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  padding: 5%;
  margin: 0 auto;
`;

const Section = styled.section`
  margin: 0 auto;
  text-align: center;
`;

const Cards = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 5%;
`;

const Card = styled.article`
  margin: 2.5rem;
  padding: 1rem;
  border-radius: 5px;
  border: 0;
  box-shadow: 2px 2px 2px 2 px rgba(0, 0, 0, 0.5);
  width: 200px;
  align-items: center;
  justify-content: space-around;
`;

export default Weather;
