import React from "react";
import styled from "styled-components";
import wonjang from "../../assets/wonjang.png";

function Tutor() {
  return <StWonjangBanner src={wonjang} />;
}

export default Tutor;

const StWonjangBanner = styled.img`
  width: 400px;
  height: 180px;

  @media (max-width: 428px) {
    width: 340px;
    height: 155px;
  }
`;
