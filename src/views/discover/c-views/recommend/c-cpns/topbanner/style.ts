import { styled } from "styled-components";

export const SwipperWrapper = styled.div`
  position: relative;
  height: 285px;
  display: flex;
  flex-shrink: 0;
  animation: 1s play;
  @keyframes play {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .leftbtn {
    position: absolute;
    left: 320px;
    bottom: 50%;
    transform: translateY(50%);
    /* background-color: red; */
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
  .rightbtn {
    position: absolute;
    right: 320px;
    bottom: 50%;
    transform: translateY(50%);
    /* width: 100px; */
    /* background-color: red; */
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
  .content {
    display: flex;
    height: 285px;
    /* width: 100%; */
  }
`;

export const LeftWrapper = styled.div`
  position: relative;
  width: 730px;
  height: 285px;
  .ant-carousel {
    transition: all 1.3s ease-in-out;
  }
  .item {
    height: 285px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .dots {
    position: absolute;
    bottom: 15px;
    width: 100%;
    /* background-color: #333; */
    display: flex;
    justify-content: center;

    .list {
      width: 4px;
      height: 4px;
      border: 1px solid #fff;
      background-color: #fff;
      border-radius: 50%;
      margin-left: 18px;
      &.active {
        border: 1px solid red;
        background-color: red;
      }
    }
  }
`;

export const RightWrapper = styled.div`
  position: relative;
  height: 285px;
  width: 285px;
  .back {
    background: url(${require("@/assets/img/download.png")}) no-repeat 0 0;
    width: 100%;
    height: 100%;

    a {
      /* display: inline-block; */
      display: flex;
      /* justify-content: center; */
      .btn {
        position: absolute;
        bottom: 43px;
        left: 19.5px;
        display: flex;
        background: url(${require("@/assets/img/download.png")}) no-repeat 0 -289px;
        width: 216px;
        height: 57px;
        text-indent: -9999px;
        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
          background-position: 0 -9999px;
        }
      }
    }
    p {
      position: absolute;
      bottom: 13px;
      width: 250px;
      color: #8d8d8d;
      text-align: center;
      font-size: 10px;
    }
  }
`;
