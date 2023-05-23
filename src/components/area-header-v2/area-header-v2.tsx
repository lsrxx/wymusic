import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import { HeaderV2Wrapper } from "./style";

interface IProps {
  children?: ReactNode;
  title?: string;
  more?: string;
}

const HeaderV2: FC<IProps> = (props) => {
  const { title = "默认标题", more = "" } = props;
  return (
    <HeaderV2Wrapper>
      <div className="content">
        <div className="title">{title}</div>
        <div className="more">{more}</div>
      </div>
    </HeaderV2Wrapper>
  );
};

export default memo(HeaderV2);
