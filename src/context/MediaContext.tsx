/* eslint-disable react-refresh/only-export-components */
import React, {
  useState,
  createContext,
  useContext,
  useRef,
  ReactNode,
} from "react";

interface MediaContextType {
  videoRef: React.RefObject<HTMLVideoElement>;
  timeUpdateHandler: React.EventHandler<React.SyntheticEvent<HTMLVideoElement>>;
  videoInfo: {
    currentTime: number;
    duration: number;
  };
  setVideoInfo: React.Dispatch<
    React.SetStateAction<{
      currentTime: number;
      duration: number;
    }>
  >;
  playlistStatus: boolean;
  setPlaylistStatus: React.Dispatch<React.SetStateAction<boolean>>;
  isCurrentMediaDeleted: boolean;
  setIsCurrentMediaDeleted: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [playlistStatus, setPlaylistStatus] = useState<boolean>(false);
  const [isCurrentMediaDeleted, setIsCurrentMediaDeleted] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const timeUpdateHandler = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const current = e.currentTarget.currentTime;
    const duration = e.currentTarget.duration;
    console.log(current, duration);
    setVideoInfo({ ...videoInfo, currentTime: current, duration: duration });
  };

  return (
    <MediaContext.Provider
      value={{
        videoRef,
        timeUpdateHandler,
        videoInfo,
        setVideoInfo,
        playlistStatus,
        setPlaylistStatus,
        isCurrentMediaDeleted,
        setIsCurrentMediaDeleted,
      }}
    >
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
