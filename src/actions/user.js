import types from './types';

export const updateUser = (user) => ({
  type: types.UPDATE_USER,
  name: user.name, 
  username: user.username, 
  password: user.password
});
