import { styled } from "styled-components";

export const HeaderV1Wripper = styled.div`
  width: 689px;
  height: 35px;
  border-bottom: 2px solid #c10d0c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .tab {
    display: flex;
    align-items: center;
    height: 100%;
    .back {
      margin-left: 4px;
      background: url(${require("@/assets/img/sprite_02.png")}) no-repeat -235px -164px;
      width: 14px;
      height: 14px;
    }
    .title {
      display: flex;
      /* align-items: center; */
      font-size: 19px;
      font-weight: normal;
      margin-left: 5px;
      cursor: pointer;
    }
    .title-tab {
      display: flex;
      align-items: center;
      width: 500px;
      margin-left: 15px;
      .item {
        display: flex;
        align-items: center;
        color: #666;
        font-size: 12px;
        .tabs {
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
        .link {
          margin: 0 14px;
          color: #ccc;
        }

        &:last-child {
          .link {
            display: none;
          }
        }
      }
    }
  }
  .end {
    display: flex;
    align-items: center;
    margin-right: 7px;
    .back1 {
      background: url(${require("@/assets/img/sprite_02.png")}) no-repeat 0 -240px;
      width: 12px;
      height: 12px;
      margin-left: 5px;
    }
    .more {
      color: #666;
      font-size: 12px;
    }
  }
`;
