// Definimos la lista de acciones
const actions = [
  // songHistory
  "ADD_SONG",

  // user
  "UPDATE_USER"
];

// Las convertimos en un objeto
const actionTypes = {};
actions.forEach(action => {
  actionTypes[action] = action;
});

export default actionTypes;
