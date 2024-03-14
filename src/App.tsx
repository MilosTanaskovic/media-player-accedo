/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
// Import Styles
import "./styles/app.scss";
// Adding components/organisms
import { Footer, Header, Player, Media, Playlist } from "./components";
// Import data
import mediaData from "./data/media";
import { MediaItem } from "./types/media";
// Import context
import { MediaProvider } from "./context/MediaContext";
// Import utils
import { loadPlaylistFromLocalStorage } from "./utils/localStorage";

const App: React.FC = () => {
  const [media, setMedia] = useState<MediaItem[]>(
    loadPlaylistFromLocalStorage() || mediaData()
  );
  const [currentMedia, setCurrentMedia] = useState<MediaItem>(
    media[0] || mediaData()[0]
  );

  return (
    <MediaProvider>
      <div className="App">
        <Header />
        <main>
          <Media
            media={media}
            setMedia={setMedia}
            currentMedia={currentMedia}
            setCurrentMedia={setCurrentMedia}
          />
          <Player
            currentMedia={currentMedia}
            media={media}
            setMedia={setMedia}
            setCurrentMedia={setCurrentMedia}
          />

          <Playlist
            media={media}
            currentMedia={currentMedia}
            setCurrentMedia={setCurrentMedia}
            setMedia={setMedia}
          />
        </main>
        <Footer />
      </div>
    </MediaProvider>
  );
};

export default App;
