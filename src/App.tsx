import React, {useState} from "react";
// Import Styles
import "./styles/app.scss";
// Adding components/organisms
import { Footer, Header, Player, Video} from "./components"
// Import data
import mediaData from "./data/media";
import { MediaItem } from "./types/media";

const App: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [media, setMedia] = useState<MediaItem[]>(mediaData());
  console.log(media);
  return (
    <div className="App">
      <Header />
      <Video />
      <Player />
      <Footer />
    </div>
  );
}

export default App;
