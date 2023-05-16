import { getBanners } from "@/services/modules/discover/discover";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

// 直接在这里进行派发操作，之后只要调用就能 取到数据
export const fetchBannersData: () => any = createAsyncThunk(
  "banners",
  // getState 用于获取下面 initialstate 中的数据
  async (arg, { getState, dispatch }) => {
    try {
      const res = await getBanners();
      dispatch(changeBannersAction(res.banners));

      // return res.banners;
    } catch (err) {
      console.log(err);
    }
  }
);

interface IRecommendState {
  banners: any[];
}

const initialState: IRecommendState = {
  banners: [],
};

const recommendSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload;
    },
  },
  // changeBannersAction 是这种的简写方式
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchBannersData.pending, () => {
  //       console.log("pending");
  //     })
  //     .addCase(fetchBannersData.fulfilled, (state, { payload }) => {
  //       state.banners = payload;
  //     })
  //     .addCase(fetchBannersData.rejected, () => {
  //       console.log("rejected");
  //     });
  // },
});

export const { changeBannersAction } = recommendSlice.actions;
export default recommendSlice.reducer;
