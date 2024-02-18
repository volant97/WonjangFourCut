import React from "react";
import styled from "styled-components";

function SangwookLetter() {
  const letter = `편지`;

  const title = `원장님의 가르침을 받은 개발자`;
  const name = `이상욱`;

  return (
    <StLetterBox>
      <h1>
        {title}, <span>{name}</span>
      </h1>
      <p>{letter}</p>
    </StLetterBox>
  );
}

export default SangwookLetter;

const StLetterBox = styled.div`
  background-color: white;
  padding: 30px 25px;
  width: 410px;
  min-height: 700px;
  border-radius: 5px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    white-space: break-spaces;
    /* word-break: keep-all; */
    line-height: 25px;
    text-align: justify;
  }

  h1 {
    font-size: 22px;
    font-weight: 600;
  }

  span {
    color: #ae5dff;
  }

  @media (max-width: 428px) {
    width: auto;
    min-height: 500px;
  }

  h1 {
    font-size: 20px;
    font-weight: 600;
  }
`;
