import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MediaProvider } from "./context/MediaContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MediaProvider>
      <App />
    </MediaProvider>
  </React.StrictMode>
);
