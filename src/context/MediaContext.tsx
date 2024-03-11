/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useRef, ReactNode } from "react";

interface MediaContextType {
  videoRef: React.RefObject<HTMLVideoElement>;
}

const MediaContext = createContext<MediaContextType | undefined>(undefined);

interface MediaProviderProps {
  children: ReactNode;
}

export const MediaProvider: React.FC<MediaProviderProps> = ({ children }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <MediaContext.Provider value={{ videoRef }}>
      {children}
    </MediaContext.Provider>
  );
};
export function useMedia(): MediaContextType {
  const context = useContext(MediaContext);
  if (context === undefined) {
    throw new Error("useMedia must be used within a MediaProvider");
  }
  return context;
}
