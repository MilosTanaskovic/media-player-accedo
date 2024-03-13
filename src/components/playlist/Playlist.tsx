/* eslint-disable no-empty-pattern */
import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { PlaylistForm, PlaylistMediaItem } from "../../designsystem/molecules";
import { MediaItem } from "../../types/media";

import * as styles from "./styles/playlist.module.scss";
import { useMedia } from "../../context/MediaContext";
import { savePlaylistToLocalStorage } from "../../utils/localStorage";

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

  // Save media to local storage whenever it changes
  useEffect(() => {
    savePlaylistToLocalStorage(media);
  }, [media]);

  const addVideoUrlHandler = (videoUrl: string) => {
    const newMedia: MediaItem = {
      id: uuidv4(),
      title: "New Media",
      subtitle: "New Media Subtitle",
      description: "",
      sources: [videoUrl],
      thumb: "",
      cover:
        "https://media.licdn.com/dms/image/C4D0BAQGCefVfhVFmXw/company-logo_200_200/0/1680077285496/accedo_tv_logo?e=2147483647&v=beta&t=spatME4kGZCh76GPmGcRjnblP3Aoa0kBodI4fuKqtl8",
      active: false,
      color: ["#B6CF30", "#AFB5B9"],
    };

    if (setMedia) {
      setMedia([...media, newMedia]);
    }
  };
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
      <PlaylistForm onAdd={addVideoUrlHandler} />
    </section>
  );
};

export default Playlist;
