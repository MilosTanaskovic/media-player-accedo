import React from "react";

import * as styles from "./styles/header.module.scss";
import { useMedia } from "../../context/MediaContext";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface HeaderProps {}

// eslint-disable-next-line no-empty-pattern
const Header: React.FC<HeaderProps> = ({}) => {
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
