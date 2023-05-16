import { styled } from "styled-components";

export const NavWrapper = styled.div`
  height: 34px;
  background-color: ${(props) => props.theme.color.primary};
  .content {
    height: 100%;
    display: flex;
    align-items: center;
    .menu {
      display: flex;
      justify-content: flex-end;
      width: 720px;
      .item {
        margin-left: 30px;
        a {
          color: #fff;
          font-size: 9px;
          height: 20px;
          line-height: 20px;
          padding: 0 14px;
        }
        .active,
        a:hover {
          display: inline-block;
          background-color: #9b0909;
          border-radius: 10px;
        }
      }
    }
  }
`;
