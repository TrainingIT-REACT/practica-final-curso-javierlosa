import React, { createRef } from 'react';
import { connect } from 'react-redux';

// Acciones
import { updateUser } from '../../actions/user';
import './UpdateUser.css';

// 1.6 Refs
// 1.8 Control de formularios
const UpdateUser = ({ updateUser }) => {
  const name = createRef();
  const username = createRef();
  const password = createRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {name: name.current.value, username: username.current.value, password: password.current.value};
    updateUser(user);
    console.log("onSubmit -> El nombre del usuario introducido es: " + user.name);
    console.log("onSubmit -> El usuario introducido es: " + user.username);
    name.current.value = '';
    username.current.value = '';
    password.current.value = '';
  }

  const onChangeName = (e) => {
    console.log("onChange -> El nombre del usuario introducido es: " + name.current.value);
  }

  const onChangeUsername = (e) => {
    console.log("onChange -> El usuario introducido es: " + username.current.value);
  }

  return <form onSubmit={onSubmit}>
    <div className="row col-sm-12 label-input">
      <label htmlFor="name">¿Cuál es tu nombre?</label>
      <input id="name" type="text" ref={name} placeholder="Angel, Tana, Raquel,..." onChange={onChangeName}/>
    </div>
    <div className="row col-sm-12 label-input">
      <label htmlFor="username">¿Cuál es tu nombre de usuario?</label>
      <input id="username" type="text" ref={username} placeholder="angel.user, tana.user, raquel.user ,..." onChange={onChangeUsername}/>
    </div>
    <div className="row col-sm-12 label-input">
      <label htmlFor="password">¿Cuál es tu contraseña?</label>
      <input id="password" type="text" ref={password} placeholder="ABCcde123,.-" />
    </div>
    <div className="row col-sm-12 label-input">
      <button>Actualizar usuario</button>
    </div>
  </form>
}

const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(updateUser(user)),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(UpdateUser);
