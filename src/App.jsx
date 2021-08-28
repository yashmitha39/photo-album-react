import React, { useState } from 'react';
import './App.css';
import Albums from './components/Albums'
import Photos from './components/Photos'

function App() {
  const [reqPhotos, setReqPhotos] = useState([]);
  const [photoVisibility, setPhotoVisibility] = useState(false);
  const [albumVisibility, setAlbumVisibility] = useState(true);
  return (
    <div>
      <Photos photos={reqPhotos} setPhotoVisibility={setPhotoVisibility} setAlbumVisibility={setAlbumVisibility} photoVisibility={photoVisibility} />
      <Albums setReqPhotos={setReqPhotos} setPhotoVisibility={setPhotoVisibility} setAlbumVisibility={setAlbumVisibility} photoVisibility={photoVisibility} albumVisibility={albumVisibility}/>
    </div>
  );
}

export default App;