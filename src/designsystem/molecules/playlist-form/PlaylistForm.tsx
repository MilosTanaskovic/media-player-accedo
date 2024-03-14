/* eslint-disable no-empty-pattern */
import React, { useState } from "react";

import * as styles from "./styles/playlistform.module.scss";
import { isValidMediaUrl } from "../../../utils/form";

interface PlaylistFormProps {
  onAdd: (videoURL: string) => void;
}

const PlaylistForm: React.FC<PlaylistFormProps> = ({ onAdd }) => {
  const [videoURL, setVideoUrl] = useState<string>("");
  const [errorVideoMessage, setErrorVideoMessage] = useState<string>("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!videoURL) {
      setErrorVideoMessage("Please enter a video URL");
      return;
    }

    if (!isValidMediaUrl(videoURL)) {
      setErrorVideoMessage(
        "Please enter a valid media URL (e.g., .mp4, .mov)."
      );
      return;
    }

    onAdd(videoURL);
    setVideoUrl(""); // Reset input after submission
    setErrorVideoMessage("");
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
        {errorVideoMessage && <p className={styles.playlistform__error}>{errorVideoMessage}</p>}
        <button type="submit">Add to Playlist</button>
      </form>
    </div>
  );
};

export default PlaylistForm;
