import React from "react";

import * as styles from "./styles/video.module.scss"

interface VideoProps {}

// eslint-disable-next-line no-empty-pattern
const Video: React.FC<VideoProps> = ({}) => {
  return (
    <section id="video" className={styles.video__container}>
      <img src="https://i.ytimg.com/vi/734574/maxresdefault.jpg" alt="video" />
      <h2>Artists</h2>
      <h3>Title</h3>
    </section>
  );
};

export default Video;
