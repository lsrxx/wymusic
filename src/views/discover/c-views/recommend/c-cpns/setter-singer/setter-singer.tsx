import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import { SingerWrapper } from "./style";
import AreaHeaderV2 from "@/components/area-header-v2/area-header-v2";
import { useAppSelector } from "@/store";
import { getImageSize } from "@/utils/format";

interface IProps {
  children?: ReactNode;
}

const SetterSinger: FC<IProps> = () => {
  const { artists } = useAppSelector((state) => ({
    artists: state.recommend.artists,
  }));
  return (
    <SingerWrapper>
      <AreaHeaderV2 title="入驻歌手" more="查看全部 &gt;" />
      <div className="content">
        {artists.map((item, index) => {
          return (
            <div className="song-list" key={item.id}>
              <div className="image">
                <img src={getImageSize(item.img1v1Url, 62)} alt="" />
              </div>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="singer-info">{item.alias.join(" ")}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="btn">
        <button className="music-people">申请成为网易音乐人</button>
      </div>
    </SingerWrapper>
  );
};
export default memo(SetterSinger);
