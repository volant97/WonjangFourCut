import React from "react";
import styled from "styled-components";
import hamin from "../../assets/hamin.png";
import changgeun from "../../assets/changgeun.png";
import sangwook from "../../assets/sangwook.png";
import background from "../../assets/background.png";
import { useNavigate } from "react-router-dom";

function FourCuts() {
  const navigate = useNavigate();

  const handleTitleClick = (pathName) => {
    navigate(`/${pathName}`);
  };

  return (
    <StContainer>
      <img src={hamin} alt="hamin" onClick={() => handleTitleClick("hamin")} />
      <img
        src={changgeun}
        alt="changguen"
        onClick={() => handleTitleClick("changgeun")}
      />
      <img
        src={sangwook}
        alt="sangwook"
        onClick={() => handleTitleClick("sangwook")}
      />
      <img
        src={background}
        alt="background"
        onClick={() => handleTitleClick("eunbi")}
      />
      <h1>원장네컷</h1>
      <h2>2024.02.19</h2>
    </StContainer>
  );
}

export default FourCuts;

const StContainer = styled.div`
  position: relative;
  background-color: white;
  color: white;
  width: 410px;
  height: 500px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;

  img {
    width: 170px;
    height: 215px;
    cursor: pointer;
  }

  h1,
  h2 {
    position: absolute;
    color: #2b2b2b;
    font-size: 13px;
    font-weight: 600;
    bottom: 3.5px;
  }

  h1 {
    left: 22px;
  }

  h2 {
    right: 22px;
  }

  @media (max-width: 428px) {
    width: 350px;
    height: 430px;
    gap: 20px;

    img {
      width: 145px;
      height: 180px;
    }

    h1,
    h2 {
      font-size: 12px;
      font-weight: 600;
      bottom: 3.8px;
    }
  }
`;
