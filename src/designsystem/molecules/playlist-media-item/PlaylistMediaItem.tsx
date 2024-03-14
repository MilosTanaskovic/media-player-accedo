/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty-pattern */
import React from "react";
import { MediaItem } from "../../../types/media";

import * as styles from "../../../components/playlist/styles/playlist.module.scss";
import { useMedia } from "../../../context/MediaContext";
import { PlayerIcon } from "../../atoms";
import { trash } from "../../../assets/intex";

interface PlaylistMediaItemProps {
  mediaItem: MediaItem;
  media: MediaItem[];
  currentMedia: MediaItem;
  setCurrentMedia: React.Dispatch<React.SetStateAction<MediaItem>>;
  isPlaying?: boolean;
  setMedia?: React.Dispatch<React.SetStateAction<MediaItem[]>>;
}

const PlaylistMediaItem: React.FC<PlaylistMediaItemProps> = ({
  mediaItem,
  media,
  currentMedia,
  setCurrentMedia,
  isPlaying,
  setMedia,
}) => {
  const { cover, title, subtitle } = mediaItem;

  const { videoRef, setIsCurrentMediaDeleted } = useMedia();

  const mediaSelectHandler = () => {
    const selectedMedia = media.filter((state) => state.id === mediaItem.id);

    if (selectedMedia.length > 0) {
      setCurrentMedia(selectedMedia[0]);
      setIsCurrentMediaDeleted(false);
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

  // remove media item from playlist
  const deleteMediaItemHandler = () => {
    const newMedia = media?.filter((state) => state.id !== mediaItem.id);

    if (!setMedia) {
      return;
    }
    setMedia(newMedia);

    // Check if the deleted media item is the currently selected one
    if (currentMedia && mediaItem.id === currentMedia.id) {
      setIsCurrentMediaDeleted(true);
    }
  };


  return (
    <div className={styles.playlist__media__group}>
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
      <PlayerIcon onClick={deleteMediaItemHandler} icon={trash} size="20" />
    </div>
  );
};

export default PlaylistMediaItem;
