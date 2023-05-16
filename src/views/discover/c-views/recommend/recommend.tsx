import React, { memo } from "react";
import { FC, ReactNode, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchBannersData } from "@/store/modules/discover/recommend";
import Swiper from "./c-cpns/topbanner/swiper";

interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBannersData());
  }, []);
  return (
    <div>
      <Swiper />
    </div>
  );
};

export default memo(Recommend);
