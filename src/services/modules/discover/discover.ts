import hyRequest from "../..";

// recommend 网络请求
export function getBanners() {
  return hyRequest.get({
    url: "/banner",
  });
}
