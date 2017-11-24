import React from 'react';

const VideoListItem = ({videoItem}) => {
    console.log(videoItem);
    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object"/>
                </div>
                <div>
                    <div className="media-heading"></div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;