/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import axios from "axios";

class RegisterForm extends React.Component{
  state = {
    username: "",
    email: "",
    password: "",
    password2: ""
  }

  usernameHandler = (e) => {this.setState({ username: e.target.value })}

  emailHandler = (e) => {this.setState({ email: e.target.value })}

  passwordHandler = (e) => {this.setState({ password: e.target.value })}

  password2Handler = (e) => {this.setState({ password2: e.target.value })}

  sendRegistrationRequest = (e) => {
    axios.post(
      "http://127.0.0.1:8000/user/register/",
      {
        "username": this.state.username,
        "email": this.state.email,
        "password": this.state.password,
        "password2": this.state.password2
      }
    )
      .then((response) => {
        console.log(response.data);
      })

      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return(
      <RegisterFormWrapper>
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

          <LabelField>Email</LabelField>

          <InputField 
            type="email"
            id="email"
            placeholder="Email ..." 
            onChange={this.emailHandler} />

          <LabelField>Password</LabelField>

          <InputField 
            type="password"
            id="password"
            placeholder="Password ..."
            onChange={this.passwordHandler} />

          <LabelField>Confirm Password</LabelField>

          <InputField 
            type="password"
            id="password2"
            placeholder="Confirm password ..."
            onChange={this.password2Handler} />

          <SubmitButtonWrapper>
            <SubmitButton 
              type="button"
              value="submit"
              onClick={this.sendRegistrationRequest} />
              
          </SubmitButtonWrapper>
          
        </FormWrapper>
      </RegisterFormWrapper>
    )
  }
}

const RegisterFormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormTitle = styled.div`
  height: 40px;
  background-color: transparent;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
`;

const FormWrapper = styled.fieldset`
  display: flex;
  flex-direction: column;
  width: 65%;
  border: none;
  outline: none;
  justify-content: center;
  color: white;
`;

const InputField = styled.input`
  height: 25px;
  border: none;
  outline: none;
  margin-bottom: 10px;
  border-radius: 2px;
  padding: 3px;
`;

const LabelField = styled.label``;
const SubmitButton = styled.input`
  border: none;
  outline: none;
  height: 35px;
  width: 80px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background-color: rgba(89, 89, 89);

  &:hover {
    background-color: rgba(61, 61, 61);
  }
`;
const SubmitButtonWrapper = styled.div``;


export default RegisterForm;