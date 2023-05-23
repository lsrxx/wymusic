import { styled } from "styled-components";

export const HeaderV2Wrapper = styled.div`
  width: 210px;
  margin: 0 auto;
  > .content {
    height: 24px;
    border-bottom: 1px solid #bbb;
    display: flex;
    justify-content: space-between;
    .title {
      font-weight: 700;
    }
    .more {
      color: #666;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`;
