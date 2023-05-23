import { styled } from "styled-components";

export const RankingItemWrapper = styled.div`
  .top {
    width: 230px;
    height: 120px;
    .all {
      position: relative;
      display: flex;
      left: 20px;
      top: 20px;
      .left {
        position: relative;
        img {
          width: 80px;
          height: 80px;
        }
      }
      .right {
        position: relative;
        top: 7px;
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        .text {
          font-size: 14px;
          font-weight: 700;
        }
        .btn {
          display: flex;
          align-items: center;
          margin-top: 10px;
          .play {
            background: url(${require("@/assets/img/sprite_02.png")}) no-repeat -267px -205px;
            width: 22px;
            height: 22px;
            &:hover {
              background: url(${require("@/assets/img/sprite_02.png")})
                no-repeat -267px -235px;
              width: 22px;
              height: 22px;
            }
          }
          .add {
            background: url(${require("@/assets/img/sprite_02.png")}) no-repeat -300px -207px;
            width: 20px;
            height: 19px;
            margin-left: 10px;
            &:hover {
              background: url(${require("@/assets/img/sprite_02.png")})
                no-repeat -300px -237px;
              width: 20px;
              height: 19px;
            }
          }
        }
      }
    }
  }

  .item {
    display: flex;
    flex-direction: column;
    .song {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 9px;
      .list-index {
        width: 35px;
        height: 32px;
        line-height: 32px;
        text-align: center;
      }
      .list-name {
        width: 170px;
        height: 32px;
        cursor: pointer;
        line-height: 32px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:hover {
          text-decoration: underline;
        }
      }
      &:hover {
        .list-name {
          width: 99px;
        }
        .list-icon {
          height: 32px;
          display: flex;
          align-items: center;
          .play {
            background: url(${require("@/assets/img/sprite_02.png")}) no-repeat -267px -268px;
            width: 17px;
            height: 17px;
            &:hover {
              background: url(${require("@/assets/img/sprite_02.png")})
                no-repeat -267px -288px;
              width: 17px;
              height: 17px;
            }
          }
          .add {
            background: url(${require("@/assets/img/sprite_icon2.png")})
              no-repeat 0 -700px;
            width: 14px;
            height: 15px;
            margin: 0 10px;
            &:hover {
              background: url(${require("@/assets/img/sprite_icon2.png")})
                no-repeat -21px -700px;
              width: 14px;
              height: 15px;
            }
          }
          .file {
            background: url(${require("@/assets/img/sprite_02.png")}) no-repeat -297px -270px;
            width: 16px;
            height: 14px;
            margin-right: 4px;
            &:hover {
              background: url(${require("@/assets/img/sprite_02.png")})
                no-repeat -297px -290px;
              width: 16px;
              height: 14px;
            }
          }
        }
      }
    }
    .more {
      display: flex;
      justify-content: flex-end;
      margin-right: 10px;
      height: 32px;
      line-height: 32px;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`;
