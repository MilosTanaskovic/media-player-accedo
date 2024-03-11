import React from "react";
import { Footer, Header, Player, Video} from "./components"
// Adding components/organisms

function App() {
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
