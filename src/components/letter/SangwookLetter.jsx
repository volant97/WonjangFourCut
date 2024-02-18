import React from "react";
import styled from "styled-components";

function SangwookLetter() {
  const letter = `원장 튜터님 안녕하세요! 베이직 반이였던 이상욱이라고 합니다. 
  
내배캠 시작한 지 엊그제 같은데 벌써 마무리를 하고 취업 준비를 하고 있네요.리액트라는 단어와 마크를 보면 원장 튜터님 얼굴이 가장 먼저 떠오릅니다. 동그란 화면에 고양이 소리와 원장 튜터님... 그리고 yarn.... ★원장 튜터님께서는 정말 진심으로 모든 걸 알려주시려고 해 주셨는데 제가 잘 따라가지 못해서 많이 아쉬웠습니다ㅠㅠ 제 기억 속에 내일 배움 캠프 리액트 3기 = 최원장 튜터님이라는 메인 이미지가 그려집니다.

저는 온라인 수업에 “최원장 튜터”라는 존재만으로 든든한 느낌이 가득했습니다. 그래서 도중에 리액트 4기로 빠지셨을 때 뭔가 아쉽고 허무한 느낌이 들기도 했었습니다. 제가 내일 배움 캠프를 하면서 수업 따라가는 것도 정말 중요하지만 개발자길에 있어서 인생 선배님들에 대한 발자취를 듣고 배울 수 있던 것 들도 많이 배운 거라는 생각이 들었습니다.

학습이야 노력을 해서 계속 나아가면 되지만 사람들의 경험과 감정 교류들은 직접 경험을 해야 배울 수 있기 때문이지요! 한 권의 책을 읽고 여행을 한 듯한 기분이 드네요!
따라가지 못해서 팀한테 정말 미안한 마음과 자신감을 잃고 바보가 된 기분이 들 때 격려를 해주셔서 감사했습니다!

튜터님!! 항상 저희들을 응원해 주시고 격려해 주셔서 감사했습니다. 저도 원장님께서 물려주신 지혜를 빠르게 습득해서 누군가 도와줄 수 있는 그런 개발자가 되도록 열심히 달려보겠습니다.

새해 복 많이 받으시고 항상 건강하셨으면 좋겠습니다! 성장해서 좋은 개발자가 되어서 찾아뵙도록 하겠습니다!!!

-상욱 올림-`;

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
