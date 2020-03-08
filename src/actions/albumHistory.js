import types from './types';

export const addAlbum = (album) => ({
  type: types.ADD_ALBUM,
  id: album.id, 
  name: album.name, 
  artist: album.artist, 
  cover: album.cover, 
  album
});
