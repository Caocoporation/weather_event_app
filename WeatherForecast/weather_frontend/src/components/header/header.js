/* eslint-disable no-unused-vars */
import React from "react";
import {Logo, SearchBar, Other} from "./index";
import styled from "styled-components";

class Header extends React.Component{
  state = {

  }

  render() {
    return(
      <HeaderWrapper>
        <Logo/>
        <SearchBar/>
        <Other/>
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  background-color: black;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
`;

export default Header;