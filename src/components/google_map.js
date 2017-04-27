import React, { Component } from "react"

export default class GoogleMaps extends Component {

    componentDidMount(){
        new google.maps.Map(this.refs.map,{
            zoom: 12,
            center: {
                lat: this.props.lat, 
                lng: this.props.lon
            }
        });
    }

    render(){
        // In this component I can uses this.map to get a reference to this div
        return(
            <div className="google-map-container">
                <div className="google-map" ref="map">
                </div>
            </div>
        )
    }

}