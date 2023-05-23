import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import { RankingWrapper } from "./style";
import AreaHeaderV1 from "@/components/area-header-v1/area-header-v1";
import { useAppSelector } from "@/store";
import RankingItem from "../top-ranking-item/ranking-item";

interface IProps {
  children?: ReactNode;
}

const TopRanking: FC<IProps> = () => {
  const { ranking } = useAppSelector((state) => ({
    ranking: state.topRanking.ranking,
  }));
  return (
    <RankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
      <div className="content">
        {ranking?.map((item, index) => {
          return (
            <div className="ranking-list" key={index}>
              <RankingItem rankingData={item} />
            </div>
          );
        })}

        {/* <div className="ranking-list">xxx</div> */}
      </div>
    </RankingWrapper>
  );
};

export default memo(TopRanking);
