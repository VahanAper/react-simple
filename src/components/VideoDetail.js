import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoTitle = video.snippet.title;
  const videoDescription = video.snippet.description;
  const videoID = video.id.videoId;
  const videoUrl = `https://youtube.com/embed/${videoID}`;

  return (
    <div className="col-md-8 video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={videoUrl} />
      </div>
      <div className="details">
        <div>{videoTitle}</div>
        <div>{videoDescription}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
