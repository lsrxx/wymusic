import { styled } from "styled-components";

export const NewDiscWrapper = styled.div`
  > .content {
    margin-top: 20px;
    width: 687px;
    height: 186px;
    background: #f5f5f5;
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    .swipper {
      width: 650px;
      height: 180px;
      overflow: hidden;
      .item {
        display: flex;
        justify-content: space-around;
      }
    }

    .left {
      position: relative;
      top: -30px;
      left: 8px;
      background: url(${require("@/assets/img/sprite_02.png")}) no-repeat -265px -77px;
      width: 8px;
      height: 14px;
      margin-right: 15px;
      cursor: pointer;
      &:hover {
        background: url(${require("@/assets/img/sprite_02.png")}) no-repeat -285px -77px;
        width: 8px;
        height: 14px;
      }
    }
    .right {
      position: relative;
      left: -8px;
      top: -30px;
      background: url(${require("@/assets/img/sprite_02.png")}) no-repeat -305px -77px;
      width: 8px;
      height: 14px;
      margin-left: 15px;
      cursor: pointer;
      &:hover {
        background: url(${require("@/assets/img/sprite_02.png")}) no-repeat -325px -77px;
        width: 8px;
        height: 14px;
      }
    }
  }
`;
