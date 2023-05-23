import hyRequest from "../..";

export function getSongDetail(ids: number) {
  return hyRequest.get({
    url: "/song/detail",
    params: {
      ids,
    },
  });
}

// 获取歌词信息
export function getSongLyric(id: number) {
  return hyRequest.get({
    url: "/lyric",
    params: {
      id,
    },
  });
}
