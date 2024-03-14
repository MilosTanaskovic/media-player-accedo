import React from "react";

import { MediaItem } from "../../../types/media";
import { useMedia } from "../../../context/MediaContext";
import { PlayerIcon } from "../../atoms";
import { trash } from "../../../assets/intex";
import { activePlaylistHandler } from "../../../utils/player";

import * as styles from "../../../components/playlist/styles/playlist.module.scss";

interface PlaylistMediaItemProps {
  mediaItem: MediaItem;
  media: MediaItem[];
  setMedia: React.Dispatch<React.SetStateAction<MediaItem[]>>;
  currentMedia: MediaItem;
  setCurrentMedia: React.Dispatch<React.SetStateAction<MediaItem>>;
}

const PlaylistMediaItem: React.FC<PlaylistMediaItemProps> = ({
  mediaItem,
  media,
  setMedia,
  currentMedia,
  setCurrentMedia,
}) => {
  const { cover, title, subtitle } = mediaItem;

  const { videoRef, setIsCurrentMediaDeleted, isPlaying } = useMedia();

  const mediaSelectHandler = async () => {
    const selectedMedia = media.filter((state) => state.id === mediaItem.id);

    if (selectedMedia.length > 0) {
      await setCurrentMedia(selectedMedia[0]);
      activePlaylistHandler(selectedMedia, media, setMedia);
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

    // Check if video is playing
    if (isPlaying && videoRef.current) videoRef.current.play();
  };

  // Remove media item from playlist
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
