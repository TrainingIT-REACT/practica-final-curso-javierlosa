// 4.3 Acciones
const actions = [
  // albumHistory
  "ADD_ALBUM",
  
  // songHistory
  "ADD_SONG",

  // login
  "LOGIN"
];

// Las convertimos en un objeto
const actionTypes = {};
actions.forEach(action => {
  actionTypes[action] = action;
});

export default actionTypes;
