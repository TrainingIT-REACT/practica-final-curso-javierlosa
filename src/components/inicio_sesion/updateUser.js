import React, { createRef } from 'react';
import { connect } from 'react-redux';

// Acciones
import { updateUser } from '../../actions/user';

const UpdateUser = ({ updateUser }) => {
  const name = createRef();
  const username = createRef();
  const password = createRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {name: name.current.value, username: username.current.value, password: password.current.value};
    updateUser(user);
    name.current.value = '';
    username.current.value = '';
    password.current.value = '';
  }

  return <form onSubmit={onSubmit}>
    <label htmlFor="name">¿Cuál es tu nombre?</label>
    <input id="name" type="text" ref={name} placeholder="Angel, Tana, Raquel,..." />
    <label htmlFor="username">¿Cuál es tu nombre de usuario?</label>
    <input id="username" type="text" ref={username} placeholder="angel.user, tana.user, raquel.user ,..." />
    <label htmlFor="password">¿Cuál es tu contraseña?</label>
    <input id="password" type="text" ref={password} placeholder="ABCcde123,.-" />
    <button>Actualizar usuario</button>
  </form>
}

const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(updateUser(user)),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(UpdateUser);
