/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as styles from "./styles/media.module.scss"
import { MediaItem } from "../../types/media";

interface MediaProps {
  currentMedia: MediaItem; 
}

// eslint-disable-next-line no-empty-pattern
const Media: React.FC<MediaProps> = ({currentMedia}) => {
  const { id, title, subtitle, sources, cover } = currentMedia;
  return (
    <section id="video" className={styles.media__container}>
      {/* Video component/molecule */}
      <video autoPlay controls>
        {sources.map((source, index) => (
          <source key={index} src={source} type="video/mp4" />
        ))}
        <p>Your browser does not support the video tag.</p>
      </video>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </section>
  );
};

export default Media;
