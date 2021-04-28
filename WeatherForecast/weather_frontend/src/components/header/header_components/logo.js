import React from "react";
import styled from "styled-components";

class Logo extends React.Component{
  state = {
    
  }

  render() {
    return(
      <LogoWrapper>
        <LogoImg src="" alt="no-img" />
      </LogoWrapper>
    )
  }
}

const LogoWrapper = styled.div`
  height: 80px;
  width: 15%;
  min-width: 80px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  border: 1px solid black;
  height: 70px;
  width: 70px;
`;

export default Logo;