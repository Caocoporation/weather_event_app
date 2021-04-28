/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import moment from "moment";
import {NewPlanForm} from "../index";

class MomentPickerPopup extends React.Component{
  state = {
    start: true,
    displayNewPlanForm: false,
    hours: this.props.hours,
    startPeriod: "",
    endPeriod: ""
  }

  viewPeriodPicker = () => {
    document.getElementById('period-picker').addEventListener(
        'mousewheel', 
        function(e) {
            this.scrollLeft -= (e.wheelDelta);
            e.preventDefault();
        }, false);
  }

  startPeriodTrigger = (e) => {
    const remainPeriod = this.state.hours.slice(
      parseInt(e.target.getAttribute("data-index")), 
      this.state.hours.length
    )

    this.setState({
      start: false,
      hours: remainPeriod,
      startPeriod: e.target.getAttribute("data-start-period")
    })

    console.log(this.state.hours);
  }

  endPeriodTrigger = (e) => {
    this.setState({
      endPeriod: e.target.getAttribute("data-end-period"),
      displayNewPlanForm: true
    })
  }

  render() {
    console.log(this.state.hours);

    return (
      <>
        <PeriodPicker 
            id="period-picker"
            onMouseEnter={this.viewPeriodPicker}>
            {this.state.hours.map((hour, index) => {
              return (
                <WeatherConditionPerHour 
                    key={index}
                    style={{ width: "150px" }}>
                  <Period>
                    {moment.unix(hour.time_epoch).format("h:mm:ss a")}
                  </Period>
                  <WeatherCondition>
                    <Description>
                      {hour.condition.text}
                    </Description>
                    <ConditionIllutration
                        src={hour.condition.icon} 
                        alt="no img" />
                
                  </WeatherCondition>

                  { (() => {
                    if (this.state.start === true) {
                      return (
                        <PickMomentButton 
                          type="button"
                          data-index={index + 1}
                          data-start-period={hour.time_epoch}
                          value="Pick Start Period"
                          onClick={this.startPeriodTrigger}/> 
                      )
                    }

                    else {
                      return (
                        <PickMomentButton 
                          type="button"
                          data-end-period={hour.time_epoch}
                          value="Pick End Period"
                          onClick={this.endPeriodTrigger}/> 
                      )
                    }
                  })() }
                  
                </WeatherConditionPerHour>
              )
            })}

        </PeriodPicker>
        <>
          {(()  => {
            if (this.state.displayNewPlanForm === true) {
              return (
                <NewPlanFormWrapper>
                  <NewPlanForm
                    startPeriod={this.state.startPeriod}  
                    endPeriod={this.state.endPeriod} />

                </NewPlanFormWrapper>
              )
            }
          })()}
        </>
      </>
    )
  }
}

const NewPlanFormWrapper = styled.div`
  width: 90%;
`;

const PeriodPicker = styled.div`
    display: flexbox;
    overflow-x: scroll;
    width: 95%; 
    height: 250px;
`;

const PickMomentButton = styled.input`
    margin-top: 10px;
`;

const Period = styled.div`
    margin-bottom: 10px;
`;
const ConditionIllutration = styled.img`
    margin-top: 15px;
`;

const WeatherConditionPerHour = styled.div`
    background-color: black;
    margin: 5px;
    padding: 5px;
    width: 150px;
    color: yellow;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const WeatherCondition = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Description = styled.div``;

export default MomentPickerPopup;