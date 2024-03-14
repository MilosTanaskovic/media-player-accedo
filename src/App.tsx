import React from "react";
// Import context
import { MediaProvider } from "./context/MediaContext";
// Adding components/organisms
import { Footer, Header, Player, Media, Playlist } from "./components";
// Import Styles
import "./styles/app.scss";

const App: React.FC = () => {
  return (
    <MediaProvider>
      <div className="App">
        <Header />
        <main>
          <Media />
          <Player />

          <Playlist />
        </main>
        <Footer />
      </div>
    </MediaProvider>
  );
};

export default App;
