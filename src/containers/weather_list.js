import React, { Component } from "react"
import { connect } from "react-redux"
import Chart from "../components/chart"
import GoogleMap from "../components/google_map"

export class WeatherList extends Component {

    constructor(props) {
        super(props)
    }

    renderWeather(cityData) {
        const cityName = cityData.city.name
        const temps = cityData.list.map(weather => weather.main.temp)
        const pressures = cityData.list.map(weather => weather.main.pressure)
        const humiditys = cityData.list.map(weather => weather.main.humidity)
        const { lon, lat } = cityData.city.coord;
        return (
            <tr key={cityName}>
                <td><GoogleMap lat={ lat } lon={ lon } city={ cityName }/></td>
                <td> <Chart data={ temps } color="orange" units="K" /></td>
                <td> <Chart data={ pressures } color="green"  units="hPa"/></td>
                <td> <Chart data={ humiditys } color="blue" units="%"/></td>
            </tr>
        )
    };

    render() {
        console.log("Rendering with state : " + this.props.weather)
        return (
            <table className="table weather-table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map((cityData) => this.renderWeather(cityData))}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return { weather: state.weather }
}

export default connect(mapStateToProps)(WeatherList)