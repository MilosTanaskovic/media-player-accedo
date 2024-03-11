/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from "react";
// Import Styles
import "./styles/app.scss";
// Adding components/organisms
import { Footer, Header, Player, Media} from "./components"
// Import data
import mediaData from "./data/media";
import { MediaItem } from "./types/media";

const App: React.FC = () => {
  const [media, setMedia] = useState<MediaItem[]>(mediaData());
  const [currentMedia, setCurrentMedia] = useState<MediaItem>(media[0]);
  console.log(media);
  return (
    <div className="App">
      <Header />
      <Media currentMedia={currentMedia} />
      <Player />
      <Footer />
    </div>
  );
}

export default App;
