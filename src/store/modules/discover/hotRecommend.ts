import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { getHotRecom } from "@/services/modules/discover/discover";

export const fetchHotRecommendAction = createAsyncThunk(
  "hotRecommend",
  async (args, { getState, dispatch }) => {
    const res = await getHotRecom();
    dispatch(changeHotRecommendState(res.result));
  }
);

interface IHotRecommend {
  result: any[];
}
const initialState: IHotRecommend = {
  result: [],
};
const hotRecommendSlice = createSlice({
  name: "hotRecommend",
  initialState,
  reducers: {
    changeHotRecommendState(state, { payload }) {
      state.result = payload;
    },
  },
});

export const { changeHotRecommendState } = hotRecommendSlice.actions;
export default hotRecommendSlice.reducer;
