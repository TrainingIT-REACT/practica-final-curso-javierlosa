import types from './types';

export const login = (login) => ({
  type: types.LOGIN,
  name: login.name, 
  username: login.username, 
  password: login.password
});
