import React from "react";
import styled from "styled-components";

function EunbiLetter() {
  const letter = `안녕하세요 원장 튜터님!
  
React 3기를 수료한 김은비입니다 ㅎㅎ 4개월이란게 꽤 긴 시간이었지만 너무 바삐 빠르게 지나간 것 같아서 아쉬움도 남네요. 많은 강의를 들었지만 원장 튜터님의 강의들이 기초를 다지는데 정말 많은 도움이 됐어요! 스탠다드반을 이끌어주시면서 동기부여도 해주시고 힘들어할 땐 위로도 해주셔서 다들 의지를 잡고 열심히 하게 된 것 같아요 감사합니다 ㅎㅎ

그동안의 노력이 헛되지 않도록 더 열심히 준비해서 취업에 골인할게요! 원장님도 지금보다 훨씬 더! 좋은 일만 생기시길 바랄게요😊 언제나 행복하세요!!🍀`;

  const title = `원장님의 가르침을 받은 개발자`;
  const name = `김은비`;

  return (
    <StLetterBox>
      <h1>
        {title}, <span>{name}</span>
      </h1>
      <p>{letter}</p>
    </StLetterBox>
  );
}

export default EunbiLetter;

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
