/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import axios from "axios";
import moment from "moment";
import {MomentPickerPopup} from "../index";

class WeatherDetail extends React.Component{
  state = {
    location: {},
    currentWeather: {},
    currentCondition: {},
    weatherDataIn3Days: [],
    periodIndex: 0,
    weatherConditionHours: [],
    displayPeriodPicker: false
  }

  periodHandler = (e) => {
    const index = e.target.getAttribute("data-date-index");
    this.setState({
      periodIndex: index
    })

    const aDay = this.state.weatherDataIn3Days[index];
 
    this.setState({
      weatherConditionHours: [...aDay.hour]
    });

    if (this.state.displayPeriodPicker === false) {
      this.setState({
        displayPeriodPicker: true
      })
    }

    else {
      this.setState({
        displayPeriodPicker: false
      })
    }
  }

  componentDidMount() {
    const fetchWeatherDataIn5Days = axios({
      method: "get",
      url: "http://api.weatherapi.com/v1/forecast.json?key=ab31f864b9464860b2631149211404&q=Toronto&days=5&aqi=yes&alerts=yes",
      timeout: 5000,
    })
    .then((res) => {
      console.log(res);
      
      const expected_dates = res.data.forecast.forecastday.slice(1, res.data.forecast.forecastday.length);

      this.setState({
        currentWeather: res.data.current,
        currentCondition: res.data.current.condition,
        location: res.data.location,
        weatherDataIn3Days: [...expected_dates]
      })
    })
    .catch((err) => {console.log("Error.....")});
  }

  render() {
    console.log(this.state.weatherDataIn3Days);
    console.log(this.state.currentCondition.icon);
    return(
      <WeatherDetailWrapper>
        <CurrentWeather>
          {/* {console.log(this.state.currentWeather.condition.icon)} */}
          <label
            style={{
              fontSize: "18px",
              fontWeight: 600,
              marginTop: "10px",
              marginBottom: "10px",
            }}>
            Weather Today
          </label>
          <WeatherLabel>
            Current Time: 
            <Description>
              {moment.unix(this.state.currentWeather.last_updated_epoch).format('MMMM Do YYYY, h:mm:ss a')}
            </Description>
          </WeatherLabel>

          <Location>
              Location: 
              <Description>
                {this.state.location.name} - {this.state.location.region} - {this.state.location.country}
              </Description>
          </Location>
    
          <WeatherLabel>Temparature: 
            <Description>
              {this.state.currentWeather.temp_c} C degree
            </Description>
          </WeatherLabel>

          <Humidity>
            <WeatherLabel>Humidity: 
              <Description>
                {this.state.currentWeather.humidity} % RH
              </Description>
            </WeatherLabel>
          </Humidity>
          
          <Condition>
            <WeatherLabel>Weather Condition: 
              <Description>
                {this.state.currentCondition.text}
              </Description>
            </WeatherLabel>

            <ConditionIllutration src={this.state.currentCondition.icon} alt="no-img" />
          </Condition>

        </CurrentWeather>
        <ExpectedWeather>
          {this.state.weatherDataIn3Days.map((day, index) => {
              return(
                <WeatherInDay 
                  key={index}>
                  <ExpectedDate>
                    {moment(day.date).format('MMMM Do YYYY')}
                  </ExpectedDate>
                  <ConditionIllutration 
                    src={day.day.condition.icon} 
                    alt="no-img" />

                  <PickDayButton 
                    type="button" 
                    data-date-index={index}
                    value="Pick Day"
                    onClick={this.periodHandler}/>

                </WeatherInDay>
              )
            })}
        </ExpectedWeather>

        {(() => {
          if (this.state.displayPeriodPicker === true) {
            return <MomentPickerPopup hours={this.state.weatherConditionHours} />
          }
        })()}

      </WeatherDetailWrapper>
    )
  }
}

// const PeriodPicker = styled.div``;
// const WeatherCondition = styled.div``;
// const Period = styled.label``;

// const WeatherConditionPerHour = styled.div`
//   height: 100px;
//   width: 100px;
//   background-color: white;
// `;

const WeatherInDay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: yellow;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
`;

const PickDayButton = styled.input`

`;

const CurrentWeather = styled.div`
  background-color: rgba(20, 20, 20);
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 14px;
  font-weight: 600;
  border-radius: 5px;
  padding: 8px;
  margin: 5px;
`;

const ExpectedWeather = styled.div`
  display: flex;
`;

const Location = styled.label``;

const Humidity = styled.label``;

const Condition = styled.div`
  display: flex;
  flex-direction :column;
`;
const Description = styled.span`
  margin-left: 5px;
  color: yellow;
`;
const ConditionIllutration = styled.img`
  height: 45px;
  width: 45px;
`;

const WeatherDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const WeatherLabel = styled.label``;

const ExpectedDate = styled.label`
  height: 35px;
`;

const Temparature = styled.span``;

export default WeatherDetail;