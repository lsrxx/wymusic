import { styled } from "styled-components";

export const SongItemWrapper = styled.div`
  padding: 12px;
  .inner {
    width: 140px;
    height: 200px;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    img {
      width: 140px;
      height: 140px;
      position: relative;
    }
    .cover {
      position: absolute;
      background: url(${require("@/assets/img/sprite_cover.png")}) no-repeat 0 0;
      /* top: 0;
      right: 0;
      bottom: 0;
      left: 0; */
      width: 140px;
      height: 140px;
      .bottom {
        position: absolute;
        width: 100%;
        height: 25px;
        bottom: 0;
        background: url(${require("@/assets/img/sprite_cover.png")}) no-repeat 0 -537px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
          display: flex;
          align-items: center;
          margin-left: 5px;
          .icon {
            background: url(${require("@/assets/img/sprite_icon.png")})
              no-repeat 0 -24px;
            width: 14px;
            height: 11px;
          }
          .count {
            color: #ccc;
            font-size: 12px;
            margin-left: 5px;
          }
        }

        .icon1 {
          background: url(${require("@/assets/img/sprite_icon.png")}) no-repeat
            0 -60px;
          width: 16px;
          height: 17px;
          margin-right: 5px;
        }
      }
    }
    .text {
      margin-top: 10px;
      font-size: 14px;
      display: -webkit-box;
      overflow: hidden;
      white-space: normal !important;
      text-overflow: ellipsis;
      word-wrap: break-word;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
`;
