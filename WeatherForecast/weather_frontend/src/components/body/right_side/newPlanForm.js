/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import axios from "axios";
import moment from "moment";

class NewPlanForm extends React.Component{
  state = {
    startPeriod: this.props.startPeriod,
    endPeriod: this.props.endPeriod
  }

  eventHandler = (e) => {
    const event_start = document.querySelector("#start_period");
    const event_end = document.querySelector("#end_period");
    const event_title = document.querySelector("#event_title");
    const event_activity = document.querySelector("#event_activity");

    const eventInfo = {
      "event_start": event_start.getAttribute("data-start-period"),
      "event_end": event_end.getAttribute("data-end-period"),
      "event_title": event_title.value,
      "event_activity": event_activity.value
    }

    const sendEventRequest = axios.post(
      "http://127.0.0.1:8000/weather/add_event/",
      eventInfo
    )
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    console.log(this.state.startPeriod, this.state.endPeriod);

    return(
      <NewPlanFormWrapper>
        <FormTitle>
          Create New Event
        </FormTitle>

        <FormWrapper>
          <EventLabel> Event Starts At </EventLabel>
          <StartPeriod
            id="start_period"
            data-start-period={this.state.startPeriod}>

            {moment.unix(this.state.startPeriod).format("h:mm a")}
          </StartPeriod>

          <EventLabel> Event Ends At </EventLabel>
          <EndPeriod
            id="end_period"
            data-end-period={this.state.endPeriod}>

            {moment.unix(this.state.endPeriod).format("h:mm a")}
          </EndPeriod>

          <EventLabel> Event Title </EventLabel>

          <InputField 
            type="input"
            id="event_title"
            required
            placeholder="Event title..."/>

          <ActivityLabel> Activities </ActivityLabel>

          <TextField
            id="event_activity"
            required
            placeholder="Activity..." />

          <SubmitButtonWrapper>
            <SubmitButton 
              type="button"
              value="submit"
              onClick={this.eventHandler}/>
          </SubmitButtonWrapper>
          
        </FormWrapper>
      </NewPlanFormWrapper>
    )
  }
}

const StartPeriod = styled.p``;
const EndPeriod = styled.p``;

const NewPlanFormWrapper = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  background-color: rgba(148, 148, 148);
`;
const FormTitle = styled.label`
  background-color: transparent;
  color: white;
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: space-around;
  padding-left: 10px;
  padding-right: 10px;
  width: 70%;
`;
const EventLabel = styled.label`
  background-color: transparent;
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

const InputField = styled.input`
  height: 35px;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 0 5px 0 5px;
  margin-bottom: 5px;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
`;

const ActivityLabel = styled.label`
  background-color: transparent;
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

const SubmitButton = styled.input`
  width: 70px;
  height: 36px;
  border: none;
  outline: none;
  color: white;
  font-size: 16px;
  font-weight: 600;
  background-color: rgba(89, 89, 89);

  &:hover{
    background-color: rgba(61, 61, 61);
  }
`;

const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextField = styled.textarea`
  height: 150px;
  padding: 5px;
  border: none;
  outline: none;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
`;

export default NewPlanForm;