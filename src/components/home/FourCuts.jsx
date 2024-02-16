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
    </StContainer>
  );
}

export default FourCuts;

const StContainer = styled.div`
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
  cursor: pointer;

  img {
    width: 170px;
    height: 215px;
  }

  @media (max-width: 428px) {
    width: 350px;
    height: 430px;
    gap: 20px;

    img {
      width: 145px;
      height: 180px;
    }
  }
`;
