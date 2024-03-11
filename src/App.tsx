import React from "react";
// Import Styles
import "./styles/app.scss";
// Adding components/organisms
import { Footer, Header, Player, Video} from "./components"

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
