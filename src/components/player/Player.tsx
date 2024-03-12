/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from "react";
import { PlayerIcon } from "../../designsystem/atoms";
import { previous, backward, play, forward, next, pause } from "../../assets/intex";

import * as styles from "./styles/player.module.scss";
import { MediaItem } from "../../types/media";
import { useMedia } from "../../context/MediaContext";
import { getTime } from "../../utils/player";

interface PlayerProps {
  currentMedia: MediaItem;
  isPlaying?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setIsPlaying?: ((isPlaying: boolean) => void) | undefined | any;
}

// eslint-disable-next-line no-empty-pattern
const Player: React.FC<PlayerProps> = ({
  currentMedia,
  isPlaying,
  setIsPlaying,
}) => {
    
  const { videoRef, videoInfo } = useMedia();

  const playVideoHandler = () => {
    // play video
    console.log(videoRef);
    if (isPlaying) {
        videoRef.current?.pause();
        setIsPlaying(!isPlaying);
    } else {
        videoRef.current?.play();
        setIsPlaying(!isPlaying);
    }
  };
  return (
    <section id="player" className={styles.player__container}>
      <div className={styles.time__control}>
        <span>{getTime(videoInfo?.currentTime)}</span>
        <input type="range" />
        <span>{getTime(videoInfo?.duration)}</span>
      </div>
      <div className={styles.play__control}>
        <PlayerIcon icon={previous} />
        <PlayerIcon icon={backward} />
        <PlayerIcon icon={isPlaying ? play :  pause} onClick={playVideoHandler} />
        <PlayerIcon icon={forward} />
        <PlayerIcon icon={next} />
      </div>
    </section>
  );
};

export default Player;
