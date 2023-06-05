import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function share(obj) {
  if(navigator.share) {
    navigator
      .share(obj)
      .then(() => console.log('Ok'))
      .catch(error => console.log('Error', error));
  } else {
    console.log('No hay soporte para compartir.')
  }
}

function App() {

  // Create a random image and then convert it to Blob finally to a file
  const [file, setFile] = useState(null);
  useEffect(() => {
    async function getImages() {
      const img = await fetch('https://picsum.photos/200/300');
      const blob = await img.blob();
      const file = new File([blob], 'story.png', { type: 'image/png'});
      setFile(file)
    }
    getImages();
  }, []);

  // objects to share info

  const story = {
    title: 'Titulo',
    text: 'descripcion',
    url: 'https://epontoni.github.io',
    files: [file],
  };

  // Share API
  https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share

  return (
    <div className="App">
      <button onClick={ () => share(story) }>Share</button>
    </div>
  );
}

export default App;
