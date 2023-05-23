import React, { memo } from "react";
import { FC, ReactNode, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { RecommendWripper } from "./style";
import {
  fetchArtistsData,
  fetchBannersData,
  fetchNewDiscData,
} from "@/store/modules/discover/recommend";
import Swiper from "./c-cpns/topbanner/swiper";
import HotRecom from "./c-cpns/hot-recom/hot-recom";
import NewDisc from "./c-cpns/new-disc/new-disc";
import TopRanking from "./c-cpns/top-ranking/top-ranking";
import { fetchTopRankingData } from "@/store/modules/discover/topRanking";
import UserLogin from "./c-cpns/user-login/user-login";
import SetterSinger from "./c-cpns/setter-singer/setter-singer";
import HotAnchor from "./c-cpns/hot-anchor/hot-anchor";

interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBannersData());
    dispatch(fetchNewDiscData());
    dispatch(fetchTopRankingData());
    dispatch(fetchArtistsData());
  }, []);

  return (
    <RecommendWripper>
      <Swiper />
      <div className="content wrap-v2">
        <div className="left">
          <HotRecom />
          <NewDisc />
          <TopRanking />
        </div>
        <div className="right">
          <UserLogin />
          <SetterSinger />
          <HotAnchor/>
        </div>
      </div>
    </RecommendWripper>
  );
};

export default memo(Recommend);
