/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./components/header/header";
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import {WeatherDetail, UserProfile, NewPlanForm, PlanDetail, RegisterForm, EventStack} from "./components/body";
import styled from "styled-components";

class App extends React.Component{
  state = {

  }

  render() {
    return(
      <>
        <Header/>
        <MainBody>
          <LeftSide>
            <EventStack />
          </LeftSide>
          <RightSide>  
            <Router>
              <Switch> 
                <Route exact path="/" component={ WeatherDetail }></Route>
                <Route path="/user/profile/" component={ UserProfile }></Route>            
                <Route path="/plandetail/" component={ PlanDetail }></Route>            
                <Route path="/newplan/form" component={ NewPlanForm }></Route>            
                <Route path="/register/" component={ RegisterForm }></Route>            
              </Switch> 
            </Router>
          </RightSide>
        </MainBody>
      </>
    )
  }
}

const MainBody = styled.div`
  background-color: yellow;
  display: flex;
  justify-content: center;
  
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  width: 25%;
  min-height: 100px;
  background-color: brown;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const RightSide = styled.div`
  width: 65%;
  min-height: 100px;
  background-color: rgba(148, 148, 148);

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;


export default App;
