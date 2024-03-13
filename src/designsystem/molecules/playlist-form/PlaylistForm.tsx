/* eslint-disable no-empty-pattern */
import React, { useState } from "react";

import * as styles from "./styles/playlistform.module.scss";

interface PlaylistFormProps {
  onAdd: (videoURL: string) => void;
}

const PlaylistForm: React.FC<PlaylistFormProps> = ({ onAdd }) => {
  const [videoURL, setVideoUrl] = useState<string>("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!videoURL) return; // Prevent adding empty URLs
    onAdd(videoURL);
    setVideoUrl(""); // Reset input after submission
    console.log("submitHandler");
  };

  return (
    <div className={styles.playlistform__container}>
      <form onSubmit={submitHandler}>
        <h3>Add new video</h3>
        <input
          type="text"
          value={videoURL}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="Enter Video URL"
        />
        <button type="submit">Add to Playlist</button>
      </form>
    </div>
  );
};

export default PlaylistForm;
