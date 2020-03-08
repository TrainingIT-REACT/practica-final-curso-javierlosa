import types from '../actions/types';

// Estado inicial
const initialState = {
  name: "",
  username: "",
  password: ""
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.LOGIN:
      return {
        name: action.name,
        username: action.username,
        password: action.password
      };
    default:
      return state;
  }
}

export default reducer;
