import hyRequest from "../..";

// recommend 网络请求
export function getBanners() {
  return hyRequest.get({
    url: "/banner",
  });
}

// hotRecommend 网络请求
export function getHotRecom(limit = 8) {
  return hyRequest.get({
    url: "/personalized",
    params: {
      limit,
    },
  });
}

// new-disc
export function getNewDisc() {
  return hyRequest.get({
    url: "/album/newest",
  });
}

// ranking
export function getTopRanking(id: number) {
  return hyRequest.get({
    url: "/playlist/detail",
    params: {
      id,
    },
  });
}

// setter-singer
export function getArtistList(limit = 30) {
  return hyRequest.get({
    url: "/artist/list",
    params: {
      limit,
    },
  });
}
