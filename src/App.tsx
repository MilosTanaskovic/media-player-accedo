import React from "react";
// Import context
import { useMedia } from "./context/MediaContext";

// Adding components/organisms
import { Footer, Header, Player, Media, Playlist } from "./components";
// Import Styles
import "./styles/app.scss";

const App: React.FC = () => {
  const { playlistStatus } = useMedia();
  return (
    <div className={`App ${playlistStatus ? "playlist-active" : ""}`}>
      <Header />
      <main>
        <Media />
        <Player />

        <Playlist />
      </main>
      <Footer />
    </div>
  );
};

export default App;
