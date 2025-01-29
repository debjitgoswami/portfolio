import { useState } from "react";

const VideoSection = () => {
  const [mutedVideos, setMutedVideos] = useState({}); // Track muted state for each video

  // List of videos
  const videos = [
    { id: 1, src: "./vid/rec library.mp4", title: "Project Video 1", description: "Description of project video 1." },
    { id: 2, src: "./vid/rec ecom.mp4", title: "Project Video 2", description: "Description of project video 2." },
    { id: 3, src: "./vid/sappvid.mp4", title: "Project Video 3", description: "Description of project video 3." },
    
  ];

  const handlePlayPause = (id) => {
    const videoElement = document.getElementById(`video-${id}`);
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  };

  const toggleMute = (id) => {
    const videoElement = document.getElementById(`video-${id}`);
    const isMuted = !videoElement.muted;
    videoElement.muted = isMuted;
    setMutedVideos((prevState) => ({ ...prevState, [id]: isMuted }));
  };

  return (
    <div className="video-section py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-white mb-8">Project Videos</h2>

        {/* Video Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="video-card relative bg-gray-800 rounded-lg overflow-hidden shadow-lg border-2 border-transparent hover:border-purple-500 hover:shadow-2xl transition-all duration-300"
              onClick={() => handlePlayPause(video.id)}
              onMouseEnter={() => {
                const videoElement = document.getElementById(`video-${video.id}`);
                videoElement.play();
              }}
              onMouseLeave={() => {
                const videoElement = document.getElementById(`video-${video.id}`);
                videoElement.pause();
              }}
            >
              {/* Video */}
              <video
                id={`video-${video.id}`}
                className="w-full h-full object-cover"
                src={video.src}
                controls={false} // Remove controls for custom play/pause
                muted // Start muted
              ></video>

              {/* Overlay Info */}
              <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end items-start text-white p-4 transition-opacity duration-300 opacity-0 hover:opacity-100">
                <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                <p className="text-sm">{video.description}</p>
              </div>

              {/* Mute/Unmute Button */}
              <button
                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering play/pause on button click
                  toggleMute(video.id);
                }}
              >
                {mutedVideos[video.id] ? (
                  <span role="img" aria-label="Unmute">
                    🔊
                  </span>
                ) : (
                  <span role="img" aria-label="Mute">
                    🔇
                  </span>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
