/* eslint-disable react-refresh/only-export-components */
import React, {useState, createContext, useContext, useRef, ReactNode } from "react";

interface MediaContextType {
  videoRef: React.RefObject<HTMLVideoElement>;
  timeUpdateHandler: React.EventHandler<React.SyntheticEvent<HTMLVideoElement>>;
  videoInfo: {
    currentTime: number;
    duration: number;
  }
}

const MediaContext = createContext<MediaContextType | undefined>(undefined);

interface MediaProviderProps {
  children: ReactNode;
}

export const MediaProvider: React.FC<MediaProviderProps> = ({ children }) => {
    const [videoInfo, setVideoInfo] = useState({
        currentTime: 0,
        duration: 0,
    });
    const videoRef = useRef<HTMLVideoElement>(null);

    const timeUpdateHandler = (e: React.SyntheticEvent<HTMLVideoElement>) => {
        const current = e.currentTarget.currentTime;
        const duration = e.currentTarget.duration;
        console.log(current, duration);
        setVideoInfo({ ...videoInfo, currentTime: current, duration: duration });
    };

  return (
    <MediaContext.Provider value={{ videoRef, timeUpdateHandler, videoInfo }}>
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
