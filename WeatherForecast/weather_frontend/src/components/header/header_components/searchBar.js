/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

class SearchBar extends React.Component{
  state = {
    
  }

  render() {
    return(
      <SearchWrapper>
        <InnerWrapper>
          <SearchInput
            type="text"
            placeholder="Enter event ...">

            </SearchInput>
          <SearchIcon></SearchIcon>
        </InnerWrapper>
      </SearchWrapper>
    )
  }
}

const SearchInput = styled.input`
  height: 35px;
  width: 85%;
  background-color: white;
  border: none;
  outline: none;
  border-radius: 50px 0 0 50px;
  padding-left: 5px;
  padding-right: 5px;
`;

const InnerWrapper = styled.div`
  height: 40px;
  width: 75%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  padding: 5px;
`;
const SearchWrapper = styled.div`
  height: 80px;
  width: 50%;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;

`;
const SearchIcon = styled.div`
  height: 25px;
  width: 25px;
  background-color: yellow;
  border-radius: 50px;
`;

export default SearchBar;