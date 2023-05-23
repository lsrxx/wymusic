import { styled } from "styled-components";

export const PlayerToolWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  background: url(${require("@/assets/img/playbar_sprite.png")}) repeat 0 -1px;
  height: 53px;
  display: flex;
  justify-content: center;
  > .content {
    position: absolute;
    bottom: 0;
    width: 980px;
    height: 47px;
    /* background-color: red; */
    display: flex;
    align-items: center;
  }
`;

interface IPlayerControl {
  isplaying: boolean;
}

export const PlayerWrapper = styled.div<IPlayerControl>`
  display: flex;
  align-items: center;
  .left {
    background: url(${require("@/assets/img/playbar_sprite.png")}) no-repeat -2px -131px;
    width: 24px;
    height: 25px;
  }
  .play-pause {
    background: url(${require("@/assets/img/playbar_sprite.png")}) no-repeat -2px
      ${(props) => (props.isplaying ? "-166px" : "-205px")};
    width: 32px;
    height: 33px;
    margin: 0 14px;
  }
  .right {
    background: url(${require("@/assets/img/playbar_sprite.png")}) no-repeat -82px -131px;
    width: 24px;
    height: 25px;
  }
`;

export const ScheduleWrapper = styled.div`
  margin-left: 17px;
  display: flex;
  align-items: center;
  .image {
    width: 37px;
    height: 37px;
    background-color: red;
    img {
      /* border: 0px; */
      border-radius: 3px;
    }
  }
  .info {
    margin-left: 13px;
    display: flex;
    width: 510px;
    height: 37px;
    color: #fff;
    flex-direction: column;
    .song {
      display: flex;
      .song-name,
      .name {
        margin: 0 6px;
      }
    }
    .progress {
      position: relative;
      top: -6px;
      width: 493px;
      height: 13px;
      .ant-slider {
      }
      .ant-slider-rail {
        background: url(${require("@/assets/img/progress_bar.png")}) no-repeat 0 -30px;
        height: 9px;
      }
      .ant-slider-track {
        background: url(${require("@/assets/img/progress_bar.png")}) no-repeat 0 -66px;
        height: 9px;
      }
      .ant-slider-handle {
        background: url(${require("@/assets/img/sprite_icon.png")}) no-repeat 0 -252px;
        width: 22px;
        height: 22px;
        border: none;
        margin-top: -3px;
        box-shadow: none;
        &::after {
          content: none;
        }
      }
    }
  }
  .time {
    position: relative;
    bottom: -10px;
    left: -14px;
    display: flex;
    color: #fff;
  }
`;

export const OperatorWrapper = styled.div`
  display: flex;
  align-items: center;
  .lyric {
    /* pip_icon */
    background: url(${require("@/assets/img/pip_icon.png")}) no-repeat -4px -4px;
    width: 17px;
    height: 17px;
  }
  .collect {
    background: url(${require("@/assets/img/playlist_sprite.png")}) no-repeat -24px
      0;
    width: 16px;
    height: 15px;
    margin: 0 10px;
  }
  .share {
    background: url(${require("@/assets/img/playlist_sprite.png")}) no-repeat 0
      0;
    width: 14px;
    height: 15px;
  }
`;

interface IBarControl {
  playMode: number;
}
export const ControlWrapper = styled.div<IBarControl>`
  margin-left: 20px;
  display: flex;
  align-items: center;
  .borders {
    width: 1px;
    height: 18px;
    background-color: #fff;
  }
  .volume {
    /* url(${require("@/assets/img/playbar_sprite.png")}) no-repeat -5px -250px;*/
    background: url(${require("@/assets/img/playbar_sprite.png")}) no-repeat -5px -250px;
    width: 19px;
    height: 21px;
    margin: 0 10px;
  }
  .loop {
    background: ${(props) => {
      switch (props.playMode) {
        case 1:
          return `url(${require("@/assets/img/playbar_sprite.png")}) no-repeat -66px -248px`;
        case 2:
          return `url(${require("@/assets/img/playbar_sprite.png")}) no-repeat -66px -344px`;
        default:
          return `url(${require("@/assets/img/playbar_sprite.png")}) no-repeat -3px -344px`;
      }
    }};
    width: 22px;
    height: 21px;
    margin-right: 10px;
    margin-top: -3px;
  }
  .playlist {
    background: url(${require("@/assets/img/playbar_sprite.png")}) no-repeat -45px -71px;
    width: 56px;
    height: 23px;
    color: #fff;
    .total {
      position: relative;
      left: 28px;
      top: 5px;
    }
  }
`;
