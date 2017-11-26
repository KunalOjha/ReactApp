import React from 'react';

const VideoListItem = ({videoItem, onVideoSelect}) => {
    const videoTitle = videoItem.snippet.title;
    const imageUrl = videoItem.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoSelect(videoItem)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
                <div>
                    <div className="media-heading">{videoTitle}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;