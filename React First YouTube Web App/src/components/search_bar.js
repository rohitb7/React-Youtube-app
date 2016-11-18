import React, {Component} from 'react';
import ReactDOM from 'react-dom';




/*
const SearchBar = () => {
	return <input/>;
};
*/

class SearchBar extends Component {

	constructor(props){
		super(props);
		this.state = {term: ''};
	}


    render() { 
        //return <input onChange = {this.onInputChange} />;
        //never do this.state = event.target.value.....use setState
        return (
        	<div>
        		<input 
        		value = {this.state.term}
        		onChange = {event =>  this.onInputChange(event.target.value) } />;
        	</div>	
        	);
    }


    onInputChange(term) {
        this.setState({term:term});
        this.props.onSearchTermChange(term);    
    }

}



export default SearchBar;


