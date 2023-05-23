import React, { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";

import { HotRecomWripper } from "./style";
import AreaHeaderV1 from "@/components/area-header-v1/area-header-v1";
import SongMenuItem from "@/components/song-menu-item/song-menu-item";
import { useAppDispatch, useAppSelector, shallowEqualApp } from "@/store";
import { fetchHotRecommendAction } from "@/store/modules/discover/hotRecommend";

interface IProps {
  children?: ReactNode;
}

const HotRecom: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchHotRecommendAction());
  }, []);
  const { result } = useAppSelector(
    (state) => ({
      result: state.hotRecommend?.result,
    }),
    shallowEqualApp
  );
  return (
    <HotRecomWripper>
      <AreaHeaderV1
        title="热门推荐"
        titleTab={["华语", "流行", "摇滚", "民谣", "电子"]}
        moreLink="/discover/songs"
      />
      <div className="recommend-list">
        {result?.map((item, index) => {
          return <SongMenuItem key={item.id} resultData={item} />;
        })}
      </div>
    </HotRecomWripper>
  );
};
export default memo(HotRecom);
