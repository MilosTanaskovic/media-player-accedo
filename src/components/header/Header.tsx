import React from "react";

import { useMedia } from "../../context/MediaContext";

import * as styles from "./styles/header.module.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { playlistStatus, setPlaylistStatus } = useMedia();

  return (
    <header className={styles.header__container}>
      <h1>Media Player</h1>
      <button onClick={() => setPlaylistStatus(!playlistStatus)}>
        Playlist
      </button>
    </header>
  );
};

export default Header;
