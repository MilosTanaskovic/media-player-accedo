/* eslint-disable no-empty-pattern */
import React from 'react'
import { MediaItem } from '../../../types/media';

import * as styles from '../../../components/playlist/styles/playlist.module.scss';

interface PlaylistMediaItemProps {
    mediaItem: MediaItem;
}

const PlaylistMediaItem: React.FC<PlaylistMediaItemProps> = ({mediaItem}) => {
    const { cover, title, subtitle } = mediaItem;
  return (
    <div className={styles.playlist__media__item}>
        <img src={cover} alt={title} />
        <div className={styles.media__info}>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        </div>
    </div>
  )
}

export default PlaylistMediaItem