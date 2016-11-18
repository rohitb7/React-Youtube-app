import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
var update = require('react-addons-update');
/*
const App = function(){
	return <h1> hello </h1>;
}
*/

const API_KEY = 'AIzaSyCWd_OoExhrThSs8rNHN0feuBVEyuOXlw4';  




class App extends Component { 

constructor(props){
	super(props);

	this.state = { 
		videos: [],
		selectedVideo : null,
		value : "pin"
	};

	//YTSearch({key:API_KEY, term:'surfboards'}, function(data){
		//console.log(data);
	//	this.setState({videos:data});
	//});

	
	this.videoSearch('surfboards');

}


	videoSearch(term){
		YTSearch({ key:API_KEY, term:term}, (data) => { // date = videos
		//console.log(data);
		this.setState({ 
				videos : data, //all videos array
				selectedVideo : data[0],// first video
				toDeleteVideo : null,
			});
		});
	};




	onDelete(toDeleteVideo){
		 var idOfDelete = toDeleteVideo.id.videoId;
		 //console.log( this.state.videos + "this is state");
		 for (var key in this.state.videos){
		 	if(this.state.videos[key].id.videoId == idOfDelete){
		 		//console.log("found");
		 		//delete this.state.videos[key];
		 		//console.log("deleted");
		 		//this.state.videos.splice( key ,1 ); ///dont do this ...this is original js style 
		 		break;
		 	}
		 }


		 this.setState({
  			videos: update(this.state.videos, {$splice: [[key, 1]]})
		 });
	};


	onPin(toPinVideo){

		console.log(this.state.value + "  first value");
		
		var idOfPinVideo = toPinVideo.id.videoId;
		//console.log( this.state.videos + "this is state");
		for (var key in this.state.videos){
		 	if(this.state.videos[key].id.videoId == idOfPinVideo){
		 		//console.log("found");
		 		//delete this.state.videos[key];
		 		//console.log("deleted");
		 		//this.state.videos.splice( key ,1 ); ///dont do this ...this is original js style 
		 		break;
		 	}
		 }
		 this.setState({
  			videos: update(this.state.videos, {$merge: [toPinVideo]}),
		 });



		 console.log(this.props.value + "  second value");
	};



	render() {	
		return (
			<div> 
				<SearchBar onSearchTermChange = {term => this.videoSearch(term)}/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
					value = {this.state.value}
					onPin = {toPinVideo => this.onPin( toPinVideo )}
					onDelete = {toDeleteVideo => this.onDelete( toDeleteVideo)}
					onVideoSelect = {selectedVideo => this.setState({selectedVideo})}		
					videos={this.state.videos} 
				/>
		 	</div>
		 );
	};

	
}


ReactDOM.render(<App/> , document.querySelector(".container"));






