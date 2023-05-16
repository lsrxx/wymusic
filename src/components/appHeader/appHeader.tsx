import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { AppHeaderWrapper } from "./style";
import headerTitles from "@/assets/data/header_titles.json";

interface IProps {
  children?: ReactNode;
}

const AppHeader: FC<IProps> = () => {
  function showHeader(item: any) {
    if (item.type === "path") {
      return (
        // NavLink 可以通过路由匹配对应的标签，给当前的标签添加 active 样式
        // classname 中传入回调函数，用于更改样式名称
        <NavLink
          to={item.link}
          className={({ isActive }) => {
            return isActive ? "cactive" : "none";
          }}
        >
          {item.title}
          <i className="icon sprite-01-icon"></i>
        </NavLink>
      );
    } else {
      return (
        <a href={item.link} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      );
    }
  }
  return (
    <div>
      <AppHeaderWrapper>
        <div className="content wrap-v1">
          <div className="left">
            <a className="logo sprite-01-title" href="/">
              网易云音乐
            </a>
            <div className="lefttitle">
              {headerTitles.map((item, index) => {
                return (
                  <div key={index} className="leftitem">
                    {showHeader(item)}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="right">
            <Input
              placeholder="音乐/视频/电台/用户"
              prefix={<SearchOutlined />}
              className="input"
              allowClear
            />

            <div className="create">创作者中心</div>
            <div className="login">登入</div>
          </div>
        </div>
        <div className="underline"></div>
      </AppHeaderWrapper>
    </div>
  );
};

export default memo(AppHeader);
