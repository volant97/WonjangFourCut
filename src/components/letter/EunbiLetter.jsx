import React from "react";
import styled from "styled-components";

function EunbiLetter() {
  const letter = `안녕하세요 원장 튜터님!

하민입니다. 물결이 가득한 밤하늘, 작은 마을의 조용한 풍경, 그리고 바람이 스쳐 지나가는 소리가 들리는 시골 풍경이 내 눈 앞에 펼쳐졌다. 끝없이 펼쳐진 들판과 멀리 보이는 산들은 자연의 아름다움을 고스란히 전하고 있었다. 작은 강가에 앉아 일몰을 바라보며 시간을 보내는 것이 얼마나 소중한지 깨닫게 되었다. 끊임없는 도시의 소음에서 벗어나 조용한 자연 속에서 마음을 달래고 싶었다. 새소리와 바람소리만이 내 귓가에 들려와 마음을 차분하게 만들었다. 녹음의 향기와 새싹의 생명력이 가득한 봄날, 자연은 새로운 시작을 알린다. 모든 것이 청명하고 맑은 공기 속에서 더욱 빛나는 것 같았다. 이 순간을 영원히 기억하고 싶었다.

저는 하민입니다. 물결이 가득한 밤하늘, 작은 마을의 조용한 풍경, 그리고 바람이 스쳐 지나가는 소리가 들리는 시골 풍경이 내 눈 앞에 펼쳐졌다. 끝없이 펼쳐진 들판과 멀리 보이는 산들은 자연의 아름다움을 고스란히 전하고 있었다. 작은 강가에 앉아 일몰을 바라보며 시간을 보내는 것이 얼마나 소중한지 깨닫게 되었다. 끊임없는 도시의 소음에서 벗어나 조용한 자연 속에서 마음을 달래고 싶었다. 새소리와 바람소리만이 내 귓가에 들려와 마음을 차분하게 만들었다. 녹음의 향기와 새싹의 생명력이 가득한 봄날, 자연은 새로운 시작을 알린다. 모든 것이 청명하고 맑은 공기 속에서 더욱 빛나는 것 같았다. 이 순간을 영원히 기억하고 싶었다.

저는 하민입니다. 물결이 가득한 밤하늘, 작은 마을의 조용한 풍경, 그리고 바람이 스쳐 지나가는 소리가 들리는 시골 풍경이 내 눈 앞에 펼쳐졌다. 끝없이 펼쳐진 들판과 멀리 보이는 산들은 자연의 아름다움을 고스란히 전하고 있었다. 작은 강가에 앉아 일몰을 바라보며 시간을 보내는 것이 얼마나 소중한지 깨닫게 되었다. 끊임없는 도시의 소음에서 벗어나 조용한 자연 속에서 마음을 달래고 싶었다. 새소리와 바람소리만이 내 귓가에 들려와 마음을 차분하게 만들었다. 녹음의 향기와 새싹의 생명력이 가득한 봄날, 자연은 새로운 시작을 알린다. 모든 것이 청명하고 맑은 공기 속에서 더욱 빛나는 것 같았다. 이 순간을 영원히 기억하고 싶었다.`;

  const title = `원장님이 원픽한 개발자`;
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
