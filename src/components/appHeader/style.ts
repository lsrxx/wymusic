import styled from "styled-components";

export const AppHeaderWrapper = styled.div`
  height: 70px;
  background-color: #242424;
  .content {
    /* background-color: red; */
    display: flex;
    align-items: center;
    height: 100%;
    .left {
      display: flex;
      align-items: center;
      height: 100%;
      .logo {
        /* 背景图文字占位 */
        text-indent: -9999em;
        margin-right: 20px;
      }
      .lefttitle {
        height: 100%;
        display: flex;
        font-size: 15px;

        .none {
          color: red;
        }
        .leftitem {
          position: relative;
          &:hover {
            background-color: #000;
            a {
              color: #fff;
            }
          }
          a {
            display: flex;
            align-items: center;
            color: #ccc;
            padding: 0px 18px;
            height: 100%;
            .icon {
              display: none;
            }
          }
          &:last-of-type {
            position: relative;
            color: red;
            a::after {
              position: absolute;
              content: "";
              top: 20px;
              background: url(${require("@/assets/img/sprite_01.png")})
                no-repeat -192px 0;
              width: 26px;
              height: 13px;
              right: -15px;
            }
          }
          .cactive {
            background-color: #000;
            color: red !important;
            .icon {
              display: block;
              position: absolute;
              bottom: -1px;
              left: 42%;
            }
          }
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
      .input {
        margin-left: 50px;
        border-radius: 20px;
        width: 180px;
        height: 30px;
        font-size: 13px;
      }
      .ant-input-prefix {
        width: 18px;
        svg {
          width: 1.2em;
          height: 1.2em;
        }
      }
      .create {
        border: 1px solid #4f4f4f;
        padding: 7px 10px;
        color: #bbb;
        border-radius: 18px;
        margin-left: 16px;
        &:hover {
          color: #fff;
          border: 1px solid #fff;
          cursor: pointer;
        }
      }
      .login {
        color: #bbb;
        font-size: 12px;
        margin-left: 16px;
        &:hover {
          cursor: pointer;
          color: #fff;
        }
      }
    }
  }
  .underline {
    padding: 2px;
    background-color: red;
  }
`;
