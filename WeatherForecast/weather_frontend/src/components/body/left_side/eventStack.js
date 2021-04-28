import React from "react";
import styled from "styled-components";
import axios from "axios";
import moment from "moment";

class EventStack extends React.Component{
  state = {
    events: []
  }

  viewEventDetail = () => {

  }

  fetchingEvents = () => {
    axios.get("http://127.0.0.1:8000/weather/fetch_event")

    .then((res) => {
        this.setState({ events: [...res.data.data]});
    })

    .catch((err) => {
        console.log(err);
    })
  }

  componentDidMount() {
    this.fetchingEvents();
  }

  render() {
    return(
        <EventWrapper>
            {this.state.events.map((event, index) => {
                return (
                    <EventItem>
                        <EventAt>
                            {moment(event.event_start).format("h:mm:ss a'")} - {moment(event.event_end).format("h:mm:ss a")}
                        </EventAt>
                        <EventTitle>{event.event_title}</EventTitle>
                        <ViewButton 
                            type="button"
                            value="View"
                            onClick={this.viewEventDetail}/>

                    </EventItem>
                )
            })}
                

        </EventWrapper>
    )
  }
}

const ViewButton = styled.input``;

const EventWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 768px) {
        flex-direction: row;
    }
`;

const EventItem = styled.div`
    height: 150px;
    width: 100px;
    background-color: black;
    color: yellow;
    margin-right: 10px;

    @media only screen and (max-width: 768px) {
        
    }
`;
const EventTitle = styled.div``;
const EventAt = styled.label`
    color: yellow;
`;

export default EventStack;