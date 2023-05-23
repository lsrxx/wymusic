import React, { memo, useRef } from "react";
import type { FC, ReactNode, ElementRef } from "react";
import { Carousel } from "antd";

import { NewDiscWrapper } from "./style";
import AreaHeaderV1 from "@/components/area-header-v1/area-header-v1";
import { shallowEqualApp, useAppSelector } from "@/store";
import NewDiscList from "@/components/new-disc-list/new-disc-list";

interface IProps {
  children?: ReactNode;
}

const NewDisc: FC<IProps> = () => {
  const { disc } = useAppSelector(
    (state) => ({
      disc: state.recommend.disc,
    }),
    shallowEqualApp
  );

  const swiperRef = useRef<ElementRef<typeof Carousel>>(null);

  function btnLeft() {
    swiperRef.current?.prev();
  }
  function btnRight() {
    swiperRef.current?.next();
  }
  return (
    <NewDiscWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/disc" />
      <div className="content">
        <div className="left" onClick={btnLeft}></div>
        <div className="swipper">
          <Carousel dots={false} speed={1500} ref={swiperRef}>
            {[0, 1].map((item, index) => {
              return (
                <div key={item}>
                  <div className="item">
                    {disc.slice(item * 5, (item + 1) * 5).map((disc) => {
                      return <NewDiscList discData={disc} key={disc.id} />;
                    })}
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="right" onClick={btnRight}></div>
      </div>
    </NewDiscWrapper>
  );
};

export default memo(NewDisc);
