import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import { SongItemWrapper } from "./style";
import { getImageSize, getPlayCount } from "@/utils/format";

interface IProps {
  children?: ReactNode;
  resultData: any;
}

const SongMenuItem: FC<IProps> = (props) => {
  const { resultData } = props;
  return (
    <SongItemWrapper>
      <div className="inner">
        <img src={getImageSize(resultData.picUrl, 140)} alt={resultData.name} />
        <div className="cover">
          <div className="bottom">
            <div className="left">
              <span className="icon"></span>
              <span className="count">
                {getPlayCount(resultData.playCount)}
              </span>
            </div>
            <div className="icon1"></div>
          </div>
        </div>
        <div className="text">{resultData.name}</div>
      </div>
    </SongItemWrapper>
  );
};
export default memo(SongMenuItem);
