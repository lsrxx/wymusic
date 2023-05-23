import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import { DiscListWrapper } from "./style";
import { getImageSize } from "@/utils/format";

interface IProps {
  children?: ReactNode;
  discData: any;
}

const NewDiscList: FC<IProps> = (props) => {
  const { discData } = props;
  return (
    <DiscListWrapper>
      <div className="inner">
        <img src={getImageSize(discData.blurPicUrl, 100)} alt="" />
        <div className="cover"></div>
        <div className="text">
          <div className="song-name">{discData.name}</div>
          <div className="singer">{discData.artist.name}</div>
        </div>
      </div>
    </DiscListWrapper>
  );
};

export default memo(NewDiscList);
