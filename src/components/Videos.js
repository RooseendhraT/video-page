import React, { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch the videos.json file from the public directory
    fetch(process.env.PUBLIC_URL + '/data/videos.json')
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error('Error loading video data:', error));
  }, []);

  return (
    <div className="container my-5">
      <h1>Videos</h1>
      <p>Check out our curated video content!</p>

      <div className="row">
        {videos.length ? (
          videos.map((video, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <VideoPlayer
                  videoUrl={video.sources[1080]} // Use appropriate key for video source
                  poster={video.poster || 'default-poster.jpg'}
                  title={video.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{video.title}</h5>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading videos...</p>
        )}
      </div>
    </div>
  );
};

export default Videos;
