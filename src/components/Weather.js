import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import CityForm from "./CityForm";
import { StyledDay, StyledH3, StyledWeekDay } from "./modules/Titles";
import { StyledMain, Section, Cards, Card, HeroArticle, TitlePart } from "./modules/Sections"
import { data } from '../data1.js'
import { ReactComponent as CityTwoColor } from '../CityTwoColor.svg'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather, weatherSelector } from '../slices/weather'

const Weather = () => {
  const dispatch = useDispatch()
  const { weather, loading, hasErrors } = useSelector(weatherSelector)
  console.log('Weather: ', weather)

  const [query, setQuery] = useState("Suwałki");


  useEffect(() => {
    dispatch(fetchWeather())
  }, [dispatch])


  const renderWeatherCards = () => {
    if (loading) return <p style={{ color: "white" }}>Loading weather cards...</p>

    if (hasErrors) return <div style={{ color: "white", height: "100vh" }}> Cannot display weather cards...</div>


    return weather.filter((filteredItem) => filteredItem.dt_txt.includes("15:00:00")).map(item =>
      <Link to="/day" style={{ textDecoration: "none" }}>
        <Card key={item.dt_txt} onClick={openDayPage}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "baseline", justifyContent: "space-between" }}>
            <StyledWeekDay>
              {new Date(item.dt_txt.slice(0, 10)).toLocaleDateString("default", { weekday: 'short' })}
            </StyledWeekDay>
            <StyledDay>
              {new Date(item.dt_txt).toLocaleDateString("default", { month: 'short' })}, {new Date(item.dt_txt).getDate()}
            </StyledDay>
          </div>


          <p style={{ color: "#3e8797", fontSize: "2.5rem", marginTop: "0", marginBottom: "1rem" }}>{Math.floor(item.main.temp_max)}&deg; C</p>
          <img style={{ width: "80px", height: "80px" }}
            src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
            alt={`icon-${item.weather[0].icon}`}
          />
          <p style={{ color: "rgb(36, 40, 91)", fontSize: "1.2rem" }}>{item.weather[0].description}</p>

        </Card>
      </Link>


    )


  }



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
  };

  const openDayPage = () => {
    console.log("day component")
  }

  return (
    <StyledMain>
      <Section>
        <HeroArticle >
          <TitlePart>
            <StyledH3 >Weather forecast for your city</StyledH3>
            <CityForm
              onSubmit={handleSubmit}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </TitlePart>

          <CityTwoColor style={{ height: "400px", width: "auto", marginLeft: 0 }} />
        </HeroArticle>
      </Section>
      <Cards>
        {renderWeatherCards()}

      </Cards>

    </StyledMain>
  );
};




export default Weather;
