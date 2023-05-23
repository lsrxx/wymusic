import { getSongDetail } from "@/services/modules/player/player";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { IRootState } from "@/store";
import { ILyric, parseLyric } from "@/utils/parse-lyric";
import { getSongLyric } from "@/services/modules/player/player";

interface IThunkState {
  state: IRootState;
}
export const fetchCurrentSongData = createAsyncThunk<void, number, IThunkState>(
  "current-song",
  (id: number, { getState, dispatch }) => {
    // 准备播放某一首歌曲时, 分成两种情况，播放的歌曲都应该加入到自己的播放列表中，所以会分成两种情况
    // 1.从列表尝试是否可以获取到这首歌
    const playSongList = getState().player.playSongList;
    const findIndex = playSongList.findIndex((item) => item.id === id);

    if (findIndex === -1) {
      // 没有找到相同的
      // 1.获取歌曲信息
      getSongDetail(id).then((res) => {
        // 1.获取song
        if (!res.songs.length) return;
        const song = res.songs[0];

        // 2.将song放到currentSong中
        const newPlaySongList = [...playSongList];
        newPlaySongList.push(song);
        dispatch(changeCurrentSongAction(song));
        dispatch(changePlaySongListAction(newPlaySongList));
        dispatch(changePlaySongIndexAction(newPlaySongList.length - 1));
      });
    } else {
      // 找到了相同的item
      const song = playSongList[findIndex];
      dispatch(changeCurrentSongAction(song));
      dispatch(changePlaySongIndexAction(findIndex));
    }

    // 2.获取歌词数据
    getSongLyric(id).then((res) => {
      // 1.获取歌词的字符串
      const lyricString = res.lrc.lyric;
      // 2.对歌词进行解析(一个个对象)
      const lyrics = parseLyric(lyricString);
      // 3.将歌词放到state中
      // console.log(lyrics);
      dispatch(changeLyricsAction(lyrics));
    });
  }
);

export const changeMusicAction = createAsyncThunk<void, boolean, IThunkState>(
  "changemuisc",
  (isNext, { dispatch, getState }) => {
    // 1.获取state中的数据
    const player = getState().player;
    const playMode = player.playMode;
    const songIndex = player.playSongIndex;
    const songList = player.playSongList;

    // 2.根据不同的模式计算不同的下一首歌曲的索引
    let newIndex = songIndex;
    if (playMode === 1) {
      // 随机播放 随机数 * 当前的范围 即为当前范围内的随机数
      newIndex = Math.floor(Math.random() * songList.length);
    } else {
      // 单曲顺序和顺序播放
      newIndex = isNext ? songIndex + 1 : songIndex - 1;
      // 防止越界的问题
      if (newIndex > songList.length - 1) newIndex = 0;
      if (newIndex < 0) newIndex = songList.length - 1;
    }

    // 3.获取当前的歌曲
    const song = songList[newIndex];
    dispatch(changeCurrentSongAction(song));
    dispatch(changePlaySongIndexAction(newIndex));

    // 4.请求新的歌词
    getSongLyric(song.id).then((res) => {
      // 1.获取歌词的字符串
      const lyricString = res.lrc.lyric;
      // 2.对歌词进行解析(一个个对象)
      const lyrics = parseLyric(lyricString);
      // 3.将歌词放到state中
      dispatch(changeLyricsAction(lyrics));
    });
  }
);

