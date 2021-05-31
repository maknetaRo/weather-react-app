import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledMain,
  Section,
  HeroDay,
  TitlePart,
  Cards,
  HourCard,
} from './modules/Sections';
import { StyledDay, StyledH3, StyledWeekDay } from './modules/Titles';
import {
  StyledDayRow,
  Hour,
  StyledMinutes,
  StyledDesc,
  StyledWeatherIcon,
  ImageBox,
  StyledTemp,
  PercentSpan,
} from './modules/StyledCard';
import { Button } from './modules/Buttons';
import { ReactComponent as RainTwoColor } from '../Rain_Two_Color.svg';

const Day = (props) => {
  if (!props.location.dayProps) {
    return 'error...';
  }
  if (props.location.dayProps) {
    const { dt_txt, weather, loading, hasErrors, value } =
      props.location.dayProps;
    const day = dt_txt.slice(0, 10);

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
            <HourCard key={dt_txt}>
              <Hour>
                {dt_txt.slice(11, 13)}
                <StyledMinutes>{dt_txt.slice(17)}</StyledMinutes>
              </Hour>
              <ImageBox>
                <StyledWeatherIcon
                  src={`https://openweathermap.org/img/w/${icon}.png`}
                />
                <StyledDesc>{description}</StyledDesc>
              </ImageBox>

              <StyledTemp>{Math.floor(temp_max)}&deg; C</StyledTemp>

              <StyledDesc>
                Humidity:
                <PercentSpan>{humidity}%</PercentSpan>
              </StyledDesc>
            </HourCard>
          );
        });
    };

    return (
      <StyledMain>
        <Section>
          <HeroDay>
            <TitlePart>
              <StyledH3>
                Every three hours weather forecast for your city:
              </StyledH3>
              <StyledH3 style={{ color: '#68e1fd' }}>{value}</StyledH3>
              <StyledDayRow>
                <StyledWeekDay>
                  {new Date(day.slice(0, 10)).toLocaleDateString('en-US', {
                    weekday: 'short',
                  })}
                </StyledWeekDay>
                <StyledDay style={{ fontSize: '1.25rem', color: 'white' }}>
                  {new Date(day.slice(0, 10)).toLocaleDateString('en-US', {
                    month: 'short',
                  })}
                  , {new Date(day.slice(0, 10)).getDate()}
                </StyledDay>
              </StyledDayRow>
            </TitlePart>
            <RainTwoColor
              style={{ height: '350px', width: 'auto', marginLeft: 0 }}
            />
          </HeroDay>
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
