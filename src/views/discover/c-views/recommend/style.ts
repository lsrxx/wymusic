import { styled } from "styled-components";

export const RecommendWripper = styled.div`
  > .content {
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    background: url(${require("@/assets/img/wrap-bg.png")}) repeat-y 100% 100%;
    display: flex;
    > .left {
      padding: 20px 20px 40px;
      width: 689px;
    }

    > .right {
      margin-left: 1px;
      width: 250px;
    }
  }
`;
