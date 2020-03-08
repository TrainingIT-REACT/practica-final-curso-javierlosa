import React, { Component } from 'react';
import { connect } from 'react-redux';

// Css
import './Albums.css';

// Acciones
import { getAlbums } from '../../actions/albums';

// Componentes
import AlbumList from './AlbumList';


//5.2.2 Promise -> Para usar esta versión añadir el reducer albums al store y renombrar este fichero a albums.js
class Albums extends Component {
  componentDidMount() {
    this.props.getAlbums();
  }

  renderAlbums() {
    const { isLoading, error, albums } = this.props;

    if (isLoading) {
      return <p>Cargando...</p>
    } else if (error) {
      return <p>Hubo un error al obtener los datos :(</p>
    } else { 
       return <AlbumList albums={albums}/>
    }
  }

  render() {
    return (
      <div className="albums">
        <h3>Álbums disponibles</h3>
        { this.renderAlbums() }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  getAlbums: () => dispatch(getAlbums())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);
