import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './styles.css';

const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
const url = "http://api.openweathermap.org/data/2.5/weather";
/*
class WeatherLocation extends Component {
    constructor({ city }) {
        super();
        this.state = {
            city,
            data: null
        };
    }

    componentWillMount() {
        const { city } = this.state;
        const api_weather = `${url}?q=${city}&appid=${api_key}`;
        fetch(api_weather).then( data => {
            return data.json();
        }).then( weather_data => {
            const data = transformWeather(weather_data);
            this.setState({ data });
        });

    }

    render = () => {
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;
        return (
        <div className='weatherLocationCont' onClick={onWeatherLocationClick} >
            <Location city={city} /> 
            {data ? <WeatherData data={data} /> : 
            <CircularProgress size={60} thickness={7} />}
        </div>);
    };

}*/



export const WeatherLocation = ({onWeatherLocationClick,city,data}) => {

    return (
    <div className='weatherLocationCont' onClick={onWeatherLocationClick} >
        <Location city={city} /> 
        {data ? <WeatherData data={data} /> : 
        <CircularProgress size={60} thickness={7} />}
    </div>);
}

WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;