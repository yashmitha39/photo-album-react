import React, { useState } from 'react';
import './photos.css';

const Photos = ({photos, photoVisibility, setPhotoVisibility, setAlbumVisibility}) => {
  const [visibility, setVisibility] = useState(false);

  const handleClick = e => {
    setPhotoVisibility(false);
    setAlbumVisibility(true);
  }

  return (
    <div style={{display: photoVisibility ? "block":"none"}}>
    <p onClick={handleClick}>X</p>
      <h1>Photos</h1>      
      <div className='photos'>
        {
          photos.map(photo => {
            return (
              <div className='photos'>
                <img src={photo.thumbnailUrl} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Photos;