import React, { memo, useState, useRef } from "react";
import type { FC, ReactNode, ElementRef } from "react";
import { Carousel } from "antd";
import classNames from "classnames";

import { SwipperWrapper, LeftWrapper, RightWrapper } from "./style";
import { useAppSelector, shallowEqualApp } from "@/store";

interface IProps {
  children?: ReactNode;
}

const Swipper: FC<IProps> = () => {
  const [index, setIndex] = useState(0);
  const swiperRef = useRef<ElementRef<typeof Carousel>>(null);
  // 获取 banners 数据
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners,
    }),
    shallowEqualApp
  );
  // 设置当前 轮播图的索引
  function getCurrentIndex(current: number) {
    setIndex(current);
  }
  // 获取轮播图背景的url
  function getBackgound() {
    return banners[index]?.imageUrl + "?imageView&blur=40x20";
  }
  // 左右轮播图按钮的点击
  function rightClick() {
    swiperRef.current?.next();
  }
  function leftClick() {
    swiperRef.current?.prev();
  }
  // function dotsClick(i: number):any {
  //   setIndex(i)
  // }
  return (
    <SwipperWrapper
      style={{
        background: `url('${getBackgound()}') center center / 6000px`,
        transition: `background .2s ease`
      }}
    >
      <div className="leftbtn" onClick={leftClick}>
        <img src={require("@/assets/img/banner-control-left.png")} alt="" />
      </div>
      <div className="content wrap-v2">
        <LeftWrapper>
          <Carousel
            autoplay
            effect="fade"
            dots={false}
            afterChange={getCurrentIndex}
            waitForAnimate={true}
            ref={swiperRef}
          >
            {banners?.map((item, index) => {
              return (
                <div className="item" key={item.imageUrl}>
                  <img src={item.imageUrl} alt={item.typeTitle} />
                </div>
              );
            })}
          </Carousel>
          <div className="dots">
            {banners.map((item, i) => {
              return (
                <li
                  key={i}
                  className={classNames("list", { active: i === index })}
                  // onClick={dotsClick(i)}
                ></li>
              );
            })}
          </div>
        </LeftWrapper>
        <RightWrapper>
          <div className="back">
            <a
              href="https://music.163.com/download"
              target="_blank"
              rel="noreferrer"
            >
              <span className="btn">下载客户端</span>
            </a>
            <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
          </div>
        </RightWrapper>
      </div>
      <div className="rightbtn" onClick={rightClick}>
        <img src={require("@/assets/img/banner-control-right.png")} alt="" />
      </div>
    </SwipperWrapper>
  );
};

export default memo(Swipper);
