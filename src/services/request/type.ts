import type { AxiosRequestConfig, AxiosResponse } from "axios";

//解决方案一： 对 AxiosRequestConfig 进行覆盖

// 解决方案二： 将 config 声明为 any 类型

// 解决方案三：降低 axios 的版本 npm install axios@0.21.1

// 针对AxiosRequestConfig配置进行扩展
export interface HYInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: any) => any;
  requestFailureFn?: (err: any) => any;
  responseSuccessFn?: (res: T) => T;
  responseFailureFn?: (err: any) => any;
}

export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYInterceptors<T>;
  // headers?: any;
}
