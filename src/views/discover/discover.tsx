import React, { memo, Suspense } from "react";
import type { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

// import { useAppSelector } from "@/store/index";
import DiscoverNav from "./c-cpns/discover-nav";

interface IProps {
  children?: ReactNode;
}

const Discover: FC<IProps> = () => {
  // const { message } = useAppSelector((state) => ({
  //   message: state.discover.message,
  // }));
  return (
    <div>
      <DiscoverNav />
      {/* 二级路由占位 */}
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default memo(Discover);
