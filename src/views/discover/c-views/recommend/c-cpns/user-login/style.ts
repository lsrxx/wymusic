import { styled } from "styled-components";

export const LoginWrapper = styled.div`
  > .content {
    background: url(${require("@/assets/img/sprite_02.png")}) no-repeat 0 0;
    width: 250px;
    height: 126px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .desc {
      width: 205px;
      line-height: 1.8;
      margin: 0 auto;
      color: #666;
    }
    .login {
      background: url(${require("@/assets/img/sprite_02.png")}) no-repeat 0 -195px;
      width: 100px;
      height: 31px;
      border: none;
      color: #fff;
      margin: 14px auto;
      cursor: pointer;
    }
  }
`;
