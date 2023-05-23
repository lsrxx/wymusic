import { styled } from "styled-components";

export const DiscListWrapper = styled.div`
  .inner {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      position: relative;
      width: 100%;
      height: 100%;
    }
    .cover {
      position: absolute;
      background: url(${require("@/assets/img/sprite_cover.png")}) no-repeat 0px -570px;
      width: 118px;
      height: 100px;
    }
    .text {
      width: 100px;
      .song-name,
      .singer {
        display: -webkit-box;
        overflow: hidden;
        white-space: normal !important;
        text-overflow: ellipsis;
        word-wrap: break-word;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    }
  }
`;
