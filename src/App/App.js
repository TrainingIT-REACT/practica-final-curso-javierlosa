import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

// Css
import './App.css';

// Contexto
import UserContext from '../contexts/user';

// Componentes
import Login from '../components/inicio_sesion/Login';
import Admin from '../components/inicio_sesion/Admin';

// Componente para definir rutas privadas
import PrivateRoute from '../components/inicio_sesion/PrivateRoute';

// 2.1 Suspense y Lazy 
const MusicaRecomendada = React.lazy(() => import('../components/musica_recomendada/MusicaRecomendada'));
const Albums = React.lazy(() => import('../components/albums/Albums'));
const Album = React.lazy(() => import('../components/album/Album'));
const Song = React.lazy(() => import('../components/song/Song'));
const Reproductor = React.lazy(() => import('../components/reproductor/Reproductor'));

class App extends Component {
  constructor(props) {
    super(props);

    // Bind de los métodos
    this.updateUser = this.updateUser.bind(this);

    this.state = {
      signedIn: false,
      updateUser: this.updateUser,
    }

    this.NotFound = () => <p>Ups! Parece que aquí no hay nada (404)</p>;
  }

  updateUser(signedIn) {
    this.setState(() => ({ signedIn }));
  }
  

  // 3.1 React Router
  // 3.2 Parámetros en rutas
  // 3.4 Rutas privadas
  // 3.5 404
  render() {
    return (
      <React.Suspense fallback="Cargando Musica Recomendada">
        <Router>
          <UserContext.Provider value={this.state}>
            <nav>
              <ul>
                <li><NavLink activeClassName="active" exact to="/">Inicio</NavLink></li>
                <li><NavLink activeClassName="active" to="/albums">Albums</NavLink></li>
                <li><NavLink activeClassName="active" to="/login">Login</NavLink></li>
                <li><NavLink activeClassName="active" to="/admin">Perfil</NavLink></li>
              </ul>
            </nav>
            <Switch>
              <Route path="/" exact component={MusicaRecomendada}/>
              <Route path="/albums" component={Albums}/>
              <Route path="/album/:albumId" component={Album}/>
              <Route path="/reproductor/:songId" component={Reproductor}/>
              <Route path="/songs/:songId" component={Song}/>
              <Route path="/login" exact component={Login}/>
              <PrivateRoute path="/admin" component={Admin}/>
              <Route component={this.NotFound}/>
            </Switch>
          </UserContext.Provider>
        </Router>
      </React.Suspense>
    );
  }
}

export default App;
