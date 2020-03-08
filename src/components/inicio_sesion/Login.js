import React, { createRef } from 'react';
import { connect } from 'react-redux';

// Contexto de usuario
import UserContext from '../../contexts/user';

// Acciones
import { login } from '../../actions/login';
import './Login.css';

// Store
import store from '../../store';

// Este componente utiliza el parámetro para mostrarlo en la interfaz
// 1.5 Context API
// 1.6 Refs
// 1.8 Control de formularios
// 4.4 React y Redux 
const Login = ({ location, login }) => {
  const name = createRef();
  const username = createRef();
  const password = createRef();

  const onSubmit = () => {
    login({name: name.current.value, username: username.current.value, password: password.current.value});
    console.log("submit -> Estado del store");
    console.log(store.getState());
  }

  const onChangeName = (e) => {
    console.log("change -> El nombre del usuario introducido es: " + name.current.value);
  }

  const onChangeUsername = (e) => {
    console.log("change -> El usuario introducido es: " + username.current.value);
  }

  return <UserContext.Consumer>
    {({ signedIn, updateUser }) => {
      return <div>
        { signedIn ? (
          <p>Ya puedes ir al panel de administración! 👆</p>
        ) : (
          <>
            <form onSubmit={onSubmit}>
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
                <button onClick={() => {updateUser(true); onSubmit()}}>Login</button>
              </div>
            </form>
            { (location.state && location.state.message) &&
              <p>
                { location.state.message }
              </p>
            }
          </>
        )}
      </div>
    }}
  </UserContext.Consumer>;
}

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(Login);