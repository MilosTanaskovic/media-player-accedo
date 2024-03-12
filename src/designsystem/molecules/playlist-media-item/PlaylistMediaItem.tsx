/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty-pattern */
import React from "react";
import { MediaItem } from "../../../types/media";

import * as styles from "../../../components/playlist/styles/playlist.module.scss";
import { useMedia } from "../../../context/MediaContext";

interface PlaylistMediaItemProps {
  mediaItem: MediaItem;
  media: MediaItem[];
  setCurrentMedia: React.Dispatch<React.SetStateAction<MediaItem>>;
  isPlaying?: boolean;
  setMedia?: React.Dispatch<React.SetStateAction<MediaItem[]>>;
}

const PlaylistMediaItem: React.FC<PlaylistMediaItemProps> = ({
  mediaItem,
  media,
  setCurrentMedia,
  isPlaying,
  setMedia,
}) => {
  const { cover, title, subtitle } = mediaItem;

  const { videoRef } = useMedia();

  const mediaSelectHandler = () => {
    const selectedMedia = media.filter((state) => state.id === mediaItem.id);

    if (selectedMedia.length > 0) {
      setCurrentMedia(selectedMedia[0]);
    }

    // Select/Add Active media
    const newMedia = media?.map((state) => {
      if (state.id === mediaItem.id) {
        return { ...state, active: true };
      } else {
        return { ...state, active: false };
      }
    });
    if (!setMedia) {
      return;
    }
    setMedia(newMedia);

    if (isPlaying) {
      videoRef.current?.play();
    }
  };

  return (
    <div
      onClick={mediaSelectHandler}
      className={`${styles.playlist__media__item} ${
        mediaItem.active ? styles.selected : ""
      }`}
    >
      <img src={cover} alt={title} />
      <div className={styles.media__info}>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </div>
    </div>
  );
};

export default PlaylistMediaItem;
