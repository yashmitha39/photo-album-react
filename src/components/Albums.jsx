import React, { useState, useEffect } from 'react';
import './albums.css';

const Albums = ({ setReqPhotos, photoVisibility, albumVisibility, setPhotoVisibility, setAlbumVisibility }) => {
  const [photos, setPhotos] = useState([]);
  const [albumIds, setAlbumIds] = useState([]);

  useEffect(() => {
    getPhotos();
  }, [])

  const getPhotos = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    setPhotos([...data]); 

    const albumIdList = data.map(photo => photo.albumId);
    const albumIds = new Set(albumIdList);
    setAlbumIds([...albumIds]);  
  }

  const handleClick = album => {
    const reqPhotos = photos.filter(photo => {
      return photo.albumId === album;
    })
    setReqPhotos(reqPhotos);
    setAlbumVisibility(false);
    setPhotoVisibility(true);
  }

  return(
    <div style={{display: albumVisibility ? "block" : "none"}}>
      <h1>Albums</h1>
        <div className='albums'>
          {
              albumIds.map(album => {
                return(
                  <div key={album} onClick={() => {handleClick(album)} } className='album'>
                    {album}
                  </div>  
                )
            })
          }    
        </div>
    </div>
    
  )
}

export default Albums;