interface IPlayerState {
  currentSong: any;
  lyrics: ILyric[];
  lyricIndex: number;
  playSongList: any[];
  playSongIndex: number;
  playMode: number;
}
const initialState: IPlayerState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,
  playSongList: [
    {
      name: "1965",
      id: 28798452,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 900106,
          name: "Zella Day",
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: null,
      fee: 0,
      v: 16,
      crbt: null,
      cf: "",
      al: {
        id: 2897081,
        name: "1965",
        picUrl:
          "https://p1.music.126.net/gse6x81HSUvPR83H1ACI_A==/5990139348552924.jpg",
        tns: [],
        pic: 5990139348552924,
      },
      dt: 217813,
      h: {
        br: 320000,
        fid: 0,
        size: 8715538,
        vd: -62703,
        sr: 44100,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5229340,
        vd: -60092,
        sr: 44100,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3486241,
        vd: -58399,
        sr: 44100,
      },
      sq: {
        br: 947665,
        fid: 0,
        size: 25801766,
        vd: -62846,
        sr: 44100,
      },
      hr: null,
      a: null,
      cd: "1",
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 2,
      s_id: 0,
      mark: 262144,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 16,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      mv: 5330721,
      publishTime: 1404835200007,
    },
    {
      name: "苦茶子",
      id: 1922888354,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 36772893,
          name: "Starling8",
          tns: [],
          alias: [],
        },
        {
          id: 31002901,
          name: "MoreLearn 27",
          tns: [],
          alias: [],
        },
        {
          id: 51613721,
          name: "FIVESTAR",
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: "",
      fee: 8,
      v: 33,
      crbt: null,
      cf: "",
      al: {
        id: 151125530,
        name: "埋汰",
        picUrl:
          "https://p1.music.126.net/VjXYNoGC3lXajZDs0r35XQ==/109951167852652412.jpg",
        tns: [],
        pic_str: "109951167852652412",
        pic: 109951167852652420,
      },
      dt: 170796,
      h: {
        br: 320000,
        fid: 0,
        size: 6834285,
        vd: -28627,
        sr: 48000,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 4100589,
        vd: -26051,
        sr: 48000,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 2733741,
        vd: -24447,
        sr: 48000,
      },
      sq: {
        br: 879086,
        fid: 0,
        size: 18768165,
        vd: -28610,
        sr: 48000,
      },
      hr: {
        br: 1647637,
        fid: 0,
        size: 35176443,
        vd: -28614,
        sr: 48000,
      },
      a: null,
      cd: "01",
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 536879168,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 33,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rurl: null,
      mst: 9,
      cp: 0,
      rtype: 0,
      mv: 0,
      publishTime: 1650297600000,
    },
    {
      name: "起风了",
      id: 1330348068,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 12085562,
          name: "买辣椒也用券",
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: "",
      fee: 8,
      v: 42,
      crbt: null,
      cf: "",
      al: {
        id: 74715426,
        name: "起风了",
        picUrl:
          "https://p1.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg",
        tns: [],
        pic_str: "109951163699673355",
        pic: 109951163699673360,
      },
      dt: 325868,
      h: {
        br: 320000,
        fid: 0,
        size: 13037236,
        vd: -77525,
        sr: 44100,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 7822359,
        vd: -74987,
        sr: 44100,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 5214920,
        vd: -73504,
        sr: 44100,
      },
      sq: {
        br: 985873,
        fid: 0,
        size: 40158105,
        vd: -77524,
        sr: 44100,
      },
      hr: {
        br: 2832349,
        fid: 0,
        size: 115371553,
        vd: -77475,
        sr: 88200,
      },
      a: null,
      cd: "1",
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 536879104,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 42,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 10782615,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 1415923,
      publishTime: 0,
    },
  ],
  playSongIndex: -1,
  playMode: 0, // 0:顺序播放 1:随机播放 2:单曲循环
};

const PlayerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload;
      // console.log(payload);
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload;
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload;
    },
    changePlaySongIndexAction(state, { payload }) {
      state.playSongIndex = payload;
    },
    changePlaySongListAction(state, { payload }) {
      state.playSongList = payload;
    },
    changePlayModeAction(state, { payload }) {
      state.playMode = payload;
    },
  },
});

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction,
  changePlaySongIndexAction,
  changePlaySongListAction,
  changePlayModeAction,
} = PlayerSlice.actions;
export default PlayerSlice.reducer;
