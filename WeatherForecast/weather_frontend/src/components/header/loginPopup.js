/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import axios from "axios";
import {Other} from "./index";
import {connect} from "react-redux";
import {loginAction} from "../../action/loginAction";
import {userFetchingAction} from "../../action/userAction";
import {loginPopupStatus} from "../../action/popupAction";

class LoginForm extends React.Component{
  state = {
    username: "",
    password: ""
  }

  usernameHandler = (e) => {this.setState({ username: e.target.value })}
  passwordHandler = (e) => {this.setState({ password: e.target.value })}
  sendLoginRequest = async (e) => {

    const loginData = {
      "username": this.state.username,
      "password": this.state.password
    }
    
    const loginUrl = "http://127.0.0.1:8000/user/login/";

    await this.props.userFetchingAction(loginData, loginUrl);
    // await this.props.loginAction();
    await this.props.loginPopupStatus();
  }

  render() {
    return(
      <LoginFormWrapper>
        <FormWrapper>
          <FormTitle>
            Register Form
          </FormTitle>
          <LabelField>Username</LabelField>

          <InputField 
            type="text"
            id="username"
            placeholder="Username ..."
            onChange={this.usernameHandler} />

          <LabelField>Password</LabelField>

          <InputField 
            type="password"
            id="password"
            placeholder="Password ..."
            onChange={this.passwordHandler} />

          <SubmitButtonWrapper>
            <SubmitButton 
              type="button"
              value="Login"
              onClick={this.sendLoginRequest} />
              
          </SubmitButtonWrapper>
         
        </FormWrapper>
      </LoginFormWrapper>
    )
  }
}

const LoginFormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width:100%;
`;

const FormTitle = styled.div`
  height: 40px;
  background-color: transparent;
  display: flex;
  align-items: center;
  margin-bottom: 2px;
  font-size: 18px;
  font-weight: 600;
`;

const FormWrapper = styled.fieldset`
  display: flex;
  flex-direction: column;
  width: 75%;
  border: none;
  outline: none;
  justify-content: center;
  color: black;
`;

const InputField = styled.input`
  height: 25px;
  border: none;
  outline: none;
  margin-bottom: 5px;
  border-radius: 2px;
  padding: 3px;
`;

const LabelField = styled.label``;

const SubmitButton = styled.input`
  border: none;
  outline: none;
  height: 25px;
  width: 50px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  background-color: rgba(89, 89, 89);

  &:hover {
    background-color: rgba(61, 61, 61);
  }
`;

const SubmitButtonWrapper = styled.div``;

const mapStateToProps = function (state) {
  return {
      isLogin: state.loginStatus.loginStatus,
  }
}

export default connect(
  mapStateToProps, 
  {
    loginAction,
    userFetchingAction,
    loginPopupStatus
  }
)(LoginForm);