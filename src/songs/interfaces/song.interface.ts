export interface Song {
  id: number;
  title: string;
  artist: string[];
  album: string;
  genre?: string;
  releaseDate: Date;
  duration: string;
}
