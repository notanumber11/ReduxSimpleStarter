import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchWeather } from "../actions/index"
import { bindActionCreators } from "redux"

export class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = { term: ""};
        this.props.fetchWeather("New York")
    }

    onInputChange(event){
        this.setState({term:event.target.value})
    }

    onFormSubmit(event){
        event.nativeEvent.preventDefault();
        // Fetch weather data
        this.props.fetchWeather(this.state.term)
        this.setState({ term: ""});
    }

    render() {
        return(
            <form onSubmit={(event)=>this.onFormSubmit(event)} className="search-bar input-group">
                <input
                    placeholder="Get a five-day forecast for your favourite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={(event)=>this.onInputChange(event)}
                />
                <span className="input-group-btn">
                    <button type="submit" className = "btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}


function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch)
}

export default connect(null, matchDispatchToProps)(SearchBar)