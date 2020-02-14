import types from '../actions/types';

// Estado inicial
const initialState = {
  list: []
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_SONG:
      return {
        list: [
          ...state.list, {
            id: action.id,
            name: action.name,
            audio: action.audio,
            seconds: action.seconds,
            album_id: action.album_id
          }
        ]
      }
    default:
      return state;
  }
}

export default reducer;
