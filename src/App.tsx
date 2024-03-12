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

const App: React.FC = () => {
  const [media, setMedia] = useState<MediaItem[]>(mediaData());
  const [currentMedia, setCurrentMedia] = useState<MediaItem>(media[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  console.log(media);
  return (
    <MediaProvider>
      <div className="App">
        <Header />
        <main>
          <Media currentMedia={currentMedia} />
          <Player
            currentMedia={currentMedia}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            media={media}
            setCurrentMedia={setCurrentMedia}
          />

          <Playlist
            media={media}
            setCurrentMedia={setCurrentMedia}
            isPlaying={isPlaying}
            setMedia={setMedia}
          />
        </main>
        <Footer />
      </div>
    </MediaProvider>
  );
};

export default App;
