import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledMain,
  Section,
  HeroArticle,
  TitlePart,
  Cards,
  Card,
} from './modules/Sections';
import { StyledDay, StyledH3, StyledWeekDay } from './modules/Titles';
import { StyledDateRow } from './modules/StyledCard';
import { Button } from './modules/Buttons';
import { ReactComponent as RainTwoColor } from '../Rain_Two_Color.svg';

const Day = (props) => {
  if (!props.location.dayProps) {
    return '';
  }
  if (props.location.dayProps) {
    const { dt_txt, weather, loading, hasErrors, value } =
      props.location.dayProps;
    const day = dt_txt.slice(0, 10);
    console.log(day);
    console.log(weather);
    console.log(value);

    const rennderHourCards = () => {
      if (loading)
        return <p style={{ color: 'white' }}>Loading weather cards</p>;

      if (hasErrors)
        return (
          <div style={{ color: 'white', height: '100vh' }}>
            Cannot display weather cards
          </div>
        );
      return weather
        .filter((filteredItem) => filteredItem.dt_txt.includes(day))
        .map((item) => {
          const { temp_max, humidity } = item.main;
          const { icon, description } = item.weather[0];
          const { dt_txt } = item;
          return (
            <Card
              key={dt_txt}
              style={{
                width: '800px',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            >
              <p
                style={{
                  color: '#ffd200',
                  fontSize: '2.75rem',
                  fontWeight: 'bold',
                  display: 'flex',
                }}
              >
                {dt_txt.slice(11, 13)}{' '}
                <span style={{ fontSize: '2rem' }}>{dt_txt.slice(17)}</span>
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src={`http://openweathermap.org/img/w/${icon}.png`}
                  style={{ width: '80%' }}
                />
                <p style={{ color: 'rgb(36, 40, 91)' }}>{description}</p>
              </div>

              <p
                style={{
                  color: '#3e8797',
                  fontSize: '2.5rem',
                  marginTop: '0',
                  marginBottom: '1rem',
                }}
              >
                {Math.floor(temp_max)}&deg; C
              </p>

              <p>
                Humidity:{' '}
                <span
                  style={{
                    color: '#3e8797',
                    fontSize: '1.2rem',
                    paddingLeft: '0.25rem',
                  }}
                >
                  {humidity}%
                </span>
              </p>
            </Card>
          );
        });
    };

    return (
      <StyledMain>
        <Section>
          <HeroArticle
            style={{
              paddingTop: '2rem',
              flexDirection: 'row',
              paddingLeft: '1rem',
            }}
          >
            <TitlePart>
              <StyledH3>
                Every three hours weather forecast for your city:
              </StyledH3>
              <StyledH3 style={{ color: '#68e1fd' }}>{value}</StyledH3>
              <StyledDateRow
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'baseline',
                  justifyContent: 'flex-start',
                }}
              >
                <StyledWeekDay>
                  {new Date(day.slice(0, 10)).toLocaleDateString('default', {
                    weekday: 'short',
                  })}
                </StyledWeekDay>
                <StyledDay style={{ fontSize: '1.25rem', color: 'white' }}>
                  {new Date(day).toLocaleDateString('default', {
                    month: 'short',
                  })}
                  , {new Date(day).getDate()}
                </StyledDay>
              </StyledDateRow>
            </TitlePart>
            <RainTwoColor
              style={{ height: '350px', width: 'auto', marginLeft: 0 }}
            />
          </HeroArticle>
        </Section>
        <Section>
          <Link to="/">
            <Button>Back</Button>
          </Link>
        </Section>
        <Cards>{rennderHourCards()}</Cards>
      </StyledMain>
    );
  }
};

export default Day;
