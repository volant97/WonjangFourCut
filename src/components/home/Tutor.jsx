import React, { useState } from "react";
import styled from "styled-components";
import wonjang from "../../assets/wonjang.png";
import gift from "../../assets/gift.jpg";

function Tutor() {
  const [password, setPassword] = useState("");
  const [ispassed, setIspassed] = useState(false);
  const [showNotice, setShowNotice] = useState(false);

  const handleTypePassword = (event) => {
    setPassword(event.target.value);
  };

  const checkIsPassed = (password) => {
    if (password === "20240219") {
      setIspassed(true);
      setShowNotice(false);
      setPassword("");
    } else {
      setIspassed(false);
      setShowNotice(true);
      setPassword("");
    }
  };

  return (
    <>
      <StWonjangBanner
        src={wonjang}
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      />
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div
            class="modal-content"
            style={{ height: "400px", width: "500px" }}
          >
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                이번엔 저희가 스타벅스 준비했습니다!
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div
              class="modal-body"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                alignItems: "flex-start",
              }}
            >
              <div class="d-flex align-items-center">
                <StPasswordInput
                  value={password}
                  onChange={handleTypePassword}
                  placeholder="쿠폰 비밀번호 (Date)"
                />
                <button
                  type="button"
                  class="btn btn-primary ml-2"
                  onClick={() => checkIsPassed(password)}
                >
                  확인
                </button>
              </div>
              {!ispassed && showNotice ? (
                <p
                  style={{
                    fontSize: "13px",
                    color: "red",
                    paddingLeft: "3px",
                  }}
                >
                  비밀번호가 틀렸습니다.
                </p>
              ) : null}
              {ispassed && !showNotice ? (
                <div class="d-flex align-items-center">
                  <StGift src={gift} />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tutor;

const StWonjangBanner = styled.img`
  width: 400px;
  height: 180px;
  cursor: pointer;

  @media (max-width: 428px) {
    width: 340px;
    height: 155px;
  }
`;

const StPasswordInput = styled.input`
  width: 200px;
  padding: 6px;
  height: 40px;
`;

const StGift = styled.img`
  width: 150px;
  height: 250px;
`;
