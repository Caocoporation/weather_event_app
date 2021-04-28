/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import {LoginForm} from "../index";
import {connect} from "react-redux";

import {loginAction} from "../../../action/loginAction";
import {userClearingAction} from "../../../action/userAction";
import {loginPopupStatus} from "../../../action/popupAction";

class Other extends React.Component{
  state = {
    login: false,
    loginStatus: false,
    user: "",
    loginPopupStatus: this.props.loginPopupStatus
  }

  loginHandler = (e) => {
    console.log(e.target.value);
    this.props.loginAction();

    if (e.target.value === "Login") {
      this.props.loginPopupStatus();
    }

    else {
      this.props.userClearingAction();
    }
  }

  turnOffLoginPopup = () => {
    this.props.loginPopupStatus();
    this.props.loginAction();
  }

  render() {
    console.log(this.state.loginStatus);
    
    return(
      <OtherWrapper>
        <OtherButton 
          type="button"
          value={this.props.isLogin === false ? "Login": "Logout"}
          onClick={this.loginHandler} />

          {(() => { if (this.props.isLoginPopup === true) {
            return(
              <LoginPopup id="login-popup">
                <CancelButtonWrapper>
                  <CancelButton 
                    type="button"
                    value="X"
                    onClick={this.turnOffLoginPopup} />
              
                </CancelButtonWrapper>
                <LoginForm /> 
              </LoginPopup>
            )       
          }})()}
        
      </OtherWrapper>
    )
  }
}

const LoginPopup = styled.div`
  display: flex;
  position: absolute;
  top: 0px;
  right: 0px;
  height: 200px;
  width: 100%;
  background-color: white;
  min-width: 200px;
`;

const CancelButtonWrapper = styled.div``;

const CancelButton = styled.input`
  position: absolute;
  top: 2px;
  right: 2px;
`;

const OtherWrapper = styled.div`
  height: 80px;
  width: 25%;
  min-width: 80px;
  background-color: brown;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const OtherButton = styled.input`
  height: 35px;
  width: 70px;
  display: grid;
  place-items: center;
`;

const mapStateToProps = function (state) {
  return {
      isLogin: state.loginStatus.loginStatus,
      isLoginPopup: state.popup.loginPopupStatus
  }
}

export default connect(
  mapStateToProps, 
  {
    loginAction, 
    userClearingAction,
    loginPopupStatus
  }
)(Other);