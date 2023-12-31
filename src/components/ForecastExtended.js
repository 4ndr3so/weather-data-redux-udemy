/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';

/*
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
];

const data = {
    temperature: 10, 
    humidity: 10, 
    weatherState: 'normal',
    wind: 'normal',
};
*/
const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
const url = "http://api.openweathermap.org/data/2.5/forecast";


const renderForecastItemDays= (forecastData)=>{
 
    return forecastData.map( forecast => (
        <ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay} 
            hour={forecast.hour} 
            data={forecast.data}>
        </ForecastItem>));
}

const renderProgress = () => {
    return <h3>Cargando Pronóstico extendido...</h3>;
}

 /*class ForecastExtended extends Component {
   
    constructor(props) {
        super(props);
        this.state = { forecastData: null };
        console.log("que pasa")
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city) {
            this.setState({ forecastData: null });
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
               // console.log(weather_data);
                const forecastData = transformForecast(weather_data);
               // console.log(forecastData);
                this.setState({ forecastData });
            }
        );
    }


    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (<div>
            <h2 className='forecast-title'>Pronóstico Extendido para {city}</h2>
            {forecastData ? 
                this.renderForecastItemDays(forecastData) :
                this.renderProgress()}
        </div>);
    }
}*/

const ForecastExtended =({city,forecastData})=>{
   // console.log(city)
  //  console.log(forecastData)
    return(
    <div>
            <h2 className='forecast-title'>Pronóstico Extendido para {city}</h2>
            {forecastData ? 
                renderForecastItemDays(forecastData) :
                renderProgress()}
    </div>)
}

ForecastExtended.propTypes = {

}

export default ForecastExtended;