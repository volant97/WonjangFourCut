import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

function Title() {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate("/");
  };

  return (
    <StTitleContainer onClick={handleTitleClick}>
      <h1>원장네컷</h1>
      <h2>4명의 개발자 인생네컷 탄생!</h2>
    </StTitleContainer>
  );
}

export default Title;

const StTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 15px;
  cursor: pointer;

  h1 {
    font-size: 40px;
    color: white;
  }

  h2 {
    font-size: 18px;
    color: #d7b0ff;
  }

  @media (max-width: 428px) {
    h1 {
      font-size: 35px;
    }

    h2 {
      font-size: 17px;
    }
  }
`;
