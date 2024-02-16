import React from "react";
import Title from "../../components/home/Title";
import styled from "styled-components";
import ChanggeunLetter from "../../components/letter/ChanggeunLetter";

function Changgeun() {
  return (
    <StOuterFrame>
      <StContainer>
        <StContentBox>
          <Title />
          <ChanggeunLetter />
        </StContentBox>
      </StContainer>
    </StOuterFrame>
  );
}

export default Changgeun;

const StOuterFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  text-align: center;
  background-color: #212121;
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
  overflow-y: scroll;

  @media (max-width: 428px) {
    padding: 30px 20px;
  }
`;

const StContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 30px;
`;
