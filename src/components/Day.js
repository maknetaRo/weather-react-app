import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { StyledMain, Section, HeroArticle, TitlePart, Cards, Card } from './modules/Sections'
import { StyledH3 } from './modules/Titles'
import { Button } from './modules/Buttons'
import { ReactComponent as RainTwoColor } from '../Rain_Two_Color.svg'
import { data } from '../data1.js'


const Day = () => {
    const [hourWeather, setHourWeather] = useState(data[0].list)



    return (
        <StyledMain>
            <Section>
                <HeroArticle style={{ paddingTop: "2rem", flexDirection: "row", paddingLeft: "1rem" }}>

                    <TitlePart>
                        <StyledH3>Every three hours weather forecast for your city</StyledH3>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
                            <h3 style={{ color: "#ffd200", marginTop: "0", fontSize: "2.5rem", fontWeight: "bold", paddingRight: "1rem", paddingTop: "1rem" }}>Sun</h3>
                            <p style={{ fontSize: "1.25rem", color: "white" }}>March, 28</p>
                        </div>

                    </TitlePart>
                    <RainTwoColor style={{ height: "350px", width: "auto", marginLeft: 0 }} />


                </HeroArticle>

            </Section>
            <Section>
                <Link to="/"><Button>Back</Button></Link>
            </Section>
            <Cards>
                {hourWeather.filter((item) => item.dt_txt.includes("2021-03-28")).map((filteredItem) => {
                    console.log(filteredItem)
                    const { temp_max, humidity } = filteredItem.main;
                    const { icon, description } = filteredItem.weather[0]
                    const { dt_txt } = filteredItem;

                    return (
                        <Card key={dt_txt} style={{ width: "800px", flexDirection: "row", flexWrap: "wrap" }}>
                            <p style={{ color: "#ffd200", fontSize: "2.75rem", fontWeight: "bold", display: "flex" }}>{dt_txt.slice(11, 13)} <span style={{ fontSize: "2rem" }}>{dt_txt.slice(17)}</span></p>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <img src={`http://openweathermap.org/img/w/${icon}.png`} style={{ width: "80%" }} />
                                <p style={{ color: "rgb(36, 40, 91)" }}>{description}</p>
                            </div>

                            <p style={{ color: "#3e8797", fontSize: "2.5rem", marginTop: "0", marginBottom: "1rem" }}>{Math.floor(temp_max)}&deg; C</p>


                            <p>Humidity: <span style={{ color: "#3e8797", fontSize: "1.2rem", paddingLeft: "0.25rem" }}>{humidity}%</span> </p>

                        </Card>
                    )
                })}

            </Cards>

        </StyledMain>
    )
}


export default Day
