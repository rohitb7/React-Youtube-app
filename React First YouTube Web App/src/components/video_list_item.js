import React from 'react';

const VideoListItem = (props) => { //

	const video = props.video;

	const onVideoSelect = props.onVideoSelect;

	const onDelete = props.onDelete;

	const onPin = props.onPin;

	const value = props.value

	const imageUrl = video.snippet.thumbnails.default.url;

	console.log(value);


	
	return (
		<div>
			<li onClick = {() => onVideoSelect(video)} className="list-group-item">Video
				<div className="video-list-media">

					<div className="media-left">
						<img className="media-object" src={imageUrl} />
					</div>
				
					<div className="media-body">
						<div className="media-heading">{video.snippet.title}</div>							
					</div>
				</div>

			</li>
			<input onClick = {() => onDelete(video)} type="button" value="Delete"/>
			<input onClick = {() => onPin(video )} type="button"  value = {value}   />
		</div>	
		)

};





export default VideoListItem;