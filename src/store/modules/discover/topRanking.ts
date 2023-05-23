import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { getTopRanking } from "@/services/modules/discover/discover";

const rankingIds = [19723756, 3779629, 2884035];
export const fetchTopRankingData: () => any = createAsyncThunk(
  "ranking-data",
  async (args, { getState, dispatch }) => {
    // const arrays: any[] = [];
    const array: Promise<any>[] = [];
    // console.log(array);
    // console.log(arrays);
    for (const id of rankingIds) {
      array.push(getTopRanking(id));
      // arrays.push(getTopRanking(id));
    }

    Promise.all(array).then((res) => {
      const playlists = res
        .filter((item) => item.playlist)
        .map((item) => item.playlist)
      // console.log(playlists);
      dispatch(changeTopRankingAction(playlists));
    });
  }
);

interface IRanking {
  ranking: any[];
}
const initialState: IRanking = {
  ranking: [],
};
const topRankingSlice = createSlice({
  name: "topRanking",
  initialState,
  reducers: {
    changeTopRankingAction(state, { payload }) {
      state.ranking = payload;
    },
  },
});

export const { changeTopRankingAction } = topRankingSlice.actions;
export default topRankingSlice.reducer;
