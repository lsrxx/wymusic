import { configureStore } from "@reduxjs/toolkit";
import recommendReducer from "./modules/discover/recommend";
import {
  useSelector,
  shallowEqual,
  TypedUseSelectorHook,
  useDispatch,
} from "react-redux";

const store = configureStore({
  reducer: {
    recommend: recommendReducer,
  },
});

export default store;

// 获取函数的类型
type GetStateFnType = typeof store.getState;
// 获取 state 返回值的类型
type IRootState = ReturnType<GetStateFnType>;
// 获取函数 dispatch 的函数类型
type DispatchType = typeof store.dispatch;

// useAppSelector的 hook
// IRootState 就是函数参数 state 的类型，useAppSelector((state)=>{})
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
// useAppSelector((state)=>{})
export const useAppDispatch: () => DispatchType = useDispatch;
export const shallowEqualApp = shallowEqual
