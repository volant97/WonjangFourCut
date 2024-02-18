import React, { useState } from "react";
import styled from "styled-components";
import wonjang from "../../assets/wonjang.png";
import gift from "../../assets/gift.jpg";

function Tutor() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenGift, setIsOpenGift] = useState(false);
  const [pw, setPw] = useState("");

  const handleBannerClick = () => {
    setIsOpenModal(true);

    if (isOpenModal === true) setIsOpenModal(false);
  };

  const handleCloseBtnClick = () => {
    setIsOpenModal(false);
  };

  const handleInput = (e) => {
    setPw(e.target.value);
  };

  const handelOpenBtn = () => {
    if (pw === "20240219") return setIsOpenGift(true);
    setPw("");
    alert("비밀번호가 틀렸습니다. 추억을 다시 떠오려보세요!");
  };

  return (
    <>
      <StWonjangBanner src={wonjang} onClick={handleBannerClick} />
      {isOpenModal ? (
        <StModal>
          <button onClick={handleCloseBtnClick}>❌</button>
          {isOpenGift ? (
            <img src={gift} alt="gift" />
          ) : (
            <StUnlock>
              <h2>
                이번엔 저희가 <br />
                <span>스타벅스</span>
                <br />
                준비했습니다!
              </h2>
              <h1>추억을 잠금해제</h1>
              <input type="text" value={pw} onChange={handleInput} />
              <div className="openBtn" onClick={handelOpenBtn}>
                확인
              </div>
            </StUnlock>
          )}
        </StModal>
      ) : null}
    </>
  );
}

export default Tutor;

const StWonjangBanner = styled.img`
  width: 400px;
  height: 180px;
  z-index: 2;
  cursor: pointer;

  @media (max-width: 428px) {
    width: 340px;
    height: 155px;
  }
`;

const StModal = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  width: 400px;
  height: 520px;
  border-radius: 10px;
  box-shadow: 0 0 10px 3px rgba(152, 75, 204, 0.781);
  top: 300px;
  z-index: 1;
  background-color: #7f6ad5;
  /* border: 4px solid #7f6ad5; */
  /* transform: translateY(-50%); */

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 40px;
    height: 40px;
    top: 5px;
    right: 5px;
    background: none;
    border: none;
    cursor: pointer;
    /* border: 2px solid; */
  }

  img {
    width: 250px;
    height: 480px;
  }

  @media (max-width: 428px) {
    width: 340px;
    height: 450px;
    top: 270px;

    img {
      width: 230px;
      height: 400px;
    }
  }
`;

const StUnlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 250px;
  height: 480px;
  border: 2px solid #ffd9a8;

  h2 {
    position: absolute;
    top: 10%;
    font-size: 18px;
    font-weight: 600;
    color: white;
    line-height: 23px;

    span {
      color: #ffd9a8;
    }
  }

  h1 {
    font-size: 18px;
    font-weight: 600;
    color: white;
  }

  input {
    width: 130px;
    height: 35px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    border: 3px solid white;
    border-radius: 20px;
    outline-color: #7f6ad5;
  }

  .openBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 40px;
    font-size: 18px;
    font-weight: 600;
    color: #ffd9a8;
    border: 3px solid #ffd9a8;
    border-radius: 20px;
    cursor: pointer;
  }

  @media (max-width: 428px) {
    width: 230px;
    height: 400px;
    border: 2px solid #ffd9a8;
  }
`;
