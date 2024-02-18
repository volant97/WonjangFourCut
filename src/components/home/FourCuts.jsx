import React from "react";
import styled from "styled-components";
import hamin from "../../assets/hamin.png";
import changgeun from "../../assets/changgeun.png";
import sangwook from "../../assets/sangwook.png";
import eunbi from "../../assets/eunbi.png";
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
      <img src={eunbi} alt="eunbi" onClick={() => handleTitleClick("eunbi")} />
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
  width: 400px;
  height: auto;
  padding: 17px 0 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  border-radius: 2px;

  img {
    width: 175px;
    height: 215px;
    cursor: pointer;
  }

  h1,
  h2 {
    position: absolute;
    color: #2b2b2b;
    font-size: 13px;
    font-weight: 600;
    bottom: 5px;
  }

  h1 {
    left: 17px;
  }

  h2 {
    right: 17px;
  }

  @media (max-width: 428px) {
    width: 340px;
    // height: 430px;
    height: auto;
    gap: 12px;
    padding: 12px 0 23px;

    img {
      width: 150px;
      height: 190px;
    }

    h1,
    h2 {
      font-size: 12px;
      font-weight: 600;
      bottom: 4.8px;
    }

    h1 {
      left: 14px;
    }

    h2 {
      right: 14px;
    }
  }
`;
