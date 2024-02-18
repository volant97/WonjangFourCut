import React from "react";
import Title from "../components/home/Title";
import FourCuts from "../components/home/FourCuts";
import Tutor from "../components/home/Tutor";
import styled from "styled-components";

const Home = () => {
  return (
    <StOuterFrame>
      <StContainer>
        <StContentBox>
          <Title />
          <Tutor />
          <FourCuts />
        </StContentBox>
      </StContainer>
    </StOuterFrame>
  );
};

export default Home;

const StOuterFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  text-align: center;
  background-color: #212121;
  overflow-x: hidden;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 1200px;
  height: 100dvh;
  padding: 50px 0;
  gap: 30px;
  overflow-x: hidden;
  overflow-y: scroll;

  @media (max-width: 428px) {
    max-width: 428px;
    padding: 30px 0;
  }
`;

const StContentBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 30px;
`;
