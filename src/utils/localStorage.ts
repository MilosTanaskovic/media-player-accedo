import { MediaItem } from "../types/media";

/**
 * Saves the playlist to local storage.
 * @param playlist The playlist array to save.
 */
const savePlaylistToLocalStorage = (playlist: MediaItem[]) => {
  localStorage.setItem("playlist", JSON.stringify(playlist));
};

/**
 * Loads the playlist from local storage.
 * @returns The playlist array, or an empty array if not found.
 */
const loadPlaylistFromLocalStorage = (): MediaItem[] => {
  const playlistJson = localStorage.getItem("playlist");
  if (playlistJson === null) return []; // No saved playlist found
  try {
    return JSON.parse(playlistJson);
  } catch {
    return []; // In case of corrupted data
  }
};

export { savePlaylistToLocalStorage, loadPlaylistFromLocalStorage };
