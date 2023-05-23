import React, { memo, useRef, useState, useEffect } from "react";
import type { FC, ReactNode } from "react";
import { Slider, message } from "antd";

import {
  PlayerToolWrapper,
  PlayerWrapper,
  ScheduleWrapper,
  OperatorWrapper,
  ControlWrapper,
} from "./style";
import { shallowEqualApp, useAppSelector, useAppDispatch } from "@/store";
import { getImageSize } from "@/utils/format";
import { getSongPlayUrl } from "@/utils/handle-player";
import { formatTime } from "@/utils/format";
import {
  changeLyricIndexAction,
  changePlayModeAction,
  changeMusicAction,
} from "@/store/modules/player/player";

interface IProps {
  children?: ReactNode;
}

const PlayerTool: FC<IProps> = () => {
  const { playSongList, currentSong, lyrics, lyricIndex, playMode } =
    useAppSelector(
      (state) => ({
        playSongList: state.player.playSongList,
        currentSong: state.player.currentSong,
        lyrics: state.player.lyrics,
        lyricIndex: state.player.lyricIndex,
        playMode: state.player.playMode,
      }),
      shallowEqualApp
    );

  // console.log(currentSong);

  // const [list] = playSongList;

  // 控制歌曲的播放
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // 1.播放音乐
    audioRef.current!.src = getSongPlayUrl(currentSong.id);
    // console.log(audioRef.current?.play()); // promise 对象

    audioRef.current
      ?.play()
      .then(() => {
        setIsPlaying(true);
        console.log("歌曲播放成功");
      })
      .catch((err) => {
        setIsPlaying(false);
        console.log("歌曲播放失败:", err);
      });

    // 2.获取音乐的总时长
    setDuration(currentSong.dt);
  }, [currentSong]);

  function changePlayPause() {
    console.log(isPlaying);

    // 控制播放器的播放与暂停
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch(() => setIsPlaying(false));
    setIsPlaying(!isPlaying);
    // console.log(isPlaying);
  }

  /** 音乐播放的进度处理 */
  function handleTimeUpdate() {
    // console.log("handleTimeUpdate", audioRef.current?.currentTime);
    // 1.获取当前的播放时间
    const currentTime = audioRef.current!.currentTime * 1000;

    // 2.计算当前歌曲进度
    if (!isSliding) {
      const progress = (currentTime / duration) * 100;
      setProgress(progress);
      setCurrentTime(currentTime);
    }

    // 3.根据当前的时间匹配对应的歌词，歌词匹配
    // currentTime/lyrics
    let index = lyrics.length - 1;
    for (let i = 0; i < lyrics.length; i++) {
      const lyric = lyrics[i];
      if (lyric.time > currentTime) {
        index = i - 1;
        break;
      }
    }
    // 4.匹配上对应的歌词的 index, 添加判断条件是为了防止歌词的重复匹配
    if (lyricIndex === index || index === -1) return;
    dispatch(changeLyricIndexAction(index));
    // console.log(lyrics[index].text);

    // 5.展示对应的歌词
    message.open({
      content: lyrics[index].text,
      key: "lyric",
      duration: 0,
      style: {
        position: "fixed",
        marginTop: "87vh",
        marginLeft: "57vh",
        width: "400px",
      },
    });
  }

  // slider 组件里面的点击、拖拽事件
  function handleSliderChanged(value: number) {
    // 1.获取点击位置的时间，根据当前进度的百分比 value / 100 * 总时间
    const currentTime = (value / 100) * duration;

    // 2.设置当前播放的时间
    audioRef.current!.currentTime = currentTime / 1000;

    // 3.currentTime/progress 设置当前时间和进度
    setCurrentTime(currentTime);
    setProgress(value);
    // 判断是否处于播放状态
    setIsSliding(false);
  }

  function handleSliderChanging(value: number) {
    // 0.目前是处于拖拽状态
    setIsSliding(true);

    // 1.设置progress
    setProgress(value);

    // 2.获取value对应位置的时间
    const currentTime = (value / 100) * duration;
    setCurrentTime(currentTime);
  }

  // 播放模式切换
  function handleChangePlayMode() {
    let newPlayMode = playMode + 1;
    if (newPlayMode > 2) newPlayMode = 0;
    dispatch(changePlayModeAction(newPlayMode));
  }
  // 上一首 下一首的切换
  function handleChangeMusic(isNext = true) {
    dispatch(changeMusicAction(isNext));
  }

  return (
    <PlayerToolWrapper>
      <div className="content">
        <PlayerWrapper isplaying={isPlaying}>
          <div className="left" onClick={() => handleChangeMusic(false)}></div>
          <div className="play-pause" onClick={changePlayPause}></div>
          <div className="right" onClick={() => handleChangeMusic()}></div>
        </PlayerWrapper>
        <ScheduleWrapper>
          <div className="image">
            <img src={getImageSize(currentSong?.al?.picUrl, 37)} alt="" />
          </div>
          <div className="info">
            <div className="song">
              <div className="song-name">{currentSong.name}</div>
              <div className="name">{currentSong?.ar?.[0]?.name}</div>
            </div>
            <div className="progress">
              {/* slider 组件 */}
              <Slider
                tooltip={{ formatter: null }}
                value={progress}
                step={0.2}
                onChange={handleSliderChanging}
                onAfterChange={handleSliderChanged}
              />
            </div>
          </div>
          <div className="time">
            {/* {formatTime(currentTime)} */}
            <div className="current-time">{formatTime(currentTime)}/</div>
            <div className="total-time">{formatTime(duration)}</div>
          </div>
        </ScheduleWrapper>
        <OperatorWrapper>
          <div className="lyric"></div>
          <div className="collect"></div>
          <div className="share"></div>
        </OperatorWrapper>
        <ControlWrapper playMode={playMode}>
          <div className="borders"></div>
          <div className="volume"></div>
          <div className="loop" onClick={handleChangePlayMode}></div>
          <div className="playlist">
            <span className="total">{playSongList.length - 1}</span>
          </div>
        </ControlWrapper>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate}></audio>
    </PlayerToolWrapper>
  );
};

export default memo(PlayerTool);
