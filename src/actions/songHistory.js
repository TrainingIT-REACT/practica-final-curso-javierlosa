import types from './types';

export const addSong = (song) => ({
  type: types.ADD_SONG,
  id: song.id, 
  name: song.name, 
  audio: song.audio, 
  seconds: song.seconds, 
  album_id: song.album_id
});
