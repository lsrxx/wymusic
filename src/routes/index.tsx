import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router";
// 一级路由
const Discover = lazy(() => import("@/views/discover/discover"));
const Mine = lazy(() => import("@/views/mine/mine"));
const Focus = lazy(() => import("@/views/focus/focus"));
const Download = lazy(() => import("@/views/download/download"));
// 二级路由
const Disc = lazy(() => import("@/views/discover/c-views/disc/disc"));
const Radio = lazy(() => import("@/views/discover/c-views/radio/radio"));
const Ranking = lazy(() => import("@/views/discover/c-views/ranking/ranking"));
const Recommend = lazy(
  () => import("@/views/discover/c-views/recommend/recommend")
);
const Singer = lazy(() => import("@/views/discover/c-views/singer/singer"));
const Songs = lazy(() => import("@/views/discover/c-views/songs/songs"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/discover" />,
  },
  {
    path: "/discover",
    element: <Discover />,
    children: [
      {
        path: "/discover",
        element: <Navigate to="/discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        element: <Recommend />,
      },
      {
        path: "/discover/ranking",
        element: <Ranking />,
      },
      {
        path: "/discover/songs",
        element: <Songs />,
      },
      {
        path: "/discover/radio",
        element: <Radio />,
      },
      {
        path: "/discover/singer",
        element: <Singer />,
      },
      {
        path: "/discover/disc",
        element: <Disc />,
      },
    ],
  },
  {
    path: "/mine",
    element: <Mine />,
  },
  {
    path: "/focus",
    element: <Focus />,
  },
  {
    path: "/download",
    element: <Download />,
  },
];
