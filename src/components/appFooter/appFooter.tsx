import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import { AppFooterWrapper } from "./style";

interface IProps {
  children?: ReactNode;
}

const AppFooter: FC<IProps> = () => {
  return (
    <AppFooterWrapper>
      <h2>footer</h2>
    </AppFooterWrapper>
  );
};
export default memo(AppFooter);
