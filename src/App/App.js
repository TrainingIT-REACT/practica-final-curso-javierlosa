import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

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
const InicioSesion = React.lazy(() => import('../components/inicio_sesion/UpdateUser'));
const ErrorBoundaryExample = React.lazy(() => import('../components/error_boundary/ErrorBoundaryExample'));
const HighOrderComponentExample = React.lazy(() => import('../components/high_order_component/HighOrderComponentExample'));
const ModalExample = React.lazy(() => import('../components/modal_example/ModalExample'));
const PureComponentExample = React.lazy(() => import('../components/pure_component_example/PureComponentExample'));
const HooksExample = React.lazy(() => import('../components/hooks_example/HooksExample'));

class App extends Component {
  constructor(props) {
    super(props);

    // Bind de los métodos
    this.updateUser = this.updateUser.bind(this);

    this.state = {
      signedIn: false,
      updateUser: this.updateUser,
    }


    // Rutas anidadas
    const AboutMe = () => <p>Mi nombre es Ángel!</p>;
    const AboutCourse = () => <p>Bienvenido o Bienvenida a este curso de React!</p>;

    // Este componente define rutas anidadas
    this.About = ({ match }) => <div>
      <p>Este ejemplo trata sobre React Router</p>
      <p>
        <NavLink activeClassName="active" to={`${match.url}/me`}>Sobre mi</NavLink>
        {' '}
        <NavLink activeClassName="active" to={`${match.url}/course`}>Sobre este curso</NavLink>
      </p>
      <Route path={`${match.url}/me`} component={AboutMe}/>
      <Route path={`${match.url}/course`} component={AboutCourse}/>
    </div>;

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
            <h1>Javify</h1>
            <nav>
              <ul>
                <li><NavLink activeClassName="active" exact to="/">Inicio</NavLink></li>
                <li><NavLink activeClassName="active" to="/albums">Albums</NavLink></li>
                <li><NavLink activeClassName="active" to="/login">Login</NavLink></li>
                <li><NavLink activeClassName="active" to="/admin">Admin</NavLink></li>
                <li><NavLink activeClassName="active" to="/inicioSesion">Admin</NavLink></li>
                <li><NavLink activeClassName="active" to="/errorBoundaryExample">ErrorBoundaryExample</NavLink></li>
                <li><NavLink activeClassName="active" to="/highOrderComponentExample">HighOrderComponentExample</NavLink></li>
                <li><NavLink activeClassName="active" to="/modalExample">ModalExample</NavLink></li>
                <li><NavLink activeClassName="active" to="/pureComponentExample">PureComponentExample</NavLink></li>
                <li><NavLink activeClassName="active" to="/hooksExample">HooksExample</NavLink></li>
                <li><NavLink activeClassName="active" to="/about">Este ejemplo</NavLink></li>
              </ul>
            </nav>
            <Route path="/" exact component={MusicaRecomendada}/>
            <Route path="/albums" component={Albums}/>
            <Route path="/album/:albumId" component={Album}/>
            <Route path="/reproductor/:songId" component={Reproductor}/>
            <Route path="/songs/:songId" component={Song}/>
            <Route path="/inicioSesion" component={InicioSesion}/>
            <Route path="/login" exact component={Login}/>
            <PrivateRoute path="/admin" component={Admin}/>
            <Route path="/errorBoundaryExample" exact component={ErrorBoundaryExample}/>
            <Route path="/highOrderComponentExample" exact component={HighOrderComponentExample}/>
            <Route path="/modalExample" exact component={ModalExample}/>
            <Route path="/pureComponentExample" exact component={PureComponentExample}/>
            <Route path="/hooksExample" exact component={HooksExample}/>
            <Route path="/about" component={this.About}/>
            <Route component={this.NotFound}/>
          </UserContext.Provider>
        </Router>
      </React.Suspense>
    );
  }
}

export default App;
