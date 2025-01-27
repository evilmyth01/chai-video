// import React, { useRef, useEffect } from "react";
// import videojs from "video.js";
// import "video.js/dist/video-js.css";

// export const VideoPlayer = (props) => {
//   const videoRef = useRef(null);
//   const playerRef = useRef(null);
//   const { options, onReady } = props;

//   useEffect(() => {
//     // Make sure Video.js player is only initialized once
//     if (!playerRef.current) {
//       // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
//       const videoElement = document.createElement("video-js");

//       videoElement.classList.add("vjs-big-play-centered");
//       videoRef.current.appendChild(videoElement);

//       const player = (playerRef.current = videojs(videoElement, options, () => {
//         videojs.log("player is ready");
//         onReady && onReady(player);
//       }));

//       // You could update an existing player in the `else` block here
//       // on prop change, for example:
//     } else {
//       const player = playerRef.current;

//       player.autoplay(options.autoplay);
//       player.src(options.sources);
//     }
//   }, [options, videoRef]);

//   // Dispose the Video.js player when the functional component unmounts
//   useEffect(() => {
//     const player = playerRef.current;

//     return () => {
//       if (player && !player.isDisposed()) {
//         player.dispose();
//         playerRef.current = null;
//       }
//     };
//   }, [playerRef]);

//   return (
//     <div
//       data-vjs-player
//       style={{ width: "600px" }}
//     >
//       <div ref={videoRef} />
//     </div>
//   );
// };

// export default VideoPlayer;













import React, { useRef, useEffect } from 'react';
import videojs from 'video.js';
import '@silvermine/videojs-quality-selector';
import '@silvermine/videojs-quality-selector/dist/css/quality-selector.css';

export const VideoPlayer = (props) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const { options, onReady } = props;

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement("video");
      videoElement.classList.add("video-js");
      videoElement.classList.add("vjs-default-skin");
      videoRef.current.appendChild(videoElement);

      const player = playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        onReady && onReady(player);
      });

      // Check if QualitySelector is available
      if (videojs.getComponent('QualitySelector')) {
        // Add the quality selector control to the player's control bar
        player.controlBar.addChild('QualitySelector');
      } else {
        console.error('QualitySelector component not found');
      }

    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player style={{width:"700px"}}>
      <div ref={videoRef} />
    </div>
  );
};

export default VideoPlayer;
