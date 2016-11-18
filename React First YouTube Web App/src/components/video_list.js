import React from 'react';
import VideoListItem from './video_list_item';


///make a functiol component because its not going to have a state


const VideoList = (props) => {

		const videoItems =  props.videos.map((video) => {
	
			return (
					<VideoListItem 
					value={props.value}
					onPin={props.onPin}
					onDelete={props.onDelete}
					onVideoSelect={props.onVideoSelect}
					key={video.etag} 
					video={video}/>
				)
		});


	   return (
	   		<ul className = "col-md-4 list-group" >
	   			{videoItems}
	   		</ul>
	   	);

};


export default VideoList;
