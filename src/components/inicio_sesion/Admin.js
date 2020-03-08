import React from 'react';

import store from '../../store';

// Este componente utiliza el parámetro para mostrarlo en la interfaz
const Admin = () => {
  return <div>
    <h2>Información del store</h2>
    <h4>Usuario logueado</h4>
    <div>
      El nombre es: <b>{store.getState().login.name}</b>, nombre de usuario: <b>{store.getState().login.username}</b> y contraseña: <b>{store.getState().login.password}</b>
    </div>
    <h4>Historial de canciones</h4>
    <div>
      {store.getState().songHistory.list.map(song => {return <div>
        - El nombre de la canción es: <b>{song.name}</b>, con duración: <b>{song.seconds}</b> segundos
      </div>})}
    </div>
    <h4>Historial de álbumes</h4>
    <div>
      {store.getState().albumHistory.list.map(album => {return <div>
        - El nombre del album es: <b>{album.name}</b>, con artista: <b>{album.artist}</b>
      </div>})}
    </div>
    
  </div>;
}

export default Admin;
