import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

    const VideoListItems= props.videos.map((videoItem) =>  {
        return <VideoListItem key={videoItem.etag} videoItem={videoItem}></VideoListItem>
    });
    return (
        <ul className="col-md-4 list-group">
            {VideoListItems}
        </ul>
    );
};



export default VideoList;