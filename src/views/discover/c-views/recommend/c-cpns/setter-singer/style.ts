import { styled } from "styled-components";

export const SingerWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > .content {
    padding: 8px;
    .song-list {
      width: 210px;
      margin: 0 auto;
      display: flex;
      padding: 8px;
      &:hover {
        cursor: pointer;
      }
      .image {
        width: 62px;
        height: 62px;
      }
      .info {
        width: 148px;
        height: 62px;
        display: flex;
        flex-direction: column;
        background: #fafafa;
        border: 1px solid #e9e9e9;
        .name {
          margin-top: 6px;
          font-size: 16px;
          color: #000;
          font-weight: 700;
        }
        .singer-info {
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .name,
        .singer-info {
          margin-left: 8px;
          flex: 1;
        }
      }
    }
  }
  .btn {
    display: flex;
    justify-content: center;
    .music-people {
      /* display: inline-block; */
      width: 210px;
      height: 31px;
      /* text-align: center; */
      background-color: #e9e9e9;
      border: none;
      border-radius: 3px;
      color: #000;
      font-size: 14px;
      font-weight: 700;
      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
        cursor: pointer;
      }
    }
  }
`;
