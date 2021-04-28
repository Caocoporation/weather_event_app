import React from "react";
import styled from "styled-components";

class PlanDetail extends React.Component{
  state = {
    
  }

  render() {
    return(
      <PlanDetailWrapper>
        <PlanDate></PlanDate>
        <PlanLabel></PlanLabel>
        <PlanContent></PlanContent>
      </PlanDetailWrapper>
    )
  }
}

const PlanDetailWrapper = styled.div``;
const PlanDate = styled.div``;
const PlanLabel = styled.div``;
const PlanContent = styled.div``;

export default PlanDetail;