import React from "react";
import styled from "styled-components";
import wonjang from "../../assets/wonjang.png";

function Tutor() {
  return <StWonjangBanner src={wonjang} />;
}

export default Tutor;

const StWonjangBanner = styled.img`
  width: 410px;
  height: 180px;

  @media (max-width: 428px) {
    width: 350px;
    height: 160px;
  }
`;
