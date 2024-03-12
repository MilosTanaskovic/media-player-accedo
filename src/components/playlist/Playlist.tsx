/* eslint-disable no-empty-pattern */
import React from "react";
import { PlaylistMediaItem } from "../../designsystem/molecules";
import { MediaItem } from "../../types/media";

import * as styles from './styles/playlist.module.scss';

interface PlaylistProps {
  media: MediaItem[];
}

const Playlist: React.FC<PlaylistProps> = ({ media }) => {
  return (
    <section id="playlist" className={styles.playlist__container}>
      <h2>Playlist</h2>
      <div className="playlist__media">
        {media?.map((mediaItem) => (
          <PlaylistMediaItem key={mediaItem.id} mediaItem={mediaItem} />
        ))}
      </div>
    </section>
  );
};

export default Playlist;
