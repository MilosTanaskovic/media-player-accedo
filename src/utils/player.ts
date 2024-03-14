/* eslint-disable @typescript-eslint/no-explicit-any */
import { MediaItem } from "../types/media";

export const getTime = (time: number) => {
  return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
};

// Handlers
export const activePlaylistHandler = (
  nextPreve: any,
  media: MediaItem[],
  setMedia: React.Dispatch<React.SetStateAction<MediaItem[]>>
) => {
  console.log(typeof nextPreve);
  const activeMedia = media?.map((mediaItem) => {
    if (mediaItem.id === nextPreve.id) {
      return {
        ...mediaItem,
        active: true,
      };
    } else {
      return {
        ...mediaItem,
        active: false,
      };
    }
  });
  setMedia(activeMedia);
};
