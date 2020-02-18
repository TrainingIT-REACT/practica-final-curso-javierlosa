import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Css
import './App.css';
//import Home from './Home/Home';
const MusicaRecomendada = React.lazy(() => import('../components/musica_recomendada/MusicaRecomendada'));
const Albums = React.lazy(() => import('../components/albums/Albums'));
const Album = React.lazy(() => import('../components/album/Album'));
const Song = React.lazy(() => import('../components/song/Song'));

class App extends Component {
  /*constructor(props) {
    super(props);
  }*/

  render() {
    return (
      <React.Suspense fallback="Cargando Musica Recomendada">
        <Router>
            <Route path="/" exact component={MusicaRecomendada}/>
            <Route path="/albums" exact component={Albums}/>
            <Route path="/albums/:albumId([0-9]*)" component={Album}/>
        </Router>
      </React.Suspense>
    );
  }
}

export default App;
