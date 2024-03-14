/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { PlayerIcon } from "../../designsystem/atoms";
import {
  previous,
  backward,
  play,
  forward,
  next,
  pause,
} from "../../assets/intex";

import * as styles from "./styles/player.module.scss";
import { MediaItem } from "../../types/media";
import { useMedia } from "../../context/MediaContext";
import { activePlaylistHandler, getTime } from "../../utils/player";

interface PlayerProps {
  media?: MediaItem[];
  setMedia: React.Dispatch<React.SetStateAction<MediaItem[]>>;
  currentMedia: MediaItem;
  setCurrentMedia?:
    | React.Dispatch<React.SetStateAction<MediaItem>>
    | undefined
    | any;
}

const Player: React.FC<PlayerProps> = ({
  media,
  setMedia,
  currentMedia,
  setCurrentMedia,
}) => {
  const { videoRef, videoInfo, setVideoInfo, isCurrentMediaDeleted, isPlaying, setIsPlaying } = useMedia();

  const playVideoHandler = () => {
    // play video
    if (isPlaying) {
      videoRef.current?.pause();
      setIsPlaying(!isPlaying);
    } else {
      videoRef.current?.play();
      setIsPlaying(!isPlaying);
    }
  };

  const dragHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentTime = parseInt(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = currentTime;
    }
    setVideoInfo({ ...videoInfo, currentTime });
  };

  // Skip Back and Forward
  const skipTrackHandler = async (direction: string) => {
    const currentIndex = media?.findIndex(
      (state) => state.id === currentMedia?.id
    );

    if (direction === "skip-next" && media && currentIndex !== undefined) {
      await setCurrentMedia(media[(currentIndex + 1) % media.length]);
      activePlaylistHandler((media[(currentIndex + 1) % media.length]), media, setMedia);
    }

    if (direction === "skip-previous" && media && currentIndex !== undefined) {
      if ((currentIndex - 1) % media.length === -1) {
        await setCurrentMedia(media[media.length - 1]);
        activePlaylistHandler(media[media.length - 1], media, setMedia);
        if (isPlaying && videoRef.current) videoRef.current.play();  
        return;
      }
      await setCurrentMedia(media[(currentIndex - 1) % media.length]);
      activePlaylistHandler((media[(currentIndex - 1) % media.length]), media, setMedia);
    }
    if (isPlaying && videoRef.current) videoRef.current.play(); 
  };

  // Fast Backward and Forward
  const fastTrackHandler = (direction: string) => {
    if (videoRef.current) {
      if (direction === "fast-forward") {
        videoRef.current.currentTime += 10;
      }

      if (direction === "fast-backward") {
        videoRef.current.currentTime -= 10;
      }
    }
  };

  if (isCurrentMediaDeleted) {
    return <></>;
  }
  

  return (
    <section id="player" className={styles.player__container}>
      <div className={styles.time__control}>
        <span>{getTime(videoInfo?.currentTime)}</span>
        <input
          min={0}
          max={videoInfo?.duration || 0}
          value={videoInfo?.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <span>{getTime(videoInfo?.duration)}</span>
      </div>
      <div className={styles.play__control}>
        <PlayerIcon
          onClick={() => skipTrackHandler("skip-previous")}
          icon={previous}
        />
        <PlayerIcon
          onClick={() => fastTrackHandler("fast-backward")}
          icon={backward}
        />
        <PlayerIcon
          icon={isPlaying ? pause : play}
          onClick={playVideoHandler}
        />
        <PlayerIcon
          onClick={() => fastTrackHandler("fast-forward")}
          icon={forward}
        />
        <PlayerIcon onClick={() => skipTrackHandler("skip-next")} icon={next} />
      </div>
    </section>
  );
};

export default Player;
