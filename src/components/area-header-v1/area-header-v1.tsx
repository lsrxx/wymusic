import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

import { HeaderV1Wripper } from "./style";

interface IProps {
  children?: ReactNode;
  title?: string;
  titleTab?: any[];
  moreLink?: string;
}

const AreaHeaderV1: FC<IProps> = (props) => {
  const { title = "默认标题", titleTab = [], moreLink = "/" } = props;
  return (
    <HeaderV1Wripper>
      <div className="tab">
        <div className="back"></div>
        <h3 className="title">{title}</h3>
        <div className="title-tab">
          {titleTab.map((item, index) => {
            return (
              <div className="item" key={item}>
                <span className="tabs">{item}</span>
                <span className="link">|</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="end">
        <Link to={moreLink} className="more">
          更多
        </Link>
        <div className="back1"></div>
      </div>
    </HeaderV1Wripper>
  );
};

export default memo(AreaHeaderV1);
