import React from 'react';

const Card = React.lazy(() => import('../utils/card/Card'));

const AlbumList = ({ albums }) => {
  return <div className="cards">
          {albums.map(album => 
            <Card key={album.id} imageSrc={album.cover} imageAlt={album.name} title={album.name} description={album.artist} titleLink={`/album/${album.id}`}/>
          )}
        </div>
}

export default AlbumList;
