import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CityForm from './CityForm';
import { StyledDay, StyledH3, StyledWeekDay } from './modules/Titles';
import {
  StyledMain,
  Section,
  Cards,
  Card,
  HeroArticle,
  TitlePart,
  ImagePart,
} from './modules/Sections';
import {
  StyledTemp,
  StyledWeatherIcon,
  StyledWeatherDescription,
  StyledDateRow,
} from './modules/StyledCard';
import { ReactComponent as CityTwoColor } from '../CityTwoColor.svg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, weatherSelector } from '../slices/weather';
const { REACT_APP_WEATHER_API_KEY } = process.env;

const Weather = () => {
  const dispatch = useDispatch();
  const { weather, loading, hasErrors } = useSelector(weatherSelector);
  const [value, setValue] = useState('Suwałki');

  const [query, setQuery] = useState('Suwałki');
  const apiUrl = 'https://api.openweathermap.org/data/2.5/';
  const apiKey = REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    dispatch(fetchWeather({ apiUrl, apiKey, query }));
  }, [dispatch, apiUrl, apiKey, query]);

  const renderWeatherCards = () => {
    if (loading)
      return <p style={{ color: 'white' }}>Loading weather cards...</p>;

    if (hasErrors)
      return (
        <div style={{ color: 'white', height: '100vh' }}>
          Cannot display weather cards...
        </div>
      );
    const handleProps = (day) => {
      return day;
    };

    return weather
      .filter((filteredItem) => filteredItem.dt_txt.includes('15:00:00'))
      .map((item) => {
        const { dt_txt } = item;
        return (
          <Link
            to={{
              pathname: '/day',
              dayProps: {
                dt_txt,
                weather,
                loading,
                hasErrors,
                value,
              },
            }}
            style={{ textDecoration: 'none' }}
            onClick={() => handleProps({ dt_txt })}
            key={dt_txt}
          >
            <Card>
              <StyledDateRow>
                <StyledWeekDay>
                  {new Date(dt_txt.slice(0, 10)).toLocaleDateString('en-US', {
                    weekday: 'short',
                  })}
                </StyledWeekDay>
                <StyledDay>
                  {new Date(dt_txt.slice(0, 10)).toLocaleDateString('en-US', {
                    month: 'short',
                  })}
                  , {new Date(dt_txt.slice(0, 10)).getDate()}
                </StyledDay>
              </StyledDateRow>

              <StyledTemp>{Math.floor(item.main.temp_max)}&deg; C</StyledTemp>
              <StyledWeatherIcon
                src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                alt={`icon-${item.weather[0].icon}`}
              />
              <StyledWeatherDescription>
                {item.weather[0].description}
              </StyledWeatherDescription>
            </Card>
          </Link>
        );
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(value);
  };

  return (
    <StyledMain>
      <Section>
        <HeroArticle>
          <TitlePart>
            <StyledH3>Weather forecast for your city</StyledH3>
            <CityForm
              onSubmit={handleSubmit}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </TitlePart>
          <ImagePart>
            <CityTwoColor
              style={{
                height: '400px',
                width: 'auto',
                margin: '0 2rem',
                padding: '0 2rem',
              }}
            />
          </ImagePart>
          {/*<CityTwoColor style={{ height: '100%', width: 'auto' }} />*/}
        </HeroArticle>
      </Section>
      <Cards>{weather ? renderWeatherCards() : ''}</Cards>
    </StyledMain>
  );
};

export default Weather;
