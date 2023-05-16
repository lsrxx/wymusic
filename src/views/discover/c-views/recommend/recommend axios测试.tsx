import React, { memo } from "react";
import { FC, ReactNode, useEffect, useState } from "react";

import hyRequest from "@/services";

interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = () => {
  // 测试网络请求
  const [banners, setBanners] = useState<any[]>([]);
  useEffect(() => {
    hyRequest
      .get({
        url: "/banner",
      })
      .then((res) => {
        setBanners(res.banners);
        console.log(res.banners);
      });
  }, []);
  return (
    <div>
      {banners.map((item, index) => {
        return <div key={index}>{item.imageUrl}</div>;
      })}
    </div>
  );
};

export default memo(Recommend);
