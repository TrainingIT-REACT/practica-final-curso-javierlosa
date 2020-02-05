import React, { Component } from 'react';

// Css
import './App.css';
//import Home from './Home/Home';
const Home = React.lazy(() => import('./Home/Home'));

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Suspense fallback="Cargando Home">
        <Home/>
      </React.Suspense>
    );
  }
}

export default App;
