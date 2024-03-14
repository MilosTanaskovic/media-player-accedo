/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";

import * as styles from "./styles/media.module.scss";
import { MediaItem } from "../../types/media";
import { useMedia } from "../../context/MediaContext";
import { activePlaylistHandler } from "../../utils/player";

interface MediaProps {
  media: MediaItem[];
  setMedia: React.Dispatch<React.SetStateAction<MediaItem[]>>;
  currentMedia: MediaItem;
  setCurrentMedia: React.Dispatch<React.SetStateAction<MediaItem>>;
}

// eslint-disable-next-line no-empty-pattern
const Media: React.FC<MediaProps> = ({
  media,
  setMedia,
  currentMedia,
  setCurrentMedia,
}) => {
  const { title, subtitle, sources } = currentMedia;

  const { videoRef, timeUpdateHandler, isCurrentMediaDeleted, isPlaying } = useMedia();

  useEffect(() => {
    // when currentMedia changed, reload the video
    if (videoRef.current) {
      videoRef.current.load(); // this reload the video element
    }
  }, [currentMedia, videoRef]);

  // Auto skip
  const autoSkipVideoHandler = () => {
    const currentIndex = media?.findIndex(
      (item) => item.id === currentMedia.id
    );
    if (
      currentIndex === undefined ||
      currentIndex === -1 ||
      !media ||
      media.length <= 1
    ) return;

    const nextIndex = (currentIndex + 1) % media.length;
    const nextMedia = media[nextIndex];
    setCurrentMedia(nextMedia);
    activePlaylistHandler(nextMedia, media, setMedia);

    if (isPlaying && videoRef.current) videoRef.current.play();
  };

  if (isCurrentMediaDeleted) {
    return (
      <p className="info">
        The selected media has been deleted! <br />
        Please select a media to play!
      </p>
    );
  }

  return (
    <section id="video" className={styles.media__container}>
      {/* Video component/molecule */}
      <video
        autoPlay
        ref={videoRef}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        onEnded={autoSkipVideoHandler}
      >
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
