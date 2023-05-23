import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import { RankingItemWrapper } from "./style";
import { fetchCurrentSongData } from "@/store/modules/player/player";
import { useAppDispatch } from "@/store";

interface IProps {
  children?: ReactNode;
  rankingData: any;
}

const RankingItem: FC<IProps> = (props) => {
  const { rankingData } = props;
  // const { tracks = [] } = rankingData;
  // console.log(tracks);

  const dispatch = useAppDispatch();
  function handlePlayClick(id: number) {
    dispatch(fetchCurrentSongData(id));
  }

  return (
    <RankingItemWrapper>
      <div className="top">
        <div className="all">
          <div className="left">
            <img src={rankingData?.coverImgUrl} alt="" />
          </div>
          <div className="right">
            <div className="text">{rankingData?.name}</div>
            <div className="btn">
              <div className="play"></div>
              <div className="add"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        {rankingData?.tracks?.slice(0, 10)?.map((item: any, index: number) => {
          return (
            <div className="song" key={index}>
              <div className="list-index">{index + 1}</div>
              <div className="list-name">{item.name}</div>
              <div className="list-icon">
                <div
                  className="play"
                  onClick={() => handlePlayClick(item.id)}
                ></div>
                <div className="add"></div>
                <div className="file"></div>
              </div>
            </div>
          );
        })}
        <div className="more">查看全部 &gt;</div>
      </div>
    </RankingItemWrapper>
  );
};

export default memo(RankingItem);
