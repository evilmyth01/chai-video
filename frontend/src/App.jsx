// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import VideoPlayer from './VideoPlayer'
// import { useRef } from 'react'

// function App() {
//   const playerRef = useRef(null)
//   const videoLink = "http://localhost:8000/uploads/courses/5f1af126-f9d3-49db-a02e-d44e138c8e5b/index.m3u8"

//   const videoPlayerOptions = {
//     controls: true,
//     responsive: true,
//     fluid: true,
//     sources: [
//       {
//         src: videoLink,
//         type: "application/x-mpegURL"
//       }
//     ]
//   }
//   const handlePlayerReady = (player) => {
//     playerRef.current = player;

//     // You can handle player events here, for example:
//     player.on("waiting", () => {
//       videojs.log("player is waiting");
//     });

//     player.on("dispose", () => {
//       videojs.log("player will dispose");
//     });
//   };
//   return (
//     <>
//       <div>
//         <h1>Video player</h1>
//       </div>
//       <VideoPlayer
//       options={videoPlayerOptions}
//       onReady={handlePlayerReady}
//       />
//     </>
//   )
// }

// export default App 





















import React, { useRef } from 'react';
import VideoPlayer from './VideoPlayer';

function App() {
  const playerRef = useRef(null);
  
  const videoSources = [
    {
      src: "http://localhost:8000/uploads/courses/5f1af126-f9d3-49db-a02e-d44e138c8e5b/index.m3u8",
      type: "application/x-mpegURL",
      label: '144p'
    },
    {
      src: "http://localhost:8000/uploads/courses/0f6b879a-fa38-4636-9fd4-29ee6e863ac2/index.m3u8",
      type: "application/x-mpegURL",
      label: '720p'
    }
  ];

  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: videoSources
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // Handle player events here
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <>
      <div>
        <h1>Video Player</h1>
      </div>
      <VideoPlayer
        options={videoPlayerOptions}
        onReady={handlePlayerReady}
      />
    </>
  );
}

export default App;