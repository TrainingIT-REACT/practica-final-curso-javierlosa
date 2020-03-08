import types from '../actions/types';

// Estado inicial
const initialState = {
  list: []
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_ALBUM:
      return {
        list: [
          ...state.list, {
            id: action.id,
            name: action.name,
            artist: action.artist,
            cover: action.cover
          }
        ]
      }
    default:
      return state;
  }
}

export default reducer;
