/* eslint-disable no-empty-pattern */
import React from "react";
import { PlaylistMediaItem } from "../../designsystem/molecules";
import { MediaItem } from "../../types/media";

import * as styles from "./styles/playlist.module.scss";
import { useMedia } from "../../context/MediaContext";

interface PlaylistProps {
  media: MediaItem[];
  setCurrentMedia: React.Dispatch<React.SetStateAction<MediaItem>>;
  isPlaying?: boolean;
  setMedia?: React.Dispatch<React.SetStateAction<MediaItem[]>>;
}

const Playlist: React.FC<PlaylistProps> = ({
  media,
  setCurrentMedia,
  isPlaying,
  setMedia,
}) => {
  const { playlistStatus } = useMedia();
  return (
    <section
      id="playlist"
      className={`${styles.playlist__container} ${
        playlistStatus ? styles.active__playlist : ""
      }`}
    >
      <h2>Playlist</h2>
      <div className="playlist__media">
        {media?.map((mediaItem) => (
          <PlaylistMediaItem
            key={mediaItem.id}
            media={media}
            mediaItem={mediaItem}
            setCurrentMedia={setCurrentMedia}
            isPlaying={isPlaying}
            setMedia={setMedia}
          />
        ))}
      </div>
    </section>
  );
};

export default Playlist;
