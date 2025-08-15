


import { useState, useRef, useEffect } from "react";
import { Music, Pause, Play } from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState();
  const audioRef = useRef(null);

  // Handle user interaction to start playing
  const handlePlayClick = () => {
    if (audioRef.current) {
      // Unmute and play the audio
      audioRef.current.muted = false;
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Background Music */}
      <audio ref={audioRef} loop muted>
        <source src="/assets/audio_file.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Play/Pause Button */}
      <button
        onClick={isPlaying ? togglePlay : handlePlayClick}
        className="p-3 bg-black bg-opacity-75 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-2 text-white"
      >
        <Music size={20} />
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
    </div>
  );
}


// import { useState, useRef, useEffect } from "react";
// import { Music, Pause, Play } from "lucide-react";

// export default function MusicPlayer() {
//   const [isPlaying, setIsPlaying] = useState(false); // Start with audio paused
//   const audioRef = useRef(null); // Reference to the audio element

//   useEffect(() => {
//     // Attempt to autoplay when the component loads
//     if (audioRef.current) {
//       audioRef.current.play().catch((error) => {
//         console.log("Autoplay blocked by the browser:", error);
//         setIsPlaying(false); // Update state if autoplay fails
//       });
//     }
//   }, []);

//   const togglePlay = () => {
//     if (audioRef.current) {
//       if (isPlaying) {
//         audioRef.current.pause(); // Pause the audio
//       } else {
//         audioRef.current.play(); // Play the audio
//       }
//       setIsPlaying(!isPlaying); // Toggle play state
//     }
//   };

//   return (
//     <div className="fixed top-4 right-4 z-50">
//       {/* Background Music */}
//       <audio ref={audioRef} loop>
//         <source src="public/assets/audio_file.mp3" type="audio/mpeg" />
//         Your browser does not support the audio element.
//       </audio>

//       {/* Play/Pause Button */}
//       <button
//         onClick={togglePlay}
//         className="p-3 bg-black bg-opacity-75 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-2 text-white"
//       >
//         <Music size={20} />
//         {isPlaying ? <Pause size={20} /> : <Play size={20} />}
//       </button>
//     </div>
//   );
// }

