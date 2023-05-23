import { styled } from "styled-components";

export const RankingWrapper = styled.div`
  margin-top: 20px;
  > .content {
    margin-top: 30px;
    background: url(${require("@/assets/img/recommend-top-bg.png")}) no-repeat;
    height: 472px;
    display: flex;
    .ranking-list {
      width: 230px;
      &:last-child {
        width: 228px;
      }
    }
  }
`;
