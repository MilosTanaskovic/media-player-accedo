import { MediaItem } from "../types/media";

// Keys for local storage items
const PLAYLIST_KEY = "playlist";

/**
 * Saves the playlist to local storage.
 * @param playlist The playlist array to save.
 */
export const savePlaylistToLocalStorage = (playlist: MediaItem[]) => {
  localStorage.setItem(PLAYLIST_KEY, JSON.stringify(playlist));
};

/**
 * Loads the playlist from local storage.
 * @returns The playlist array, or an empty array if not found.
 */
export const loadPlaylistFromLocalStorage = (): MediaItem[] => {
  const playlistJson = localStorage.getItem(PLAYLIST_KEY);
  if (playlistJson === null) return []; // No saved playlist found
  try {
    return JSON.parse(playlistJson);
  } catch {
    return []; // In case of corrupted data
  }
};
