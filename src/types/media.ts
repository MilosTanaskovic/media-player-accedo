// Define a type for a single media source
export interface MediaItem {
    id: string; // UUID string
    title: string;
    subtitle: string;
    description: string;
    sources: string[]; // Array of media sources
    thumb: string; // URL to thumbnail image
    cover: string; // URL to cover image
    active: boolean; // Status of the media item
    color: [string, string]; // Tuple for two color strings
}

// Define a function type that returns an array of media items
export type MediaDataFunction = () => MediaItem[];