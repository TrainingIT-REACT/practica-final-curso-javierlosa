import React, { Component } from 'react';

// Css
import './App.css';
//import Home from './Home/Home';
const MusicaRecomendada = React.lazy(() => import('../components/musica_recomendada/MusicaRecomendada'));
const Albums = React.lazy(() => import('../components/albums/Albums'));
const Song = React.lazy(() => import('../components/song/Song'));

class App extends Component {
  /*constructor(props) {
    super(props);
  }*/

  render() {
    return (
      <React.Suspense fallback="Cargando Musica Recomendada">
        <Song key="1" title="Título" duration="200" link="Enlace a reproducción"/>
      </React.Suspense>
    );
  }
}

export default App;
