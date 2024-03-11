/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { PlayerIcon } from "../../designsystem/atoms";
import { previous, backward, play, forward, next } from "../../assets/intex";

import * as styles from "./styles/player.module.scss";
import { MediaItem } from "../../types/media";
import { useMedia } from "../../context/MediaContext";

interface PlayerProps {
    currentMedia: MediaItem;
}

// eslint-disable-next-line no-empty-pattern
const Player: React.FC<PlayerProps> = ({currentMedia}) => {

    const { videoRef } = useMedia();

    const playVideoHandler = () => {
        // play video
        console.log(videoRef)
        videoRef.current?.play();
    };
  return (
    <section id="player" className={styles.player__container}>
      <div className={styles.time__control}>
        <span>Start Time</span>
        <input type="range" />
        <span>End Time</span>
      </div>
      <div className={styles.play__control}>
        <PlayerIcon icon={previous} />
        <PlayerIcon icon={backward} />
        <PlayerIcon icon={play} onClick={playVideoHandler} />
        <PlayerIcon icon={forward} />
        <PlayerIcon icon={next} />
      </div>
    </section>
  );
};

export default Player;
